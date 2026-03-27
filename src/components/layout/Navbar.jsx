"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className="navbar-custom">
            <div className="navbar-inner">
                {/* Left: Logo + Nav Links */}
                <div className="navbar-left">
                    <Link href="/" className="nav-brand" style={{ textDecoration: 'none' }}>
                        <span className="material-symbols-outlined brand-bolt">bolt</span>
                        <span className="brand-logo">EFFW</span>
                    </Link>
                    <nav className="navbar-links">
                        <Link
                            className={`nav-link-custom ${pathname === '/shortcut-bios' ? 'active' : ''}`}
                            href="/shortcut-bios"
                        >
                            BIOS Update
                        </Link>
                        <Link
                            className={`nav-link-custom ${pathname === '/shortcut-boot' ? 'active' : ''}`}
                            href="/shortcut-boot"
                        >
                            CPU Core
                        </Link>
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
                    <Link href="/app-center" className="btn-primary-amber">
                        <i className="bi bi-grid-fill"></i>
                        Apps
                    </Link>
                    <button
                        className="hamburger"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                <Link
                    className={`nav-link-custom ${pathname === '/' ? 'active' : ''}`}
                    href="/" onClick={() => setMobileMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    className={`nav-link-custom ${pathname === '/shortcut-bios' ? 'active' : ''}`}
                    href="/shortcut-bios" onClick={() => setMobileMenuOpen(false)}
                >
                    BIOS Update
                </Link>
                <Link
                    className={`nav-link-custom ${pathname === '/shortcut-boot' ? 'active' : ''}`}
                    href="/shortcut-boot" onClick={() => setMobileMenuOpen(false)}
                >
                    CPU Core
                </Link>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        <i className={`bi ${isDark ? "bi-sun-fill" : "bi-moon-stars-fill"}`}></i>
                    </button>
                    <Link
                        href="/app-center"
                        className="btn-primary-amber"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Apps
                    </Link>
                </div>
            </div>
        </header>
    );
}