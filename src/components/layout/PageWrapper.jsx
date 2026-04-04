import React from 'react';
import '../../views/Fundamentals.css';

export default function PageWrapper({ children, containerStyle, pageStyle, noStepPage = false }) {
    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container" style={containerStyle}>
                {noStepPage ? children : (
                    <div className="step-page" style={pageStyle}>
                        {children}
                    </div>
                )}
            </main>
        </div>
    );
}
