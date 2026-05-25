import { ReactNode } from "react";
import Row from "./row";

const steps: { n: string; t: string; b: string; vis: ReactNode }[] = [
  {
    n: "01",
    t: "Connect your LOS and document store",
    b: "A read-only connector to your loan-origination system. Documents flow in as borrowers submit them — no pre-processing, no reformatting, no workflow changes.",
    vis: (
      <div style={{ display: "grid", gap: 6, width: "100%" }}>
        <Row label="los.application.fields" tone="muted" />
        <Row label="docs.pay_stub_aug.pdf" tone="muted" />
        <Row label="docs.bank_stmt_q3.pdf" tone="muted" />
      </div>
    ),
  },
  {
    n: "02",
    t: "Submit the document package",
    b: "Pass the borrower's documents to the API as-is. Pay stubs, bank statements, tax returns — Oloid reads them so your team doesn't have to.",
    vis: (
      <pre
        className="mono"
        style={{ margin: 0, fontSize: 11, color: "var(--muted)", lineHeight: 1.6, textAlign: "left", whiteSpace: "pre" }}
      >
        {`POST /verify\ndocuments: [\n  "pay_stub_aug.pdf",\n  "bank_stmt_q3.pdf",\n  "1040_2023.pdf"\n]`}
      </pre>
    ),
  },
  {
    n: "03",
    t: "Receive the verified credit file",
    b: "Income computed. Discrepancies reconciled. Fraud signals raised. A clean, structured file — with every figure sourced — lands in your underwriting UI.",
    vis: (
      <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textAlign: "center" }}>
        <div style={{ color: "var(--fg)" }}>↳ 2.1s · verified</div>
        <div style={{ marginTop: 6 }}>income $84,200 · 1 discrepancy</div>
      </div>
    ),
  },
  {
    n: "04",
    t: "Underwriter decides. Outcome trains the next file.",
    b: "Your underwriter acts on a clean file, not a pile. How the loan performs — repayment, default, early exit — comes back to train the model on your portfolio. Every file Oloid processes makes the next one sharper in a way no competitor can replicate.",
    vis: (
      <div style={{ display: "grid", gap: 6, width: "100%" }}>
        <Row label="2024-08-14  verified  ✓  approved" tone="ok" />
        <Row label="2024-08-14  verified  ⓘ  1 discrepancy" tone="warn" />
        <Row label="2024-08-13  verified  ✓  approved" tone="ok" />
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
          <p>Most lending teams have their first document flow verified by Oloid within a two-week pilot.</p>
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
