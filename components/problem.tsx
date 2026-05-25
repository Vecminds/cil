const items = [
  {
    n: "01",
    tag: "time",
    title: "Credit officers spend days in the document pile.",
    body: "Pay stubs, bank statements, tax returns — read manually, cross-checked by hand, income computed in a spreadsheet. The underwriter doesn't see a single verified fact until day three.",
    bars: [40, 30, 45, 60, 35, 70, 50, 80],
  },
  {
    n: "02",
    tag: "accuracy",
    title: "Documents contradict each other. Errors hide in plain sight.",
    body: "A pay stub says $8,200/month. The bank deposit history says $6,100. No one catches it until the loan is already approved — or until the borrower defaults.",
    bars: [60, 55, 40, 70, 30, 65, 50, 45],
  },
  {
    n: "03",
    tag: "audit",
    title: "Manual reviews leave no paper trail.",
    body: "When a regulator asks why this file was approved, an analyst's notes in a PDF are the only record. That's not an audit trail — it's a liability.",
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
            The pile hasn&apos;t changed. <span className="em">Only</span> the regulator has.
          </h2>
          <p>
            Credit officers are still reading the same messy documents they read a decade ago — only now
            examiners expect a reproducible, explainable record of every decision that touched that file.
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
