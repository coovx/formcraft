import { getToolConfig } from "@/lib/data/tool-configs";
import { notFound } from "next/navigation";

interface ToolPageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { slug } = await params;
  const toolSlug = slug?.[0] || "";
  const config = getToolConfig(toolSlug);

  if (!config) return { title: "FormCraft" };

  return {
    title: config.seo_title,
    description: config.seo_description,
    keywords: config.keywords,
    openGraph: {
      title: config.seo_title,
      description: config.seo_description,
      images: config.og_image_url ? [config.og_image_url] : [],
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const toolSlug = slug?.[0] || "";
  const config = getToolConfig(toolSlug);

  if (!config) notFound();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "var(--bg-base)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg"
              style={{
                backgroundColor: "var(--accent-bg)",
                color: "var(--accent-text)",
              }}
            >
              F
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              FormCraft
            </span>
          </a>
          <a
            href="/auth"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition hover:opacity-90"
            style={{
              backgroundColor: "var(--accent-bg)",
              color: "var(--accent-text)",
            }}
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {config.hero_title}
          </h1>
          <p
            className="text-lg md:text-xl mb-8 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {config.hero_subtitle}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="/auth"
              className="px-6 py-3 rounded-lg font-semibold text-sm transition hover:opacity-90"
              style={{
                backgroundColor: "var(--accent-bg)",
                color: "var(--accent-text)",
              }}
            >
              Start Free Trial →
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-lg font-semibold text-sm border transition hover:opacity-80"
              style={{
                borderColor: "var(--border-subtle)",
                color: "var(--text-primary)",
              }}
            >
              See Features
            </a>
          </div>
          <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            Single tool: ${(config.single_tool_price / 100).toFixed(0)}/mo — or
            get all 7 tools for $29/mo
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Key Features
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {config.features.map((feature, i) => (
              <div
                key={i}
                className="rounded-[10px] border p-5 flex flex-col gap-3"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                  style={{
                    backgroundColor: "var(--badge-bg)",
                    color: "var(--badge-text)",
                  }}
                >
                  {feature.icon.charAt(0).toUpperCase()}
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              What Users Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {config.testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-[10px] border p-5"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                    style={{
                      backgroundColor: "var(--badge-bg)",
                      color: "var(--badge-text)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {config.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-[10px] border p-5"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {faq.question}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to get started?
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
            Join thousands of businesses using FormCraft to grow.
          </p>
          <a
            href="/auth"
            className="inline-flex px-6 py-3 rounded-lg font-semibold text-sm transition hover:opacity-90"
            style={{
              backgroundColor: "var(--accent-bg)",
              color: "var(--accent-text)",
            }}
          >
            Start Free Trial →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-12 px-4"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            © 2026 FormCraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
