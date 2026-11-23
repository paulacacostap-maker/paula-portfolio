import { useState } from "react";
import "./ActiFlow.css";

import executionImage from "./assets/Execution Workspace Ideas 4.png";
import journeyImage from "./assets/OW E2E User Journey.png";
import ownerImage from "./assets/Orchestrate Workflows - Pre-Built Workflows (Owner).png";
import viewerImage from "./assets/Orchestrate Workflows - Pre-Built Workflows (Viewer).png";
import publishedImage from "./assets/Published - Run data (Step · Input).png";
import successImage from "./assets/Success.png";

type Props = {
  onBack: () => void;
};

function Laptop({
  src,
  alt,
  onZoom,
}: {
  src: string;
  alt: string;
  onZoom: () => void;
}) {
  return (
    <button
      className="af-laptop-button"
      onClick={onZoom}
      aria-label={`Enlarge ${alt}`}
    >
      <div className="af-laptop">
        <div className="af-screen">
          <span className="af-camera" />
          <img src={src} alt={alt} />
        </div>
        <div className="af-base">
          <span />
        </div>
      </div>
      <span className="af-image-label">EXPLORE INTERFACE ↗</span>
    </button>
  );
}

export default function ActiFlow({ onBack }: Props) {
  const [activeRole, setActiveRole] = useState<"owner" | "viewer">("owner");
  const [zoom, setZoom] = useState<string | null>(null);

  const roleImage = activeRole === "owner" ? ownerImage : viewerImage;

  return (
    <main className="af">
      <nav className="af-nav">
        <button onClick={onBack}>
          ← <span>Back to portfolio</span>
        </button>
        <span>
          SELECTED WORK <i>/</i> 02
        </span>
        <a href="mailto:hello@paulacosta.co">LET'S TALK ↗</a>
      </nav>

      {/* HERO */}

      <header className="af-hero">
        <div className="af-hero-meta">
          <span>PRODUCT DESIGN</span>
          <span>WORKFLOW AUTOMATION</span>
          <span>02 / 02</span>
        </div>

        <div className="af-hero-content">
          <div>
            <p className="af-kicker">ORCHESTRATE WORKFLOWS</p>
            <h1>
              Acti<em>Flow.</em>
            </h1>
          </div>

          <div className="af-hero-copy">
            <p>
              Designing an experience to explore, configure and execute
              pre-built workflows.
            </p>
            <a href="#overview">EXPLORE THE PROJECT ↓</a>
          </div>
        </div>

        <Laptop
          src={executionImage}
          alt="ActiFlow execution workspace"
          onZoom={() => setZoom(executionImage)}
        />

        <div className="af-meta-grid">
          <div>
            <small>PROJECT</small>
            <strong>Orchestrate Workflows</strong>
          </div>
          <div>
            <small>FOCUS</small>
            <strong>Workflow experience</strong>
          </div>
          <div>
            <small>MY ROLE</small>
            <strong>Product Designer</strong>
          </div>
          <div>
            <small>PLATFORM</small>
            <strong>Enterprise web application</strong>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}

      <section className="af-section" id="overview">
        <div className="af-index">
          <span>01</span>
          <small>OVERVIEW</small>
        </div>

        <div className="af-section-content">
          <p className="af-kicker">THE PROJECT</p>
          <div className="af-intro-grid">
            <h2>
              Making workflows
              <br />
              <em>easier to orchestrate.</em>
            </h2>

            <div className="af-copy">
              <p>
                Orchestrate Workflows explores an experience for working with
                pre-built workflows, from discovering available options to
                understanding their configuration and execution.
              </p>
              <p>
                The design work focused on making the different stages of the
                experience understandable for people with different roles.
              </p>
            </div>
          </div>

          <div className="af-statement">
            <small>DESIGN INTENTION</small>
            <p>
              Make complex workflow experiences feel structured, visible and
              easier to navigate.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}

      <section className="af-section af-soft">
        <div className="af-index">
          <span>02</span>
          <small>THE CHALLENGE</small>
        </div>

        <div className="af-section-content">
          <p className="af-kicker">THE DESIGN OPPORTUNITY</p>
          <h2>
            Different roles.
            <br />
            <em>Different workflow needs.</em>
          </h2>

          <p className="af-lead">
            The experience needed to account for how people interact with
            pre-built workflows, understand the information available to them
            and follow the execution process.
          </p>

          <div className="af-challenge-grid">
            <article>
              <span>01 / DISCOVER</span>
              <h3>Find the right workflow</h3>
              <p>
                Present available pre-built workflows in a way that supports
                exploration and selection.
              </p>
            </article>
            <article>
              <span>02 / UNDERSTAND</span>
              <h3>Make roles clear</h3>
              <p>
                Consider different perspectives for people managing and viewing
                workflows.
              </p>
            </article>
            <article>
              <span>03 / EXECUTE</span>
              <h3>Follow the process</h3>
              <p>
                Make execution information and workflow states easier to
                understand.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* USER JOURNEY */}

      <section className="af-section">
        <div className="af-index">
          <span>03</span>
          <small>WORKFLOW EXPLORATION</small>
        </div>

        <div className="af-section-content">
          <p className="af-kicker">END-TO-END EXPERIENCE</p>
          <h2>
            Mapping the
            <em> workflow journey.</em>
          </h2>
          <p className="af-lead">
            The end-to-end journey helped frame the different stages of the
            experience and how users move through them.
          </p>

          <button
            className="af-journey-image"
            onClick={() => setZoom(journeyImage)}
            aria-label="Enlarge end-to-end user journey"
          >
            <img
              src={journeyImage}
              alt="Orchestrate Workflows end-to-end user journey"
            />
            <span>EXPLORE JOURNEY ↗</span>
          </button>
          <p className="af-caption">
            ORCHESTRATE WORKFLOWS · END-TO-END USER JOURNEY
          </p>
        </div>
      </section>

      {/* OWNER / VIEWER */}

      <section className="af-section af-navy">
        <div className="af-index">
          <span>04</span>
          <small>PRODUCT EXPERIENCE</small>
        </div>

        <div className="af-section-content">
          <p className="af-kicker">PRE-BUILT WORKFLOWS</p>
          <h2>
            Two perspectives.
            <br />
            <em>One workflow experience.</em>
          </h2>

          <p className="af-lead">
            The interface explored two views of pre-built workflows: an Owner
            perspective and a Viewer perspective.
          </p>

          <div
            className="af-role-tabs"
            role="tablist"
            aria-label="Workflow roles"
          >
            <button
              role="tab"
              aria-selected={activeRole === "owner"}
              className={activeRole === "owner" ? "active" : ""}
              onClick={() => setActiveRole("owner")}
            >
              <span>01</span> Owner
            </button>
            <button
              role="tab"
              aria-selected={activeRole === "viewer"}
              className={activeRole === "viewer" ? "active" : ""}
              onClick={() => setActiveRole("viewer")}
            >
              <span>02</span> Viewer
            </button>
          </div>

          <div className="af-role-description">
            <div>
              <small>
                {activeRole === "owner" ? "OWNER VIEW" : "VIEWER VIEW"}
              </small>
              <h3>
                {activeRole === "owner"
                  ? "Manage pre-built workflows."
                  : "Explore available workflows."}
              </h3>
            </div>
            <p>
              {activeRole === "owner"
                ? "The Owner view presents the pre-built workflow experience from the perspective of someone responsible for managing it."
                : "The Viewer view presents the workflow experience from the perspective of someone accessing and viewing available workflows."}
            </p>
          </div>

          <Laptop
            src={roleImage}
            alt={`Pre-built workflows ${activeRole} view`}
            onZoom={() => setZoom(roleImage)}
          />

          <p className="af-caption af-caption-light">
            SWITCH BETWEEN OWNER AND VIEWER TO EXPLORE BOTH INTERFACES
          </p>
        </div>
      </section>

      {/* EXECUTION */}

      <section className="af-section">
        <div className="af-index">
          <span>05</span>
          <small>EXECUTION</small>
        </div>

        <div className="af-section-content">
          <p className="af-kicker">RUN DATA & INPUT</p>
          <h2>
            From configuration
            <em> to execution.</em>
          </h2>

          <p className="af-lead">
            The execution experience includes a step for reviewing run data and
            providing the required input.
          </p>

          <Laptop
            src={publishedImage}
            alt="Published workflow run data and input"
            onZoom={() => setZoom(publishedImage)}
          />

          <div className="af-execution-note">
            <span>WORKFLOW STATE</span>
            <p>
              A view of the published workflow run, with its step and input
              information presented in context.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS */}

      <section className="af-section af-soft">
        <div className="af-index">
          <span>06</span>
          <small>SUCCESS STATE</small>
        </div>

        <div className="af-section-content">
          <p className="af-kicker">COMPLETING THE FLOW</p>
          <h2>
            A clear end to
            <em> the execution journey.</em>
          </h2>

          <p className="af-lead">
            The success state provides a clear visual confirmation at the end of
            the workflow experience.
          </p>

          <button
            className="af-success-image"
            onClick={() => setZoom(successImage)}
            aria-label="Enlarge success state"
          >
            <img src={successImage} alt="ActiFlow workflow success state" />
            <span>VIEW FULL SCREEN ↗</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="af-footer">
        <p>ACTIFLOW · ORCHESTRATE WORKFLOWS</p>
        <h2>
          Thank you<span>.</span>
        </h2>
        <div>
          <span>Paula Acosta · Product Designer</span>
          <button onClick={onBack}>BACK TO PORTFOLIO ↑</button>
          <a href="mailto:hello@paulacosta.co">GET IN TOUCH ↗</a>
        </div>
      </footer>

      {/* IMAGE ZOOM */}

      {zoom && (
        <div className="af-lightbox" onClick={() => setZoom(null)}>
          <button onClick={() => setZoom(null)} aria-label="Close image">
            ×
          </button>
          <img
            src={zoom}
            alt="Expanded ActiFlow interface"
            onClick={(event) => event.stopPropagation()}
          />
          <span>CLICK OUTSIDE TO CLOSE</span>
        </div>
      )}
    </main>
  );
}
