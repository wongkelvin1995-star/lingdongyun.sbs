/**
 * topic.ts: 文章分类 → 图标（统一的视觉语言；账户安全类使用带青色锁孔的盾牌）
 */
export type TopicIcon = 'wrench' | 'pulse' | 'route' | 'shield-key' | 'sparkle-play' | 'globe' | 'book';

const MAP: Record<string, TopicIcon> = {
  排查步骤: 'wrench',
  线路与稳定性: 'pulse',
  代理模式: 'route',
  账户安全: 'shield-key',
  'AI 与流媒体': 'sparkle-play',
  跨境网络: 'globe',
};

export function categoryIcon(category: string): TopicIcon {
  return MAP[category] ?? 'book';
}

/** 账户与订阅安全相关的文章（使用安全提示样式） */
export function isSecurityTopic(category: string): boolean {
  return category === '账户安全';
}
