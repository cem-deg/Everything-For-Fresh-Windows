const https = require('https');
const http = require('http');

const urls = [
    'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg',
    
    // Opera GX
    'https://upload.wikimedia.org/wikipedia/commons/e/e2/Opera_GX_Icon.svg',
    
    // Vivaldi
    'https://upload.wikimedia.org/wikipedia/commons/e/e1/Vivaldi_web_browser_logo.svg',
    
    // Tor Browser
    'https://upload.wikimedia.org/wikipedia/commons/5/5c/Tor_Browser_icon.svg',

    // Discord
    'https://upload.wikimedia.org/wikipedia/commons/1/1c/Discord_Color_Text_Logo_%282015-2021%29.svg',
    
    // Afterburner
    'https://upload.wikimedia.org/wikipedia/commons/3/37/MSI_logo.svg',
    
    // Xbox
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg',
    
    // Nvidia
    'https://upload.wikimedia.org/wikipedia/commons/b/b5/Nvidia_GeForce_Experience_logo.svg',

    // Slack
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    
    // Teams
    'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
    
    // PowerToys
    'https://upload.wikimedia.org/wikipedia/commons/4/45/Microsoft_PowerToys_icon.svg',

    // Winamp
    'https://upload.wikimedia.org/wikipedia/en/2/23/Winamp_logo_2021.svg',

    // OBS Studio
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/OBS_Studio_Logo.svg'
];

async function checkUrl(url) {
    return new Promise((resolve) => {
        const h = url.startsWith('https') ? https : http;
        const req = h.get(url, (res) => {
            if (res.statusCode >= 200 && res.statusCode < 400 && res.headers['content-type'].includes('image')) {
                resolve('OK');
            } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                checkUrl(new URL(res.headers.location, url).href).then(resolve);
            } else {
                resolve(`FAIL: ${res.statusCode}`);
            }
        }).on('error', (e) => resolve(`FAIL: ${e.message}`));
    });
}

async function main() {
    for (const url of urls) {
        console.log(`${url} => ${await checkUrl(url)}`);
    }
}
main();
