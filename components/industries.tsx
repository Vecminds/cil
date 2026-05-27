import { ReactNode } from "react";
import { Coin, Scale, Bank, Umbrella } from "./icons";

const items: { ic: ReactNode; t: string; b: string; stat: string; lbl: string }[] = [
  {
    ic: <Coin />,
    t: "Consumer Lending",
    b: "Personal, auto and student loan origination. Verified income and fraud signals from every document package — so credit officers review files, not piles.",
    stat: "8.3×",
    lbl: "faster file prep",
  },
  {
    ic: <Scale />,
    t: "Business Credit",
    b: "SMB term loans, lines of credit and commercial underwriting. Financial statements, bank history and tax returns reconciled into one verified credit memo.",
    stat: "74%",
    lbl: "analyst time saved",
  },
  {
    ic: <Bank />,
    t: "Mortgage & Real Estate",
    b: "Purchase, refi and HELOC origination. Every income source verified, every discrepancy surfaced, every step auditable — before the file reaches the underwriter.",
    stat: "<3 min",
    lbl: "verified file",
  },
  {
    ic: <Umbrella />,
    t: "BNPL & Embedded Finance",
    b: "Point-of-sale and embedded credit at checkout speed. Income and identity verification that learns from outcomes — approval rates improve as the flywheel turns.",
    stat: "2.9×",
    lbl: "approval-rate lift",
  },
];

export default function Industries() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">Credit products</span>
          <h2>
            Every lending vertical, <span className="em">one</span> intelligence layer.
          </h2>
          <p>
            Vecminds is in production across consumer, commercial and embedded lending — wherever a credit officer
            is still spending days on a document pile that a machine should be reading.
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
