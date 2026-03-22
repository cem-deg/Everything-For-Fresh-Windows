import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import './Fundamentals.css';

export default function Step3AMD() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedCPU, selectedGPU } = location.state || {}; 

    const handleBack = () => {
        window.scrollTo(0, 0);
        // Navigate back to the correct Step 2 page based on CPU selection
        if (selectedCPU === 'amd') {
            navigate('/step2-amd', { state: { selectedCPU, selectedGPU } });
        } else {
            navigate('/step2-intel', { state: { selectedCPU, selectedGPU } });
        }
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        // Placeholder for Step 4
        navigate('/step4', { state: { selectedCPU, selectedGPU } });
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge">Step 3 of 8</div>
                        <div className="step-progress-bar">
                            <div className="step-progress-fill" style={{ width: '37.5%' }}></div>
                        </div>
                        <h3 className="step-title">
                            <i className="bi bi-amd"></i>
                            AMD Graphics Drivers
                        </h3>
                        <p className="step-subtitle">Install the latest Adrenalin Edition for optimal gaming performance.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Visit the official <strong>AMD Software</strong> page.</span>
                            </div>
                            <div className="instruction-item" style={{display: 'block'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                    <span className="instruction-number">2</span>
                                    <span>Click it on the Download Software button.</span>
                                </div>
                                <a 
                                    href="https://www.amd.com/en/products/software/adrenalin.html" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bios-link"
                                    style={{marginLeft: 'calc(28px + 1rem)'}}
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                    Go to AMD Software
                                </a>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span>You will be redirected to the <strong>AMD Software download page.</strong></span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">4</span>
                                <span>You don't need to select anything. Just download drivers for your current OS. (Windows or Linux)</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">5</span>
                                <span>Run the installer.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">6</span>
                                <span>App will recognize your GPU and guide you to update it.</span>
                            </div>
                        </div>

                        <div className="step-warning">
                            <i className="bi bi-info-circle"></i>
                            <span>During GPU Driver installation, your screen will flicker on and off. This is normal.</span>
                        </div>

                        <div className="step-navigation" style={{ marginTop: '2rem' }}>
                            <button className="step-nav-btn prev-btn" onClick={handleBack}>
                                <i className="bi bi-arrow-left"></i>
                                Back
                            </button>
                            <button className="step-nav-btn next-btn" onClick={handleNext}>
                                Next Step
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
