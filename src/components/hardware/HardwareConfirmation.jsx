import React from 'react';

export function HardwareConfirmation({ selectedCPU, selectedGPU, onBack, onConfirm }) {
    return (
        <div className="confirmation-screen">
            <div className="confirmation-card">
                <div className="confirmation-icon">
                    <i className="bi bi-check-circle"></i>
                </div>
                <h3 className="confirmation-title">Your Selection</h3>

                <div className="confirmation-selections">
                    <div className="confirmation-item">
                        <span className="confirmation-label">Processor</span>
                        <span className="confirmation-value">
                            {selectedCPU === 'intel' ? (
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg"
                                    alt="Intel"
                                    className="confirmation-intel-logo"
                                />
                            ) : (
                                <><i className="bi bi-amd"></i> AMD</>
                            )}
                        </span>
                    </div>
                    <div className="confirmation-item">
                        <span className="confirmation-label">Graphics Card</span>
                        <span className="confirmation-value">
                            <i className={selectedGPU === 'nvidia' ? 'bi bi-nvidia' : 'bi bi-amd'}></i>
                            {selectedGPU === 'nvidia' ? 'NVIDIA' : 'AMD'}
                        </span>
                    </div>
                </div>

                <div className="confirmation-info">
                    <div className="info-badge">
                        <i className="bi bi-list-ol"></i>
                        <span>8 Steps</span>
                    </div>
                    <p className="info-text">
                        We'll guide you through <strong>8 optimization steps</strong> tailored to your hardware. Follow each step carefully for best results.
                    </p>
                </div>

                <div className="confirmation-buttons">
                    <button className="back-btn" onClick={onBack}>
                        <i className="bi bi-arrow-left"></i> Change Setup
                    </button>
                    <button className="start-btn" onClick={onConfirm}>
                        Start Optimization
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
