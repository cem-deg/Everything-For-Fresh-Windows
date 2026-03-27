"use client";
import React, { useContext, useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAppContext } from '../../context/AppContext';
import { getStepData } from '../../data/stepsData';
import '../../views/Fundamentals.css';
import PageWrapper from '../../components/layout/PageWrapper';

export default function StepRenderer() {
    const { id } = useParams();
    const router = useRouter();
    const { selectedCPU, selectedGPU } = useAppContext();
    const [selectedBrand, setSelectedBrand] = useState(null);

    // Redirect to fundamentals if context is missing
    useEffect(() => {
        if (!selectedCPU || !selectedGPU) {
            router.push('/fundamentals');
        }
    }, [selectedCPU, selectedGPU, router]);

    if (!selectedCPU || !selectedGPU) return null;

    const currentStep = getStepData(id, selectedCPU, selectedGPU, { selectedBrand, setSelectedBrand });

    if (!currentStep) {
        return <div>Step not found</div>;
    }

    const handleBack = () => {
        window.scrollTo(0, 0);
        if (id === '1') {
            router.push('/fundamentals');
        } else {
            router.push(`/step/${parseInt(id) - 1}`);
        }
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        if (currentStep.nextStep === 'completion') {
            router.push('/completion');
        } else {
            router.push(`/step/${currentStep.nextStep}`);
        }
    };

    return (
        <PageWrapper>
                    <div className="step-header">
                        <div className="step-badge">{currentStep.badge}</div>
                        <div className="step-progress-bar">
                            <div className="step-progress-fill" style={{ width: currentStep.progress }}></div>
                        </div>
                        <h3 className="step-title">{currentStep.title}</h3>
                        <p className="step-subtitle">{currentStep.subtitle}</p>
                    </div>

                    <div className="step-content-card">
                        {currentStep.content}

                        {currentStep.warning && (
                            <div className={`step-warning ${currentStep.warning.type === 'critical' ? 'critical' : ''}`}>
                                <i className={`bi ${currentStep.warning.icon}`}></i>
                                <span>{currentStep.warning.text}</span>
                            </div>
                        )}

                        <div className="step-navigation" style={{ marginTop: '2rem' }}>
                            <button className="step-nav-btn prev-btn" onClick={handleBack}>
                                <i className="bi bi-arrow-left"></i>
                                Back
                            </button>
                            <button className={`step-nav-btn next-btn ${currentStep.nextStep === 'completion' ? 'finish-btn' : ''}`} onClick={handleNext}>
                                {currentStep.nextStep === 'completion' ? <><i className="bi bi-check-lg"></i> Finish</> : <>Next Step <i className="bi bi-arrow-right"></i></>}
                            </button>
                        </div>
                    </div>
        </PageWrapper>
    );
}
