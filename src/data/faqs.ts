/**
 * 帮助中心首页常见问题（求助类问题）
 * answer 为纯文本，同时用于页面展示与 FAQPage 结构化数据；link 为延伸阅读。
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'all-timeout',
    question: '所有节点都显示超时，先检查什么？',
    answer:
      '先登录用户中心，确认套餐在有效期内、流量没有用完；再关闭代理确认本地网络正常，并把系统时间设为自动同步；最后手动更新一次订阅，对全部节点重新测速。如果只是部分节点超时，换一个正常的节点即可。',
    link: { label: '节点超时的完整排查步骤', href: '/guides/troubleshooting/#timeout' },
  },
  {
    id: 'update-failed',
    question: '订阅更新失败或提示格式错误怎么办？',
    answer:
      '把客服发来的订阅链接重新完整复制一次，确认没有多余的空格或被截断；再核对链接类型：Clash 系客户端用 Clash 订阅链接，v2rayN、v2rayNG 用通用订阅链接，小火箭用小火箭订阅链接，对不上就点击「联系在线客服」，说明设备和客户端重新领取。客户端版本过旧时先更新；仍然失败，换一个网络再更新一次。',
    link: { label: '订阅更新失败的排查步骤', href: '/guides/troubleshooting/#update-failed' },
  },
  {
    id: 'slow-at-night',
    question: '晚上速度明显变慢，是节点出问题了吗？',
    answer:
      '不一定。晚上八点到十一点左右是家庭用网高峰，跨境链路和节点负载都更高。可以换同地区的其他节点或换一个地区，连续几天在晚上测试，留下晚上表现平稳的那几个。',
    link: { label: '节点稳定性怎么看', href: '/guides/stable-network/' },
  },
  {
    id: 'quota',
    question: '流量用完了怎么办？',
    answer:
      '月付套餐的额度按计费周期重置；年付的灵动·穿云每月 70GB，每 30 天自动重置；一次性流量包永久有效、用完为止，用完后需要另行购买。登录用户中心可以查看剩余流量和到期时间。',
    link: { label: '流量用完或到期的处理办法', href: '/guides/troubleshooting/#quota' },
  },
  {
    id: 'link-leaked',
    question: '订阅链接发到群里了，会有什么影响？',
    answer:
      '拿到链接的人可以直接使用你的套餐流量。请登录用户中心重置订阅，旧链接随之失效；再点击「联系在线客服」领取新链接，在自己的每台设备上重新导入，并观察几天流量是否恢复正常。',
    link: { label: '账户与订阅链接安全', href: '/guides/network-security/' },
  },
  {
    id: 'not-proxied',
    question: '为什么有的网站不走代理？',
    answer:
      '规则模式下，客户端按规则表决定每个网站走代理还是直接连接。临时切到全局模式试一次：全局下能打开，说明规则没有覆盖这个网站，更新订阅通常就能解决；全局下也打不开，再检查系统代理和浏览器插件。',
    link: { label: 'Clash 代理模式与规则', href: '/guides/clash-airport/' },
  },
  {
    id: 'ai-region',
    question: 'ChatGPT 提示所在地区不可用怎么办？',
    answer:
      '换到该服务支持地区的节点并固定使用，不要频繁在不同国家的节点之间切换；仍然报错时，清理该网站的 Cookie，或用浏览器的无痕窗口再试一次。',
    link: { label: '访问 AI 与流媒体的注意事项', href: '/guides/ai-network/' },
  },
  {
    id: 'contact',
    question: '怎样联系灵动云客服？',
    answer:
      '有两种方式：点击本站右下角的客服图标打开在线客服（Crisp 对话），或登录用户中心提交工单。提问时说明设备、客户端名称和版本以及报错信息，截图请遮住订阅链接。',
    link: { label: '查看在线客服与工单', href: '/#support' },
  },
  {
    id: 'client-setup',
    question: '客户端在哪里下载，订阅怎么导入？',
    answer:
      '分设备的安装与导入步骤由灵动云使用指南站整理：先按自己的设备选好客户端，再点击「联系在线客服」，告诉客服设备和客户端，领取对应的订阅链接，然后照教程导入。导入后遇到连接问题，再回到本站按症状排查。',
    link: { label: '按设备选择客户端（使用指南）', href: 'https://lingdongyun.website/guides/choose-client/' },
  },
];
