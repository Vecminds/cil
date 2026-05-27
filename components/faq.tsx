"use client";

import { useState } from "react";
import { Plus } from "./icons";

const items = [
  {
    q: "Do you make the lending decision?",
    a: "No. Vecminds prepares the verified credit file — income computed, discrepancies surfaced, fraud signals flagged. The lending decision stays entirely with your underwriter. We make the human's decision faster and better; we don't replace it.",
  },
  {
    q: "How does Vecminds improve over time?",
    a: "Every file Vecminds processes eventually gets tagged with a real repayment outcome — whether the borrower repaid, where early defaults clustered, which document signals predicted fraud. That outcome data trains the models on your specific borrower population. What predicts default in your portfolio is a signal no off-the-shelf model has ever seen. The longer Vecminds runs, the wider that gap grows.",
  },
  {
    q: "Why can't we use an off-the-shelf document AI?",
    a: "Off-the-shelf models can extract text from documents. They can't tell you which income patterns in your specific borrower population actually predict repayment — because they have never seen your loan outcomes. Vecminds starts with strong general extraction and gets sharper as it observes how the files it processes perform. That outcome-trained layer is not something you can buy; it accumulates as you use the system.",
  },
  {
    q: "Why can't a big AI company replicate this?",
    a: "A better model alone doesn't copy what Vecminds builds over time. The moat is four things: the workflow your credit team works inside every day (switching means retraining staff and re-validating with auditors); the outcome data flywheel trained on your portfolio (no one else has it); the regulatory audit history that strengthens with each decision; and distribution through the LOS platforms lenders already run. A new entrant — including a large one — starts all four clocks from zero.",
  },
  {
    q: "How do we integrate with our existing LOS?",
    a: "A read-only connector to your LOS and document store — your existing workflow doesn't change. We support most major platforms out of the box; our SDK handles the rest. Most teams are ingesting live documents within a week of starting a pilot.",
  },
  {
    q: "How is borrower data protected?",
    a: "Vecminds can be deployed on-premise, in your VPC, or in a region-locked private cloud. Borrower documents never leave your environment. We are SOC 2 Type II, ISO 27001 and GDPR compliant, and publish a DPA on request.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">FAQ</span>
          <h2>
            Questions we hear in <span className="em">every</span> first call.
          </h2>
        </div>
        <div className="faq-list reveal">
          {items.map((it, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{it.q}</span>
                <span className="ic">
                  <Plus />
                </span>
              </button>
              <div className="faq-a">
                <p>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
