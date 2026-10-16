/**
 * 灵动云官方服务优势与功能介绍模块
 * 严格按照客观技术原理与实际套餐资料撰写，避免不实夸大或虚构实测
 */

export interface FeatureItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  details: string[];
  icon: string;
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'network-routing',
    title: 'BGP 线路与智能节点',
    badge: '线路架构',
    description: '采用 BGP 多线接入与骨干网络互通架构，系统根据访问目标与网络拥塞情况提供多重备选路由，保障跨国数据传输的平稳顺畅。',
    details: [
      '覆盖国内主流运营商互联入口',
      '多路由冗余设计，避免单点链路拥堵',
      '支持按网络环境自主选择最优入口'
    ],
    icon: 'network'
  },
  {
    id: 'node-stability',
    title: '连接质量与稳定性设计',
    badge: '低抖动',
    description: '关注实际可用性与端到端传输质量，通过合理的带宽冗余与节点负载控制，降低丢包率与网络抖动，保障视频与网页的连续交互。',
    details: [
      '重点优化持续连接抖动与延迟表现',
      '节点负载动态平衡，缓解高峰压力',
      '提供多集群多地区节点冗余备份'
    ],
    icon: 'stability'
  },
  {
    id: 'streaming-media',
    title: '海外主流流媒体支持',
    badge: '4K超清',
    description: '套餐适配主流海外音视频内容协议传输，支持高码率视频流转与音视频数据传输，满足日常影音娱乐与海外影视查阅需求。',
    details: [
      '适配常见视频网站高码率流传输',
      '支持自适应码率切换与低缓冲等待',
      '结合客户端规则分流实现精准定向代理'
    ],
    icon: 'media'
  },
  {
    id: 'ai-tools',
    title: 'AI 工具与云端服务交互',
    badge: '生产力加速',
    description: '针对 ChatGPT、Claude、Midjourney 等生成式 AI 平台的长连接与实时流式输出进行协议优化，减少交互中断与连接超时。',
    details: [
      '支持大语言模型流式（Stream）响应',
      '覆盖主流支持地区节点出口',
      '助力学术科研、文案创作与代码调试'
    ],
    icon: 'ai'
  },
  {
    id: 'multi-platform',
    title: '全平台客户端多设备兼容',
    badge: '全端通用',
    description: '基于标准 Shadowsocks (SS) 协议，广泛兼容 Windows、macOS、iOS、Android、Linux 及路由器等全主流客户端，配置灵活便捷。',
    details: [
      '支持 Clash Verge、Clash Party、Mihomo 等工具',
      '订阅链接一键导入，节点自动解析更新',
      '个人多设备随心切换，随行出海无缝衔接'
    ],
    icon: 'devices'
  },
  {
    id: 'customer-support',
    title: '详尽配置指南与工单支持',
    badge: '服务保障',
    description: '提供图文并茂的入门配置教程、客户端下载指南与常见问题解答，遇到订阅解析或连接异常时可随时提交工单获得专业协助。',
    details: [
      '全链路新手教程，零基础轻松上手',
      '常见故障自查方案，快速排查网络疑难',
      '官方工单支持系统，保障售后服务响应'
    ],
    icon: 'support'
  }
];
