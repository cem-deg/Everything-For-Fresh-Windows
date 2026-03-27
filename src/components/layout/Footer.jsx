export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-compact">

        {/* Left: brand */}
        <div className="footer-brand-name">
          <span className="material-symbols-outlined footer-brand-bolt">bolt</span>
          EFFW
        </div>

        {/* Center: copyright */}
        <span className="footer-copy">© 2026 EFFW — Everything For Fresh Windows</span>

        {/* Right: GitHub icon only */}
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
    </footer>
  );
}
