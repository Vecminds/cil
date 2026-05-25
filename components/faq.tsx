"use client";

import { useState } from "react";
import { Plus } from "./icons";

const items = [
  {
    q: "Do we have to replace our existing systems?",
    a: "No. Oloid is explicitly designed as an intelligence layer on top of what you already run. We connect to your core banking, policy admin, case management or document stores read-only, and return structured decisions your existing UI or workflow can consume.",
  },
  {
    q: "How do you handle data residency and privacy?",
    a: "Oloid can be deployed on-premise, in your VPC, or in a region-locked private cloud. Customer data never leaves your environment. We're SOC 2 Type II, ISO 27001 and GDPR compliant, and we publish a DPA on request.",
  },
  {
    q: 'What does "explainable" actually mean here?',
    a: "Every decision Oloid returns carries the policy rules it evaluated, the specific data inputs it used, a confidence score, and a natural-language summary. Auditors and regulators can replay any historical call against the policy version in force at that time.",
  },
  {
    q: "How fast is a typical integration?",
    a: "Most pilots are scoped to two weeks: one to connect data sources and encode a first policy set, one to validate decisions against your historical ground truth. Production rollouts typically follow within 30–60 days.",
  },
  {
    q: "Is this an LLM wrapper?",
    a: "No. Oloid is a hybrid pipeline — deterministic policy evaluation, statistical models, and large-language reasoning each used for what they're good at. Output reasoning always cites the rule that triggered it, never the prompt that produced it.",
  },
  {
    q: "What does pricing look like?",
    a: "Annual platform license plus per-decision metering, with volume tiers. We share commercial details after a 30-minute discovery call so we can scope the right deployment shape for your team.",
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
