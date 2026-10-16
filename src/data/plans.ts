/**
 * 灵动云官方九款套餐真实数据
 * 严格按照官方核实资料导入，无虚报价格或伪造参数
 */

export interface PlanItem {
  id: string;
  name: string;
  category: 'monthly' | 'yearly' | 'onetime' | 'custom';
  price: string;
  priceNum: number;
  currency: string;
  cycle: string;
  traffic: string;
  trafficValue: string;
  trafficUnit: string;
  highlight?: string;
  popular?: boolean;
  summary: string;
  features: string[];
  details: {
    protocol: string;
    lineType: string;
    mediaSupport: string;
    aiSupport: string;
    devices: string;
    resetCycle: string;
    suitability: string;
  };
}

export const PLAN_CATEGORIES = [
  { id: 'all', label: '全部套餐' },
  { id: 'monthly', label: '月付套餐' },
  { id: 'yearly', label: '年付套餐' },
  { id: 'onetime', label: '一次性流量' },
  { id: 'custom', label: '私人定制' },
];

export const PLANS_DATA: PlanItem[] = [
  {
    id: 'fufeng',
    name: '灵动·拂风',
    category: 'monthly',
    price: '¥20',
    priceNum: 20,
    currency: 'CNY',
    cycle: '月付起',
    traffic: '100GB/月',
    trafficValue: '100',
    trafficUnit: 'GB/月',
    highlight: '入门轻量首选',
    popular: false,
    summary: '适合个人日常网页查阅、社交通讯、学术搜索与低频视频浏览的经济型月付方案。',
    features: [
      '月度 100GB 高速流量配额',
      'BGP 优质线路网络接入',
      '主流 Shadowsocks (SS) 协议',
      '支持常见流媒体平台浏览',
      '全平台客户端兼容与多端配置',
      '标准工单技术咨询支持'
    ],
    details: {
      protocol: 'SS (Shadowsocks) 协议',
      lineType: 'BGP 优质网络线路',
      mediaSupport: '支持常见主流海外音视频内容播放',
      aiSupport: '支持常规 AI 搜索与生产力工具网页访问',
      devices: '全平台常用客户端标准多设备协同',
      resetCycle: '账单日或自然月定期重置流量',
      suitability: '适合日常浏览、轻度出海办公、外贸沟通与学术文献查阅用户。'
    }
  },
  {
    id: 'yulang',
    name: '灵动·驭浪',
    category: 'monthly',
    price: '¥50',
    priceNum: 50,
    currency: 'CNY',
    cycle: '月付起',
    traffic: '300GB/月',
    trafficValue: '300',
    trafficUnit: 'GB/月',
    highlight: '高人气均衡款',
    popular: true,
    summary: '充裕的月度流量配额，兼顾 4K 超清影音流媒体、多设备协作与远程跨境办公。',
    features: [
      '月度 300GB 高速流量配额',
      'BGP 高速专线优化通道',
      'Shadowsocks 协议低时延传输',
      '流媒体高清影音顺畅解码',
      'ChatGPT / Claude 交互连接良好',
      '优先网络调度通道'
    ],
    details: {
      protocol: 'SS (Shadowsocks) 协议',
      lineType: 'BGP 高速专线优化接入',
      mediaSupport: '支持 4K 超高清主流海外流媒体平台串流',
      aiSupport: '优化 ChatGPT / Claude / Midjourney 连接请求',
      devices: '家庭与个人多设备并发顺畅运行',
      resetCycle: '每月周期定期重置流量',
      suitability: '适合常看 4K 视频、远程团队办公与日常重度互联网出海者。'
    }
  },
  {
    id: 'poxiao',
    name: '灵动·破晓',
    category: 'monthly',
    price: '¥100',
    priceNum: 100,
    currency: 'CNY',
    cycle: '月付起',
    traffic: '700GB/月',
    trafficValue: '700',
    trafficUnit: 'GB/月',
    highlight: '大流量进阶方案',
    popular: false,
    summary: '针对专业远程开发团队、大数据同步传输及跨境内容创作者设计的大流量套餐。',
    features: [
      '月度 700GB 充沛数据流量',
      'BGP 专属优化高带宽接入',
      '多节点集群均衡调度',
      '超清影音与海外素材高速下载',
      '深度生产力 AI 平台连续会话',
      '工单快速通道响应'
    ],
    details: {
      protocol: 'SS (Shadowsocks) 协议',
      lineType: 'BGP 高带宽集群优化通道',
      mediaSupport: '支持极清流媒体与多流视频并发传输',
      aiSupport: '企业级大模型 API 交互与高频工具支持',
      devices: '适合个人多主机、工作站与移动设备同时连接',
      resetCycle: '每月周期自动刷新流量',
      suitability: '适合独立开发者、跨境电商运营、设计团队与多媒体下载需求者。'
    }
  },
  {
    id: 'lingxiao',
    name: '灵动·凌霄',
    category: 'monthly',
    price: '¥180',
    priceNum: 180,
    currency: 'CNY',
    cycle: '月付起',
    traffic: '1.5TB/月',
    trafficValue: '1.5',
    trafficUnit: 'TB/月',
    highlight: '海量旗舰月付',
    popular: false,
    summary: 'TB 级海量月度带宽配额，专为极客、小型工作室及超高吞吐量跨境传输打造。',
    features: [
      '月度 1.5TB (1500GB) 极速流量',
      '高并发高优先级专线带宽',
      '低抖动全球智能路由',
      '极致 4K/8K 媒体串流无压力',
      '全链路多客户端随心接入',
      'VIP 工单优先级技术支持'
    ],
    details: {
      protocol: 'SS (Shadowsocks) 协议',
      lineType: 'BGP 旗舰高优先级物理专线接入',
      mediaSupport: '全方位流媒体高码率无损流转',
      aiSupport: '大模型并发任务与工程级调试无缝支持',
      devices: '支持工作室多工位及跨平台设备并发接入',
      resetCycle: '每月周期重置',
      suitability: '适合专业视频团队、跨国数据备份、重度技术极客与工作组。'
    }
  },
  {
    id: 'chuanyun',
    name: '灵动·穿云',
    category: 'yearly',
    price: '¥99',
    priceNum: 99,
    currency: 'CNY',
    cycle: '年付',
    traffic: '70GB/月',
    trafficValue: '70',
    trafficUnit: 'GB/月',
    highlight: '年付超值口碑',
    popular: true,
    summary: '折合每月仅需几元钱，每月自动提供 70GB 流量，全年无忧锁定稳定出海通道。',
    features: [
      '一次性付清全年 ¥99',
      '每月定期发放 70GB 流量',
      'BGP 稳定专线节点接入',
      '主流 Shadowsocks 协议',
      '满足全年日常出海与文献检索',
      '免去每月频繁手动续订烦恼'
    ],
    details: {
      protocol: 'SS (Shadowsocks) 协议',
      lineType: 'BGP 稳定专线接入通道',
      mediaSupport: '支持常规主流流媒体平台与海外资讯浏览',
      aiSupport: '支持日常 ChatGPT / Claude 网页会话与问答',
      devices: '个人手机、平板与笔记本常用设备兼容',
      resetCycle: '按自然月定期清零并下发 70GB 新配额（整年有效）',
      suitability: '预算敏感型用户、学生科研、长期轻度备用通道的首选套餐。'
    }
  },
  {
    id: 'xianyun',
    name: '灵动·闲云',
    category: 'onetime',
    price: '¥199',
    priceNum: 199,
    currency: 'CNY',
    cycle: '一次性流量包',
    traffic: '150GB',
    trafficValue: '150',
    trafficUnit: 'GB',
    highlight: '不限时轻量包',
    popular: false,
    summary: '无月租无周期清零顾虑，150GB 流量随用随扣，适合出差备用与低频出海需求。',
    features: [
      '150GB 不按月清零流量包',
      'BGP 专线高速接入节点',
      '单次购买长期可用',
      '随时备用无断网焦虑',
      '支持 SS 协议及全平台配置',
      '与月付套餐享受同等优质节点'
    ],
    details: {
      protocol: 'SS (Shadowsocks) 协议',
      lineType: 'BGP 高速路由专线通道',
      mediaSupport: '支持海外流媒体与高清视频点播',
      aiSupport: '无缝支持 AI 对话与常用办公插件',
      devices: '个人多设备随心切换绑定',
      resetCycle: '无到期月度清零，流量用完即止',
      suitability: '适合外贸差旅、跨境展会、偶尔查阅海外资料的弹性备用用户。'
    }
  },
  {
    id: 'jingyun',
    name: '灵动·惊云',
    category: 'onetime',
    price: '¥499',
    priceNum: 499,
    currency: 'CNY',
    cycle: '一次性流量包',
    traffic: '400GB',
    trafficValue: '400',
    trafficUnit: 'GB',
    highlight: '弹性中容量包',
    popular: false,
    summary: '400GB 充沛不限时流量池，兼顾出差远行与多终端共享，彻底摆脱月结续费束缚。',
    features: [
      '400GB 大容量一次性流量池',
      'BGP 专线多线路由调度',
      '不限月度过期与定时清零',
      '支持 4K 高画质视频即点即播',
      '多终端同时连接随心消耗',
      '全平台客户端一键导入'
    ],
    details: {
      protocol: 'SS (Shadowsocks) 协议',
      lineType: 'BGP 多线专线优化链路',
      mediaSupport: '支持多地区高清流媒体点播播放',
      aiSupport: 'ChatGPT / Claude 工具长期稳定接入',
      devices: '全平台常用客户端自由配置多终端',
      resetCycle: '不限月度重置，配额自然消耗完毕为止',
      suitability: '适合出差频繁、项目制周期性出海或多设备公用流量的用户。'
    }
  },
  {
    id: 'feiyun',
    name: '灵动·飞云',
    category: 'onetime',
    price: '¥899',
    priceNum: 899,
    currency: 'CNY',
    cycle: '一次性流量包',
    traffic: '800GB',
    trafficValue: '800',
    trafficUnit: 'GB',
    highlight: '巨量弹性储备',
    popular: false,
    summary: '800GB 长期有效大额数据包，一次购买长久省心，多设备无缝共享高质量专线。',
    features: [
      '800GB 巨额不限时流量储备',
      'BGP 高优先级稳定物理线路',
      '无固定月费与过期清零压力',
      '支持超大文件跨国传输与备份',
      '多设备多端全时在线畅连',
      '专享工单客服优先排队'
    ],
    details: {
      protocol: 'SS (Shadowsocks) 协议',
      lineType: 'BGP 高优先级专线骨干网络',
      mediaSupport: '支持超高清 4K 流媒体长时间顺畅播放',
      aiSupport: '高频 AI 工具、模型接口调试持续稳定',
      devices: '支持家庭或团队多端弹性共享配额',
      resetCycle: '长期有效，按需扣除，无月度归零',
      suitability: '适合追求一次搞定长期出海、免维护、低维护成本的高品质用户。'
    }
  },
  {
    id: 'custom',
    name: '灵动云·至尊私人定制',
    category: 'custom',
    price: '¥680',
    priceNum: 680,
    currency: 'CNY',
    cycle: '月付定制',
    traffic: '500GB/月',
    trafficValue: '500',
    trafficUnit: 'GB/月',
    highlight: '专属隔离通道',
    popular: false,
    summary: '为严苛业务场景量身打造，尊享独立定制线路与专属资源分配，保障纯净与极低抖动。',
    features: [
      '月度 500GB 专属定制高防流量',
      '独立物理通道与资源隔离保障',
      '专属优化出口网络与极速路由',
      '尊享 1 对 1 VIP 架构支持协助',
      '支持企业定制化端口与多协议扩展',
      '最高优先级服务工单秒级接入'
    ],
    details: {
      protocol: 'SS 及企业级扩展协议支持',
      lineType: '独立定制 BGP 专线及专属隔离网关',
      mediaSupport: '原生纯净 IP 调度，全媒体极速响应',
      aiSupport: '专属高纯净度出口，完美契合严苛 AI API 业务',
      devices: '企业及团队定制设备数上限与配置方案',
      resetCycle: '按定制周期定期重置',
      suitability: '适合跨境电商操盘、跨国金融交易、高端商业会议与高敏感数据业务。'
    }
  }
];
