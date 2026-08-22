import { ToolConfig } from '@/types'

export const toolConfigs: Record<string, ToolConfig> = {
  'qualify-pro': {
    id: 'qualify-pro',
    slug: 'qualify-pro',
    type: 'quiz',
    seo_title: 'QualifyPro — Smart Lead Qualification Quiz',
    seo_description: 'Stop chasing bad leads. Qualify prospects automatically with an intelligent quiz that scores and segments your leads.',
    keywords: ['lead qualification quiz', 'lead scoring tool', 'B2B lead gen'],
    og_image_url: null,
    hero_title: 'Qualify Leads in 60 Seconds',
    hero_subtitle: 'Replace 5 discovery calls with one smart quiz. Score leads as Hot, Warm, or Cold automatically.',
    demo_template_id: null,
    single_tool_price: 1900,
    testimonials: [
      { name: 'Sarah Chen', role: 'Agency Owner', quote: 'We cut unqualified calls by 73% in the first month.' },
      { name: 'Marcus Webb', role: 'SaaS Founder', quote: 'Our sales team now focuses on Hot leads only. Game changer.' }
    ],
    features: [
      { icon: 'target', title: 'Smart Scoring', description: 'Automatically score leads based on answers' },
      { icon: 'git-branch', title: 'Conditional Logic', description: 'Show different questions based on responses' },
      { icon: 'zap', title: 'Instant Results', description: 'Hot/Warm/Cold classification in real-time' }
    ],
    faqs: [
      { question: 'How does lead scoring work?', answer: 'You assign point values to each answer. The quiz totals the score and categorizes the lead.' },
      { question: 'Can I integrate with my CRM?', answer: 'Yes, via Zapier webhooks or direct API integration.' }
    ],
    created_at: new Date().toISOString()
  },
  'savings-calc': {
    id: 'savings-calc',
    slug: 'savings-calc',
    type: 'calculator',
    seo_title: 'SavingsCalc — ROI & Savings Calculator',
    seo_description: 'Show your value in numbers. Build interactive ROI calculators that prove your worth to prospects.',
    keywords: ['ROI calculator tool', 'savings calculator', 'price comparison tool'],
    og_image_url: null,
    hero_title: 'Show Your Value in Numbers',
    hero_subtitle: 'Build interactive calculators that prove ROI to your prospects and close deals faster.',
    demo_template_id: null,
    single_tool_price: 1500,
    testimonials: [
      { name: 'David Park', role: 'Consultant', quote: 'My close rate jumped 40% after adding the calculator to my proposals.' }
    ],
    features: [
      { icon: 'calculator', title: 'Formula Builder', description: 'Drag-and-drop formula creation with live preview' },
      { icon: 'bar-chart-3', title: 'Visual Charts', description: 'Auto-generated charts showing savings over time' },
      { icon: 'download', title: 'PDF Export', description: 'One-click PDF report for prospects' }
    ],
    faqs: [
      { question: 'Do I need to know math?', answer: 'No, our visual formula builder handles the complexity.' },
      { question: 'Can I use my own branding?', answer: 'Yes, Pro and Business plans include white-label options.' }
    ],
    created_at: new Date().toISOString()
  },
  'match-maker': {
    id: 'match-maker',
    slug: 'match-maker',
    type: 'recommendation',
    seo_title: 'MatchMaker — Product Recommendation Quiz',
    seo_description: 'The Sephora quiz for your store. Guide customers to the perfect product with an intelligent recommendation engine.',
    keywords: ['product recommendation quiz', 'shopify quiz', 'skincare quiz tool'],
    og_image_url: null,
    hero_title: 'The Sephora Quiz for Your Store',
    hero_subtitle: 'Guide customers to the perfect product. Reduce returns and increase average order value.',
    demo_template_id: null,
    single_tool_price: 1200,
    testimonials: [
      { name: 'Emma Liu', role: 'E-commerce Owner', quote: 'Our return rate dropped 35% after implementing the quiz.' }
    ],
    features: [
      { icon: 'search', title: 'Smart Matching', description: 'AI-powered product recommendations' },
      { icon: 'shopping-bag', title: 'Shopify Integration', description: 'Direct product sync with your store' },
      { icon: 'trending-up', title: 'AOV Boost', description: 'Average 23% increase in order value' }
    ],
    faqs: [
      { question: 'How many products can I recommend?', answer: 'Unlimited on all plans. Free plan allows 50 responses/month.' },
      { question: 'Does it work with WooCommerce?', answer: 'Yes, via our API or Zapier integration.' }
    ],
    created_at: new Date().toISOString()
  },
  'price-builder': {
    id: 'price-builder',
    slug: 'price-builder',
    type: 'pricing',
    seo_title: 'PriceBuilder — Dynamic Pricing Calculator',
    seo_description: 'Let customers price themselves. Build self-serve pricing pages that generate instant quotes.',
    keywords: ['dynamic pricing calculator', 'SaaS pricing page', 'self-serve pricing'],
    og_image_url: null,
    hero_title: 'Let Customers Price Themselves',
    hero_subtitle: 'Replace "Contact Sales" with instant self-serve pricing. Close deals while you sleep.',
    demo_template_id: null,
    single_tool_price: 2500,
    testimonials: [
      { name: 'James Rivera', role: 'SaaS Founder', quote: 'We went from 5 sales calls a day to 50 self-serve signups.' }
    ],
    features: [
      { icon: 'sliders', title: 'Dynamic Tiers', description: 'Pricing that changes based on selected features' },
      { icon: 'credit-card', title: 'Stripe Integration', description: 'Collect payments directly in the form' },
      { icon: 'shield-check', title: 'No-Code Setup', description: 'Configure pricing rules without developers' }
    ],
    faqs: [
      { question: 'Can I add discounts?', answer: 'Yes, coupon codes and volume discounts are supported.' },
      { question: 'Is it PCI compliant?', answer: 'All payments are processed through Stripe. We never touch card data.' }
    ],
    created_at: new Date().toISOString()
  },
  'quote-craft': {
    id: 'quote-craft',
    slug: 'quote-craft',
    type: 'quote',
    seo_title: 'QuoteCraft — Instant PDF Quote Generator',
    seo_description: 'Generate professional PDF quotes in seconds. Stop spending hours on proposals.',
    keywords: ['quote generator', 'estimate tool', 'invoice generator'],
    og_image_url: null,
    hero_title: 'PDF Quotes in Seconds, Not Hours',
    hero_subtitle: 'Turn form submissions into professional PDF quotes instantly. Impress clients and save time.',
    demo_template_id: null,
    single_tool_price: 2000,
    testimonials: [
      { name: 'Lisa Thompson', role: 'Freelance Designer', quote: 'I save 3 hours per proposal now. Best investment ever.' }
    ],
    features: [
      { icon: 'file-text', title: 'PDF Generation', description: 'Professional branded PDFs with one click' },
      { icon: 'pen-tool', title: 'E-Signature', description: 'Clients can sign quotes digitally' },
      { icon: 'send', title: 'Auto-Delivery', description: 'Quotes sent automatically via email' }
    ],
    faqs: [
      { question: 'Can I customize the PDF template?', answer: 'Yes, upload your logo and choose colors in the builder.' },
      { question: 'Does it support multi-currency?', answer: 'Yes, 150+ currencies with live exchange rates.' }
    ],
    created_at: new Date().toISOString()
  },
  'intake-pro': {
    id: 'intake-pro',
    slug: 'intake-pro',
    type: 'intake',
    seo_title: 'IntakePro — Smart Client Intake Forms',
    seo_description: 'Onboard clients in 5 minutes, not 5 days. Replace email threads with intelligent intake forms.',
    keywords: ['client intake form', 'onboarding form', 'law firm intake'],
    og_image_url: null,
    hero_title: 'Onboard Clients in 5 Minutes',
    hero_subtitle: 'Replace 10 email threads with one smart form. Collect everything you need upfront.',
    demo_template_id: null,
    single_tool_price: 1800,
    testimonials: [
      { name: 'Robert Kim', role: 'Attorney', quote: 'My paralegal saves 4 hours per client now.' }
    ],
    features: [
      { icon: 'clipboard-list', title: 'Conditional Sections', description: 'Show relevant fields based on case type' },
      { icon: 'upload', title: 'File Upload', description: 'Clients upload documents directly' },
      { icon: 'calendar', title: 'Auto-Scheduling', description: 'Book discovery call after form completion' }
    ],
    faqs: [
      { question: 'Is client data secure?', answer: 'Bank-level encryption. HIPAA-compliant on Business plan.' },
      { question: 'Can I export to my case management system?', answer: 'Yes, integrations with Clio, MyCase, and more via Zapier.' }
    ],
    created_at: new Date().toISOString()
  },
  'book-craft': {
    id: 'book-craft',
    slug: 'book-craft',
    type: 'booking',
    seo_title: 'BookCraft — Appointment Scheduler + Intake',
    seo_description: 'Calendly + Intake Form in one. Reduce no-shows by 60% with smart scheduling.',
    keywords: ['booking scheduler', 'appointment tool', 'calendly alternative'],
    og_image_url: null,
    hero_title: 'Calendly + Intake Form in One',
    hero_subtitle: 'Reduce no-shows by 60%. Collect intake info before the meeting, not during.',
    demo_template_id: null,
    single_tool_price: 1500,
    testimonials: [
      { name: 'Dr. Amanda Foster', role: 'Clinic Owner', quote: 'No-shows dropped from 30% to 8% in two weeks.' }
    ],
    features: [
      { icon: 'calendar', title: 'Smart Scheduling', description: 'Connect Google/Outlook calendar' },
      { icon: 'bell', title: 'Auto-Reminders', description: 'SMS + Email reminders before appointments' },
      { icon: 'users', title: 'Group Bookings', description: 'Classes, workshops, and group sessions' }
    ],
    faqs: [
      { question: 'Which calendars does it sync with?', answer: 'Google Calendar, Outlook, and Apple Calendar.' },
      { question: 'Can I set buffer time between meetings?', answer: 'Yes, customize prep time and travel time buffers.' }
    ],
    created_at: new Date().toISOString()
  }
}

export function getToolConfig(slug: string): ToolConfig | undefined {
  return toolConfigs[slug]
}

export function getAllToolConfigs(): ToolConfig[] {
  return Object.values(toolConfigs)
}
