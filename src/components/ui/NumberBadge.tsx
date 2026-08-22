interface NumberBadgeProps {
  number: number;
}

const NUMBER_WORDS: Record<number, string> = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
};

export function NumberBadge({ number }: NumberBadgeProps) {
  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg font-bold text-sm"
      style={{
        backgroundColor: "var(--badge-bg)",
        color: "var(--badge-text)",
      }}
    >
      {number}
    </span>
  );
}

export function NumberWord({ number }: NumberBadgeProps) {
  return (
    <span
      className="font-bold"
      style={{ color: "var(--text-primary)" }}
    >
      {NUMBER_WORDS[number] || number}
    </span>
  );
}
