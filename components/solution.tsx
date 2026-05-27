import { Check } from "./icons";

export default function Solution() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker mono">The platform</span>
          <h2>
            One integration. A verified file in <span className="em">minutes</span>.
          </h2>
          <p>
            Connect Vecminds to your LOS and document store. Submit the borrower&apos;s package as-is. Receive a
            clean, structured credit file — income computed, discrepancies reconciled, fraud signals flagged —
            ready for your underwriter to act on.
          </p>
        </div>

        <div className="solution">
          <div className="reveal">
            <h2 style={{ marginBottom: 14 }}>We prepare the file. You make the call.</h2>
            <p>
              Vecminds sits on top of your existing LOS — not in place of it. We ingest documents as they arrive,
              do the reading and reconciliation, and hand the underwriter a verified file with every figure
              sourced and every discrepancy surfaced. The lending decision stays with your team. It starts as
              a time-saver. Over time, it becomes an institutional advantage.
            </p>
            <ul className="solution-bullets">
              <li>
                <span className="ic">
                  <Check />
                </span>
                <span>
                  <strong>Drops into your LOS.</strong>{" "}
                  <span className="label">Read-only connector. No workflow changes. Live in days.</span>
                </span>
              </li>
              <li>
                <span className="ic">
                  <Check />
                </span>
                <span>
                  <strong>We augment, not replace.</strong>{" "}
                  <span className="label">
                    The lending decision stays with your underwriter. We make it faster and better.
                  </span>
                </span>
              </li>
              <li>
                <span className="ic">
                  <Check />
                </span>
                <span>
                  <strong>Gets sharper over time.</strong>{" "}
                  <span className="label">Every loan outcome trains the model on your portfolio — not generic data.</span>
                </span>
              </li>
              <li>
                <span className="ic">
                  <Check />
                </span>
                <span>
                  <strong>Regulator-ready on day one.</strong>{" "}
                  <span className="label">Full audit log. Every figure sourced. Every step replayable.</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="api-card reveal" data-delay="2">
            <div className="head">
              <span className="method">POST</span>
              <span>/v1/intelligence/verify</span>
              <span style={{ marginLeft: "auto" }}>document.credit_file</span>
            </div>
            <pre>
              {`{\n  `}
              <span className="k">&quot;subject&quot;</span>
              {`: { `}
              <span className="k">&quot;id&quot;</span>
              {`: `}
              <span className="s">&quot;app_7C3B1&quot;</span>
              {` },\n  `}
              <span className="k">&quot;documents&quot;</span>
              {`: [`}
              <span className="s">&quot;pay_stub_aug.pdf&quot;</span>
              {`,\n             `}
              <span className="s">&quot;bank_stmt_q3.pdf&quot;</span>
              {`,\n             `}
              <span className="s">&quot;1040_2023.pdf&quot;</span>
              {`],\n  `}
              <span className="k">&quot;policy&quot;</span>
              {`: `}
              <span className="s">&quot;income.verify-2024&quot;</span>
              {`\n}`}
            </pre>
            <div className="foot">
              <span>
                ↳ <span style={{ color: "var(--fg)" }}>2.1s</span>
              </span>
              <span className="verdict">
                <span className="pill">verified</span>
                <span>· $84,200 income · 1 discrepancy</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
