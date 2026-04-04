"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/AppContext";
import PageWrapper from "../components/layout/PageWrapper";
import { HardwareSelection } from "../components/hardware/HardwareSelection";
import { HardwareConfirmation } from "../components/hardware/HardwareConfirmation";
import './Fundamentals.css';

export default function Fundamentals() {
    const router = useRouter();
    const { selectedCPU, setSelectedCPU, selectedGPU, setSelectedGPU } = useAppContext();
    const [step, setStep] = useState(selectedCPU && selectedGPU ? 2 : 1);

    const canProceed = selectedCPU && selectedGPU;

    const handleConfirm = () => {
        router.push('/step/1');
    };

    return (
        <PageWrapper noStepPage={true}>
            {step === 1 ? (
                <HardwareSelection
                    selectedCPU={selectedCPU}
                    onSelectCPU={setSelectedCPU}
                    selectedGPU={selectedGPU}
                    onSelectGPU={setSelectedGPU}
                    canProceed={canProceed}
                    onProceed={() => {
                        window.scrollTo(0, 0);
                        setStep(2);
                    }}
                />
            ) : (
                <HardwareConfirmation
                    selectedCPU={selectedCPU}
                    selectedGPU={selectedGPU}
                    onBack={() => {
                        window.scrollTo(0, 0);
                        setStep(1);
                    }}
                    onConfirm={handleConfirm}
                />
            )}
        </PageWrapper>
    );
}