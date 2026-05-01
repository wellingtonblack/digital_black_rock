export interface AuditIssue {
  severity: "critical" | "warning";
  description: string;
}

export interface StrategyScores {
  performance: number;
  seo: number;
  accessibility: number;
  best_practices: number;
  lcp?: string;
  cls?: string;
  inp?: string;
}

export interface AuditResult {
  performance_score: number;
  seo_score: number;
  accessibility_score: number;
  best_practices_score: number;
  lcp?: string;
  cls?: string;
  inp?: string;
  mobile?: StrategyScores;
  desktop?: StrategyScores;
  platform_detected?: string;
  ai_summary?: string;
  issues?: AuditIssue[];
  recommendations?: string[];
}

export interface LeadPayload {
  url: string;
  name: string;
  email: string;
  phone: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface AnalyzeResponse {
  success: boolean;
  result?: AuditResult;
  error?: string;
}
