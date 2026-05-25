import { Arrow, ArrowDown } from "./icons";

export default function CTA() {
  return (
    <section className="section" id="cta">
      <div className="container">
        <div className="cta reveal">
          <h2>
            Stop handing your underwriters a <span className="em">pile</span>. Start handing them a verified
            file.
          </h2>
          <p>
            A 30-minute walkthrough with our team. Bring a real document flow you&apos;d like to scope; leave
            with a working prototype that turns your borrower pile into a clean credit file within two weeks.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn primary lg">
              Book a 30-min demo <Arrow className="arrow" />
            </a>
            <a href="#" className="btn outline lg">
              Read the technical brief <ArrowDown style={{ transform: "rotate(-90deg)" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
