import { NumberBadge } from './NumberBadge';

interface TwoLevelCardProps {
  number: number;
  title: string;
  metric: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export function TwoLevelCard({ number, title, metric, description, ctaText, ctaHref }: TwoLevelCardProps) {
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
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h3>
        </div>
        <span className="px-3 py-1.5 rounded-lg text-sm font-medium border"
          style={{
            backgroundColor: 'var(--bg-base)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-primary)',
          }}>
          {metric}
        </span>
      </div>

      {/* Bottom Level */}
      <div className="flex items-stretch gap-3">
        <div className="flex-1 rounded-lg border p-3 flex items-center"
          style={{
            backgroundColor: 'var(--bg-base)',
            borderColor: 'var(--border-subtle)',
          }}>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
        </div>
        <a href={ctaHref}
          className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition hover:opacity-90"
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
