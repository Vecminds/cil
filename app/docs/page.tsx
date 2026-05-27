"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type NavItem = { id: string; label: string; children?: { id: string; label: string }[] };

const NAV: NavItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "architecture", label: "Architecture" },
  { id: "authentication", label: "Authentication" },
  { id: "quickstart", label: "Quickstart" },
  {
    id: "concepts", label: "Core Concepts",
    children: [
      { id: "concept-documents", label: "Documents" },
      { id: "concept-credit-files", label: "Credit Files" },
      { id: "concept-policies", label: "Policies" },
      { id: "concept-outcomes", label: "Outcomes" },
    ],
  },
  {
    id: "api", label: "API Reference",
    children: [
      { id: "api-verify", label: "POST /verify" },
      { id: "api-status", label: "GET /verify/{id}" },
      { id: "api-tag", label: "POST /outcomes/tag" },
      { id: "api-audit", label: "GET /audit/{id}" },
    ],
  },
  { id: "connectors", label: "LOS Connectors" },
  { id: "webhooks", label: "Webhooks" },
  { id: "policy-dsl", label: "Policy DSL" },
  { id: "sdks", label: "SDKs" },
  { id: "security", label: "Security & Compliance" },
  { id: "support", label: "Support" },
];

function IC({ children }: { children: React.ReactNode }) {
  return <code className="docs-ic">{children}</code>;
}

function Pre({ lang, children }: { lang?: string; children: string }) {
  return (
    <div className="docs-pre-wrap">
      {lang && <div className="docs-pre-lang">{lang}</div>}
      <pre className="docs-pre">{children}</pre>
    </div>
  );
}

