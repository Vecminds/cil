"use client";

import { Arrow, Check } from "./icons";
import HeroVisual from "./hero-visual";
import { useTweaks } from "./tweaks/tweaks-context";

export default function Hero() {
  const { t } = useTweaks();

  return (
    <section className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">
            <span className="dot" />
            <span className="mono">v2 — now with reasoning traces</span>
          </span>
        </div>
        <h1 className="reveal" data-delay="1">
          {t.headline.split(/(\bthat\b)/i).map((part, i) =>
            /^that$/i.test(part) ? (
              <span key={i} className="em">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h1>
        <p className="sub reveal" data-delay="2">
          Oloid Intelligence sits on top of your legacy stack — not in place of it — and gives every record,
          claim or case a fast, explainable decision. One API. Built for credit, compliance, AML and insurance
          teams who move at the speed of regulation.
        </p>
        <div className="hero-cta reveal" data-delay="2">
          <a href="#cta" className="btn primary lg">
            Book a demo <Arrow className="arrow" />
          </a>
          <a href="#platform" className="btn outline lg">
            See the platform
          </a>
        </div>
        <div className="hero-meta reveal" data-delay="3">
          <span>
            <span className="check">
              <Check style={{ verticalAlign: "-2px" }} />
            </span>{" "}
            SOC 2 Type II
          </span>
          <span>
            <span className="check">
              <Check style={{ verticalAlign: "-2px" }} />
            </span>{" "}
            Deployed on-prem or in your VPC
          </span>
          <span>
            <span className="check">
              <Check style={{ verticalAlign: "-2px" }} />
            </span>{" "}
            Every decision is explainable
          </span>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
