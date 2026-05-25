import { ReactNode } from "react";
import { Coin, Scale, Bank, Umbrella } from "./icons";

const items: { ic: ReactNode; t: string; b: string; stat: string; lbl: string }[] = [
  {
    ic: <Coin />,
    t: "Credit & Financing",
    b: "Underwriting decisions with reasoning attached. Faster credit memos, fewer second looks.",
    stat: "9.4×",
    lbl: "faster decisioning",
  },
  {
    ic: <Scale />,
    t: "Legal & Compliance",
    b: "Contract review, obligation tracking, regulatory mapping — all explainable to the GC.",
    stat: "62%",
    lbl: "review time saved",
  },
  {
    ic: <Bank />,
    t: "AML in Banking",
    b: "Real-time transaction scoring with sanctions, PEP and behavioral signals fused into one trace.",
    stat: "<300ms",
    lbl: "median latency",
  },
  {
    ic: <Umbrella />,
    t: "Insurance Policy",
    b: "Claims triage, fraud signal detection, policy fit — with the rationale a regulator would accept.",
    stat: "3.1×",
    lbl: "STP rate lift",
  },
];

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">Industries</span>
          <h2>
            Wherever the decision is <span className="em">regulated</span>, repeated, and worth getting right.
          </h2>
          <p>
            Oloid is in production across financial services, insurance and legal — anywhere a human has to
            sign off, with their name attached.
          </p>
        </div>
        <div className="industries">
          {items.map((it, i) => (
            <div className="industry reveal" key={it.t} data-delay={(i % 4) + 1}>
              <div className="ic">{it.ic}</div>
              <h3>{it.t}</h3>
              <p>{it.b}</p>
              <div className="stat">
                <span className="big">{it.stat}</span>
                <span className="lbl">{it.lbl}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
