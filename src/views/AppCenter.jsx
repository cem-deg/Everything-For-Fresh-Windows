"use client";
import React from 'react';
import './Fundamentals.css';
import PageWrapper from '../components/layout/PageWrapper';

const categories = [
    {
        id: 'browsers',
        label: 'Browsers',
        icon: 'bi-globe2',
        apps: [
            { name: 'Chrome', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg', url: 'https://www.google.com/chrome/' },
            { name: 'Firefox', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg', url: 'https://www.mozilla.org/firefox/new/' },
            { name: 'Edge', img: '/logos/edge.png', url: 'https://www.microsoft.com/edge' },
            { name: 'Brave', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg', url: 'https://brave.com/' },
            { name: 'Opera GX', img: '/logos/operagx.png', url: 'https://www.opera.com/gx' },
            { name: 'Vivaldi', img: '/logos/vivaldi.png', url: 'https://vivaldi.com/' },
            { name: 'Tor Browser', img: '/logos/tor.png', url: 'https://www.torproject.org/' },
        ]
    },
    {
        id: 'gaming',
        label: 'Gaming',
        icon: 'bi-controller',
        apps: [
            { name: 'Steam', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', url: 'https://store.steampowered.com/about/' },
            { name: 'Epic Games', img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg', url: 'https://store.epicgames.com/download' },
            { name: 'Discord', img: '/logos/discord.png', url: 'https://discord.com/download' },
            { name: 'Afterburner', img: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.msi.com&size=128', url: 'https://www.msi.com/Landing/afterburner/graphics-cards' },
            { name: 'OBS Studio', img: '/logos/obs.png', url: 'https://obsproject.com/' },
            { name: 'Xbox', img: '/logos/xbox.png', url: 'https://www.xbox.com/apps/xbox-app-for-pc' },
            { name: 'GeForce Exp', img: '/logos/geforce.png', url: 'https://www.nvidia.com/software/nvidia-app/' },
            { name: 'AMD Adrenalin', img: '/logos/amd.png', url: 'https://www.amd.com/en/technologies/software.html' },
            { name: 'EA App', img: '/logos/ea.png', url: 'https://www.ea.com/ea-app' },
            { name: 'Battle.net', img: '/logos/battlenet.png', url: 'https://www.blizzard.com/apps/battle.net/desktop' },
            { name: 'UBI Connect', img: '/logos/ubisoft.png', url: 'https://ubisoftconnect.com/' },
            { name: 'Riot Client', img: '/logos/riot.png', url: 'https://www.riotgames.com/' },
            { name: 'GOG Galaxy', img: '/logos/gog.png', url: 'https://www.gog.com/galaxy' },
        ]
    },
    {
        id: 'media',
        label: 'Media',
        icon: 'bi-play-circle',
        apps: [
            { name: 'VLC Player', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg', url: 'https://www.videolan.org/vlc/' },
            { name: 'Spotify', img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg', url: 'https://www.spotify.com/download/windows/' },
            { name: 'Netflix', img: '/logos/netflix.png', url: 'https://apps.microsoft.com/detail/9wzdncrfj3tj' },
            { name: 'Prime Video', img: '/logos/primevideo.png', url: 'https://apps.microsoft.com/detail/9p60mg4k1b2m' },
            { name: 'iTunes', img: 'https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg', url: 'https://www.apple.com/itunes/' },
            { name: 'Winamp', img: '/logos/winamp.png', url: 'https://www.winamp.com/' },
            { name: 'DaVinci', img: '/logos/davinci.png', url: 'https://www.blackmagicdesign.com/products/davinciresolve/' },
        ]
    },
    {
        id: 'productivity',
        label: 'Work & Comms',
        icon: 'bi-briefcase',
        apps: [
            { name: 'Zoom', img: '/logos/zoom.png', url: 'https://zoom.us/download' },
            { name: 'Slack', img: '/logos/slack.png', url: 'https://slack.com/downloads/windows' },
            { name: 'MS Teams', img: '/logos/msteams.png', url: 'https://www.microsoft.com/en-us/microsoft-teams/download-app' },
            { name: 'WhatsApp', img: '/logos/whatsapp.png', url: 'https://www.whatsapp.com/download' },
            { name: 'Telegram', img: '/logos/telegram.png', url: 'https://desktop.telegram.org/' },
            { name: 'VS Code', img: '/logos/vscode.png', url: 'https://code.visualstudio.com/' },
            { name: 'PowerToys', img: '/logos/powertoys.png', url: 'https://learn.microsoft.com/en-us/windows/powertoys/' },
            { name: 'Notion', img: '/logos/notion.png', url: 'https://www.notion.so/desktop' },
            { name: 'AnyDesk', img: '/logos/anydesk.png', url: 'https://anydesk.com/' },
        ]
    },
    {
        id: 'utilities',
        label: 'Utilities',
        icon: 'bi-tools',
        apps: [
            { name: '7-Zip', img: '/logos/7zip.svg', url: 'https://www.7-zip.org/' },
            { name: 'WinRAR', img: '/logos/winrar.svg', url: 'https://www.win-rar.com/download.html' },
            { name: 'Notepad++', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png', url: 'https://notepad-plus-plus.org/downloads/' },
            { name: 'CPU-Z', img: '/logos/cpuz.svg', url: 'https://www.cpuid.com/softwares/cpu-z.html' },
            { name: 'HWMonitor', img: '/logos/hwmonitor.png', url: 'https://www.cpuid.com/softwares/hwmonitor.html' },
            { name: 'Rufus', img: '/logos/rufus.png', url: 'https://rufus.ie/' },
            { name: 'qBittorrent', img: '/logos/qbittorrent.png', url: 'https://www.qbittorrent.org/download' },
            { name: 'Bitwarden', img: '/logos/bitwarden.png', url: 'https://bitwarden.com/download/' },
            { name: 'Malwarebytes', img: '/logos/malwarebytes.png', url: 'https://www.malwarebytes.com/' },
            { name: 'Everything', img: '/logos/everything.png', url: 'https://www.voidtools.com/' },
        ]
    },
];

export default function AppCenter() {
    return (
        <PageWrapper containerStyle={{ maxWidth: '1500px' }} pageStyle={{ maxWidth: 'none' }}>

                    {/* ── Header ── */}
                    <div className="step-header" style={{ marginBottom: '1.5rem' }}>
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

                    {/* ── Category Quick-Jump Bar ── */}
                    <div className="category-jump-bar">
                        {categories.map(cat => (
                            <a key={`jump-${cat.id}`} href={`#appcat-${cat.id}`} className="jump-link">
                                <i className={`bi ${cat.icon}`}></i>
                                <span>{cat.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* ── All Categories at once - Unified Grid ── */}
                    <div className="unified-app-grid">
                        {categories.map(cat => (
                            <React.Fragment key={cat.id}>
                                {/* Category Header spanning full width */}
                                <div id={`appcat-${cat.id}`} className="unified-category-header">
                                    <i className={`bi ${cat.icon}`}></i>
                                    <span>{cat.label}</span>
                                </div>

                                {/* Apps in the shared grid */}
                                {cat.apps.map((app, i) => (
                                    <a
                                        key={i}
                                        href={app.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="dense-app-tile"
                                        title={app.name}
                                    >
                                        <div className="dense-app-logo">
                                            <img
                                                src={app.img}
                                                alt={app.name}
                                                style={{ borderRadius: app.imgRadius ? '50%' : '10px' }}
                                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<i class="bi bi-box" style="font-size:1.5rem; color:var(--text-muted)"></i>'; }}
                                            />
                                        </div>
                                        <div className="dense-app-name">
                                            {app.name}
                                        </div>
                                    </a>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>

        </PageWrapper>
    );
}
