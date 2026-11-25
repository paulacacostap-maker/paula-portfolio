import { useState } from "react";
import "./ProductionConsole.css";

import campaignImage from "./assets/Projects__2png.png";
import overviewImage from "./assets/Overview Page.png";
import projectsImage from "./assets/Projects.png";
import projectsDetailImage from "./assets/Projects_1.png";
import assetsImage from "./assets/Manage Assets.png";
import contentImage from "./assets/Content Center.png";
import reviewImage from "./assets/3 Placing a pin.png";
import ideationImage from "./assets/Ideation.png";
import interviewsImage from "./assets/Interviews.png";
import designSystem1 from "./assets/design system_1.png";
import designSystem2 from "./assets/design system_2.png";

type Props = {
  onBack: () => void;
};

const areas = [
  {
    id: "projects",
    number: "01",
    title: "Projects",
    intro: "A clearer view of work in progress.",
    description:
      "A central place to navigate campaigns, understand project status and access the creative work connected to each initiative.",
    image: projectsImage,
    extra: projectsDetailImage,
    features: [
      "Project-level organization",
      "Campaign and asset visibility",
      "A shared starting point for teams",
    ],
  },
  {
    id: "assets",
    number: "02",
    title: "Manage Assets",
    intro: "Make creative assets easier to find.",
    description:
      "A structured asset experience bringing content, metadata and connected libraries into one shared workspace.",
    image: assetsImage,
    features: [
      "Centralized asset access",
      "Metadata and content context",
      "A foundation for discovery and reuse",
    ],
  },
  {
    id: "content",
    number: "03",
    title: "Content Center",
    intro: "Bring creative work into one place.",
    description:
      "A workspace concept for accessing and organizing creative content as part of a connected production experience.",
    image: contentImage,
    features: [
      "Connected content experiences",
      "A consistent working environment",
      "Visibility across creative activity",
    ],
  },
  {
    id: "review",
    number: "04",
    title: "Creative Review",
    intro: "Keep feedback close to the creative.",
    description:
      "Feedback is anchored to the work itself, helping reviewers communicate with more context across static and video assets.",
    image: reviewImage,
    features: [
      "Comments on assets and packages",
      "Pins on static images and timestamps on video",
      "Threaded replies and resolution",
    ],
  },
];

function LaptopMockup({
  src,
  alt,
  onClick,
  className = "",
}: {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={`pc-laptop-button ${className}`}
      onClick={onClick}
      aria-label={`Enlarge ${alt}`}
    >
      <div className="pc-laptop">
        <div className="pc-laptop-screen">
          <span className="pc-laptop-camera" />
          <img src={src} alt={alt} />
        </div>
        <div className="pc-laptop-base">
          <span />
        </div>
      </div>
      <span className="pc-image-caption">EXPLORE INTERFACE ↗</span>
    </button>
  );
}

function DiscoveryImage({
  src,
  alt,
  label,
  description,
  onClick,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  description: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={`pc-discovery-card ${className}`}
      onClick={onClick}
      aria-label={`Enlarge ${alt}`}
    >
      <div className="pc-discovery-image">
        <img src={src} alt={alt} />
        <span className="pc-discovery-zoom">↗</span>
      </div>
      <div className="pc-discovery-caption">
        <span>{label}</span>
        <small>{description}</small>
      </div>
    </button>
  );
}

