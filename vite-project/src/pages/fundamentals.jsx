import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import './Fundamentals.css';

const cpuOptions = [
    {
        id: 'intel',
        label: 'Intel',
        icon: null,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg',
        imgClass: 'intel-logo-hw',
        desc: 'Core i-series',
    },
    {
        id: 'amd',
        label: 'AMD',
        icon: 'bi bi-amd',
        img: null,
        desc: 'Ryzen series',
    },
];

const gpuOptions = [
    {
        id: 'nvidia',
        label: 'NVIDIA',
        icon: 'bi bi-nvidia',
        img: null,
        desc: 'GeForce / RTX',
    },
    {
        id: 'amd',
        label: 'AMD',
        icon: 'bi bi-amd',
        img: null,
        desc: 'Radeon RX',
    },
];

export default function Fundamentals() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedCPU, setSelectedCPU] = useState(location.state?.selectedCPU || null);
    const [selectedGPU, setSelectedGPU] = useState(location.state?.selectedGPU || null);
    const [step, setStep] = useState(location.state?.selectedCPU && location.state?.selectedGPU ? 2 : 1);

    const handleSelectCPU = (cpu) => setSelectedCPU(cpu);
    const handleSelectGPU = (gpu) => setSelectedGPU(gpu);

    const handleProceedToConfirmation = () => {
        if (selectedCPU && selectedGPU) setStep(2);
    };

    const handleBackToSelection = () => setStep(1);

    const handleConfirm = () => {
        navigate('/step1', { state: { selectedCPU, selectedGPU } });
    };

    const canProceed = selectedCPU && selectedGPU;

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">

                {step === 1 ? (
                    <>
                        {/* ── Page Header */}
                        <div className="step-flow-header">
                            <div className="step-badge" style={{ marginBottom: '0.75rem' }}>
                                <i className="bi bi-cpu" style={{ marginRight: '0.4rem' }}></i>
                                Hardware Setup
                            </div>
                            <h2 className="step-flow-title">Tell us about your system</h2>
                            <p className="step-flow-subtitle">
                                Select your CPU and GPU so we can tailor the guide to your exact hardware — no guesswork needed.
                            </p>
                        </div>

                        {/* ── Selection Cards */}
                        <div className="hw-selection-wrapper">
                            <div className="hw-selection-grid">

                                {/* CPU Card */}
                                <div className="hw-selection-card">
                                    <div className="hw-card-label">
                                        <i className="bi bi-cpu-fill"></i>
                                        Processor (CPU)
                                    </div>
                                    <div className="hw-btn-group">
                                        {cpuOptions.map(opt => (
                                            <button
                                                key={opt.id}
                                                className={`hw-btn ${selectedCPU === opt.id ? 'selected' : ''}`}
                                                onClick={() => handleSelectCPU(opt.id)}
                                                title={opt.label}
                                            >
                                                {selectedCPU === opt.id && (
                                                    <span className="hw-btn-check">
                                                        <i className="bi bi-check-lg"></i>
                                                    </span>
                                                )}
                                                <div className="hw-btn-logo">
                                                    {opt.img ? (
                                                        <img src={opt.img} alt={opt.label} />
                                                    ) : (
                                                        <i className={opt.icon}></i>
                                                    )}
                                                </div>
                                                <span className="hw-btn-label">{opt.label}</span>
                                                <span className="hw-btn-desc" style={{
                                                    color: selectedCPU === opt.id ? 'rgba(17,17,17,0.6)' : '#b0b0b0'
                                                }}>
                                                    {opt.desc}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* GPU Card */}
                                <div className="hw-selection-card">
                                    <div className="hw-card-label">
                                        <i className="bi bi-gpu-card"></i>
                                        Graphics Card (GPU)
                                    </div>
                                    <div className="hw-btn-group">
                                        {gpuOptions.map(opt => (
                                            <button
                                                key={opt.id}
                                                className={`hw-btn ${selectedGPU === opt.id ? 'selected' : ''}`}
                                                onClick={() => handleSelectGPU(opt.id)}
                                                title={opt.label}
                                            >
                                                {selectedGPU === opt.id && (
                                                    <span className="hw-btn-check">
                                                        <i className="bi bi-check-lg"></i>
                                                    </span>
                                                )}
                                                <div className="hw-btn-logo">
                                                    {opt.img ? (
                                                        <img src={opt.img} alt={opt.label} />
                                                    ) : (
                                                        <i className={opt.icon}></i>
                                                    )}
                                                </div>
                                                <span className="hw-btn-label">{opt.label}</span>
                                                <span style={{ fontSize: '0.7rem', position: 'relative', zIndex: 1, transition: 'color 0.25s',
                                                    color: selectedGPU === opt.id ? 'rgba(17,17,17,0.6)' : '#b0b0b0'
                                                }}>
                                                    {opt.desc}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* ── Live Summary Strip */}
                            <div className="hw-summary-strip">
                                <div className="hw-summary-item">
                                    <i className="bi bi-cpu-fill"></i>
                                    {selectedCPU
                                        ? <strong>{selectedCPU === 'intel' ? 'Intel' : 'AMD'} CPU</strong>
                                        : <span className="hw-summary-pending">No CPU selected</span>}
                                </div>
                                <span className="hw-summary-sep">+</span>
                                <div className="hw-summary-item">
                                    <i className="bi bi-gpu-card"></i>
                                    {selectedGPU
                                        ? <strong>{selectedGPU === 'nvidia' ? 'NVIDIA' : 'AMD'} GPU</strong>
                                        : <span className="hw-summary-pending">No GPU selected</span>}
                                </div>
                                {canProceed && (
                                    <>
                                        <span className="hw-summary-sep" style={{ color: 'var(--primary)' }}>→</span>
                                        <div className="hw-summary-item" style={{ color: 'var(--primary)' }}>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <strong>Ready to optimize!</strong>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* ── CTA */}
                            <button
                                className="hw-proceed-btn"
                                disabled={!canProceed}
                                onClick={handleProceedToConfirmation}
                            >
                                <i className="bi bi-arrow-right-circle-fill"></i>
                                {canProceed
                                    ? 'Continue — Review My Setup'
                                    : 'Select CPU & GPU to continue'}
                            </button>
                        </div>
                    </>
                ) : (
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
                                <button className="back-btn" onClick={handleBackToSelection}>
                                    <i className="bi bi-arrow-left"></i> Change Setup
                                </button>
                                <button className="start-btn" onClick={handleConfirm}>
                                    Start Optimization
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}