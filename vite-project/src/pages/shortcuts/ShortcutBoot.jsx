import React from 'react';
import '../Fundamentals.css';

export default function ShortcutBoot() {
    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge">Quick Access</div>
                        <h3 className="step-title">
                            <i className="bi bi-cpu"></i>
                            CPU Core & Display Settings
                        </h3>
                        <p className="step-subtitle">Unlock your CPU's potential and optimize monitor smoothness.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <h4 className="section-subtitle">
                                <i className="bi bi-cpu"></i> 
                                <span>CPU Core Settings</span>
                                <span className="info-badge" style={{ marginLeft: '10px', fontSize: '0.75rem', padding: '0.25rem 0.75rem', alignSelf: 'center', marginBottom: 0 }}>IMPORTANT</span>
                            </h4>
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Press <strong><i className="bi bi-windows"></i> + R</strong>, type <strong>msconfig</strong>, and hit Enter.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">2</span>
                                <span>Go to the <strong>Boot</strong> tab and click on <strong>Advanced options</strong>.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span>Check the box for <strong>Number of processors</strong> and select the highest number available from the dropdown.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">4</span>
                                <span>Click <strong>OK</strong>, then <strong>Apply</strong> and <strong>OK</strong>. Restart your PC to apply changes.</span>
                            </div>

                            <div className="confirmation-info" style={{ marginTop: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.25rem', fontWeight: 'bold' }}>
                                    <i className="bi bi-rocket-takeoff-fill"></i>
                                    <span>Important Performance Boost</span>
                                </div>
                                <p className="info-text">
                                    Enabling all cores ensures Windows utilizes your CPU's full potential for faster boot times and better responsiveness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
