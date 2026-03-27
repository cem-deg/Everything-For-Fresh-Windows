import React from 'react';
import './Fundamentals.css';

const categories = [
    {
        id: 'browsers',
        label: 'Browsers',
        icon: 'bi-globe2',
        apps: [
            { name: 'Google Chrome', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg', url: 'https://www.google.com/chrome/', desc: 'The world\'s most popular browser — fast and backed by Google\'s ecosystem.', badge: 'Most Popular' },
            { name: 'Mozilla Firefox', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg', url: 'https://www.mozilla.org/firefox/new/', desc: 'Open-source browser with strong privacy features and extensive add-on support.', badge: 'Privacy-focused' },
            { name: 'Microsoft Edge', img: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg', url: 'https://www.microsoft.com/edge', desc: 'Chromium-based browser built into Windows with PDF reader and shopping tools.', badge: 'Built-in' },
            { name: 'Brave', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg', url: 'https://brave.com/', desc: 'Lightning-fast browser with native ad-blocking and crypto wallet.', badge: 'Ad-blocking' },
        ]
    },
    {
        id: 'gaming',
        label: 'Gaming',
        icon: 'bi-controller',
        apps: [
            { name: 'Steam', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', url: 'https://store.steampowered.com/about/', desc: 'The largest PC gaming platform with thousands of titles.', badge: 'Essential' },
            { name: 'Epic Games', img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg', url: 'https://store.epicgames.com/download', desc: 'Access Epic exclusives and weekly free games.', badge: 'Free Games' },
            { name: 'Discord', img: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png', url: 'https://discord.com/download', desc: 'Voice, video and text community platform built for gamers.', badge: 'Essential', imgRadius: true },
            { name: 'MSI Afterburner', img: 'https://cdn.simpleicons.org/msi/FF0000', url: 'https://www.msi.com/Landing/afterburner/graphics-cards', desc: 'GPU performance monitoring and overclocking tool.', badge: 'GPU Tool' },
            { name: 'OBS Studio', img: 'https://cdn.simpleicons.org/obsstudio/302E31', url: 'https://obsproject.com/', desc: 'Free, open-source video recording and live streaming software.', badge: 'Streaming' },
            { name: 'Ubisoft Connect', img: 'https://cdn.simpleicons.org/ubisoft/0091FF', url: 'https://ubisoftconnect.com/', desc: 'Required to play Ubisoft games and access rewards.', badge: null },
            { name: 'EA App', img: 'https://cdn.simpleicons.org/ea/FF4747', url: 'https://www.ea.com/ea-app', desc: 'EA\'s latest desktop app replacing Origin for all EA titles.', badge: null },
            { name: 'Battle.net', img: 'https://cdn.simpleicons.org/battledotnet/148EFF', url: 'https://www.blizzard.com/apps/battle.net/desktop', desc: 'Blizzard\'s launcher for WoW, Overwatch, Diablo and more.', badge: null },
            { name: 'GOG Galaxy', img: 'https://cdn.simpleicons.org/gogdotcom/AA00D7', url: 'https://www.gog.com/galaxy', desc: 'DRM-free gaming client — unify all your libraries in one place.', badge: 'DRM-free' },
        ]
    },
    {
        id: 'media',
        label: 'Media',
        icon: 'bi-play-circle',
        apps: [
            { name: 'VLC Media Player', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg', url: 'https://www.videolan.org/vlc/', desc: 'Free, open-source media player that supports virtually every format.', badge: 'Recommended' },
            { name: 'Spotify', img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg', url: 'https://www.spotify.com/download/windows/', desc: 'Stream millions of songs and podcasts on-demand.', badge: null },
            { name: 'iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg', url: 'https://www.apple.com/itunes/', desc: 'Apple\'s media player and iPhone/iPad sync manager.', badge: null },
        ]
    },
    {
        id: 'utilities',
        label: 'Utilities',
        icon: 'bi-tools',
        apps: [
            { name: '7-Zip', img: '/logos/7zip.svg', url: 'https://www.7-zip.org/', desc: 'High-ratio file compressor. Free, open-source, no ads.', badge: 'Recommended' },
            { name: 'WinRAR', img: '/logos/winrar.svg', url: 'https://www.win-rar.com/download.html', desc: 'Industry-standard archive manager supporting RAR, ZIP and more.', badge: null },
            { name: 'Notepad++', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png', url: 'https://notepad-plus-plus.org/downloads/', desc: 'Feature-rich code/text editor with syntax highlighting and plugin support.', badge: null },
            { name: 'CPU-Z', img: '/logos/cpuz.svg', url: 'https://www.cpuid.com/softwares/cpu-z.html', desc: 'Detailed system info — CPU, RAM, motherboard, and GPU specs at a glance.', badge: null },
        ]
    },
];

export default function AppCenter() {
    return (
        <div className="fundamentals-wrapper">
            <main className="fundamentals-container" style={{ maxWidth: '860px' }}>
                <div className="step-page">

                    {/* ── Header */}
                    <div className="step-header">
                        <div className="step-badge">
                            <i className="bi bi-grid-3x3-gap-fill" style={{ marginRight: '0.4rem' }}></i>
                            App Center
                        </div>
                        <h3 className="step-title">
                            <i className="bi bi-download"></i>
                            Essential Apps
                        </h3>
                        <p className="step-subtitle">
                            Curated collection of must-have applications for every fresh Windows install.
                        </p>
                    </div>

                    {/* ── All Categories at once */}
                    <div className="appcenter-all">
                        {categories.map(cat => (
                            <div key={cat.id} className="appcenter-section">

                                {/* Category header */}
                                <div className="appcenter-section-header">
                                    <i className={`bi ${cat.icon}`}></i>
                                    <span>{cat.label}</span>
                                </div>

                                {/* App rows */}
                                <div className="appcenter-list">
                                    {cat.apps.map((app, i) => (
                                        <a
                                            key={i}
                                            href={app.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="appcenter-row"
                                        >
                                            <div className="appcenter-row-logo">
                                                <img
                                                    src={app.img}
                                                    alt={app.name}
                                                    style={{ borderRadius: app.imgRadius ? '50%' : '0' }}
                                                />
                                            </div>
                                            <div className="appcenter-row-info">
                                                <div className="appcenter-row-name">
                                                    {app.name}
                                                    {app.badge && (
                                                        <span className="appcenter-badge">{app.badge}</span>
                                                    )}
                                                </div>
                                                <div className="appcenter-row-desc">{app.desc}</div>
                                            </div>
                                            <div className="appcenter-row-action">
                                                <span className="appcenter-dl-btn">
                                                    <i className="bi bi-box-arrow-up-right"></i>
                                                    Download
                                                </span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
