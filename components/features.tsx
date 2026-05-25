import { ReactNode } from "react";
import { Plug, Workflow, Sparkles, Bolt, Shield, Eye } from "./icons";

const feats: { ic: ReactNode; t: string; b: string; tag: string }[] = [
  {
    ic: <Plug />,
    t: "Document ingestion, any format",
    b: "PDFs, scanned images, bank exports, e-statements. Any document a borrower submits is ingested and structured automatically — no pre-processing required.",
    tag: "INGESTION",
  },
  {
    ic: <Workflow />,
    t: "Income computation",
    b: "Gross, net and variable income reconciled across pay stubs, bank deposit history and tax returns. One verified figure, with every source cited.",
    tag: "VERIFICATION",
  },
  {
    ic: <Sparkles />,
    t: "Discrepancy detection",
    b: "Inconsistencies between documents surfaced with the exact figures that don't align — not just a flag, but the specific pay stub line versus the bank deposit that disagrees.",
    tag: "ACCURACY",
  },
  {
    ic: <Bolt />,
    t: "Fraud signal detection",
    b: "Document-level patterns that correlate with default and fraud — learned from outcomes across every file the system has processed, not from a static rule list.",
    tag: "RISK",
  },
  {
    ic: <Shield />,
    t: "The outcome flywheel",
    b: "Oloid observes how each file it processes actually performs over time. Every loan makes the next document review sharper in a way no off-the-shelf model — or competitor — can replicate.",
    tag: "MOAT",
  },
  {
    ic: <Eye />,
    t: "Full audit trail",
    b: "A complete, replayable record of every document reviewed, every figure computed, every signal raised. When the examiner asks, every step is there.",
    tag: "AUDIT",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">Capabilities</span>
          <h2>
            Built for the work that happens <span className="em">before</span> the decision.
          </h2>
          <p>
            The intelligence layer does the reading, reconciling and flagging — so your underwriters spend
            their time on judgment, not on chasing figures across a document pile.
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
