/**
 * 灵动云 9 档套餐（来源：运营后台，2026-11-01）
 * 本站是帮助中心，只保留名称、类型、价格、流量与有效期，用于额度说明与购买入口卡片；
 * 完整的套餐介绍只放在官网的套餐价格与服务说明页。价格以用户中心实时显示为准。
 */

export type PlanCategory = 'monthly' | 'yearly' | 'onetime' | 'custom';

export interface PlanItem {
  id: string;
  name: string;
  category: PlanCategory;
  /** 显示价格（起价） */
  price: string;
  priceNum: number;
  traffic: string;
  /** 有效期 / 额度规则 */
  validity: string;
}

export const PLAN_CATEGORY_LABELS: Record<PlanCategory, string> = {
  monthly: '月付',
  yearly: '年付',
  onetime: '一次性流量包',
  custom: '私人定制',
};

export const PLANS_DATA: PlanItem[] = [
  { id: 'fufeng', name: '灵动·拂风', category: 'monthly', price: '¥20/月起', priceNum: 20, traffic: '100GB/月', validity: '可选月付、季付、半年付、年付' },
  { id: 'yulang', name: '灵动·驭浪', category: 'monthly', price: '¥50/月起', priceNum: 50, traffic: '300GB/月', validity: '可选月付、季付、半年付、年付' },
  { id: 'poxiao', name: '灵动·破晓', category: 'monthly', price: '¥100/月起', priceNum: 100, traffic: '700GB/月', validity: '可选月付、季付、半年付、年付' },
  { id: 'lingxiao', name: '灵动·凌霄', category: 'monthly', price: '¥180/月起', priceNum: 180, traffic: '1.5TB/月（1500GB）', validity: '可选月付、季付、半年付、年付' },
  { id: 'chuanyun', name: '灵动·穿云', category: 'yearly', price: '¥99/年', priceNum: 99, traffic: '每月 70GB', validity: '每 30 天自动重置' },
  { id: 'xianyun', name: '灵动·闲云（小流量包）', category: 'onetime', price: '¥199', priceNum: 199, traffic: '150GB', validity: '永久有效，用完为止' },
  { id: 'jingyun', name: '灵动·惊云（标准流量包）', category: 'onetime', price: '¥499', priceNum: 499, traffic: '400GB', validity: '永久有效，用完为止' },
  { id: 'feiyun', name: '灵动·飞云（精英流量包）', category: 'onetime', price: '¥899', priceNum: 899, traffic: '800GB', validity: '永久有效，用完为止' },
  { id: 'custom', name: '灵动云·至尊私人定制', category: 'custom', price: '¥680/月', priceNum: 680, traffic: '500GB/月（专线独享流量）', validity: '确认需求后约 2–3 个工作日交付' },
];

/** 按类型汇总：档数与起价，用于首页「套餐与购买」小卡片 */
export function summarizePlans() {
  const order: PlanCategory[] = ['monthly', 'yearly', 'onetime', 'custom'];
  return order.map((category) => {
    const items = PLANS_DATA.filter((p) => p.category === category);
    const min = items.reduce((a, b) => (b.priceNum < a.priceNum ? b : a));
    return {
      category,
      label: PLAN_CATEGORY_LABELS[category],
      count: items.length,
      names: items.map((p) => p.name.replace(/（.*）/, '')),
      fromPrice: min.price,
    };
  });
}
