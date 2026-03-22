import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import './Fundamentals.css';

export default function Step5() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedCPU, selectedGPU } = location.state || {}; 

    const handleBack = () => {
        window.scrollTo(0, 0);
        navigate('/step4', { state: { selectedCPU, selectedGPU } });
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        navigate('/step6', { state: { selectedCPU, selectedGPU } });
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge">Step 5 of 8</div>
                        <div className="step-progress-bar">
                            <div className="step-progress-fill" style={{ width: '62.5%' }}></div>
                        </div>
                        <h3 className="step-title">
                            <i className="bi bi-lightning-charge"></i>
                            Game Mode & Power Plan
                        </h3>
                        <p className="step-subtitle">Unleash your PC's full potential by removing power limits and enabling gaming optimizations.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <h4 className="section-subtitle">
                                <i className="bi bi-controller"></i> Game Mode
                            </h4>
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Press <strong><i className="bi bi-windows"></i> + I</strong> to open Settings.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">2</span>
                                <span>Go to <strong>Gaming</strong> &gt; <strong>Game Mode</strong> and turn it <strong>ON</strong>.</span>
                            </div>

                            <div className="section-divider"></div>

                            <h4 className="section-subtitle">
                                <i className="bi bi-battery-charging"></i> Power Plan
                            </h4>
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Search for <strong>"Choose a power plan"</strong> in the Start Menu and open it.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">2</span>
                                <span>Select <strong>High Performance</strong>. If you don't see it, click "Show additional plans".</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span>If "High Performance" is missing, you can create a new power plan and select "High Performance" as the template.</span>
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
