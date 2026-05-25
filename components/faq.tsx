"use client";

import { useState } from "react";
import { Plus } from "./icons";

const items = [
  {
    q: "Do you make the lending decision?",
    a: "No. Oloid prepares the verified credit file — income computed, discrepancies surfaced, fraud signals flagged. The lending decision stays entirely with your underwriter. We augment the human; we don't replace them.",
  },
  {
    q: "What document types can you process?",
    a: "Pay stubs, W-2s, 1040s, bank statements (PDF or export), business financial statements, profit-and-loss reports, rent rolls, and most other borrower documents. If a document type is new to us, it typically takes one to two weeks to add structured extraction for it.",
  },
  {
    q: "How does the outcome flywheel actually work?",
    a: "Oloid observes how each file it processes performs over time — whether the borrower repays, where early-payment-default clusters, which document signals predicted fraud. That signal is fed back into the extraction and flagging models. Every loan the system touches makes the next document review sharper. No competitor using an off-the-shelf model has access to your outcome data.",
  },
  {
    q: "How do you detect document fraud?",
    a: "We look for document-level signals: metadata inconsistencies, font and formatting anomalies, figures that are internally inconsistent, and patterns learned from files that went into default. Fraud signals are surfaced as specific observations — not just a score — so your underwriter can assess them.",
  },
  {
    q: "How do we integrate with our existing LOS?",
    a: "A read-only connector to your LOS and document store. We support most major platforms out of the box; our SDK handles the rest. Most teams are ingesting live documents within a week of starting a pilot, without touching their existing workflow.",
  },
  {
    q: "How is borrower data protected?",
    a: "Oloid can be deployed on-premise, in your VPC, or in a region-locked private cloud. Borrower documents never leave your environment. We are SOC 2 Type II, ISO 27001 and GDPR compliant, and publish a DPA on request.",
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
