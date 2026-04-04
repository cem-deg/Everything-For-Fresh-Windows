"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import './Fundamentals.css';
import PageWrapper from '../components/layout/PageWrapper';

export default function Completion() {
    const router = useRouter();

    const handleHome = () => {
        window.scrollTo(0, 0);
        router.push('/');
    };

    const essentialApps = [
        {
            name: 'Steam',
            icon: 'bi-steam',
            url: 'https://store.steampowered.com/about/',
            description: 'The ultimate destination for playing, discussing, and creating games.',
        },
        {
            name: 'Spotify',
            icon: 'bi-spotify',
            url: 'https://www.spotify.com/download/windows/',
            description: 'Digital music service that gives you access to millions of songs.',
        },
        {
            name: 'Discord',
            icon: 'bi-discord',
            url: 'https://discord.com/download',
            description: 'Voice, video and text communication platform.',
        }
    ];

    const handleMoreApps = () => {
        window.scrollTo(0, 0);
        router.push('/app-center');
    };

    return (
        <PageWrapper>

                    {/* ── Completion Header */}
                    <div className="step-header">
                        <div className="step-badge" style={{ background: 'var(--primary)', color: '#111' }}>
                            <i className="bi bi-check-lg" style={{ marginRight: '0.3rem' }}></i>
                            Completed
                        </div>
                        <div className="step-progress-bar" style={{ marginTop: '0.5rem' }}>
                            <div className="step-progress-fill" style={{ width: '100%' }}></div>
                        </div>
                        <h3 className="step-title" style={{ marginTop: '1rem' }}>
                            <i className="bi bi-trophy-fill" style={{ color: 'var(--primary)' }}></i>
                            All Steps Completed!
                        </h3>
                        <p className="step-subtitle">Your system is now optimized for peak performance.</p>
                    </div>

                    <div className="step-content-card">
                        <div className="step-instructions">
                            <h4 className="section-subtitle">
                                <i className="bi bi-stars"></i> Recommended Software
                            </h4>

                            <div className="essentials-grid">
                                {essentialApps.map((app, index) => (
                                    <a
                                        key={index}
                                        href={app.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="essential-app-card"
                                    >
                                        <div className="app-icon-wrapper">
                                            <i className={`bi ${app.icon}`}></i>
                                        </div>
                                        <div className="app-info">
                                            <h5>{app.name}</h5>
                                            <p>{app.description}</p>
                                        </div>
                                        <i className="bi bi-box-arrow-up-right external-link-icon"></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="step-navigation" style={{ marginTop: '2rem', justifyContent: 'center', gap: '1rem' }}>
                            <button className="step-nav-btn prev-btn" onClick={handleHome}>
                                <i className="bi bi-house"></i>
                                Back to Home
                            </button>
                            <button className="start-btn" onClick={handleMoreApps} style={{ margin: 0 }}>
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                                View More Apps
                            </button>
                        </div>
                    </div>
        </PageWrapper>
    );
}
