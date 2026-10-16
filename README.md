# 灵动云 LingDongYun 官方品牌官网

> 灵动星云 · 全球智能连接 | 让网络连接更自由

官方网站：[https://lingdongyun.sbs/](https://lingdongyun.sbs/)

---

## 📖 项目简介

灵动云（LingDongYun）官方品牌落地页与内容中心，专为跨境网络加速、全球协同办公、流媒体播放及 AI 生产力连接提供高品质服务。网站基于 Astro + TypeScript + Tailwind CSS 构建，具备全量静态 HTML 生成、极致首屏加载性能与完备的 SEO / GEO 优化。

### 🌟 核心特色

- **官方品牌视觉**：原创「灵动星云」动态科技云端主视觉与星空微粒背景（无熊猫元素）。
- **九款真实套餐**：涵盖常规月付（拂风、驭浪、破晓、凌霄）、年付（穿云 ¥99/年）、一次性不限时流量包（闲云、惊云、飞云）与至尊私人定制。
- **八篇深度 SEO 原创指南**：聚焦套餐选购、Clash / Mihomo 基础、Clash Party 实操、BGP 专线技术解析、账户安全、全球加速网络以及 AI 交互连接。
- **高可用文章渲染架构**：统一的 `ArticleRenderer` 引擎，彻底杜绝对象格式化异常，内置动态目录导航（TOC）。
- **全站中文搜索**：快捷键 `Cmd/Ctrl + K` 呼出，支持纯前端即时模糊匹配。
- **搜索引擎规范**：完备的 Schema.org 结构化数据（WebSite, Product, FAQPage, Article, BreadcrumbList）及自动化 Sitemap / Robots.txt。

---

## 🛠️ 技术栈

- **框架**：[Astro 5](https://astro.build/)
- **样式**：[Tailwind CSS](https://tailwindcss.com/)
- **语言**：[TypeScript](https://www.typescriptlang.org/)
- **Markdown 引擎**：[marked](https://marked.js.org/)
- **图标与动画**：原生矢量 SVG + CSS3 Keyframe 动画 + Canvas 粒子系统

---

## 🚀 本地开发与构建

### 1. 安装依赖

```bash
npm install
```

### 2. 启动本地开发服务

```bash
npm run dev
```

本地服务启动后访问：`http://localhost:4321/`

### 3. 执行生产构建

```bash
npm run build
```

静态构建产物将输出至 `./dist/` 目录，可直接托管于 Cloudflare Pages、Vercel、Nginx 或 Caddy。

### 4. 本地预览构建产物

```bash
npm run preview
```

---

## 📂 项目结构

```text
├── public/                 # 静态资源 (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── config/             # 全站统一配置 (site.ts 统一注册 URL)
│   ├── data/               # 结构化数据 (plans.ts, features.ts, faqs.ts, articles.ts)
│   ├── components/         # 页面组件 (Header, HeroCloud, PricingTable, ArticleRenderer 等)
│   ├── layouts/            # 布局模版 (BaseLayout.astro, ArticleLayout.astro)
│   ├── pages/              # 页面路由 (index.astro, guides/[slug].astro, privacy, terms)
│   ├── styles/             # 全局样式 (global.css)
│   └── utils/              # 辅助工具 (markdown.ts, planFormat.ts)
├── astro.config.mjs        # Astro 配置文件
└── package.json
```

---

## 📄 许可说明

本项目由灵动云（LingDongYun）官方团队维护开发。保留所有权利。
