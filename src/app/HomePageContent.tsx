"use client";

import { getAllToolConfigs } from "@/lib/data/tool-configs";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NumberWord } from "@/components/ui/NumberBadge";

function SmallBadge({ number }: { number: number }) {
  return (
    <span
      className="inline-flex items-center justify-center w-8 h-8 rounded-md font-bold text-xs"
      style={{
        backgroundColor: "var(--badge-bg)",
        color: "var(--badge-text)",
      }}
    >
      {number}
    </span>
  );
}

function ToolCard({
  number,
  title,
  priceBadge,
  description,
  bestFor,
  ctaText,
  ctaHref,
}: {
  number: number;
  title: string;
  priceBadge: string;
  description: string;
  bestFor: string;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div
      className="rounded-[10px] border overflow-hidden"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 gap-3 flex-wrap"
        style={{
          backgroundColor: "var(--bg-surface-alt)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <SmallBadge number={number} />
          <h3
            className="text-base font-bold leading-none truncate"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap shrink-0">
          <span
            className="inline-flex items-center px-2.5 h-[26px] text-[10px] font-bold rounded-md whitespace-nowrap"
            style={{
              backgroundColor: "var(--bg-base)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
            }}
          >
            Pro Tool
          </span>
          <span
            className="inline-flex items-center px-2.5 h-[26px] text-[10px] font-bold rounded-md whitespace-nowrap"
            style={{
              backgroundColor: "var(--bg-base)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
            }}
          >
            {priceBadge}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <p
          className="text-[13px] leading-relaxed mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>

        {/* Footer */}
        <div
          className="flex items-stretch gap-3 pt-4"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <div
            className="flex items-center flex-1 px-3 rounded-lg text-xs leading-snug"
            style={{
              backgroundColor: "var(--bg-base)",
              border: "1px solid var(--border-subtle)",
              borderLeft: "3px solid var(--accent-border)",
              color: "var(--text-secondary)",
              minHeight: "38px",
            }}
          >
            {bestFor}
          </div>
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center px-4 rounded-lg text-xs font-bold transition hover:opacity-90 shrink-0"
            style={{
              backgroundColor: "var(--accent-bg)",
              color: "var(--accent-text)",
              height: "38px",
            }}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  metric,
  description,
}: {
  number: number;
  title: string;
  metric: string;
  description: string;
}) {
  return (
    <div
      className="rounded-[10px] border overflow-hidden"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 gap-3 flex-wrap"
        style={{
          backgroundColor: "var(--bg-surface-alt)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <SmallBadge number={number} />
          <h3
            className="text-base font-bold leading-none truncate"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
        </div>
        <span
          className="inline-flex items-center px-2.5 h-[26px] text-[10px] font-bold rounded-md whitespace-nowrap shrink-0"
          style={{
            backgroundColor: "var(--bg-base)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-primary)",
          }}
        >
          {metric}
        </span>
      </div>

      {/* Body - Full width text, no border, dark bg */}
      <div
        className="px-4 py-3"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <p
          className="text-[13px] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomePageContent() {
  const tools = getAllToolConfigs();

  const toolData: Record<string, { title: string; bestFor: string }> = {
    "qualify-pro": { title: "QualifyPro", bestFor: "Best for lead qualification and scoring" },
    "savings-calc": { title: "SavingsCalc", bestFor: "Best for ROI proof and value demo" },
    "match-maker": { title: "MatchMaker", bestFor: "Best for product recommendations" },
    "price-builder": { title: "PriceBuilder", bestFor: "Best for self-serve pricing" },
    "quote-craft": { title: "QuoteCraft", bestFor: "Best for instant PDF quotes" },
    "intake-pro": { title: "IntakePro", bestFor: "Best for client onboarding" },
    "book-craft": { title: "BookCraft", bestFor: "Best for appointment scheduling" },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
      >
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg"
              style={{ backgroundColor: "var(--accent-bg)", color: "var(--accent-text)" }}
            >
              F
            </div>
            <span className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              FormCraft
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/auth" className="text-sm font-medium px-4 py-2 rounded-lg transition hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
              Sign In
            </a>
            <a
              href="/auth"
              className="text-sm font-semibold px-4 py-2 rounded-lg transition hover:opacity-90"
              style={{ backgroundColor: "var(--accent-bg)", color: "var(--accent-text)" }}
            >
              Get Started
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--text-primary)" }}>
            <NumberWord number={7} /> Tools
            <br />
            One Platform
          </h1>
          <p className="text-lg md:text-xl mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Build interactive quizzes, calculators, forms, and booking tools without writing code
          </p>
          <p className="text-base mb-10" style={{ color: "var(--text-secondary)" }}>
            Start free Scale to $29/mo for all <NumberWord number={7} /> tools
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="/auth"
              className="px-6 py-3 rounded-lg font-semibold text-sm transition hover:opacity-90"
              style={{ backgroundColor: "var(--accent-bg)", color: "var(--accent-text)" }}
            >
              Start Building Free
            </a>
            <a
              href="#tools"
              className="px-6 py-3 rounded-lg font-semibold text-sm border transition hover:opacity-80"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}
            >
              Explore Tools
            </a>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              Choose Your Tool
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Each tool is a standalone product with its own SEO-optimized landing page
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {tools.map((tool, index) => {
              const data = toolData[tool.slug];
              return (
                <ToolCard
                  key={tool.slug}
                  number={index + 1}
                  title={data?.title || tool.hero_title}
                  priceBadge={`$${(tool.single_tool_price / 100).toFixed(0)}/mo`}
                  description={tool.hero_subtitle}
                  bestFor={data?.bestFor || "Best for business growth"}
                  ctaText="Get Started"
                  ctaHref={`https://${tool.slug}.formcraft.app`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Why FormCraft */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              Why FormCraft
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <FeatureCard
              number={1}
              title="SEO Sites"
              metric="Seven Sites"
              description="Each tool gets its own subdomain for maximum search visibility Rank for seven times more keywords"
            />
            <FeatureCard
              number={2}
              title="One Codebase"
              metric="One App"
              description="One app one database one auth system Easy to maintain solo without a team"
            />
            <FeatureCard
              number={3}
              title="Free Start"
              metric="Free"
              description="Free tier includes two tools and fifty responses per month No credit card required"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Ready to build
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
            Join thousands of businesses using FormCraft to grow
          </p>
          <a
            href="/auth"
            className="inline-flex px-6 py-3 rounded-lg font-semibold text-sm transition hover:opacity-90"
            style={{ backgroundColor: "var(--accent-bg)", color: "var(--accent-text)" }}
          >
            Get Early Access
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: "var(--accent-bg)", color: "var(--accent-text)" }}
              >
                F
              </div>
              <span className="font-bold" style={{ color: "var(--text-primary)" }}>
                FormCraft
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Seven tools One platform Zero code
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--text-primary)" }}>Growth</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://qualify-pro.formcraft.app" style={{ color: "var(--text-secondary)" }}>QualifyPro</a></li>
              <li><a href="https://savings-calc.formcraft.app" style={{ color: "var(--text-secondary)" }}>SavingsCalc</a></li>
              <li><a href="https://match-maker.formcraft.app" style={{ color: "var(--text-secondary)" }}>MatchMaker</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--text-primary)" }}>Sales</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://price-builder.formcraft.app" style={{ color: "var(--text-secondary)" }}>PriceBuilder</a></li>
              <li><a href="https://quote-craft.formcraft.app" style={{ color: "var(--text-secondary)" }}>QuoteCraft</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--text-primary)" }}>Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://intake-pro.formcraft.app" style={{ color: "var(--text-secondary)" }}>IntakePro</a></li>
              <li><a href="https://book-craft.formcraft.app" style={{ color: "var(--text-secondary)" }}>BookCraft</a></li>
            </ul>
          </div>
        </div>
        <div
          className="max-w-5xl mx-auto mt-12 pt-8 text-center text-sm border-t"
          style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
        >
          2026 FormCraft Built with love by a solo founder
        </div>
      </footer>
    </div>
  );
}
