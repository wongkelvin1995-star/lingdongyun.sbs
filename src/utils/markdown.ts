/**
 * markdown.ts: 帮助中心统一 Markdown 渲染
 * 核心特性：
 * 1. 严格适配 marked v15 Token 规范，杜绝 [object Object] 渲染漏洞
 * 2. 支持递归解析嵌套结构化富文本 AST / Block 数组（children, content, value, text）
 * 3. 增强代码块、行内代码、表格、嵌套列表、引用块、加粗、链接渲染
 * 4. 内置安全防御与动态目录（TOC）数据抽取
 */
import { marked, type Tokens } from 'marked';

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 提示框图标（与 Icon.astro 同一套线条图标）
const TIP_ICON =
  '<svg class="callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8.75"/><path d="M12 11v5"/><path d="M12 8h.01" stroke-width="2.4"/></svg>';
const SECURE_ICON =
  '<svg class="callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3.2 5 5.9v5.3c0 4.4 2.9 8.2 7 9.6 4.1-1.4 7-5.2 7-9.6V5.9Z"/><path d="m9 12.2 2.2 2.2 4-4.3"/></svg>';

/** 引用块里谈的是订阅链接 / 账户凭证的保护时，用「安全提示」样式 */
function isSecurityTip(html: string): boolean {
  return /订阅链接|账户凭证|泄露|重置订阅/.test(html.replace(/<[^>]*>/g, ''));
}

// Custom renderer object for marked（输出语义化 HTML，样式由 global.css 的 .prose-help 统一控制）
const renderer = {
  table(this: any, token: Tokens.Table): string {
    let headerCells = '';
    for (let r = 0; r < token.header.length; r++) {
      const cell = token.header[r];
      const cellContent = this.parser.parseInline(cell.tokens);
      const align = cell.align ? ` style="text-align:${cell.align}"` : '';
      headerCells += `<th scope="col"${align}>${cellContent}</th>\n`;
    }

    let tbodyRows = '';
    for (let r = 0; r < token.rows.length; r++) {
      const row = token.rows[r];
      let rowCells = '';
      for (let s = 0; s < row.length; s++) {
        const cell = row[s];
        const cellContent = this.parser.parseInline(cell.tokens);
        const align = cell.align ? ` style="text-align:${cell.align}"` : '';
        rowCells += `<td${align}>${cellContent}</td>\n`;
      }
      tbodyRows += `<tr>\n${rowCells}</tr>\n`;
    }

    return `<div class="table-wrap"><table${token.header.length >= 4 ? ' class="is-wide"' : ''}><thead><tr>\n${headerCells}</tr></thead><tbody>\n${tbodyRows}</tbody></table></div>\n`;
  },

  list(this: any, token: Tokens.List): string {
    let itemsHtml = '';
    for (let i = 0; i < token.items.length; i++) {
      itemsHtml += this.listitem(token.items[i]);
    }
    const tag = token.ordered ? 'ol' : 'ul';
    return `<${tag}>${itemsHtml}</${tag}>\n`;
  },

  listitem(this: any, item: Tokens.ListItem): string {
    const content = this.parser.parse(item.tokens);
    return `<li>${content}</li>\n`;
  },

  blockquote(this: any, token: Tokens.Blockquote): string {
    const content = this.parser.parse(token.tokens);
    if (isSecurityTip(content)) {
      return `<blockquote class="callout callout-secure">${SECURE_ICON}<div class="callout-body"><span class="callout-label">安全提示</span>${content}</div></blockquote>\n`;
    }
    return `<blockquote class="callout">${TIP_ICON}<div class="callout-body">${content}</div></blockquote>\n`;
  },

  heading(this: any, token: Tokens.Heading): string {
    const { text: rawText, id: customId } = splitHeadingId(token.text);
    const text = customId ? this.parser.parseInline(marked.Lexer.lexInline(rawText)) : this.parser.parseInline(token.tokens);
    const cleanId = customId || slugifyHeading(text.replace(/<[^>]*>/g, ''));
    if (token.depth === 1) return '';
    if (token.depth === 2 || token.depth === 3) {
      return `<h${token.depth} id="${cleanId}">${text}</h${token.depth}>\n`;
    }
    return `<h${token.depth}>${text}</h${token.depth}>\n`;
  },

  link(this: any, token: Tokens.Link): string {
    const text = this.parser.parseInline(token.tokens);
    const href = token.href;
    let extra = '';
    if (href.includes('lingdongaff.com')) {
      // 注册 / 用户中心入口：新标签页打开
      extra = ' target="_blank" rel="noopener"';
    } else if (/^https?:\/\//.test(href) && !/^https:\/\/lingdongyun\.(site|website|best|sbs|lol)\//.test(href)) {
      extra = ' target="_blank" rel="noopener noreferrer"';
    }
    const titleAttr = token.title ? ` title="${token.title}"` : '';
    return `<a href="${href}"${extra}${titleAttr}>${text}</a>`;
  },

  paragraph(this: any, token: Tokens.Paragraph): string {
    const text = this.parser.parseInline(token.tokens);
    return `<p>${text}</p>\n`;
  },

  strong(this: any, token: Tokens.Strong): string {
    const text = this.parser.parseInline(token.tokens);
    return `<strong>${text}</strong>`;
  },

  em(this: any, token: Tokens.Em): string {
    const text = this.parser.parseInline(token.tokens);
    return `<em>${text}</em>`;
  },

  codespan(this: any, token: Tokens.Codespan): string {
    return `<code>${escapeHtml(token.text)}</code>`;
  },

  code(this: any, token: Tokens.Code): string {
    const lang = token.lang || 'text';
    return `<div class="code-block"><div class="code-head"><span>${escapeHtml(lang)}</span><span>示例</span></div><pre><code>${token.escaped ? token.text : escapeHtml(token.text)}</code></pre></div>\n`;
  },

  hr(): string {
    return `<hr />\n`;
  },
};

