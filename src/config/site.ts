/**
 * 灵动云帮助中心（lingdongyun.sbs）全站配置
 * 本站是灵动云官方「帮助中心」站点：连接问题排查、网络知识与在线客服。
 * 官网为 https://lingdongyun.site/ ，本站不自称官网。
 * 注册 / 登录入口统一使用 registerUrl，不要在组件里手写其他链接。
 */

export const SITE_CONFIG = {
  brandName: '灵动云',
  brandNameEn: 'LingDongYun',
  siteName: '灵动云帮助中心',
  roleLabel: '帮助中心',
  siteUrl: 'https://lingdongyun.sbs',
  registerUrl: 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa',
  crispWebsiteId: '8bffea93-cf2b-46e3-835e-302ed40c86fa',
  crispChatUrl: 'https://go.crisp.chat/chat/embed/?website_id=8bffea93-cf2b-46e3-835e-302ed40c86fa',
  // 官网与官方站点说明（全站只允许跨域链接到这两个地址）
  officialSiteUrl: 'https://lingdongyun.site/',
  officialPageUrl: 'https://lingdongyun.site/guides/lingdongyun-official/',
  orgId: 'https://lingdongyun.site/#org',
  websiteId: 'https://lingdongyun.sbs/#website',
  ogImage: 'https://lingdongyun.sbs/og-image.png',
  updated: '2026-11-01',
  description:
    '灵动云官方帮助中心：节点连不上、订阅更新失败、速度变慢时按步骤排查；了解线路、代理模式与账户安全；需要时直接联系在线客服。',
  navLinks: [
    { name: '按问题找答案', href: '/#problems' },
    { name: '排查步骤', href: '/guides/troubleshooting/' },
    { name: '网络知识', href: '/#knowledge' },
    { name: '在线客服', href: '/#support' },
    { name: '常见问题', href: '/#faq' },
    { name: '官网', href: 'https://lingdongyun.site/' },
  ],
};

/** 灵动云五个官方站点（顺序与官方站点说明一致） */
export const FAMILY_SITES = [
  {
    key: 'site',
    name: '灵动云官网',
    domain: 'lingdongyun.site',
    url: 'https://lingdongyun.site/',
    description: '品牌介绍、9 档套餐与注册入口',
  },
  {
    key: 'website',
    name: '灵动云使用指南',
    domain: 'lingdongyun.website',
    url: 'https://lingdongyun.website/',
    description: '按设备整理的客户端与订阅导入教程',
  },
  {
    key: 'best',
    name: '灵动云套餐选择',
    domain: 'lingdongyun.best',
    url: 'https://lingdongyun.best/',
    description: '9 档套餐对比与每月流量估算',
  },
  {
    key: 'sbs',
    name: '灵动云帮助中心',
    domain: 'lingdongyun.sbs',
    url: 'https://lingdongyun.sbs/',
    description: '连接问题排查、网络知识与在线客服',
  },
  {
    key: 'lol',
    name: '灵动云新手入门',
    domain: 'lingdongyun.lol',
    url: 'https://lingdongyun.lol/',
    description: '注册、选套餐、导入订阅、连接，4 步上手',
  },
] as const;

export const CURRENT_SITE_KEY = 'sbs';
