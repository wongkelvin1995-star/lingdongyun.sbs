/**
 * schema.ts: 结构化数据小工具（节点会被 BaseLayout 合并进同一个 @graph）
 */
import { SITE_CONFIG } from '../config/site';

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: Crumb[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_CONFIG.siteUrl}${crumb.path}`,
    })),
  };
}
