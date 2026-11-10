/**
 * 灵动云帮助中心（lingdongyun.sbs）全站配置
 * 本站是灵动云官方「帮助中心」站点：连接问题排查、网络知识与在线客服。
 * 本站独立运营，不与其他域名互链。
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
  orgId: 'https://lingdongyun.sbs/#org',
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
  ],
};
