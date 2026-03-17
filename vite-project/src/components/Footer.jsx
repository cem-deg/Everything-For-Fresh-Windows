import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">

        {/* Top area: brand + tagline */}
        <div className="footer-top">
          <div className="footer-top-brand">
            <div className="footer-brand-name">
              <span className="material-symbols-outlined footer-brand-bolt">bolt</span>
              EFFW
            </div>
            <p className="footer-brand-desc">
              A structured guide to a clean, optimized Windows setup — covering BIOS, drivers, memory, and more.
            </p>
          </div>

          <div className="footer-top-links">
            <div className="footer-link-group">
              <span className="footer-group-label">Product</span>
              <NavLink to="/shortcut-bios">BIOS Flashing</NavLink>
              <NavLink to="/fundamentals">Core Optimizations</NavLink>
              <NavLink to="/step1">Memory Tuning</NavLink>
              <NavLink to="/app-center">Apps</NavLink>
            </div>

            <div className="footer-link-group">
              <span className="footer-group-label">Guide</span>
              <NavLink to="/fundamentals">Fundamentals</NavLink>
              <NavLink to="/shortcut-boot">CPU Core</NavLink>
              <NavLink to="/app-center">App Center</NavLink>
              <NavLink to="/">Home</NavLink>
            </div>

            <div className="footer-link-group">
              <span className="footer-group-label">Source</span>
              <a
                href="https://github.com/cem-deg/Everything-For-Fresh-Windows"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 EFFW — Everything For Fresh Windows</span>
          <a
            className="footer-bottom-gh"
            href="https://github.com/cem-deg/Everything-For-Fresh-Windows"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}