function Params({ rows }: { rows: { name: string; type: string; req: boolean; desc: string }[] }) {
  return (
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead>
          <tr>
            <th>Parameter</th><th>Type</th><th>Req</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>{r.name}</td>
              <td>{r.type}</td>
              <td><span className={r.req ? "docs-badge-req" : "docs-badge-opt"}>{r.req ? "required" : "optional"}</span></td>
              <td>{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ type, label, children }: { type: "info" | "warn" | "tip"; label: string; children: React.ReactNode }) {
  return (
    <div className={`docs-callout ${type}`}>
      <span className="docs-callout-label">{label}</span>
      <span className="docs-callout-body">{children}</span>
    </div>
  );
}

function Endpoint({ method, path, desc }: { method: "GET" | "POST"; path: string; desc: string }) {
  return (
    <div className="docs-endpoint-header">
      <div className="docs-endpoint-head">
        <span className={`docs-http-badge ${method.toLowerCase()}`}>{method}</span>
        <span className="docs-endpoint-path">{path}</span>
      </div>
      <div className="docs-endpoint-desc">{desc}</div>
    </div>
  );
}

export default function DocsPage() {
  const [active, setActive] = useState("introduction");

  useEffect(() => {
    const els = document.querySelectorAll("[data-ds]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) { setActive(e.target.id); break; }
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="docs-root">
      {/* Top bar */}
      <header className="docs-topbar">
        <div className="docs-topbar-inner">
          <Link href="/" className="docs-brand">
            <span className="mark" aria-hidden="true" />
            Vecminds Intelligence
            <span className="docs-sep">/</span>
            <span className="docs-breadcrumb">Docs</span>
          </Link>
          <nav className="docs-topnav">
            <a href="#">API Explorer</a>
            <Link href="/#cta" className="btn primary" style={{ height: 34, fontSize: 13, padding: "0 14px" }}>Book a demo</Link>
          </nav>
        </div>
      </header>

      <div className="docs-layout">
        {/* Sidebar */}
        <aside className="docs-sidebar">
          <nav>
            {NAV.map((item) => (
              <div key={item.id} className="docs-nav-group">
                <button className={`docs-nav-item${active === item.id ? " active" : ""}`} onClick={() => go(item.id)}>
                  {item.label}
                </button>
                {item.children?.map((child) => (
                  <button key={child.id} className={`docs-nav-child${active === child.id ? " active" : ""}`} onClick={() => go(child.id)}>
                    {child.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="docs-content">

          {/* ── INTRODUCTION ── */}
          <section id="introduction" data-ds>
            <h1 className="docs-h1">Vecminds Intelligence — Integration Guide</h1>
            <p className="docs-section-intro">
              This guide covers everything needed to integrate Vecminds into your existing loan-origination system.
              Vecminds is a document intelligence layer that sits on top of your LOS and turns a borrower&apos;s document
              package — pay stubs, bank statements, tax returns, financial statements — into a clean, structured,
              verified credit file in minutes. Income computed. Discrepancies reconciled. Fraud signals flagged.
              Your underwriter decides.
            </p>
            <p className="docs-p">
              <strong>Vecminds does not make the lending decision.</strong> It prepares the verified credit file and hands
              it to your underwriter. Every figure in the output is sourced to the document line that produced it.
              Every step is replayable for regulators and auditors.
            </p>
            <p className="docs-p">
              Every file Vecminds processes is eventually tagged with a real repayment outcome. That outcome data trains
              the model on your specific borrower population — creating a flywheel that sharpens fraud signal accuracy
              and income pattern recognition in a way no off-the-shelf model can replicate.
            </p>
            <div className="docs-cards-3">
              {[
                { label: "Base URL", value: "https://api.vecminds.ai/v1" },
                { label: "Auth", value: "Bearer API key" },
                { label: "Format", value: "JSON · multipart" },
              ].map((c) => (
                <div key={c.label} className="docs-card">
                  <div className="docs-card-label">{c.label}</div>
                  <div className="docs-card-value">{c.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── ARCHITECTURE ── */}
          <section id="architecture" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">Architecture</h1>
            <p className="docs-section-intro">
              Vecminds slots into the existing document flow as a read-only processing layer between your document
              store and your underwriting UI. Nothing in your LOS is modified.
            </p>
            <Pre lang="Architecture">{`  Your LOS / Document Store
          │
          │  read-only connector
          ▼
  ┌───────────────────────────────────────────┐
  │           Vecminds Intelligence              │
  │                                           │
  │  Document Parser  ──►  Income Engine      │
  │  PDF · scan · CSV      gross · net ·      │
  │                        multi-source       │
  │                             │             │
  │                             ▼             │
  │              Discrepancy Detector         │
  │              cross-doc reconciliation     │
  │                             │             │
  │                             ▼             │
  │              Fraud Signal Model           │
  │              outcome-trained on your      │
  │              portfolio                    │
  │                             │             │
  │                             ▼             │
  │              Audit Logger (immutable)     │
  └─────────────────────────────┬─────────────┘
                                │  structured JSON
                                ▼
                    Your Underwriting UI
                                │
                                │  outcome tag (on close / default)
                                ▼
                    Outcome Flywheel
                    (retrains on your portfolio —
                    proprietary signal)`}</Pre>
            <h2 className="docs-h2">Key principles</h2>
            <ul className="docs-ul">
              <li><strong>Read-only by default.</strong> Vecminds never writes to your LOS. Documents are read; the verified file is returned as a response.</li>
              <li><strong>Augment, not replace.</strong> The verified credit file goes to your underwriter. Vecminds does not approve or decline loans.</li>
              <li><strong>Explainable at every step.</strong> Every figure in the output is sourced to the specific document line that produced it.</li>
              <li><strong>Outcome-trained.</strong> As real repayment outcomes are tagged back, the model sharpens on your portfolio — not generic training data.</li>
              <li><strong>Your perimeter.</strong> In VPC and on-prem deployments, documents never leave your network.</li>
            </ul>
          </section>

          {/* ── AUTHENTICATION ── */}
          <section id="authentication" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">Authentication</h1>
            <p className="docs-section-intro">
              All API requests require a Bearer token in the <IC>Authorization</IC> header. Keys are scoped
              per deployment and never cross environments.
            </p>
            <h2 className="docs-h2">Key types</h2>
            <Params rows={[
              { name: "ok_test_...", type: "string", req: false, desc: "Test key — documents are parsed but the outcome flywheel is not updated and audit records are marked test. Use for development and staging." },
              { name: "ok_live_...", type: "string", req: false, desc: "Live key — full processing, flywheel training, and immutable audit logging enabled. For VPC deployments, add IP allowlisting in the dashboard." },
            ]} />
            <Pre lang="HTTP">{`POST /v1/intelligence/verify
Authorization: Bearer ok_live_xxxxxxxxxxxxxxxxxxxx
Content-Type: application/json`}</Pre>
            <Callout type="warn" label="Server-side only">
              The Vecminds SDK and API key must <strong>never</strong> be used in browser (client-side) code.
              A key in the browser is visible to every user in the network tab — anyone who finds it can
              submit unlimited jobs billed to your account or read your borrower audit trails. Always call
              Vecminds from your server (Node.js, Python, Java, .NET) and proxy the result to the browser.
              For Next.js, use an API Route or Server Action. See the Quickstart for a working example.
            </Callout>
            <h2 className="docs-h2">Key rotation</h2>
            <p className="docs-p">
              Keys can be rotated from the dashboard at any time. The previous key remains valid for a
              15-minute overlap window to allow in-flight requests to complete before it is revoked.
            </p>
          </section>

          {/* ── QUICKSTART ── */}
          <section id="quickstart" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">Quickstart</h1>
            <p className="docs-section-intro">
              Most teams are processing live documents within a week of starting a pilot. This section walks
              through submitting your first document package end-to-end.
            </p>
            <Callout type="warn" label="Server-side boundary">
              All code in this section runs on <strong>your server</strong> — a Next.js API Route, an Express
              handler, a Python service, etc. None of it belongs in a React component, browser bundle, or any
              code shipped to the client. The API key, document bytes, and verified credit file should never
              touch the browser directly. The browser calls <em>your</em> server; your server calls Vecminds.
            </Callout>

            <h2 className="docs-h2">Step 1 — Install the SDK</h2>
            <Pre lang="bash">{`# Node.js / TypeScript
npm install @vecminds/intelligence

# Python
pip install vecminds-intelligence

# Java (Maven)
# groupId: ai.vecminds  artifactId: intelligence-sdk  version: 2.4.0

# .NET
dotnet add package Vecminds.Intelligence`}</Pre>

            <h2 className="docs-h2">Step 2 — Initialize the client</h2>
            <Pre lang="TypeScript">{`import { VecmindsClient } from "@vecminds/intelligence";

const client = new VecmindsClient({
  apiKey: process.env.VECMINDS_API_KEY,         // ok_live_...
  // baseUrl: "https://vecminds.your-vpc.internal/v1",  // VPC / on-prem
});`}</Pre>

            <h2 className="docs-h2">Step 3 — Proxy through your server (Next.js example)</h2>
            <p className="docs-p">
              Your browser uploads documents to <strong>your own API route</strong>. That route forwards
              them to Vecminds server-to-server. The API key never leaves your server.
            </p>
            <Pre lang="TypeScript — app/api/verify/route.ts (server)">{`// This file runs on the server only. The VECMINDS_API_KEY env var
// is never bundled into the browser.
import { VecmindsClient } from "@vecminds/intelligence";
import { NextRequest, NextResponse } from "next/server";

const vecminds = new VecmindsClient({ apiKey: process.env.VECMINDS_API_KEY! });

export async function POST(req: NextRequest) {
  // 1. Authenticate the incoming request with your own session/auth
  const session = await getSession(req);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // 2. Parse the multipart form submitted by your origination UI
  const form = await req.formData();
  const applicationId = form.get("application_id") as string;
  const files = form.getAll("documents") as File[];

  // 3. Forward to Vecminds server-to-server (key stays on the server)
  const job = await vecminds.verify.create({
    subject:   { id: applicationId, type: "loan_application" },
    documents: await Promise.all(
      files.map(async (f) => ({ name: f.name, data: Buffer.from(await f.arrayBuffer()) }))
    ),
    policy: "income.verify-2024",
    notify: "https://your-los.internal/webhooks/vecminds",
  });

  // 4. Return only the job ID to the browser — no key, no raw docs
  return NextResponse.json({ jobId: job.id });
}`}</Pre>
            <Pre lang="TypeScript — Browser (React component)">{`// The browser never touches Vecminds directly.
// It uploads to YOUR route and receives only the job ID.
async function submitApplication(applicationId: string, files: File[]) {
  const form = new FormData();
  form.append("application_id", applicationId);
  files.forEach((f) => form.append("documents", f));

  const res = await fetch("/api/verify", { method: "POST", body: form });
  const { jobId } = await res.json();
  return jobId;  // poll /api/verify/[jobId] or wait for a push notification
}`}</Pre>

            <h2 className="docs-h2">Step 4 — Read the verified credit file</h2>
            <Pre lang="TypeScript">{`// Receive via webhook (recommended) or poll:
const result = await client.verify.get(job.id);

// Verified income
console.log(result.income.gross_annual);   // 84200
console.log(result.income.sources);
// [{ type: "employment", employer: "Meridian Corp",
//    gross_annual: 84200, confidence: 0.97,
//    verified_from: ["pay_stub_aug.pdf", "bank_stmt_q3.pdf"] }]

// Discrepancies between documents
console.log(result.discrepancies);
// [{ field: "monthly_income",
//    document_a: { file: "pay_stub_aug.pdf", value: 7017, line: "Gross Pay" },
//    document_b: { file: "bank_stmt_q3.pdf", value: 6100, line: "ACH deposit avg" },
//    delta_pct: 0.15, severity: "medium" }]

// Fraud signals (empty = clean)
console.log(result.fraud_signals);   // []
console.log(result.audit_id);        // "aud_3F8C1B"`}</Pre>

            <h2 className="docs-h2">Step 5 — Tag the outcome (feed the flywheel)</h2>
            <p className="docs-p">
              When the loan reaches a repayment outcome, tag it back to Vecminds. This is how the model learns
              which document patterns predict repayment in <em>your</em> portfolio. This call is triggered
              by a server-side event from your LOS — a loan close, a default flag, a charge-off — never
              from a browser session.
            </p>
            <Pre lang="TypeScript — server-side LOS event handler">{`// Called by your LOS webhook / internal event bus when a loan closes.
// This is server-only code — a browser session is never involved.
async function onLoanClosed(event: LoanClosedEvent) {
  const jobId = await db.getVecmindsJobId(event.applicationId);

  await vecminds.outcomes.tag({
    job_id:            jobId,
    outcome:           "repaid",   // repaid | default | early_payoff | charged_off
    months_to_outcome: event.monthsFromOrigination,
    loan_amount:       event.loanAmount,
    product_type:      "personal",
  });
}`}</Pre>
            <Callout type="tip" label="Tip">
              Teams that tag consistently see fraud signal accuracy improve 2–4× within the first 500 tagged
              files. The model learns what matters in your portfolio — something it cannot learn from generic training data.
            </Callout>
          </section>

          {/* ── CORE CONCEPTS ── */}
          <section id="concepts" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">Core Concepts</h1>
            <p className="docs-section-intro">
              These four concepts cover the full lifecycle of a document package through Vecminds.
            </p>
          </section>

          <section id="concept-documents" data-ds style={{ marginTop: 32 }}>
            <h2 className="docs-h2">Documents</h2>
            <p className="docs-p">A document is any borrower-submitted file. Accepted types:</p>
            <Params rows={[
              { name: "Pay stubs", type: "PDF, image", req: false, desc: "Current and prior month. Used for employment income, pay frequency, and employer verification." },
              { name: "Bank statements", type: "PDF, CSV, OFX", req: false, desc: "3–12 months. Used for deposit pattern, recurring income, and cash reserve verification." },
              { name: "Tax returns (1040)", type: "PDF", req: false, desc: "1–2 years. Used for gross income, self-employment income, and rental income." },
              { name: "W-2 / 1099", type: "PDF", req: false, desc: "Prior year. Cross-referenced against pay stubs and self-reported income figures." },
              { name: "Business financials", type: "PDF", req: false, desc: "P&L, balance sheet. Used for business credit and self-employed borrower verification." },
              { name: "Rent rolls", type: "PDF, XLSX", req: false, desc: "Investment property and commercial real estate income verification." },
            ]} />
            <p className="docs-p">
              Maximum file size: 50 MB per document, 200 MB per job. Documents are encrypted at rest (AES-256)
              and deleted from the processing environment within 24 hours of job completion (configurable via policy).
            </p>
          </section>

          <section id="concept-credit-files" data-ds style={{ marginTop: 32 }}>
            <h2 className="docs-h2">Credit Files</h2>
            <p className="docs-p">The structured output of a completed verification job:</p>
            <Pre lang="JSON">{`{
  "job_id":              "job_9A4D2E",
  "status":              "completed",
  "processing_time_ms":  2100,
  "income": {
    "gross_annual":  84200,
    "net_monthly":   5616,
    "confidence":    0.97,
    "sources": [{
      "type":         "employment",
      "employer":     "Meridian Corp",
      "gross_annual": 84200,
      "pay_frequency":"biweekly",
      "verified_from":["pay_stub_aug.pdf", "bank_stmt_q3.pdf"],
      "confidence":   0.97
    }]
  },
  "discrepancies": [{
    "field":      "monthly_income",
    "document_a": { "file": "pay_stub_aug.pdf", "value": 7017, "line": "Gross Pay" },
    "document_b": { "file": "bank_stmt_q3.pdf", "value": 6100, "line": "ACH deposit avg" },
    "delta_pct":  0.15,
    "severity":   "medium",
    "note":       "Pay stub reflects pre-tax gross; bank deposits reflect net-of-deductions ACH."
  }],
  "fraud_signals":    [],
  "audit_id":         "aud_3F8C1B",
  "policy_version":   "income.verify-2024@v3"
}`}</Pre>
          </section>

          <section id="concept-policies" data-ds style={{ marginTop: 32 }}>
            <h2 className="docs-h2">Policies</h2>
            <p className="docs-p">
              A policy controls how Vecminds processes a document package — income source weights, discrepancy
              tolerances, required document types, and fraud detection behaviour. Policies are versioned YAML
              files. Standard policies ship with every account; custom policies are authored by your team.
            </p>
            <Params rows={[
              { name: "income.verify-2024", type: "policy", req: false, desc: "Full employment income verification. Reconciles pay stubs, bank deposits, and tax returns." },
              { name: "income.self-employed-2024", type: "policy", req: false, desc: "Self-employment income. Weights 1099s, bank deposits, and business P&L." },
              { name: "income.multi-source-2024", type: "policy", req: false, desc: "Mixed employment and passive income — rental, investment, part-time." },
              { name: "fraud.detect-2024", type: "policy", req: false, desc: "Document-level fraud signal detection only. No income computation." },
            ]} />
          </section>

          <section id="concept-outcomes" data-ds style={{ marginTop: 32 }}>
            <h2 className="docs-h2">Outcomes</h2>
            <p className="docs-p">
              An outcome is a real-world repayment event tagged back to a verification job. Outcomes are the
              input to the flywheel — they teach the model which document patterns, discrepancy types, and fraud
              signals actually predict default in your portfolio.
            </p>
            <Params rows={[
              { name: "repaid", type: "outcome", req: false, desc: "Loan repaid in full at term. Strongest positive training signal." },
              { name: "early_payoff", type: "outcome", req: false, desc: "Loan repaid early. Positive signal with different prepayment pattern." },
              { name: "default", type: "outcome", req: false, desc: "Borrower missed 90+ days of payments. Core negative training signal." },
              { name: "charged_off", type: "outcome", req: false, desc: "Loan written off as uncollectible. Strong negative training signal." },
              { name: "pending", type: "outcome", req: false, desc: "Loan still active. Updates the outcome record; flywheel training deferred." },
            ]} />
          </section>

          {/* ── API REFERENCE ── */}
          <section id="api" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">API Reference</h1>
            <p className="docs-section-intro">
              All endpoints are relative to <IC>https://api.vecminds.ai/v1</IC>. For VPC and on-prem deployments,
              replace the host with your internal endpoint. All requests and responses are JSON unless noted.
            </p>
          </section>

          <section id="api-verify" data-ds style={{ marginTop: 32 }}>
            <Endpoint method="POST" path="/v1/intelligence/verify"
              desc="Submit a borrower document package for verification. Returns a job ID immediately (async, default) or waits up to 30 s for the full result (sync mode)." />
            <h3 className="docs-h3">Request body</h3>
            <Params rows={[
              { name: "subject.id", type: "string", req: true, desc: "Your internal application or borrower ID. Appears in the audit log and webhook payload." },
              { name: "subject.type", type: "string", req: true, desc: "One of: loan_application, refinance, heloc, business_credit, bnpl." },
              { name: "documents", type: "array", req: true, desc: "Array of document objects. At least one required." },
              { name: "documents[].name", type: "string", req: true, desc: "Filename with extension — used in output citations (e.g. 'pay_stub_aug.pdf')." },
              { name: "documents[].data", type: "string (base64)", req: false, desc: "Base64-encoded file content. Either data or url is required per document." },
              { name: "documents[].url", type: "string", req: false, desc: "Pre-signed URL. Vecminds fetches the document at processing time. Either url or data required." },
              { name: "policy", type: "string", req: true, desc: "Policy ID to apply, e.g. 'income.verify-2024'. Pin a version with 'income.verify-2024@v3'." },
              { name: "notify", type: "string", req: false, desc: "Webhook URL called when the job completes. If omitted, poll GET /verify/{id}." },
              { name: "mode", type: "string", req: false, desc: "'async' (default) returns immediately with job_id. 'sync' waits up to 30 s and returns the full credit file." },
              { name: "metadata", type: "object", req: false, desc: "Arbitrary key-value pairs passed through to the webhook payload and audit log." },
            ]} />
            <h3 className="docs-h3">Request example</h3>
            <Pre lang="JSON">{`{
  "subject":   { "id": "app_7C3B1", "type": "loan_application" },
  "documents": [
    { "name": "pay_stub_aug.pdf", "data": "<base64>" },
    { "name": "bank_stmt_q3.pdf", "url":  "https://your-bucket.s3.amazonaws.com/bank_stmt_q3.pdf?..." },
    { "name": "1040_2023.pdf",    "data": "<base64>" }
  ],
  "policy":   "income.verify-2024",
  "notify":   "https://your-los.internal/webhooks/vecminds",
  "metadata": { "loan_officer_id": "lo_882", "product": "personal_unsecured" }
}`}</Pre>
            <h3 className="docs-h3">Response — async (immediate)</h3>
            <Pre lang="JSON">{`{
  "job_id":                  "job_9A4D2E",
  "status":                  "processing",
  "created_at":              "2024-08-14T14:22:31Z",
  "estimated_completion_ms": 2500
}`}</Pre>
            <h3 className="docs-h3">Response — sync / completed</h3>
            <Pre lang="JSON">{`{
  "job_id":             "job_9A4D2E",
  "status":             "completed",
  "processing_time_ms": 2100,
  "income": {
    "gross_annual": 84200,
    "net_monthly":  5616,
    "confidence":   0.97,
    "sources": [{
      "type":         "employment",
      "employer":     "Meridian Corp",
      "gross_annual": 84200,
      "verified_from":["pay_stub_aug.pdf", "bank_stmt_q3.pdf"],
      "confidence":   0.97
    }]
  },
  "discrepancies": [{
    "field":      "monthly_income",
    "document_a": { "file": "pay_stub_aug.pdf", "value": 7017, "line": "Gross Pay" },
    "document_b": { "file": "bank_stmt_q3.pdf", "value": 6100, "line": "ACH deposit avg" },
    "delta_pct":  0.15,
    "severity":   "medium",
    "note":       "Pay stub reflects pre-tax gross; bank deposits reflect net-of-deductions ACH."
  }],
  "fraud_signals":  [],
  "audit_id":       "aud_3F8C1B",
  "policy_version": "income.verify-2024@v3"
}`}</Pre>
          </section>

          <section id="api-status" data-ds style={{ marginTop: 32 }}>
            <Endpoint method="GET" path="/v1/intelligence/verify/{job_id}"
              desc="Retrieve the status and result of a verification job. Poll this endpoint if you did not register a notify webhook." />
            <h3 className="docs-h3">Path parameters</h3>
            <Params rows={[
              { name: "job_id", type: "string", req: true, desc: "The job_id returned by POST /verify." },
            ]} />
            <h3 className="docs-h3">Status values</h3>
            <Params rows={[
              { name: "pending", type: "status", req: false, desc: "Job received; not yet picked up for processing." },
              { name: "processing", type: "status", req: false, desc: "Documents are being parsed and verified." },
              { name: "completed", type: "status", req: false, desc: "Verification complete. Full credit file available." },
              { name: "failed", type: "status", req: false, desc: "Processing failed. error.code and error.message describe the reason." },
            ]} />
            <Callout type="info" label="Note">
              Typical processing time is 1.5–4 s depending on document count and quality.
              Poll at 1 s intervals with a 30 s timeout, or use webhooks to avoid polling entirely.
            </Callout>
          </section>

          <section id="api-tag" data-ds style={{ marginTop: 32 }}>
            <Endpoint method="POST" path="/v1/outcomes/tag"
              desc="Tag a completed verification job with a real loan repayment outcome. This feeds the outcome flywheel — the model learns which document patterns predict repayment in your portfolio." />
            <h3 className="docs-h3">Request body</h3>
            <Params rows={[
              { name: "job_id", type: "string", req: true, desc: "The verification job to tag." },
              { name: "outcome", type: "string", req: true, desc: "repaid | default | early_payoff | charged_off | pending" },
              { name: "months_to_outcome", type: "integer", req: false, desc: "Months from origination to this outcome event." },
              { name: "loan_amount", type: "number", req: false, desc: "Loan amount at origination, in whole currency units." },
              { name: "product_type", type: "string", req: false, desc: "personal | auto | mortgage | heloc | business | bnpl | other" },
            ]} />
            <Callout type="tip" label="Tip">
              Tagging is idempotent — update a job&apos;s outcome (e.g. from <IC>pending</IC> to <IC>default</IC>) by
              calling this endpoint again with the same <IC>job_id</IC>. The flywheel uses the most recent tag.
            </Callout>
          </section>

          <section id="api-audit" data-ds style={{ marginTop: 32 }}>
            <Endpoint method="GET" path="/v1/audit/{audit_id}"
              desc="Retrieve the complete, immutable audit trail for a verification job — every document, every extraction step, every figure computed, and every discrepancy raised." />
            <Pre lang="JSON">{`{
  "audit_id":    "aud_3F8C1B",
  "job_id":      "job_9A4D2E",
  "subject_id":  "app_7C3B1",
  "policy_version": "income.verify-2024@v3",
  "created_at":  "2024-08-14T14:22:31Z",
  "completed_at":"2024-08-14T14:22:33Z",
  "events": [
    { "ts": "2024-08-14T14:22:31.012Z", "type": "document_received",
      "file": "pay_stub_aug.pdf", "size_bytes": 184320 },
    { "ts": "2024-08-14T14:22:31.420Z", "type": "income_extracted",
      "file": "pay_stub_aug.pdf", "field": "gross_monthly",
      "value": 7017, "page": 1,
      "bounding_box": { "x": 0.62, "y": 0.34, "w": 0.18, "h": 0.04 } },
    { "ts": "2024-08-14T14:22:32.100Z", "type": "discrepancy_raised",
      "field": "monthly_income", "delta_pct": 0.15, "severity": "medium" },
    { "ts": "2024-08-14T14:22:33.100Z", "type": "job_completed" }
  ]
}`}</Pre>
            <p className="docs-p">
              Audit records are immutable and retained for 7 years by default (configurable to match your
              document retention policy). They can be exported as JSON or PDF from the dashboard for examiner review.
            </p>
          </section>

          {/* ── CONNECTORS ── */}
          <section id="connectors" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">LOS Connectors</h1>
            <p className="docs-section-intro">
              Vecminds ships pre-built read-only connectors for the most common loan-origination systems. No schema
              changes to your LOS are required.
            </p>
            <Params rows={[
              { name: "Encompass (ICE)", type: "connector", req: false, desc: "Native Encompass SDK integration. Documents pulled from eFolder on milestone change. Application fields mapped to subject.id automatically." },
              { name: "Finastra Mortgagebot", type: "connector", req: false, desc: "REST connector. Documents pulled from the document checklist on status change events." },
              { name: "nCino", type: "connector", req: false, desc: "Salesforce-based. Listens to nCino loan document record inserts via Platform Events." },
              { name: "Temenos Transact", type: "connector", req: false, desc: "Event-driven. Subscribes to document upload events via Temenos Integration Framework." },
              { name: "S3 / Azure Blob", type: "connector", req: false, desc: "Watches a bucket prefix for new uploads. Compatible with any LOS that writes documents to object storage." },
              { name: "SDK (custom)", type: "connector", req: false, desc: "For platforms not on this list. Full TypeScript, Python, Java, and .NET SDKs." },
            ]} />
            <h2 className="docs-h2">Encompass configuration example</h2>
            <Pre lang="YAML">{`# vecminds-connector.yaml
connector: encompass
auth:
  client_id:     $ENCOMPASS_CLIENT_ID
  client_secret: $ENCOMPASS_CLIENT_SECRET
  instance_id:   $ENCOMPASS_INSTANCE_ID

trigger:
  event:     milestone_change
  milestone: "Loan Submitted"

document_mapping:
  - efolder_name: "Pay Stubs"
    vecminds_type:   pay_stub
  - efolder_name: "Bank Statements"
    vecminds_type:   bank_statement
  - efolder_name: "Tax Returns"
    vecminds_type:   tax_return

vecminds:
  api_key: $VECMINDS_API_KEY
  policy:  income.verify-2024
  notify:  https://your-los.internal/webhooks/vecminds
  metadata:
    loan_officer_id: $ENCOMPASS_LOAN_OFFICER_ID`}</Pre>
          </section>

          {/* ── WEBHOOKS ── */}
          <section id="webhooks" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">Webhooks</h1>
            <p className="docs-section-intro">
              Register a <IC>notify</IC> URL in your verification request to receive a <IC>POST</IC> when
              the job completes — eliminating the need to poll.
            </p>
            <h2 className="docs-h2">Event types</h2>
            <Params rows={[
              { name: "verification.completed", type: "event", req: false, desc: "Job completed successfully. Full credit file is in the payload." },
              { name: "verification.failed", type: "event", req: false, desc: "Job failed. error.code and error.message describe the failure." },
              { name: "verification.document_unsupported", type: "event", req: false, desc: "One or more documents were unrecognised or too degraded to process." },
            ]} />
            <h2 className="docs-h2">Payload</h2>
            <Pre lang="JSON">{`{
  "event":      "verification.completed",
  "job_id":     "job_9A4D2E",
  "subject_id": "app_7C3B1",
  "timestamp":  "2024-08-14T14:22:33Z",
  "data": { /* full verified credit file */ },
  "metadata":   { "loan_officer_id": "lo_882" }
}`}</Pre>
            <h2 className="docs-h2">Verifying signatures</h2>
            <p className="docs-p">
              Every request includes an <IC>X-Vecminds-Signature</IC> header. Verify it before processing.
              The webhook secret lives in your server environment — never in the browser.
            </p>
            <Pre lang="TypeScript — server-side webhook handler">{`import crypto from "crypto";

function verifyWebhook(payload: string, signature: string, secret: string): boolean {
  const expected = "sha256=" + crypto
    .createHmac("sha256", secret)
    .update(payload, "utf8")
    .digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

app.post("/webhooks/vecminds", (req, res) => {
  const sig = req.headers["x-vecminds-signature"] as string;
  if (!verifyWebhook(req.rawBody, sig, process.env.VECMINDS_WEBHOOK_SECRET!)) {
    return res.status(401).send("Invalid signature");
  }
  const { event, data } = req.body;
  if (event === "verification.completed") {
    // hand data (verified credit file) to your underwriting UI
  }
  res.status(200).send("OK");
});`}</Pre>
            <Callout type="info" label="Note">
              Webhooks are retried with exponential backoff (1 s, 4 s, 16 s, 64 s, 256 s) on non-2xx responses.
              After 5 failures the result remains available via <IC>GET /verify/{"{id}"}</IC>.
            </Callout>
          </section>

          {/* ── POLICY DSL ── */}
          <section id="policy-dsl" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">Policy DSL</h1>
            <p className="docs-section-intro">
              Policies are versioned YAML files that control how Vecminds processes a document package.
              Standard policies are maintained by Vecminds. Custom policies are authored by your team and
              uploaded via the dashboard or API.
            </p>
            <h2 className="docs-h2">Full policy reference</h2>
            <Pre lang="YAML">{`policy:       income.verify-custom
version:      "2024-02"
description:  "Employment income + fraud detection for prime personal loans"

income_sources:
  employment:
    weight:             1.0
    required_documents: [pay_stub, w2]
  self_employment:
    weight:             0.85
    required_documents: [1040, bank_statement]
  rental:
    weight:             0.75
    required_documents: [lease, bank_statement]

discrepancy:
  tolerance:   0.05          # 5% variance allowed before a discrepancy is raised
  severity_thresholds:
    low:    0.05             # 5–10% delta
    medium: 0.10             # 10–25% delta
    high:   0.25             # >25% delta
  auto_explain: true         # attach a natural-language note to each discrepancy

fraud:
  enabled:         true
  signals:         [metadata, formatting, internal_consistency, behavioral]
  block_on_signal: false     # raise signal but do not block — underwriter reviews

output:
  include_source_citations:  true
  include_confidence_scores: true
  include_bounding_boxes:    false   # true = PDF highlight overlay in your UI
  audit_retention_years:     7`}</Pre>
            <h2 className="docs-h2">Versioning</h2>
            <p className="docs-p">
              Every policy is versioned (<IC>policy-slug@v3</IC>). The version in force at processing time is
              stamped on the credit file and audit log. Pin a specific version in your API calls with
              <IC>{'"policy": "income.verify-custom@v2"'}</IC> to freeze behaviour while a new version is under review.
            </p>
          </section>

          {/* ── SDKs ── */}
          <section id="sdks" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">SDKs</h1>
            <p className="docs-section-intro">
              First-party SDKs for TypeScript/JavaScript, Python, Java, and .NET. All SDKs handle
              authentication, retries, base64 encoding, and webhook signature verification automatically.
            </p>
            <h2 className="docs-h2">TypeScript / JavaScript</h2>
            <Pre lang="TypeScript">{`import { VecmindsClient } from "@vecminds/intelligence";

const client = new VecmindsClient({ apiKey: process.env.VECMINDS_API_KEY });

// Submit and wait (sync mode)
const result = await client.verify.create({
  subject:   { id: "app_001", type: "loan_application" },
  documents: [{ name: "pay_stub.pdf", data: buffer }],
  policy:    "income.verify-2024",
  mode:      "sync",
});

// Tag outcome
await client.outcomes.tag({
  job_id:            result.job_id,
  outcome:           "repaid",
  months_to_outcome: 36,
});

// Fetch audit trail
const audit = await client.audit.get(result.audit_id);`}</Pre>
            <h2 className="docs-h2">Python</h2>
            <Pre lang="Python">{`from vecminds import VecmindsClient
import os

client = VecmindsClient(api_key=os.environ["VECMINDS_API_KEY"])

with open("pay_stub_aug.pdf", "rb") as f:
    job = client.verify.create(
        subject   = {"id": "app_001", "type": "loan_application"},
        documents = [{"name": "pay_stub_aug.pdf", "data": f.read()}],
        policy    = "income.verify-2024",
    )

# Poll for result (or use notify= for webhook)
result = client.verify.wait(job.id, timeout=30)

print(result.income.gross_annual)   # 84200
print(result.discrepancies)         # [...]

# Tag outcome
client.outcomes.tag(job_id=job.id, outcome="repaid", months_to_outcome=24)`}</Pre>
          </section>

          {/* ── SECURITY ── */}
          <section id="security" data-ds style={{ marginTop: 52 }}>
            <h1 className="docs-h1">Security &amp; Compliance</h1>
            <p className="docs-section-intro">
              Vecminds is designed to run entirely inside your infrastructure. In VPC and on-prem deployments,
              borrower documents never leave your network.
            </p>
            <h2 className="docs-h2">Deployment options</h2>
            <Params rows={[
              { name: "VPC deployment", type: "option", req: false, desc: "Vecminds runs in a dedicated VPC in your cloud account (AWS, Azure, GCP). All traffic stays within your network perimeter. Recommended for regulated lenders." },
              { name: "On-premise", type: "option", req: false, desc: "Fully air-gapped. Documents never traverse external networks. Required for some core banking environments." },
              { name: "Private cloud", type: "option", req: false, desc: "Vecminds-managed infrastructure in a region-locked private cloud. Data residency guaranteed by contract." },
            ]} />
            <h2 className="docs-h2">Certifications</h2>
            <div className="docs-cards-2">
              {[
                { cert: "SOC 2 Type II", scope: "Security, Availability, Confidentiality" },
                { cert: "ISO 27001", scope: "Information Security Management" },
                { cert: "GDPR", scope: "EU data subject rights. DPA available on request." },
                { cert: "CCPA", scope: "California Consumer Privacy Act" },
              ].map((c) => (
                <div key={c.cert} className="docs-card">
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "var(--fg)" }}>{c.cert}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{c.scope}</div>
                </div>
              ))}
            </div>
            <h2 className="docs-h2">Data handling</h2>
            <ul className="docs-ul">
              <li>Documents are encrypted at rest (AES-256) and in transit (TLS 1.3).</li>
              <li>Document content is deleted from the processing environment within 24 hours of job completion (configurable).</li>
              <li>Audit records are retained immutably for 7 years by default.</li>
              <li>API keys are hashed before storage — Vecminds cannot retrieve a plaintext key after issuance.</li>
              <li><strong>Customer outcome data is never used to train shared models.</strong> The flywheel is per-customer and fully isolated.</li>
            </ul>
          </section>

          {/* ── SUPPORT ── */}
          <section id="support" data-ds style={{ marginTop: 52, marginBottom: 96 }}>
            <h1 className="docs-h1">Support</h1>
            <p className="docs-section-intro">
              Your account includes a dedicated solutions engineer during the pilot and first 90 days in
              production. Ongoing support is available via Slack Connect, email, and the dashboard.
            </p>
            <Params rows={[
              { name: "Starter", type: "tier", req: false, desc: "Email support. SLA: next business day. Included in all plans." },
              { name: "Growth", type: "tier", req: false, desc: "Slack Connect + email. SLA: 4-hour response. Included in Growth and above." },
              { name: "Enterprise", type: "tier", req: false, desc: "Dedicated solutions engineer + pager escalation. SLA: 1-hour critical, 4-hour high. Custom SLA available." },
            ]} />
            <div className="docs-card" style={{ marginTop: 28 }}>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 10, color: "var(--fg)" }}>Get in touch</div>
              <p className="docs-p" style={{ margin: 0 }}>
                For integration questions, reach your solutions engineer via Slack Connect or email{" "}
                <a href="mailto:integrations@vecminds.ai" style={{ color: "var(--signal)" }}>integrations@vecminds.ai</a>.
                For urgent production issues, prefix your Slack message with{" "}
                <IC>/urgent</IC> to trigger the on-call escalation.
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
