/**
 * planFormat.ts: 灵动云官方套餐数据校验与格式化模块
 * 统一防御 [object Object] 异常，严格校验字段类型与完整性
 */
import { type PlanItem } from '../data/plans.ts';

export interface FormattedPlan {
  name: string;
  price: string;
  traffic: string;
  paymentType: string;
  suitability: string;
}

/**
 * 校验套餐数据并提取安全字段
 */
export function validateAndFormatPlans(plans: unknown): FormattedPlan[] {
  if (!Array.isArray(plans)) {
    throw new TypeError(`[PlanFormatError] plans 必须为数组，当前接收到: ${typeof plans}`);
  }

  return plans.map((p, index) => {
    if (!p || typeof p !== 'object') {
      throw new TypeError(`[PlanFormatError] 第 ${index} 个套餐项不是有效对象`);
    }

    const item = p as Partial<PlanItem>;

    // 校验套餐名称
    if (!item.name || typeof item.name !== 'string') {
      throw new Error(`[PlanFormatError] 第 ${index} 个套餐缺少合法的 name 字段`);
    }

    // 校验价格
    if (!item.price || typeof item.price !== 'string') {
      throw new Error(`[PlanFormatError] 套餐 ${item.name} 缺少合法的 price 字段`);
    }

    // 校验流量
    if (!item.traffic || typeof item.traffic !== 'string') {
      throw new Error(`[PlanFormatError] 套餐 ${item.name} 缺少合法的 traffic 字段`);
    }

    // 映射付款类型：严格遵循官方定义
    let paymentType = '月付';
    if (item.category === 'yearly' || item.cycle === '年付') {
      paymentType = '年付';
    } else if (item.category === 'onetime' || item.cycle === '一次性流量包') {
      paymentType = '一次性';
    } else if (item.category === 'custom' || item.cycle === '月付定制') {
      paymentType = '月付定制';
    } else if (item.category === 'monthly') {
      paymentType = '月付';
    }

    // 价格显示标准化（若未含 /月 则格式化）
    let formattedPrice = item.price;
    if ((item.category === 'monthly' || item.category === 'custom') && !formattedPrice.includes('/月')) {
      formattedPrice = `${formattedPrice}/月`;
    } else if (item.category === 'yearly' && !formattedPrice.includes('/年')) {
      formattedPrice = `${formattedPrice}/年`;
    }

    const suitability = item.summary || item.details?.suitability || '高品质网络加速接入';

    return {
      name: item.name,
      price: formattedPrice,
      traffic: item.traffic,
      paymentType,
      suitability,
    };
  });
}

/**
 * 生成语义化 Markdown 表格字符串
 */
export function generatePlansMarkdownTable(plans: PlanItem[]): string {
  const formatted = validateAndFormatPlans(plans);

  const header = '| 套餐名称 | 价格 | 流量 | 付款类型 |\n| :--- | :--- | :--- | :--- |\n';
  const rows = formatted
    .map(
      (p) =>
        `| **${p.name}** | ${p.price} | ${p.traffic} | ${p.paymentType} |`
    )
    .join('\n');

  return header + rows;
}
