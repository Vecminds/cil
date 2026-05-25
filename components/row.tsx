type RowTone = "ok" | "warn" | "muted";

const toneColors: Record<RowTone, string> = {
  ok: "var(--fg)",
  warn: "var(--signal)",
  muted: "var(--muted)",
};

export default function Row({ label, tone }: { label: string; tone: RowTone }) {
  return (
    <div
      className="mono"
      style={{
        fontSize: 11,
        color: toneColors[tone] ?? "var(--muted)",
        background: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        padding: "6px 10px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {label}
    </div>
  );
}
