export type ToolType = 'quiz' | 'calculator' | 'intake' | 'booking' | 'quote' | 'pricing' | 'recommendation'
export type PlanType = 'free' | 'pro' | 'business'
export type BlockType = 'text' | 'number' | 'email' | 'select' | 'multiselect' | 'textarea' | 'radio' | 'checkbox' | 'date' | 'file' | 'section' | 'page_break'

export interface Profile {
  id: string
  full_name: string | null
  avatar_url: string | null
  plan: PlanType
  created_at: string
}

export interface Workspace {
  id: string
  owner_id: string
  name: string
  slug: string
  settings: Record<string, unknown>
  plan: PlanType
  created_at: string
}

export interface Tool {
  id: string
  workspace_id: string
  type: ToolType
  title: string
  slug: string
  config: Record<string, unknown>
  is_published: boolean
  created_at: string
}

export interface Block {
  id: string
  tool_id: string
  type: BlockType
  label: string
  properties: Record<string, unknown>
  order_index: number
  parent_id: string | null
  created_at: string
}

export interface LogicRule {
  id: string
  tool_id: string
  trigger_block_id: string
  condition: Record<string, unknown>
  action: 'show' | 'hide' | 'jump' | 'score'
  target_block_id: string | null
  score_value: number | null
  created_at: string
}

export interface Submission {
  id: string
  tool_id: string
  respondent_email: string | null
  respondent_meta: Record<string, unknown>
  answers: Record<string, unknown>
  score: number | null
  result_category: string | null
  completed_at: string | null
  created_at: string
}

export interface ToolConfig {
  id: string
  slug: string
  type: ToolType
  seo_title: string
  seo_description: string
  keywords: string[]
  og_image_url: string | null
  hero_title: string
  hero_subtitle: string
  demo_template_id: string | null
  single_tool_price: number
  testimonials: Array<{name: string; role: string; quote: string; image?: string}>
  features: Array<{icon: string; title: string; description: string}>
  faqs: Array<{question: string; answer: string}>
  created_at: string
}

export interface AnalyticsEvent {
  id: string
  tool_id: string
  event_type: 'view' | 'start' | 'complete' | 'abandon'
  session_id: string
  metadata: Record<string, unknown>
  created_at: string
}

export interface Template {
  id: string
  name: string
  type: ToolType
  category: string
  config: Record<string, unknown>
  thumbnail_url: string | null
  is_premium: boolean
  created_at: string
}

export interface Integration {
  id: string
  workspace_id: string
  type: 'zapier' | 'webhook' | 'slack'
  config: Record<string, unknown>
  is_active: boolean
  created_at: string
}

export interface Subscription {
  id: string
  workspace_id: string
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  plan: PlanType
  status: 'active' | 'canceled' | 'past_due'
  current_period_end: string | null
}

export interface UsageLimit {
  id: string
  workspace_id: string
  tool_type: ToolType
  month: string
  used: number
  limit: number
}
