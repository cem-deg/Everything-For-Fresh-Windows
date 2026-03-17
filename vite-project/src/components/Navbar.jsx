import { useState } from "react";
import { NavLink } from "react-router";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="navbar-custom">
            <div className="navbar-inner">
                {/* Left: Logo + Nav Links */}
                <div className="navbar-left">
                    <NavLink to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
                        <span className="material-symbols-outlined brand-bolt">bolt</span>
                        <span className="brand-logo">EFFW</span>
                    </NavLink>
                    <nav className="navbar-links">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-link-custom active" : "nav-link-custom"
                            }
                            to="/shortcut-bios"
                        >
                            BIOS Update
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "nav-link-custom active" : "nav-link-custom"
                            }
                            to="/shortcut-boot"
                        >
                            CPU Core
                        </NavLink>
                    </nav>
                </div>

                {/* Right: Theme Toggle + Apps CTA */}
                <div className="navbar-right">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        <i className={`bi ${isDark ? "bi-sun-fill" : "bi-moon-stars-fill"}`}></i>
                    </button>
                    <NavLink to="/app-center" className="btn-primary-amber">
                        <i className="bi bi-grid-fill"></i>
                        Apps
                    </NavLink>
                    <button
                        className="hamburger"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-link-custom active" : "nav-link-custom"
                    }
                    to="/" end onClick={() => setMobileOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-link-custom active" : "nav-link-custom"
                    }
                    to="/shortcut-bios" onClick={() => setMobileOpen(false)}
                >
                    BIOS Update
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-link-custom active" : "nav-link-custom"
                    }
                    to="/shortcut-boot" onClick={() => setMobileOpen(false)}
                >
                    CPU Core
                </NavLink>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        <i className={`bi ${isDark ? "bi-sun-fill" : "bi-moon-stars-fill"}`}></i>
                    </button>
                    <NavLink
                        to="/app-center"
                        className="btn-primary-amber"
                        onClick={() => setMobileOpen(false)}
                    >
                        Apps
                    </NavLink>
                </div>
            </div>
        </header>
    );
}