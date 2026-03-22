import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import './Fundamentals.css';

export default function Step2Intel() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedCPU, selectedGPU } = location.state || {}; 

    const handleBack = () => {
        window.scrollTo(0, 0);
        navigate('/step1', { state: { selectedCPU, selectedGPU } });
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        if (selectedGPU === 'nvidia') {
            navigate('/step3-nvidia', { state: { selectedCPU, selectedGPU } });
        } else {
            navigate('/step3-amd', { state: { selectedCPU, selectedGPU } });
        }
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge">Step 2 of 8</div>
                        <div className="step-progress-bar">
                            <div className="step-progress-fill" style={{ width: '25%' }}></div>
                        </div>
                        <h3 className="step-title">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" 
                                alt="Intel" 
                                style={{ height: '32px', width: 'auto', filter: 'var(--logo-filter)' }} 
                            />
                            Chipset Drivers
                        </h3>
                        <p className="step-subtitle">Install the latest chipset drivers for optimal communication between your CPU and motherboard.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Visit the official <strong>Intel Driver & Support Assistant</strong> page.</span>
                            </div>
                            <div className="instruction-item" style={{display: 'block'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                    <span className="instruction-number">2</span>
                                    <span>Download and run the tool.</span>
                                </div>
                                <a 
                                    href="https://www.intel.com/content/www/us/en/support/detect.html" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bios-link"
                                    style={{marginLeft: 'calc(28px + 1rem)'}}
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                    Go to Intel Support
                                </a>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span>The tool will automatically detect and download the latest chipset drivers.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">4</span>
                                <span>Install the recommended drivers and restart your computer.</span>
                            </div>
                        </div>

                        <div className="step-warning">
                            <i className="bi bi-info-circle"></i>
                            <span>Chipset drivers are crucial for system stability and power management.</span>
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
