export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="nav-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Vecminds_Logo-icon--dark.png" className="logo-mark" alt="" aria-hidden="true" />
              Vecminds Intelligence
            </div>
            <p>The document intelligence layer for lenders. Verified files in minutes. Every step auditable.</p>
          </div>
          <div className="foot-col">
            <h4>Platform</h4>
            <a href="#">Overview</a>
            <a href="#">Document ingestion</a>
            <a href="#">Income verification</a>
            <a href="#">Fraud signals</a>
            <a href="#">Audit log</a>
          </div>
          <div className="foot-col">
            <h4>Credit products</h4>
            <a href="#">Consumer lending</a>
            <a href="#">Business credit</a>
            <a href="#">Mortgage &amp; real estate</a>
            <a href="#">BNPL &amp; embedded finance</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Security</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Credit Intelligence by <a href="https://www.vecminds.com">Vecminds Technologies Pvt. Ltd.</a></span>
          <span>SOC 2 Type II · ISO 27001 · GDPR</span>
        </div>
      </div>
    </footer>
  );
}
