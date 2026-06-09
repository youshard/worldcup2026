import type { ConfederationInfo } from '../types';

export const CONFEDERATIONS: Record<string, ConfederationInfo> = {
  UEFA:      { name: '欧洲', color: '#3b82f6' },
  CONMEBOL:  { name: '南美', color: '#22c55e' },
  CAF:       { name: '非洲', color: '#f59e0b' },
  AFC:       { name: '亚洲', color: '#ef4444' },
  CONCACAF:  { name: '中北美', color: '#8b5cf6' },
  OFC:       { name: '大洋洲', color: '#06b6d4' },
};
