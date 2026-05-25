import { ReactNode } from "react";
import { Plug, Workflow, Sparkles, Bolt, Shield, Eye } from "./icons";

const feats: { ic: ReactNode; t: string; b: string; tag: string }[] = [
  {
    ic: <Plug />,
    t: "Connectors, not migrations",
    b: "100+ ready connectors for core banking, policy admin, case management and document stores. Bring your data; leave it where it is.",
    tag: "DATA / OUT-OF-THE-BOX",
  },
  {
    ic: <Workflow />,
    t: "Policy as code",
    b: "Express your risk rules, regulatory checks and underwriting criteria in plain YAML. Version them. Test them. Roll back.",
    tag: "GOVERNANCE",
  },
  {
    ic: <Sparkles />,
    t: "Reasoning, not just scores",
    b: "Every decision returns the evidence, the rules it tripped, and a natural-language summary an analyst can paste into a memo.",
    tag: "EXPLAINABILITY",
  },
  {
    ic: <Bolt />,
    t: "Sub-second at scale",
    b: "Median latency under 300ms at p95. Streamed responses for long-running case reviews. Designed for production traffic.",
    tag: "PERFORMANCE",
  },
  {
    ic: <Shield />,
    t: "Sovereign by default",
    b: "On-prem, VPC or private cloud. SOC 2 Type II, ISO 27001, GDPR. No customer data leaves your environment.",
    tag: "SECURITY",
  },
  {
    ic: <Eye />,
    t: "Decision observability",
    b: "A timeline of every call, every input, every reason. Replay any historical decision against today's policies.",
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
            Built for teams that <span className="em">own</span> the decision.
          </h2>
          <p>
            The intelligence layer ships with the primitives risk, compliance and underwriting teams have asked
            for, for the better part of a decade.
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
