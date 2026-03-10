import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">
              <span className="material-symbols-outlined footer-brand-bolt">bolt</span>
              EFFW
            </div>
            <p className="footer-brand-desc">
              Windows performans optimizasyonu ve donanım senkronizasyonunda öncü rehber platformu.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links">
              <li><NavLink to="/shortcut-bios">BIOS Flashing</NavLink></li>
              <li><NavLink to="/fundamentals">Core Optimizations</NavLink></li>
              <li><NavLink to="/step1">Memory Tuning</NavLink></li>
              <li><NavLink to="/app-center">Apps</NavLink></li>
            </ul>
          </div>

          {/* Guide */}
          <div>
            <h4 className="footer-col-title">Guide</h4>
            <ul className="footer-links">
              <li><NavLink to="/fundamentals">Fundamentals</NavLink></li>
              <li><NavLink to="/shortcut-boot">CPU Core</NavLink></li>
              <li><NavLink to="/app-center">App Center</NavLink></li>
              <li><NavLink to="/">Home</NavLink></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="footer-col-title">Social</h4>
            <div className="footer-socials">
              <a
                className="social-btn"
                href="https://github.com/cem-deg/Everything-For-Fresh-Windows"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                className="social-btn"
                href="#!"
                aria-label="Discord"
              >
                <i className="bi bi-discord"></i>
              </a>
              <a
                className="social-btn"
                href="#!"
                aria-label="Reddit"
              >
                <i className="bi bi-reddit"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 EFFW Optimization Suite. All rights reserved. High performance guaranteed.
        </div>
      </div>
    </footer>
  );
}
