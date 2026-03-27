import fs from 'fs';
import https from 'https';
import path from 'path';

const logosDir = path.join(process.cwd(), 'public', 'logos');
if (!fs.existsSync(logosDir)) {
    fs.mkdirSync(logosDir, { recursive: true });
}

const appsToDownload = [
    { name: 'edge', url: 'microsoft.com/edge' },
    { name: 'xbox', url: 'xbox.com' },
    { name: 'primevideo', url: 'primevideo.com' },
    { name: 'winamp', url: 'winamp.com' },
    { name: 'davinci', url: 'blackmagicdesign.com' },
    { name: 'slack', url: 'slack.com' },
    { name: 'msteams', url: 'microsoft.com/en-us/microsoft-teams' },
    { name: 'vscode', url: 'code.visualstudio.com' },
    { name: 'powertoys', url: 'learn.microsoft.com' },
    { name: 'anydesk', url: 'anydesk.com' },
    { name: 'hwmonitor', url: 'cpuid.com' },
    { name: 'rufus', url: 'rufus.ie' },
    { name: 'everything', url: 'voidtools.com' },
    { name: 'operagx', url: 'opera.com/gx' },
    { name: 'vivaldi', url: 'vivaldi.com' },
    { name: 'tor', url: 'torproject.org' },
    { name: 'discord', url: 'discord.com' },
    { name: 'obs', url: 'obsproject.com' },
    { name: 'geforce', url: 'nvidia.com' },
    { name: 'amd', url: 'amd.com' },
    { name: 'ea', url: 'ea.com' },
    { name: 'battlenet', url: 'blizzard.com' },
    { name: 'ubisoft', url: 'ubisoftconnect.com' },
    { name: 'riot', url: 'riotgames.com' },
    { name: 'gog', url: 'gog.com' },
    { name: 'netflix', url: 'netflix.com' },
    { name: 'zoom', url: 'zoom.us' },
    { name: 'whatsapp', url: 'whatsapp.com' },
    { name: 'telegram', url: 'telegram.org' },
    { name: 'notion', url: 'notion.so' },
    { name: 'qbittorrent', url: 'qbittorrent.org' },
    { name: 'bitwarden', url: 'bitwarden.com' },
    { name: 'malwarebytes', url: 'malwarebytes.com' }
];

async function downloadIcon(app) {
    const iconUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${app.url}&size=128`;
    const dest = path.join(logosDir, `${app.name}.png`);
    
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(iconUrl, (res) => {
            if (res.statusCode !== 200) {
                console.error(`Failed to download ${app.name} (${res.statusCode})`);
                fs.unlink(dest, () => resolve(false));
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log(`Downloaded ${app.name}`);
                    resolve(true);
                });
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => resolve(false));
            console.error(`Error ${app.name}: ${err.message}`);
        });
    });
}

async function main() {
    for (const app of appsToDownload) {
        await downloadIcon(app);
    }
}

main();
