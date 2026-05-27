"use client";

import {Arrow, Check} from "./icons";
import HeroVisual from "./hero-visual";
import {useTweaks} from "./tweaks/tweaks-context";
import CalButton from "./cal-button";

export default function Hero() {
    const {t} = useTweaks();

    return (
        <section className="hero">
            <div className="hero-grid-bg" aria-hidden="true"/>
            <div className="container">
                <div className="reveal">
                    <span className="eyebrow">
                        <span className="dot"/>
                        <span className="mono">Document intelligence · Outcome-trained · Audit-ready</span>
                    </span>
                </div>
                <h1 className="reveal" data-delay="1">
                    {
                    t.headline.split(/(\bthat\b)/i).map((part, i) => /^that$/i.test(part) ? (
                        <span key={i}
                            className="em">
                            {part} </span>
                    ) : (
                        <span key={i}>
                            {part}</span>
                    ))
                } </h1>
                <p className="sub reveal" data-delay="2">
                    Vecminds plugs into your existing loan-origination system and turns borrower documents into a verified credit file in minutes — income calculated, discrepancies resolved, and fraud risks flagged. Every loan processed makes the system smarter, creating a compounding advantage competitors can’t copy.
                </p>
                <div className="hero-cta reveal" data-delay="2">
                    <CalButton className="btn primary lg">
                        Book a demo
                        <Arrow className="arrow"/>
                    </CalButton>
                    <a href="#platform" className="btn outline lg">
                        See the platform
                    </a>
                </div>
                <div className="hero-meta reveal" data-delay="3">
                    <span>
                        <span className="check">
                            <Check style={
                                {
                                    verticalAlign: "-2px"
                                }
                            }/>
                        </span>
                        {" "}
                        Sits on top of your existing LOS
                    </span>
                    <span>
                        <span className="check">
                            <Check style={
                                {
                                    verticalAlign: "-2px"
                                }
                            }/>
                        </span>
                        {" "}
                        We prepare the file — you make the decision
                    </span>
                    <span>
                        <span className="check">
                            <Check style={
                                {
                                    verticalAlign: "-2px"
                                }
                            }/>
                        </span>
                        {" "}
                        Every step explainable &amp; auditable
                    </span>
                </div>
                <HeroVisual/>
            </div>
        </section>
    );
}
