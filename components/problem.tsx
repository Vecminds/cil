const items = [
  {
    n: "01",
    tag: "decisions",
    title: "Decisions take days, not seconds.",
    body: "A credit memo, a sanctions hit, a claim review — each routed through five tools and three inboxes before anyone signs off.",
    bars: [40, 30, 45, 60, 35, 70, 50, 80],
  },
  {
    n: "02",
    tag: "data",
    title: "Your data lives in seven places.",
    body: "Core systems, spreadsheets, PDFs, vendor APIs. Analysts spend most of their time finding the question, not answering it.",
    bars: [60, 55, 40, 70, 30, 65, 50, 45],
  },
  {
    n: "03",
    tag: "trust",
    title: "Models you can't explain don't ship.",
    body: "Regulators and risk committees need every score traced to its inputs. Black-box AI fails audit before it reaches production.",
    bars: [80, 20, 30, 25, 50, 22, 28, 35],
  },
];

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">The problem</span>
          <h2>
            Legacy systems don&apos;t think. <span className="em">Yet</span> they decide everything.
          </h2>
          <p>
            Banks, insurers and legal teams run on infrastructure that&apos;s older than most of their analysts.
            It&apos;s reliable. It&apos;s also slow, fragmented, and opaque — which is fine until the decision matters.
          </p>
        </div>
        <div className="pain-grid">
          {items.map((it, i) => (
            <div className="pain-card reveal" key={it.n} data-delay={i + 1}>
              <div className="num">
                <span>{it.n}</span>
                <span>{it.tag}</span>
              </div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
              <div className="vis" aria-hidden="true">
                {it.bars.map((h, j) => (
                  <div className="bar" key={j} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
