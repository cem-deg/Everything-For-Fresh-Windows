import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import './Fundamentals.css';

export default function Step7() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedCPU, selectedGPU } = location.state || {}; 

    const handleBack = () => {
        window.scrollTo(0, 0);
        navigate('/step6', { state: { selectedCPU, selectedGPU } });
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        navigate('/step8', { state: { selectedCPU, selectedGPU } });
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge">Step 7 of 8</div>
                        <div className="step-progress-bar">
                            <div className="step-progress-fill" style={{ width: '87.5%' }}></div>
                        </div>
                        <h3 className="step-title">
                            <i className="bi bi-palette"></i>
                            Visual Effects
                        </h3>
                        <p className="step-subtitle">Reduce system overhead by disabling unnecessary animations and transparency.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <h4 className="section-subtitle">
                                <i className="bi bi-window-fullscreen"></i> Disable Transparency
                            </h4>
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Open <strong>Settings</strong> and go to <strong>Personalization</strong> &gt; <strong>Colors</strong>.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">2</span>
                                <span>Turn <strong>Transparency effects</strong> to <strong>OFF</strong>. This reduces GPU usage for desktop rendering.</span>
                            </div>

                            <div className="section-divider"></div>

                            <h4 className="section-subtitle">
                                <i className="bi bi-speedometer2"></i> Performance Options (Optional)
                            </h4>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span>Search for <strong>"Adjust the appearance and performance of Windows"</strong> in the Start Menu.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">4</span>
                                <span>Select <strong>Adjust for best performance</strong>.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">5</span>
                                <span>Re-check the following boxes to keep Windows looking decent:
                                    <ul style={{ marginTop: '0.5rem', marginBottom: '0', paddingLeft: '1.5rem', opacity: '0.9' }}>
                                        <li>Show thumbnails instead of icons</li>
                                        <li>Smooth edges of screen fonts</li>
                                    </ul>
                                </span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">6</span>
                                <span>Click <strong>Apply</strong> and <strong>OK</strong>.</span>
                            </div>
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
