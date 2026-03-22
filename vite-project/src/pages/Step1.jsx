import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import './Fundamentals.css'; // Reusing the same CSS

export default function Step1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedCPU, selectedGPU } = location.state || {}; // Retrieve state passed from previous page
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleBack = () => {
        window.scrollTo(0, 0);
        navigate('/fundamentals');
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        if (selectedCPU === 'amd') {
            navigate('/step2-amd', { state: { selectedCPU, selectedGPU } });
        } else {
            navigate('/step2-intel', { state: { selectedCPU, selectedGPU } });
        }
    };

    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container">
                <div className="step-page">
                    <div className="step-header">
                        <div className="step-badge">Step 1 of 8</div>
                        <div className="step-progress-bar">
                            <div className="step-progress-fill" style={{ width: '12.5%' }}></div>
                        </div>
                        <h3 className="step-title">
                            <i className="bi bi-motherboard"></i>
                            BIOS Update
                        </h3>
                        <p className="step-subtitle">Keep your motherboard firmware up to date for stability and performance</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <div className="instruction-item">
                                <span className="instruction-number">1</span>
                                <span>Find your <strong>motherboard model</strong> (check manual or use CPU-Z)</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">2</span>
                                <div className="instruction-with-brands" style={{ textAlign: 'left', alignItems: 'flex-start', width: '100%' }}>
                                    <span>Select your <strong>motherboard brand</strong></span>
                                    <div className="brand-buttons">
                                        <button 
                                            className={`brand-btn ${selectedBrand === 'asus' ? 'active' : ''}`}
                                            onClick={() => setSelectedBrand('asus')}
                                            title="ASUS"
                                        >
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" 
                                                alt="ASUS" 
                                                className="brand-logo"
                                            />
                                        </button>
                                        <button 
                                            className={`brand-btn ${selectedBrand === 'msi' ? 'active' : ''}`}
                                            onClick={() => setSelectedBrand('msi')}
                                            title="MSI"
                                        >
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/4/47/Micro-Star_International_logo2020.svg" 
                                                alt="MSI" 
                                                className="brand-logo"
                                            />
                                        </button>
                                        <button 
                                            className={`brand-btn ${selectedBrand === 'gigabyte' ? 'active' : ''}`}
                                            onClick={() => setSelectedBrand('gigabyte')}
                                            title="Gigabyte"
                                        >
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Gigabyte_Technology_logo_20080107.svg" 
                                                alt="Gigabyte" 
                                                className="brand-logo"
                                            />
                                        </button>
                                        <button 
                                            className={`brand-btn ${selectedBrand === 'asrock' ? 'active' : ''}`}
                                            onClick={() => setSelectedBrand('asrock')}
                                            title="ASRock"
                                        >
                                            <img 
                                                src="https://upload.wikimedia.org/wikipedia/commons/0/01/ASRock_Logo.svg" 
                                                alt="ASRock" 
                                                className="brand-logo" 
                                            />
                                        </button>
                                    </div>
                                    {selectedBrand && (
                                        <a 
                                            href={
                                                selectedBrand === 'asus' ? 'https://www.asus.com/support/download-center/' :
                                                selectedBrand === 'msi' ? 'https://www.msi.com/support/download' :
                                                selectedBrand === 'gigabyte' ? 'https://www.gigabyte.com/Support' :
                                                'https://www.asrock.com/support/index.asp'
                                            }
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bios-link"
                                        >
                                            <i className="bi bi-box-arrow-up-right"></i>
                                            Go to {selectedBrand.toUpperCase()} BIOS Download Page
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">3</span>
                                <span>Search for your <strong>motherboard model</strong> and download BIOS file.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">4</span>
                                <span>Drag that zip file to empty <strong>USB</strong> drive. Right click the file and select <strong>"Extract All"</strong> to extract the contents to the USB drive.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">5</span>
                                <span>Insert the USB drive into your PC and restart it.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">6</span>
                                <span>Press the appropriate key <strong>(F2 or Del)</strong> to enter BIOS setup.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">7</span>
                                <span>Once in BIOS, navigate to the <strong>Update</strong> or <strong>Flash</strong> section.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">8</span>
                                <span>Select the BIOS file from the USB drive and flash it.</span>
                            </div>
                            <div className="instruction-item">
                                <span className="instruction-number">9</span>
                                <span>After flashing, the system will automatically restart. You just need to wait and it will be updated.</span>
                            </div>
                        </div>

                        <div className="step-warning critical">
                            <i className="bi bi-exclamation-triangle"></i>
                            <span>Don't turn off your PC during BIOS update. This can brick your motherboard.</span>
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
