export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="nav-logo">
              <span className="mark" aria-hidden="true" />
              Oloid Intelligence
            </div>
            <p>The intelligence layer for regulated industries. Read your systems. Reason. Decide. Audit.</p>
          </div>
          <div className="foot-col">
            <h4>Platform</h4>
            <a href="#">Overview</a>
            <a href="#">Connectors</a>
            <a href="#">Policy DSL</a>
            <a href="#">Decision API</a>
            <a href="#">Audit log</a>
          </div>
          <div className="foot-col">
            <h4>Industries</h4>
            <a href="#">Credit &amp; financing</a>
            <a href="#">AML in banking</a>
            <a href="#">Insurance</a>
            <a href="#">Legal &amp; compliance</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Customers</a>
            <a href="#">Security</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Oloid Intelligence, Inc.</span>
          <span>SOC 2 Type II · ISO 27001 · GDPR</span>
        </div>
      </div>
    </footer>
  );
}
