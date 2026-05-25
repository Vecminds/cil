import { Check } from "./icons";

export default function Solution() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">The platform</span>
          <h2>
            One API. Every decision, <span className="em">explained</span>.
          </h2>
          <p>
            Point Oloid at the systems you already have. Get back a score, a reason, and a paper trail — in
            the time it takes your form to submit.
          </p>
        </div>

        <div className="solution">
          <div className="reveal">
            <h2 style={{ marginBottom: 14 }}>Drop in. Don&apos;t rip out.</h2>
            <p>
              Oloid Intelligence is built to live alongside your core systems. We read from your existing data
              sources, run our reasoning pipeline, and return a structured decision your team can act on — or
              your apps can render directly.
            </p>
            <ul className="solution-bullets">
              <li>
                <span className="ic">
                  <Check />
                </span>
                <span>
                  <strong>Three-line integration.</strong>{" "}
                  <span className="label">Stateless REST + SDKs for Python, TS, Java, .NET.</span>
                </span>
              </li>
              <li>
                <span className="ic">
                  <Check />
                </span>
                <span>
                  <strong>Reasoning attached.</strong>{" "}
                  <span className="label">
                    Every output ships with the rules, sources and confidence behind it.
                  </span>
                </span>
              </li>
              <li>
                <span className="ic">
                  <Check />
                </span>
                <span>
                  <strong>Your perimeter.</strong>{" "}
                  <span className="label">VPC, on-prem, or private cloud. Your data never leaves.</span>
                </span>
              </li>
              <li>
                <span className="ic">
                  <Check />
                </span>
                <span>
                  <strong>Built to audit.</strong>{" "}
                  <span className="label">Immutable decision log. SOC 2, ISO 27001, GDPR.</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="api-card reveal" data-delay="2">
            <div className="head">
              <span className="method">POST</span>
              <span>/v2/intelligence/score</span>
              <span style={{ marginLeft: "auto" }}>aml.review</span>
            </div>
            <pre>
              {`{\n  `}
              <span className="k">&quot;subject&quot;</span>
              {`: { `}
              <span className="k">&quot;id&quot;</span>
              {`: `}
              <span className="s">&quot;acct_9F4A2&quot;</span>
              {`, `}
              <span className="k">&quot;type&quot;</span>
              {`: `}
              <span className="s">&quot;transaction&quot;</span>
              {` },\n  `}
              <span className="k">&quot;context&quot;</span>
              {`: { `}
              <span className="k">&quot;amount&quot;</span>
              {`: `}
              <span className="n">184500</span>
              {`, `}
              <span className="k">&quot;region&quot;</span>
              {`: `}
              <span className="s">&quot;EU&quot;</span>
              {` },\n  `}
              <span className="k">&quot;policies&quot;</span>
              {`: [`}
              <span className="s">&quot;aml-eu-2024&quot;</span>
              {`, `}
              <span className="k">&quot;explain&quot;</span>
              {`: `}
              <span className="n">true</span>
              {`]\n}`}
            </pre>
            <div className="foot">
              <span>
                ↳ <span style={{ color: "var(--fg)" }}>247ms</span>
              </span>
              <span className="verdict">
                <span className="pill">escalate</span>
                <span>· 3 reasons attached</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
