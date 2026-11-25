import { useEffect, useRef, useState } from "react";
import "./App.css";

import ProductionConsole from "./ProductionConsole";
import ActiFlow from "./ActiFlow";

import productionImage from "./assets/Manage Assets.png";
import actiflowImage from "./assets/Execution Workspace Ideas 4.png";
import SplineHero from "./components/SplineHero";

function useDemoVisibility() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = stageRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { stageRef, isVisible };
}

function App() {
  const [showProduction, setShowProduction] = useState(false);
  const [showActiFlow, setShowActiFlow] = useState(false);

  const productionDemo = useDemoVisibility();
  const actiflowDemo = useDemoVisibility();

  if (showProduction) {
    return <ProductionConsole onBack={() => setShowProduction(false)} />;
  }

  if (showActiFlow) {
    return <ActiFlow onBack={() => setShowActiFlow(false)} />;
  }

  return (
    <main className="portfolio" id="top">
      <nav className="navbar">
        <a href="#top" className="logo">
          PAULA COSTA<span>®</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:hello@paulacosta.co">Contact ↗</a>
        </div>
      </nav>

      <header className="hero">
        <SplineHero />

        <div className="hero-bottom">
          <a href="#work" className="work-link">
            Explore selected work ↓
          </a>
        </div>

        <div className="hero-index">
          <span>PORTFOLIO</span>
          <span>2022 — 2026</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </header>

      <section id="work" className="work-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A SELECTION OF MY WORK</p>
            <h2>
              Selected work <span>(02)</span>
            </h2>
          </div>

          <p className="section-note">
            Product design · UI · Digital experiences
          </p>
        </div>

        {/* PROJECT 01 — PRODUCTION CONSOLE */}

        <article
          className="project project-production"
          onClick={() => setShowProduction(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setShowProduction(true);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Explore Production Console"
        >
          <div className="project-visual production-visual">
            <div className="visual-topline">
              <span>01 / ENTERPRISE · AI</span>
              <span>OMNICOM</span>
            </div>

            <div
              className={`laptop-stage assets-demo-stage ${
                productionDemo.isVisible ? "demo-is-visible" : ""
              }`}
              ref={productionDemo.stageRef}
            >
              <div className="laptop assets-demo-laptop">
                <div className="laptop-screen assets-demo-screen">
                  <div className="laptop-camera"></div>

                  <div className="assets-demo-image">
                    <img
                      src={productionImage}
                      alt="Production Console asset management interface"
                    />
                  </div>

                  <div
                    className="assets-demo-expanded"
                    style={{
                      backgroundImage: `url("${productionImage}")`,
                    }}
                    aria-hidden="true"
                  />
                </div>

                <div className="laptop-base">
                  <div className="laptop-notch"></div>
                </div>
              </div>
            </div>

            <div className="visual-bottomline">
              <span>CREATIVE PRODUCTION PLATFORM</span>
              <span>EXPLORE PROJECT ↗</span>
            </div>
          </div>

          <div className="project-info">
            <div>
              <p className="project-category">
                B2B SAAS · AI · WORKFLOW DESIGN
              </p>
              <h3>Production Console</h3>
              <p className="project-description">
                Connecting creative production, assets and collaboration in one
                workspace.
              </p>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </article>

        {/* PROJECT 02 — ACTIFLOW */}

        <article
          className="project project-actiflow"
          onClick={() => setShowActiFlow(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setShowActiFlow(true);
            }
          }}
          role="button"
          tabIndex={0}
        >
          <div className="project-visual actiflow-visual">
            <div className="visual-topline">
              <span>02 / AI · WORKFLOW AUTOMATION</span>
              <span>ACTIFLOW</span>
            </div>

            <div
              className={`laptop-stage ${
                actiflowDemo.isVisible ? "demo-is-visible" : ""
              }`}
              ref={actiflowDemo.stageRef}
            >
              <div className="laptop">
                <div className="laptop-screen">
                  <div className="laptop-camera"></div>
                  <img
                    src={actiflowImage}
                    alt="ActiFlow workflow execution interface"
                  />
                </div>

                <div className="laptop-base">
                  <div className="laptop-notch"></div>
                </div>
              </div>
            </div>

            <div className="visual-bottomline">
              <span>WORKFLOW ORCHESTRATION</span>
              <span>AI-POWERED WORKFLOWS</span>
            </div>
          </div>

          <div className="project-info">
            <div>
              <p className="project-category">
                AI · WORKFLOW DESIGN · AUTOMATION
              </p>
              <h3>ActiFlow</h3>
              <p className="project-description">
                Designing an environment to build, manage and execute
                intelligent workflows.
              </p>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </article>
      </section>

      <section id="about" className="about-section">
        <div className="about-label">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <span>BASED IN COLOMBIA</span>
        </div>

        <div className="about-content">
          <h2>
            I turn complex challenges into
            <span> clear, useful experiences.</span>
          </h2>

          <div className="about-bottom">
            <p>
              I'm Paula, a Product Designer working across B2B and B2C digital
              products. I enjoy shaping complex workflows into interfaces that
              feel intuitive, useful and considered.
            </p>

            <a href="mailto:hello@paulacosta.co" className="about-contact">
              Get in touch ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <a href="#top" className="logo">
          PAULA COSTA<span>®</span>
        </a>

        <span>© 2026</span>

        <a href="mailto:hello@paulacosta.co">LET'S TALK ↗</a>
      </footer>
    </main>
  );
}

export default App;
