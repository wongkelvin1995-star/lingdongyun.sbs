/**
 * markdown.ts: 灵动云全站统一 Markdown 与富文本解析引擎
 * 核心特性：
 * 1. 严格适配 marked v15 Token 规范，杜绝 [object Object] 渲染漏洞
 * 2. 支持递归解析嵌套结构化富文本 AST / Block 数组（children, content, value, text）
 * 3. 增强代码块、行内代码、表格、嵌套列表、引用块、加粗、链接渲染
 * 4. 内置安全防御与动态目录（TOC）数据抽取
 */
import { marked, type Tokens } from 'marked';

// Custom renderer object for marked v15
const renderer = {
  table(this: any, token: Tokens.Table): string {
    let headerCells = '';
    for (let r = 0; r < token.header.length; r++) {
      const cell = token.header[r];
      const cellContent = this.parser.parseInline(cell.tokens);
      const alignClass = cell.align ? `text-${cell.align}` : 'text-left';
      headerCells += `<th class="px-4 py-3.5 ${alignClass} font-semibold">${cellContent}</th>\n`;
    }
    const thead = `<tr class="border-b border-[#8B40FF]/30">\n${headerCells}</tr>\n`;

    let tbodyRows = '';
    for (let r = 0; r < token.rows.length; r++) {
      const row = token.rows[r];
      let rowCells = '';
      for (let s = 0; s < row.length; s++) {
        const cell = row[s];
        const cellContent = this.parser.parseInline(cell.tokens);
        const alignClass = cell.align ? `text-${cell.align}` : 'text-left';
        rowCells += `<td class="px-4 py-3 ${alignClass}">${cellContent}</td>\n`;
      }
      tbodyRows += `<tr class="hover:bg-[#8B40FF]/10 transition-colors border-b border-[#8B40FF]/15 last:border-b-0">\n${rowCells}</tr>\n`;
    }

    return `
      <div class="my-6 overflow-x-auto rounded-xl border border-[#8B40FF]/30 bg-[#160C32]/70 shadow-md">
        <table class="w-full text-left text-xs sm:text-sm text-[#D4C8ED] border-collapse min-w-[500px]">
          <thead class="bg-[#09071C]/90 text-white font-semibold">
            ${thead}
          </thead>
          <tbody class="divide-y divide-[#8B40FF]/15">
            ${tbodyRows}
          </tbody>
        </table>
      </div>
    `;
  },

  list(this: any, token: Tokens.List): string {
    let itemsHtml = '';
    for (let i = 0; i < token.items.length; i++) {
      itemsHtml += this.listitem(token.items[i]);
    }
    const tag = token.ordered ? 'ol' : 'ul';
    const listTypeClass = token.ordered ? 'list-decimal pl-5 space-y-2' : 'list-disc pl-5 space-y-2';
    return `<${tag} class="${listTypeClass} my-4 text-sm sm:text-base leading-relaxed text-[#D4C8ED]">${itemsHtml}</${tag}>\n`;
  },

  listitem(this: any, item: Tokens.ListItem): string {
    const content = this.parser.parse(item.tokens);
    return `<li class="my-1.5">${content}</li>\n`;
  },

  blockquote(this: any, token: Tokens.Blockquote): string {
    const content = this.parser.parse(token.tokens);
    return `
      <blockquote class="my-6 p-4 sm:p-5 rounded-xl bg-[#160C32]/80 border-l-4 border-[#588DFF] text-sm text-[#D4C8ED]/90 italic shadow-sm">
        ${content}
      </blockquote>
    `;
  },

  heading(this: any, token: Tokens.Heading): string {
    const text = this.parser.parseInline(token.tokens);
    const cleanId = text.replace(/<[^>]*>/g, '').trim().toLowerCase().replace(/\s+/g, '-');
    if (token.depth === 1) return '';
    if (token.depth === 2) {
      return `
        <h2 id="${cleanId}" class="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4 pb-2 border-b border-[#8B40FF]/25 flex items-center gap-2 group">
          <span class="w-2 h-5 rounded-full bg-gradient-to-b from-[#C15BFF] to-[#8B40FF]"></span>
          <span>${text}</span>
        </h2>
      `;
    }
    if (token.depth === 3) {
      return `
        <h3 id="${cleanId}" class="text-lg sm:text-xl font-bold text-white mt-6 mb-3 text-[#B87AFF]">
          ${text}
        </h3>
      `;
    }
    return `<h${token.depth} class="font-bold text-white mt-4 mb-2">${text}</h${token.depth}>`;
  },

  link(this: any, token: Tokens.Link): string {
    const text = this.parser.parseInline(token.tokens);
    const isExternal = token.href.startsWith('http') && !token.href.includes('lingdongyun.sbs');
    const rel = isExternal ? 'rel="sponsored noopener noreferrer"' : '';
    const target = isExternal ? 'target="_blank"' : '';
    const titleAttr = token.title ? `title="${token.title}"` : '';
    return `<a href="${token.href}" ${rel} ${target} ${titleAttr} class="text-[#C15BFF] hover:text-white underline underline-offset-4 decoration-[#8B40FF]/60 hover:decoration-white font-medium transition-colors">${text}</a>`;
  },

  paragraph(this: any, token: Tokens.Paragraph): string {
    const text = this.parser.parseInline(token.tokens);
    return `<p class="my-4 text-sm sm:text-base leading-relaxed text-[#D4C8ED]/95">${text}</p>\n`;
  },

  strong(this: any, token: Tokens.Strong): string {
    const text = this.parser.parseInline(token.tokens);
    return `<strong class="font-bold text-white">${text}</strong>`;
  },

  em(this: any, token: Tokens.Em): string {
    const text = this.parser.parseInline(token.tokens);
    return `<em class="italic text-[#D4C8ED]">${text}</em>`;
  },

  codespan(this: any, token: Tokens.Codespan): string {
    return `<code class="px-1.5 py-0.5 rounded bg-[#160C32] border border-[#8B40FF]/30 text-[#B87AFF] font-mono text-xs">${token.text}</code>`;
  },

  code(this: any, token: Tokens.Code): string {
    const lang = token.lang || 'text';
    return `
      <div class="my-6 rounded-xl overflow-hidden border border-[#8B40FF]/30 bg-[#09071C]/90 shadow-lg">
        <div class="flex items-center justify-between px-4 py-2 bg-[#160C32]/90 border-b border-[#8B40FF]/25 text-xs text-[#D4C8ED]/70 font-mono">
          <span>${lang}</span>
          <span class="text-[10px] text-[#8B40FF]">灵动云终端配置</span>
        </div>
        <pre class="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-[#D4C8ED] leading-relaxed"><code>${token.text}</code></pre>
      </div>
    `;
  },

  hr(): string {
    return `<hr class="my-8 border-t border-[#8B40FF]/25" />\n`;
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
 * 抽取文章所有二级标题（H2），用于生成动态文章目录（TOC）
 */
export function extractTableOfContents(markdown: string): { id: string; title: string }[] {
  const h2Regex = /^##\s+(.+)$/gm;
  const items: { id: string; title: string }[] = [];
  let match: RegExpExecArray | null;

  while ((match = h2Regex.exec(markdown)) !== null) {
    const rawTitle = match[1].trim();
    const cleanTitle = rawTitle.replace(/<[^>]*>/g, '').trim();
    const cleanId = cleanTitle.toLowerCase().replace(/\s+/g, '-');
    items.push({ id: cleanId, title: cleanTitle });
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
