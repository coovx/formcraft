import { NumberBadge } from './NumberBadge';

interface ThreeLevelCardProps {
  number: number;
  title: string;
  priceBadge: string;
  description: string;
  useCase: string;
  ctaText: string;
  ctaHref: string;
}

export function ThreeLevelCard({ number, title, priceBadge, description, useCase, ctaText, ctaHref }: ThreeLevelCardProps) {
  return (
    <div className="rounded-[10px] border p-5 flex flex-col gap-4"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
      }}>
      {/* Top Level */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NumberBadge number={number} />
          <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
        </div>
        <span className="px-3 py-1.5 rounded-lg text-sm font-medium border"
          style={{
            backgroundColor: 'var(--bg-base)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-primary)',
          }}>
          {priceBadge}
        </span>
      </div>

      {/* Middle Level */}
      <div className="pb-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
        <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      </div>

      {/* Bottom Level */}
      <div className="flex items-stretch gap-3">
        <div className="flex-1 rounded-lg border p-4 flex items-center"
          style={{
            backgroundColor: 'var(--bg-base)',
            borderColor: 'var(--border-subtle)',
          }}>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {useCase}
          </p>
        </div>
        <a href={ctaHref}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition hover:opacity-90"
          style={{
            backgroundColor: 'var(--accent-bg)',
            color: 'var(--accent-text)',
          }}>
          {ctaText} <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
}