export default function ProductionConsole({ onBack }: Props) {
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <main className="pc">
      <nav className="pc-nav">
        <button onClick={onBack} className="pc-back">
          ← <span>Back to portfolio</span>
        </button>

        <span className="pc-nav-center">
          SELECTED WORK <i>/</i> 01
        </span>

        <a href="mailto:hello@paulacosta.co">LET'S TALK ↗</a>
      </nav>

      {/* HERO */}

      <header className="pc-hero">
        <div className="pc-hero-top">
          <span>OMNICOM</span>
          <span>PRODUCT DESIGN · B2B SAAS</span>
          <span>01 / 02</span>
        </div>

        <div className="pc-hero-content">
          <div className="pc-hero-heading">
            <p className="pc-kicker">CREATIVE OPERATIONS PLATFORM</p>
            <h1>
              Production
              <br />
              <em>Console.</em>
            </h1>
          </div>

          <div className="pc-hero-description">
            <p>
              Bringing creative production, asset management and collaboration
              into one connected experience.
            </p>
            <a href="#overview">DISCOVER THE PROJECT ↓</a>
          </div>
        </div>

        <LaptopMockup
          src={campaignImage}
          alt="Production Console campaign interface"
          onClick={() => setZoom(campaignImage)}
          className="pc-hero-laptop"
        />

        <div className="pc-meta-grid">
          <div>
            <small>MY ROLE</small>
            <strong>Product Designer · UI</strong>
          </div>
          <div>
            <small>TEAM</small>
            <strong>3 Product Designers</strong>
          </div>
          <div>
            <small>PRODUCT</small>
            <strong>Enterprise web platform</strong>
          </div>
          <div>
            <small>CONTRIBUTION</small>
            <strong>End-to-end design process</strong>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}

      <section className="pc-section" id="overview">
        <div className="pc-section-index">
          <span>01</span>
          <small>THE OVERVIEW</small>
        </div>

        <div className="pc-section-content">
          <p className="pc-kicker">ABOUT THE PRODUCT</p>

          <div className="pc-intro-grid">
            <h2>
              One place to bring
              <br />
              <em>creative work together.</em>
            </h2>

            <div className="pc-copy">
              <p>
                Production Console is a platform experience for teams managing
                campaigns and creative production across multiple clients.
              </p>
              <p>
                The ambition was to create a more connected environment for
                organizing projects, managing assets and reviewing creative
                work.
              </p>
            </div>
          </div>

          <div className="pc-statement">
            <small>THE BIG IDEA</small>
            <p>
              Move from scattered tools and disconnected steps to a shared
              creative operations experience.
            </p>
          </div>

          <LaptopMockup
            src={overviewImage}
            alt="Production Console overview dashboard"
            onClick={() => setZoom(overviewImage)}
          />
        </div>
      </section>

      {/* CHALLENGE */}

      <section className="pc-section pc-section-soft">
        <div className="pc-section-index">
          <span>02</span>
          <small>THE CHALLENGE</small>
        </div>

        <div className="pc-section-content">
          <p className="pc-kicker">THE CONTEXT</p>

          <h2>
            Creative production was spread across
            <em> too many places.</em>
          </h2>

          <p className="pc-lead">
            Teams worked across different platforms to store assets, coordinate
            production and review deliverables. That fragmentation made it
            harder to find content, follow progress and understand what had been
            approved.
          </p>

          <div className="pc-challenge-grid">
            <article>
              <small>01 / DISCOVERY</small>
              <h3>Scattered assets</h3>
              <p>
                Content lived across multiple systems, making it harder to
                locate the right material.
              </p>
            </article>

            <article>
              <small>02 / COLLABORATION</small>
              <h3>Limited visibility</h3>
              <p>
                Project status, feedback and approvals were not always easy to
                follow in one place.
              </p>
            </article>

            <article>
              <small>03 / EFFICIENCY</small>
              <h3>Disconnected work</h3>
              <p>
                Moving between tools created friction and made reuse more
                difficult.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DISCOVERY: IDEATION & INTERVIEWS */}

      <section className="pc-section pc-discovery-section">
        <div className="pc-section-index">
          <span>03</span>
          <small>DISCOVERY</small>
        </div>

        <div className="pc-section-content">
          <p className="pc-kicker">IDEATION & INTERVIEWS</p>

          <h2>
            Start with the people and
            <em> the ideas.</em>
          </h2>

          <p className="pc-lead">
            The discovery phase combined conversations with practitioners and
            collaborative ideation. These activities helped explore the
            operational context, understand different perspectives and frame
            opportunities for the platform.
          </p>

          <div className="pc-discovery-grid">
            <DiscoveryImage
              src={ideationImage}
              alt="Production Console ideation board in Figma"
              label="01 / IDEATION"
              description="Collaborative exploration and early product concepts"
              onClick={() => setZoom(ideationImage)}
              className="pc-ideation-board"
            />

            <DiscoveryImage
              src={interviewsImage}
              alt="Production Console practitioner interview"
              label="02 / INTERVIEWS"
              description="Conversations with practitioners and stakeholders"
              onClick={() => setZoom(interviewsImage)}
              className="pc-interviews-board"
            />
          </div>

          <div className="pc-discovery-note">
            <span>DISCOVERY PROCESS</span>
            <p>
              From individual perspectives to shared opportunities for the
              product experience.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}

      <section className="pc-section pc-section-navy">
        <div className="pc-section-index">
          <span>04</span>
          <small>THE SOLUTION</small>
        </div>

        <div className="pc-section-content">
          <p className="pc-kicker">THE PRODUCT EXPERIENCE</p>

          <h2>
            Four connected areas.
            <br />
            <em>One product direction.</em>
          </h2>

          <p className="pc-lead">
            Explore the product areas and the role each one plays in a more
            connected creative operations experience.
          </p>

          <div className="pc-areas">
            {areas.map((area) => (
              <article className="pc-area" key={area.id}>
                <div className="pc-area-heading">
                  <span>{area.number}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.intro}</p>
                  </div>
                </div>

                <p className="pc-area-description">{area.description}</p>

                <ul>
                  {area.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <LaptopMockup
                  src={area.image}
                  alt={`${area.title} interface`}
                  onClick={() => setZoom(area.image)}
                />

                {area.extra && (
                  <div className="pc-area-extra">
                    <p className="pc-kicker">ANOTHER PRODUCT VIEW</p>
                    <LaptopMockup
                      src={area.extra}
                      alt="Additional Projects interface"
                      onClick={() => setZoom(area.extra!)}
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}

      <section className="pc-section">
        <div className="pc-section-index">
          <span>05</span>
          <small>DESIGN APPROACH</small>
        </div>

        <div className="pc-section-content">
          <p className="pc-kicker">UI & SYSTEM THINKING</p>

          <h2>
            Consistency across a<em> complex platform.</em>
          </h2>

          <p className="pc-lead">
            The work involved shaping interface patterns across different
            product areas, with reusable foundations for common interactions and
            a consistent visual language.
          </p>

          <div className="pc-design-principles">
            <article>
              <small>01</small>
              <h3>Clarity</h3>
              <p>Make complex information easier to scan and understand.</p>
            </article>
            <article>
              <small>02</small>
              <h3>Consistency</h3>
              <p>Build familiar patterns across different product areas.</p>
            </article>
            <article>
              <small>03</small>
              <h3>Context</h3>
              <p>Keep project, asset and review information connected.</p>
            </article>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM */}

      <section className="pc-section">
        <div className="pc-section-index">
          <span>06</span>
          <small>DESIGN SYSTEM & COMPONENT LIBRARY</small>
        </div>

        <div className="pc-section-content">
          <p className="pc-kicker">SPLASH DESIGN SYSTEM</p>

          <h2>
            Building consistency through a<em> shared design language.</em>
          </h2>

          <p className="pc-lead">
            Splash was the design system used across Production Console. The
            design team worked with its existing foundations and component
            library, extending and adapting components to support the evolving
            needs of the product.
          </p>

          <div>
            <DiscoveryImage
              src={designSystem1}
              alt="Splash Design System component library"
              label="Splash Design System"
              description="Shared styles and reusable components."
              onClick={() => setZoom(designSystem1)}
            />
          </div>

          <p className="pc-kicker" style={{ marginTop: "48px" }}>
            COMPONENT DESIGN & SYSTEM EVOLUTION
          </p>

          <p className="pc-lead">
            As part of the Production Console design team, I collaborated on the
            design and evolution of key UI components, including Asset Cards,
            Project Cards, Side Navigation, and Side Panels. Together, we
            explored component variations, interaction states, behaviors, and
            documentation to support consistency across the product.
          </p>

          <div>
            <DiscoveryImage
              src={designSystem2}
              alt="Production Console component documentation"
              label="Production Console Components"
              description="Component variations, states and documentation created collaboratively by the design team."
              onClick={() => setZoom(designSystem2)}
            />
          </div>
        </div>
      </section>

      {/* OUTCOME */}

      <section className="pc-section pc-section-soft">
        <div className="pc-section-index">
          <span>06</span>
          <small>OUTCOME</small>
        </div>

        <div className="pc-section-content">
          <p className="pc-kicker">LOOKING BACK</p>

          <h2>
            A foundation for more connected
            <em> creative operations.</em>
          </h2>

          <p className="pc-lead">
            The proposed experience brought key creative activities into one
            product direction: project organization, asset management, content
            access and creative review.
          </p>

          <div className="pc-outcome-grid">
            <article>
              <small>01</small>
              <h3>Connected experience</h3>
              <p>
                A shared product direction across previously separate
                activities.
              </p>
            </article>

            <article>
              <small>02</small>
              <h3>More context</h3>
              <p>
                Project, asset and feedback information considered as part of
                the same experience.
              </p>
            </article>

            <article>
              <small>03</small>
              <h3>Consistent patterns</h3>
              <p>
                A foundation for a more coherent experience across the platform.
              </p>
            </article>
          </div>

          <div className="pc-measure">
            <small>WHAT I WOULD MEASURE NEXT</small>
            <p>
              Time to find and reuse an asset, review-cycle duration and task
              completion across project workflows. These are proposed measures,
              not reported project results.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="pc-footer">
        <p>OMNICOM · PRODUCTION CONSOLE</p>

        <h2>
          Thank you<span>.</span>
        </h2>

        <div>
          <span>Paula Acosta · Product Designer</span>
          <button onClick={onBack}>BACK TO PORTFOLIO ↑</button>
          <a href="mailto:hello@paulacosta.co">GET IN TOUCH ↗</a>
        </div>
      </footer>

      {/* IMAGE LIGHTBOX */}

      {zoom && (
        <div
          className="pc-lightbox"
          onClick={() => setZoom(null)}
          role="presentation"
        >
          <button onClick={() => setZoom(null)} aria-label="Close image">
            ×
          </button>
          <img
            src={zoom}
            alt="Expanded Production Console visual"
            onClick={(event) => event.stopPropagation()}
          />
          <span>CLICK OUTSIDE TO CLOSE</span>
        </div>
      )}
    </main>
  );
}
