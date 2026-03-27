import React from 'react';

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

export function HardwareSelection({ selectedCPU, onSelectCPU, selectedGPU, onSelectGPU, canProceed, onProceed }) {
    return (
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
                                    onClick={() => onSelectCPU(opt.id)}
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
                                    onClick={() => onSelectGPU(opt.id)}
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
                    onClick={onProceed}
                >
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    {canProceed
                        ? 'Continue — Review My Setup'
                        : 'Select CPU & GPU to continue'}
                </button>
            </div>
        </>
    );
}