marked.use({ renderer, gfm: true });

/**
 * 递归解析任意未知结构化数据（兼容对象数组、AST 节点或 Markdown 字符串）
 * 彻底消灭将未处理对象数组直接当做字符串输出而造成的 [object Object]
 */
export function normalizeArticleContent(input: unknown): string {
  if (typeof input === 'string') {
    return input;
  }

  if (Array.isArray(input)) {
    return input.map((item) => normalizeArticleContent(item)).join('\n\n');
  }

  if (input && typeof input === 'object') {
    const obj = input as Record<string, any>;

    // 优先读取常见富文本字段
    if (typeof obj.text === 'string') {
      return obj.text;
    }
    if (typeof obj.content === 'string') {
      return obj.content;
    }
    if (typeof obj.value === 'string') {
      return obj.value;
    }
    if (Array.isArray(obj.children)) {
      return normalizeArticleContent(obj.children);
    }
    if (Array.isArray(obj.content)) {
      return normalizeArticleContent(obj.content);
    }

    // 若依然无法识别对象，输出格式化后的文本内容，严禁隐式转换为 [object Object]
    console.warn('[NormalizeContentWarning] 发现非标结构体:', Object.keys(obj));
    return Object.values(obj)
      .filter((v) => typeof v === 'string')
      .join(' ');
  }

  return String(input || '');
}

/**
 * 标题末尾可写 {#custom-id} 指定锚点，例如：## 订阅更新失败 {#update-failed}
 */
export function splitHeadingId(raw: string): { text: string; id: string | null } {
  const m = raw.match(/^(.*?)\s*\{#([A-Za-z0-9_-]+)\}\s*$/);
  if (m) return { text: m[1].trim(), id: m[2] };
  return { text: raw.trim(), id: null };
}

export function slugifyHeading(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, '-');
}

/**
 * 抽取文章所有二级标题（H2），用于生成文章目录（TOC）
 */
export function extractTableOfContents(markdown: string): { id: string; title: string }[] {
  const h2Regex = /^##\s+(.+)$/gm;
  const items: { id: string; title: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = h2Regex.exec(markdown)) !== null) {
    const { text, id } = splitHeadingId(match[1]);
    const cleanTitle = text.replace(/<[^>]*>/g, '').replace(/[*_`]/g, '').trim();
    items.push({ id: id || slugifyHeading(cleanTitle), title: cleanTitle });
  }

  return items;
}

/**
 * 核心渲染函数：输入数据经过规范化和防御后，输出安全纯净的语义化 HTML
 */
export function renderMarkdown(rawInput: unknown): string {
  const contentString = normalizeArticleContent(rawInput);
  const html = marked.parse(contentString) as string;

  // 安全断言：若任何残留引发 [object Object]，立即拦截清洗并报警
  if (html.includes('[object Object]')) {
    console.error('[CriticalSecurityError] 检测到未解析的对象字符串！');
    return html.replace(/\[object Object\],?/g, '');
  }

  return html;
}
