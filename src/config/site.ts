/**
 * 灵动云 LingDongYun 全站统一配置文件
 * 官方网站: https://lingdongyun.sbs/
 * 注册入口统一配置: 确保全站注册按钮调用同一出口，不可手动硬编码不同链接
 */

export const SITE_CONFIG = {
  brandName: '灵动云',
  brandNameEn: 'LingDongYun',
  siteUrl: 'https://lingdongyun.sbs',
  registerUrl: 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa',
  affCode: 'HHoxxHGa',
  crispWebsiteId: '8bffea93-cf2b-46e3-835e-302ed40c86fa',
  crispChatUrl: 'https://go.crisp.chat/chat/embed/?website_id=8bffea93-cf2b-46e3-835e-302ed40c86fa',
  tagline: '让网络连接更自由',
  slogan: '灵动星云 · 全球智能连接',
  description: '灵动云 LingDongYun 官方网站，了解 ¥20 月付、¥99 年付及多种流量套餐，查看 Clash 节点、科学上网、稳定节点、全球加速和 AI 网络使用教程。',
  keywords: [
    '灵动云',
    'LingDongYun',
    'lingdongyun',
    '灵动云官网',
    '灵动云机场',
    '灵动云套餐',
    '灵动云价格',
    '灵动云节点',
    '机场推荐',
    '2026机场推荐',
    '便宜机场',
    '性价比机场',
    '安全机场',
    '稳定机场',
    'Clash 机场',
    'Clash 节点',
    'Clash Party 机场',
    '科学上网',
    '全球加速',
    'BGP 专线',
    'AI 机场推荐',
    'ChatGPT 机场',
    'Claude 网络连接'
  ],
  navLinks: [
    { name: '首页', href: '/' },
    { name: '套餐价格', href: '/#pricing' },
    { name: '服务优势', href: '/#features' },
    { name: '新手教程', href: '/#guides' },
    { name: '节点知识', href: '/#nodes' },
    { name: '常见问题', href: '/#faq' },
  ],
  serviceThemes: [
    {
      id: 'bgp',
      title: 'BGP 线路知识',
      subtitle: '优质多线接入与低延迟调度',
      icon: 'network',
      link: '/guides/stable-network/'
    },
    {
      id: 'media',
      title: '流媒体使用',
      subtitle: '超清音视频与海外主流流媒体',
      icon: 'media',
      link: '/guides/ai-network/'
    },
    {
      id: 'ai',
      title: 'AI 工具连接',
      subtitle: 'ChatGPT 与 Claude 智能交互',
      icon: 'sparkles',
      link: '/guides/ai-network/'
    },
    {
      id: 'devices',
      title: '多设备使用',
      subtitle: '全平台客户端兼容与配置指南',
      icon: 'devices',
      link: '/guides/clash-party/'
    }
  ],
  contact: {
    officialWebsite: 'https://lingdongyun.sbs/',
    supportEmail: 'support@lingdongyun.sbs',
    workOrderTip: '请通过官方用户中心提交工单获取 1 对 1 技术支持',
  }
};
