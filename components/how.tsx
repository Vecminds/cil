import { ReactNode } from "react";
import Row from "./row";

const steps: { n: string; t: string; b: string; vis: ReactNode }[] = [
  {
    n: "01",
    t: "Connect your systems",
    b: "Use a connector or our SDK to expose the records you want Oloid to reason about. Read-only by default.",
    vis: (
      <div style={{ display: "grid", gap: 6, width: "100%" }}>
        <Row label="core_banking.accounts" tone="muted" />
        <Row label="case_mgmt.claims" tone="muted" />
        <Row label="docs.policies.pdf" tone="muted" />
      </div>
    ),
  },
  {
    n: "02",
    t: "Encode your policies",
    b: "Write the rules your regulators and risk committee already approved — once. Oloid handles versioning.",
    vis: (
      <pre
        className="mono"
        style={{ margin: 0, fontSize: 11, color: "var(--muted)", lineHeight: 1.6, textAlign: "left", whiteSpace: "pre" }}
      >
        {`policy: aml.eu.high_value\nwhen: amount > 100_000\n  AND region in [SDN, IRN]\nthen: escalate\n  reason: "Sanctions exposure"`}
      </pre>
    ),
  },
  {
    n: "03",
    t: "Call the API",
    b: "Send any record, claim or case. Get back a structured decision, a confidence, and the reasoning trail.",
    vis: (
      <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textAlign: "center" }}>
        <div style={{ color: "var(--fg)" }}>POST /score</div>
        <div style={{ marginTop: 6 }}>↳ 247ms · escalate</div>
      </div>
    ),
  },
  {
    n: "04",
    t: "Act, and audit",
    b: "Render decisions in your existing apps. Every call is logged, replayable, and reviewable on demand.",
    vis: (
      <div style={{ display: "grid", gap: 6, width: "100%" }}>
        <Row label="2024-08-14  approve  ✓" tone="ok" />
        <Row label="2024-08-14  escalate  ⓘ" tone="warn" />
        <Row label="2024-08-13  approve  ✓" tone="ok" />
      </div>
    ),
  },
];

export default function How() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">How it works</span>
          <h2>
            Production-ready in <span className="em">four</span> steps.
          </h2>
          <p>Most teams ship their first Oloid-backed decision flow inside a two-week pilot.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step reveal" key={s.n} data-delay={i + 1}>
              <span className="n mono">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.b}</p>
              <div className="vis">{s.vis}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
