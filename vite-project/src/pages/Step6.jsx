import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import './Fundamentals.css';

export default function Step6() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedCPU, selectedGPU } = location.state || {}; 

    const handleBack = () => {
        window.scrollTo(0, 0);
        navigate('/step5', { state: { selectedCPU, selectedGPU } });
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        navigate('/step7', { state: { selectedCPU, selectedGPU } });
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge">Step 6 of 8</div>
                        <div className="step-progress-bar">
                            <div className="step-progress-fill" style={{ width: '75%' }}></div>
                        </div>
                        <h3 className="step-title">
                            <i className="bi bi-rocket-takeoff"></i>
                            Startup & Background Apps
                        </h3>
                        <p className="step-subtitle">Disable unnecessary programs that slow down your boot time.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <h4 className="section-subtitle">
                                <i className="bi bi-power"></i> Disable Startup Apps
                            </h4>
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Right-click the <strong>Taskbar</strong> and select <strong>Task Manager</strong> (or press Ctrl + Shift + Esc).</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">2</span>
                                <span>Go to the <strong>Startup apps</strong> tab (look for the speedometer icon).</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span>Right-click on apps you don't need immediately at login (e.g., Skype, Spotify, Cortana) and select <strong>Disable</strong>.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">4</span>
                                <span><strong>Do not disable</strong> drivers or antivirus software (e.g., Realtek Audio, Windows Security).</span>
                            </div>

                            <div className="step-warning repeat-warning" style={{ marginTop: '1rem', marginBottom: '0' }}>
                                <i className="bi bi-arrow-repeat"></i>
                                <span>Don't forget to repeat this step after finishing all the steps.</span>
                            </div>

                            <div className="section-divider"></div>

                            <h4 className="section-subtitle">
                                <i className="bi bi-window-stack"></i> Background Apps
                            </h4>
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Press <strong><i className="bi bi-windows"></i> + I</strong> to open Settings.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">2</span>
                                <span><strong>Windows 10:</strong> Go to <strong>Privacy</strong> &gt; <strong>Background apps</strong> and create a toggle to turn it <strong>OFF</strong>.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span><strong>Windows 11:</strong> Go to <strong>Apps</strong> &gt; <strong>Installed apps</strong>, click the three dots next to an app &gt; <strong>Advanced options</strong> &gt; set "Background apps permissions" to <strong>Never</strong>.</span>
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
