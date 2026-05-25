export default function HeroVisual() {
  return (
    <div className="hero-visual reveal" data-delay="3">
      <div className="hv-chrome">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <div className="path mono">oloid.intelligence / pipeline</div>
        <div className="badge mono">
          <span className="pulse" />
          live inference
        </div>
      </div>
      <div className="hv-stack">
        <div className="hv-layer legacy">
          <div>
            <div className="hv-l-title">Your existing systems</div>
            <div className="hv-l-sub">Core banking · CRM · policy admin · case files</div>
          </div>
          <div className="hv-chips">
            <span className="chip">SQL</span>
            <span className="chip">SAP</span>
            <span className="chip">CSV</span>
            <span className="chip">REST</span>
          </div>
        </div>
        <div className="hv-arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>
        <div className="hv-layer platform">
          <div>
            <div className="hv-l-title">Oloid Intelligence Layer</div>
            <div className="hv-l-sub">Reasoning · scoring · explanation · audit</div>
          </div>
          <div className="hv-chips">
            <span className="chip">/score</span>
            <span className="chip">/explain</span>
            <span className="chip">/flag</span>
          </div>
        </div>
        <div className="hv-arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>
        <div className="hv-layer">
          <div>
            <div className="hv-l-title">Decisions, in context</div>
            <div className="hv-l-sub">Approve · escalate · investigate — with the why</div>
          </div>
          <div className="hv-chips">
            <span className="chip">↗ analysts</span>
            <span className="chip">↗ apps</span>
            <span className="chip">↗ humans</span>
          </div>
        </div>
        <div className="hv-note" style={{ top: 86, right: -8, transform: "translateX(100%)" }}>
          <span className="ln" /> drop-in
        </div>
        <div className="hv-note" style={{ top: "50%", right: -8, transform: "translate(100%, -50%)" }}>
          <span className="ln" /> stateless API
        </div>
        <div className="hv-note" style={{ bottom: 86, right: -8, transform: "translateX(100%)" }}>
          <span className="ln" /> with reasoning
        </div>
      </div>
    </div>
  );
}
