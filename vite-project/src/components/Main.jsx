import { Link } from "react-router";

const logos = [
    { el: <i className="bi bi-windows" style={{ fontSize: '1.8rem' }}></i>, alt: 'Windows' },
    { el: <img src="https://cdn.simpleicons.org/nvidia/ffffff" alt="Nvidia" style={{ height: '26px', width: 'auto' }} />, alt: 'Nvidia' },
    { el: <img src="https://cdn.simpleicons.org/intel/ffffff" alt="Intel" style={{ height: '30px', width: 'auto' }} />, alt: 'Intel' },
    { el: <img src="https://cdn.simpleicons.org/amd/ffffff" alt="AMD" style={{ height: '52px', width: 'auto' }} />, alt: 'AMD' },
    { el: <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Micro-Star_International_logo2020.svg" alt="MSI" style={{ height: '15px', width: 'auto' }} />, alt: 'MSI' },
    { el: <img src="https://cdn.simpleicons.org/asus/ffffff" alt="ASUS" style={{ height: '48px', width: 'auto' }} />, alt: 'ASUS' },
    { el: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Gigabyte_Technology_logo_20080107.svg" alt="Gigabyte" style={{ height: '13px', width: 'auto' }} />, alt: 'Gigabyte' },
];

export default function Main() {
    return (
        <main style={{ background: 'var(--bg)' }}>

            {/* ===== HERO SECTION ===== */}
            <section className="hero-section">
                <div className="hero-glow-1"></div>
                <div className="hero-glow-2"></div>
                <div className="container">
                    <div className="hero-grid">

                        {/* Left Content */}
                        <div className="hero-left">
                            <div className="hero-badge">
                                <span className="hero-badge-dot"></span>
                                <span className="hero-badge-text">v2.4 Live Now</span>
                            </div>
                            <h1 className="hero-title">
                                Unlock <span className="hero-title-accent">Peak</span> Performance
                            </h1>
                            <p className="hero-subtitle">
                                Your ultimate step-by-step guide to a fully optimized Windows system — faster speeds, lower latency, rock-solid stability.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/fundamentals" className="btn-hero-primary">
                                    <i className="bi bi-rocket-takeoff"></i>
                                    Get Started
                                </Link>
                                <Link to="/app-center" className="btn-hero-secondary">
                                    <i className="bi bi-grid-fill"></i>
                                    View Apps
                                </Link>
                            </div>
                        </div>

                        {/* Right Image Card */}
                        <div className="hero-right">
                            <div className="hero-image-card">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1VjSMUyOZCIr2DFdeRVUudvkEa5Z5IA-Z5nu9CLNA1nGRhT0C6C4BTeQ8bVxg-mhESct1s1TPkUjeIS-DaT-hYfcLeV-am4_1Rb3TuSg01Qs6CczV7Bl0B-Q3LxaFgqOeQOc7xdqXAxwk9BdiUVPgT2RKTAImonCKstC5JJgdVk5CvmtQburB9yHiz2QFh0ANmXd1moi5eMb0VfwxDA27owMsdyszi1kxyGsYSJTM1Oe8iBqzrdw-8l3fA2Zk77BmBgew_ohPgSkz"
                                    alt="High-performance gaming PC setup with amber lighting"
                                />
                                <div className="hero-image-overlay"></div>
                            </div>
                            <div className="hero-stat-card">
                                <p className="hero-stat-label">Current FPS Boost</p>
                                <div className="hero-stat-value">
                                    <span>+42%</span>
                                    <i className="bi bi-graph-up-arrow" style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '0.3rem' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo Slider */}
                    <div className="logo-slider-wrapper">
                        <p className="logo-slider-label">Compatible with leading hardware brands</p>
                        <div className="logo-slider">
                            <div className="slider-track">
                                {[...logos, ...logos].map((logo, i) => (
                                    <div className="slide" key={i}>{logo.el}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES SECTION ===== */}
            <section className="features-section">
                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-title">Everything You Need to Know</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon-wrap">
                                <i className="bi bi-shield-check"></i>
                            </div>
                            <h3 className="feature-title">Is it safe?</h3>
                            <p className="feature-desc">
                                Absolutely. You won't download anything from our site — we simply guide you through what needs to be done, step by step.
                            </p>
                            <span className="feature-tag">100% Safe</span>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrap">
                                <i className="bi bi-question-circle"></i>
                            </div>
                            <h3 className="feature-title">Why is it free?</h3>
                            <p className="feature-desc">
                                Everyone deserves a fast and efficient system. Our mission is to make high-performance Windows accessible to all — at no cost.
                            </p>
                            <span className="feature-tag">Free Forever</span>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrap">
                                <i className="bi bi-lightning-charge"></i>
                            </div>
                            <h3 className="feature-title">How does it work?</h3>
                            <p className="feature-desc">
                                Our guides are structured step-by-step so you can start with the fundamentals and progress to advanced optimizations at your own pace.
                            </p>
                            <span className="feature-tag">Step-by-Step</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STATS SECTION ===== */}
            <section className="stats-section">
                <div className="section-container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <p className="stat-label">FPS Boost</p>
                            <p className="stat-value">+40%</p>
                            <p className="stat-note" style={{ color: '#22c55e' }}>Verified Peak</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-label">System Latency</p>
                            <p className="stat-value">-15ms</p>
                            <p className="stat-note" style={{ color: 'var(--primary)' }}>Average Delta</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-label">System Stability</p>
                            <p className="stat-value">99.9%</p>
                            <p className="stat-note" style={{ color: '#22c55e' }}>+15% vs Stock</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-label">Active Users</p>
                            <p className="stat-value">50k+</p>
                            <p className="stat-note" style={{ color: 'var(--primary)' }}>Global Reach</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="cta-section">
                <div className="section-container">
                    <div className="cta-box">
                        <h2 className="cta-title">
                            Ready to push your system beyond its limits?
                        </h2>
                        <p className="cta-subtitle">
                            Join thousands of gamers and professionals using EFFW to squeeze every bit of power from their rigs.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/fundamentals" className="btn-cta-dark">
                                <i className="bi bi-rocket-takeoff"></i>
                                Start Optimizing
                            </Link>
                            <Link to="/app-center" className="btn-cta-outline">
                                <i className="bi bi-grid-fill"></i>
                                App Center
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}