import { ReactNode } from "react";
import { Plug, Workflow, Sparkles, Bolt, Shield, Eye } from "./icons";

const feats: { ic: ReactNode; t: string; b: string; tag: string }[] = [
  {
    ic: <Plug />,
    t: "Document ingestion, any format",
    b: "PDFs, scanned images, bank exports, e-statements. Any document a borrower submits is ingested and structured automatically — no pre-processing, no reformatting, no new tools for your team.",
    tag: "INGESTION",
  },
  {
    ic: <Workflow />,
    t: "Income & employment verification",
    b: "Gross, net and variable income reconciled across pay stubs, bank deposit history and tax returns. One verified figure, with every source cited and every inconsistency surfaced.",
    tag: "VERIFICATION",
  },
  {
    ic: <Sparkles />,
    t: "Discrepancy & fraud detection",
    b: "Inconsistencies called out with the exact figures that don't align — not just a flag. Plus document-level fraud signals learned from real repayment outcomes across your portfolio, not a static rule list.",
    tag: "RISK",
  },
  {
    ic: <Bolt />,
    t: "The outcome flywheel",
    b: "Every loan Vecminds touches eventually gets tagged with a real repayment outcome. That signal trains the model on your borrower population — what predicts default in your portfolio is something no off-the-shelf model has ever seen, and no competitor can copy.",
    tag: "DATA MOAT",
  },
  {
    ic: <Shield />,
    t: "Embedded in your workflow",
    b: "Vecminds lives inside the LOS your credit team already runs — not beside it. There is no new tool to learn, no parallel system to maintain. It becomes part of how your team works, not something alongside it.",
    tag: "WORKFLOW",
  },
  {
    ic: <Eye />,
    t: "Audit history that compounds",
    b: "Every decision builds your regulatory trail. The longer Vecminds runs in your stack, the stronger your examiner story becomes. A new entrant — or an off-the-shelf model — starts that clock from zero.",
    tag: "REGULATORY TRUST",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">Capabilities</span>
          <h2>
            Starts as a time-saver. Becomes an <span className="em">institutional</span> advantage.
          </h2>
          <p>
            The intelligence layer does the reading, reconciling and flagging — and gets sharper with every
            loan your portfolio closes, in a way that belongs to you and no one else.
          </p>
        </div>
        <div className="feat-grid">
          {feats.map((f, i) => (
            <div className="feat-card reveal" key={f.t} data-delay={(i % 3) + 1}>
              <div className="ic">{f.ic}</div>
              <h3>{f.t}</h3>
              <p>{f.b}</p>
              <span className="tag">{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
