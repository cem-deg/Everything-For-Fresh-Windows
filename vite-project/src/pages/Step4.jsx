import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import './Fundamentals.css';

export default function Step4() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedCPU, selectedGPU } = location.state || {}; 

    const handleBack = () => {
        window.scrollTo(0, 0);
        if (selectedGPU === 'nvidia') {
            navigate('/step3-nvidia', { state: { selectedCPU, selectedGPU } });
        } else {
            navigate('/step3-amd', { state: { selectedCPU, selectedGPU } });
        }
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        navigate('/step5', { state: { selectedCPU, selectedGPU } });
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge">Step 4 of 8</div>
                        <div className="step-progress-bar">
                            <div className="step-progress-fill" style={{ width: '50%' }}></div>
                        </div>
                        <h3 className="step-title">
                            <i className="bi bi-windows"></i>
                            Windows Updates
                        </h3>
                        <p className="step-subtitle">Ensure your operating system has the latest security patches and features.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <h4 className="section-subtitle">
                                <i className="bi bi-arrow-repeat"></i> Update Process
                            </h4>
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Press <strong><i className="bi bi-windows"></i> + I</strong> to open Settings.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">2</span>
                                <span>Go to <strong>Windows Update</strong> (or Update & Security).</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span>Click <strong>Check for updates</strong>.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">4</span>
                                <span>Install all updates. Also check <strong>Advanced options</strong> &gt; <strong>Optional updates</strong> for drivers.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">5</span>
                                <span>If prompted, restart your computer.</span>
                            </div>
                        </div>

                        <div className="step-warning">
                            <i className="bi bi-info-circle"></i>
                            <span>This process may take some time and multiple restarts. Be patient.</span>
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
