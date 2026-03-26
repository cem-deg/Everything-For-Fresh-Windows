import React from 'react';

export const getStepData = (stepId, cpu, gpu, state = {}) => {
    const { selectedBrand, setSelectedBrand } = state;
    
    const steps = {
        '1': {
            badge: 'Step 1 of 8',
            progress: '12.5%',
            title: <><i className="bi bi-motherboard"></i> BIOS Update</>,
            subtitle: 'Keep your motherboard firmware up to date for stability and performance',
            content: (
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
                                <button className={`brand-btn ${selectedBrand === 'asus' ? 'active' : ''}`} onClick={() => setSelectedBrand('asus')} title="ASUS"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" alt="ASUS" className="brand-logo" /></button>
                                <button className={`brand-btn ${selectedBrand === 'msi' ? 'active' : ''}`} onClick={() => setSelectedBrand('msi')} title="MSI"><img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Micro-Star_International_logo2020.svg" alt="MSI" className="brand-logo" /></button>
                                <button className={`brand-btn ${selectedBrand === 'gigabyte' ? 'active' : ''}`} onClick={() => setSelectedBrand('gigabyte')} title="Gigabyte"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Gigabyte_Technology_logo_20080107.svg" alt="Gigabyte" className="brand-logo" /></button>
                                <button className={`brand-btn ${selectedBrand === 'asrock' ? 'active' : ''}`} onClick={() => setSelectedBrand('asrock')} title="ASRock"><img src="https://upload.wikimedia.org/wikipedia/commons/0/01/ASRock_Logo.svg" alt="ASRock" className="brand-logo" /></button>
                            </div>
                            {selectedBrand && (
                                <a href={
                                    selectedBrand === 'asus' ? 'https://www.asus.com/support/download-center/' :
                                    selectedBrand === 'msi' ? 'https://www.msi.com/support/download' :
                                    selectedBrand === 'gigabyte' ? 'https://www.gigabyte.com/Support' :
                                    'https://www.asrock.com/support/index.asp'
                                } target="_blank" rel="noopener noreferrer" className="bios-link">
                                    <i className="bi bi-box-arrow-up-right"></i>
                                    Go to {selectedBrand.toUpperCase()} BIOS Download Page
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="instruction-item"><span className="instruction-number">3</span><span>Search for your <strong>motherboard model</strong> and download BIOS file.</span></div>
                    <div className="instruction-item"><span className="instruction-number">4</span><span>Drag that zip file to empty <strong>USB</strong> drive. Right click the file and select <strong>"Extract All"</strong> to extract the contents to the USB drive.</span></div>
                    <div className="instruction-item"><span className="instruction-number">5</span><span>Insert the USB drive into your PC and restart it.</span></div>
                    <div className="instruction-item"><span className="instruction-number">6</span><span>Press the appropriate key <strong>(F2 or Del)</strong> to enter BIOS setup.</span></div>
                    <div className="instruction-item"><span className="instruction-number">7</span><span>Once in BIOS, navigate to the <strong>Update</strong> or <strong>Flash</strong> section.</span></div>
                    <div className="instruction-item"><span className="instruction-number">8</span><span>Select the BIOS file from the USB drive and flash it.</span></div>
                    <div className="instruction-item"><span className="instruction-number">9</span><span>After flashing, the system will automatically restart. You just need to wait and it will be updated.</span></div>
                </div>
            ),
            warning: {
                type: 'critical',
                icon: 'bi-exclamation-triangle',
                text: "Don't turn off your PC during BIOS update. This can brick your motherboard."
            },
            nextStep: '2'
        },
        '2': {
            badge: 'Step 2 of 8',
            progress: '25%',
            title: cpu === 'amd' ? 
                <><i className="bi bi-cpu"></i> AMD Chipset Drivers</> : 
                <><img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" alt="Intel" style={{ height: '32px', width: 'auto', filter: 'var(--logo-filter)' }} /> Chipset Drivers</>,
            subtitle: 'Install the latest chipset drivers for optimal communication between your CPU and motherboard.',
            content: (
                <div className="step-instructions">
                    <div className="instruction-item">
                        <span className="instruction-number">1</span>
                        <span>Visit the official <strong>{cpu === 'amd' ? 'AMD Support' : 'Intel Driver & Support Assistant'}</strong> page.</span>
                    </div>
                    <div className="instruction-item" style={{display: 'block'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                            <span className="instruction-number">2</span>
                            <span>{cpu === 'amd' ? 'Select "Chipsets", then your socket type, and specific motherboard chipset.' : 'Download and run the tool.'}</span>
                        </div>
                        <a href={cpu === 'amd' ? "https://www.amd.com/en/support" : "https://www.intel.com/content/www/us/en/support/detect.html"} target="_blank" rel="noopener noreferrer" className="bios-link" style={{marginLeft: 'calc(28px + 1rem)'}}>
                            <i className="bi bi-box-arrow-up-right"></i>
                            Go to {cpu === 'amd' ? 'AMD' : 'Intel'} Support
                        </a>
                    </div>
                    <div className="instruction-item">
                        <span className="instruction-number">3</span>
                        <span>{cpu === 'amd' ? 'Download the AMD Chipset Drivers.' : 'The tool will automatically detect and download the latest chipset drivers.'}</span>
                    </div>
                    <div className="instruction-item">
                        <span className="instruction-number">4</span>
                        <span>{cpu === 'amd' ? 'Run the installer and follow the on-screen instructions.' : 'Install the recommended drivers and restart your computer.'}</span>
                    </div>
                    {cpu === 'amd' && (
                        <div className="instruction-item">
                            <span className="instruction-number">5</span>
                            <span>Restart your computer after installation.</span>
                        </div>
                    )}
                </div>
            ),
            warning: {
                type: 'info',
                icon: 'bi-info-circle',
                text: "Chipset drivers are crucial for system stability and power management."
            },
            nextStep: '3'
        },
        '3': {
            badge: 'Step 3 of 8',
            progress: '37.5%',
            title: gpu === 'nvidia' ? 
                <><i className="bi bi-nvidia"></i> NVIDIA Graphics Drivers</> :
                <><i className="bi bi-amd"></i> AMD Graphics Drivers</>,
            subtitle: gpu === 'nvidia' ? 'Clean install your GPU drivers for maximum frame rates and stability.' : 'Install the latest Adrenalin Edition for optimal gaming performance.',
            content: gpu === 'nvidia' ? (
                <div className="step-instructions">
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Visit the official <strong>NVIDIA Driver Downloads</strong> page.</span></div>
                    <div className="instruction-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                            <span className="instruction-number">2</span><span>Go to <strong>NVIDIA App</strong> download page.</span>
                        </div>
                        <div style={{ paddingLeft: 'calc(28px + 1rem)' }}>
                            <a href="https://www.nvidia.com/en-eu/software/nvidia-app/" target="_blank" rel="noopener noreferrer" className="bios-link"><i className="bi bi-box-arrow-up-right"></i> Go to NVIDIA App</a>
                        </div>
                    </div>
                    <div className="instruction-item"><span className="instruction-number">3</span><span>Download the <strong>NVIDIA App</strong>.</span></div>
                    <div className="instruction-item"><span className="instruction-number">4</span><span>Run the installer. It will detect your GPU automatically.</span></div>
                    <div className="instruction-item"><span className="instruction-number">5</span><span>Go to <strong>Drivers</strong> section on the left sidebar.</span></div>
                    <div className="instruction-item"><span className="instruction-number">6</span><div>You will see a green button <strong style={{color: '#10b926'}}>Update Driver</strong> or <strong style={{color: '#10b926'}}>Download Now</strong>. Click it.</div></div>
                </div>
            ) : (
                <div className="step-instructions">
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Visit the official <strong>AMD Software</strong> page.</span></div>
                    <div className="instruction-item" style={{display: 'block'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                            <span className="instruction-number">2</span><span>Click on the Download Software button.</span>
                        </div>
                        <a href="https://www.amd.com/en/products/software/adrenalin.html" target="_blank" rel="noopener noreferrer" className="bios-link" style={{marginLeft: 'calc(28px + 1rem)'}}><i className="bi bi-box-arrow-up-right"></i> Go to AMD Software</a>
                    </div>
                    <div className="instruction-item"><span className="instruction-number">3</span><span>You will be redirected to the <strong>AMD Software download page.</strong></span></div>
                    <div className="instruction-item"><span className="instruction-number">4</span><span>You don't need to select anything. Just download drivers for your current OS. (Windows or Linux)</span></div>
                    <div className="instruction-item"><span className="instruction-number">5</span><span>Run the installer.</span></div>
                    <div className="instruction-item"><span className="instruction-number">6</span><span>App will recognize your GPU and guide you to update it.</span></div>
                </div>
            ),
            warning: {
                type: 'info',
                icon: 'bi-info-circle',
                text: "During GPU Driver installation, your screen will flicker on and off. This is normal."
            },
            nextStep: '4'
        },
        '4': {
            badge: 'Step 4 of 8',
            progress: '50%',
            title: <><i className="bi bi-windows"></i> Windows Updates</>,
            subtitle: 'Ensure your operating system has the latest security patches and features.',
            content: (
                 <div className="step-instructions">
                    <h4 className="section-subtitle"><i className="bi bi-arrow-repeat"></i> Update Process</h4>
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Press <strong><i className="bi bi-windows"></i> + I</strong> to open Settings.</span></div>
                    <div className="instruction-item"><span className="instruction-number">2</span><span>Go to <strong>Windows Update</strong> (or Update & Security).</span></div>
                    <div className="instruction-item"><span className="instruction-number">3</span><span>Click <strong>Check for updates</strong>.</span></div>
                    <div className="instruction-item"><span className="instruction-number">4</span><span>Install all updates. Also check <strong>Advanced options</strong> &gt; <strong>Optional updates</strong> for drivers.</span></div>
                    <div className="instruction-item"><span className="instruction-number">5</span><span>If prompted, restart your computer.</span></div>
                </div>
            ),
            warning: {
                type: 'info',
                icon: 'bi-info-circle',
                text: "This process may take some time and multiple restarts. Be patient."
            },
            nextStep: '5'
        },
        '5': {
            badge: 'Step 5 of 8',
            progress: '62.5%',
            title: <><i className="bi bi-lightning-charge"></i> Game Mode & Power Plan</>,
            subtitle: 'Unleash your PC\'s full potential by removing power limits and enabling gaming optimizations.',
            content: (
                <div className="step-instructions">
                    <h4 className="section-subtitle"><i className="bi bi-controller"></i> Game Mode</h4>
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Press <strong><i className="bi bi-windows"></i> + I</strong> to open Settings.</span></div>
                    <div className="instruction-item"><span className="instruction-number">2</span><span>Go to <strong>Gaming</strong> &gt; <strong>Game Mode</strong> and turn it <strong>ON</strong>.</span></div>
                    <div className="section-divider"></div>
                    <h4 className="section-subtitle"><i className="bi bi-battery-charging"></i> Power Plan</h4>
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Search for <strong>"Choose a power plan"</strong> in the Start Menu and open it.</span></div>
                    <div className="instruction-item"><span className="instruction-number">2</span><span>Select <strong>High Performance</strong>. If you don't see it, click "Show additional plans".</span></div>
                    <div className="instruction-item"><span className="instruction-number">3</span><span>If "High Performance" is missing, you can create a new power plan and select "High Performance" as the template.</span></div>
                </div>
            ),
            nextStep: '6'
        },
        '6': {
            badge: 'Step 6 of 8',
            progress: '75%',
            title: <><i className="bi bi-rocket-takeoff"></i> Startup & Background Apps</>,
            subtitle: 'Disable unnecessary programs that slow down your boot time.',
            content: (
                <div className="step-instructions">
                    <h4 className="section-subtitle"><i className="bi bi-power"></i> Disable Startup Apps</h4>
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Right-click the <strong>Taskbar</strong> and select <strong>Task Manager</strong> (or press Ctrl + Shift + Esc).</span></div>
                    <div className="instruction-item"><span className="instruction-number">2</span><span>Go to the <strong>Startup apps</strong> tab (look for the speedometer icon).</span></div>
                    <div className="instruction-item"><span className="instruction-number">3</span><span>Right-click on apps you don't need immediately at login (e.g., Skype, Spotify, Cortana) and select <strong>Disable</strong>.</span></div>
                    <div className="instruction-item"><span className="instruction-number">4</span><span><strong>Do not disable</strong> drivers or antivirus software (e.g., Realtek Audio, Windows Security).</span></div>
                    <div className="step-warning repeat-warning" style={{ marginTop: '1rem', marginBottom: '0' }}><i className="bi bi-arrow-repeat"></i><span>Don't forget to repeat this step after finishing all the steps.</span></div>
                    <div className="section-divider"></div>
                    <h4 className="section-subtitle"><i className="bi bi-window-stack"></i> Background Apps</h4>
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Press <strong><i className="bi bi-windows"></i> + I</strong> to open Settings.</span></div>
                    <div className="instruction-item"><span className="instruction-number">2</span><span><strong>Windows 10:</strong> Go to <strong>Privacy</strong> &gt; <strong>Background apps</strong> and create a toggle to turn it <strong>OFF</strong>.</span></div>
                    <div className="instruction-item"><span className="instruction-number">3</span><span><strong>Windows 11:</strong> Go to <strong>Apps</strong> &gt; <strong>Installed apps</strong>, click the three dots next to an app &gt; <strong>Advanced options</strong> &gt; set "Background apps permissions" to <strong>Never</strong>.</span></div>
                </div>
            ),
            nextStep: '7'
        },
        '7': {
            badge: 'Step 7 of 8',
            progress: '87.5%',
            title: <><i className="bi bi-palette"></i> Visual Effects</>,
            subtitle: 'Reduce system overhead by disabling unnecessary animations and transparency.',
            content: (
                <div className="step-instructions">
                    <h4 className="section-subtitle"><i className="bi bi-window-fullscreen"></i> Disable Transparency</h4>
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Open <strong>Settings</strong> and go to <strong>Personalization</strong> &gt; <strong>Colors</strong>.</span></div>
                    <div className="instruction-item"><span className="instruction-number">2</span><span>Turn <strong>Transparency effects</strong> to <strong>OFF</strong>. This reduces GPU usage for desktop rendering.</span></div>
                    <div className="section-divider"></div>
                    <h4 className="section-subtitle"><i className="bi bi-speedometer2"></i> Performance Options (Optional)</h4>
                    <div className="instruction-item"><span className="instruction-number">3</span><span>Search for <strong>"Adjust the appearance and performance of Windows"</strong> in the Start Menu.</span></div>
                    <div className="instruction-item"><span className="instruction-number">4</span><span>Select <strong>Adjust for best performance</strong>.</span></div>
                    <div className="instruction-item"><span className="instruction-number">5</span><span>Re-check the following boxes to keep Windows looking decent:<ul style={{ marginTop: '0.5rem', marginBottom: '0', paddingLeft: '1.5rem', opacity: '0.9' }}><li>Show thumbnails instead of icons</li><li>Smooth edges of screen fonts</li></ul></span></div>
                    <div className="instruction-item"><span className="instruction-number">6</span><span>Click <strong>Apply</strong> and <strong>OK</strong>.</span></div>
                </div>
            ),
            nextStep: '8'
        },
        '8': {
            badge: 'Step 8 of 8',
            progress: '100%',
            title: <><i className="bi bi-cpu"></i> CPU Core & Display Settings</>,
            subtitle: 'Unlock your CPU\'s potential and optimize monitor smoothness.',
            content: (
                <div className="step-instructions">
                    <h4 className="section-subtitle"><i className="bi bi-cpu"></i><span>CPU Core Settings</span><span className="info-badge" style={{ marginLeft: '10px', fontSize: '0.75rem', padding: '0.25rem 0.75rem', alignSelf: 'center', marginBottom: 0 }}>IMPORTANT</span></h4>
                    <div className="instruction-item"><span className="instruction-number">1</span><span>Press <strong><i className="bi bi-windows"></i> + R</strong>, type <strong>msconfig</strong>, and hit Enter.</span></div>
                    <div className="instruction-item"><span className="instruction-number">2</span><span>Go to the <strong>Boot</strong> tab and click on <strong>Advanced options</strong>.</span></div>
                    <div className="instruction-item"><span className="instruction-number">3</span><span>Check the box for <strong>Number of processors</strong> and select the highest number available from the dropdown.</span></div>
                    <div className="instruction-item"><span className="instruction-number">4</span><span>Click <strong>OK</strong>, then <strong>Apply</strong> and <strong>OK</strong>. Restart your PC to apply changes.</span></div>
                    <div className="confirmation-info" style={{ marginTop: '1rem' }}><div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.25rem', fontWeight: 'bold' }}><i className="bi bi-rocket-takeoff-fill"></i><span>Important Performance Boost</span></div><p className="info-text">Enabling all cores ensures Windows utilizes your CPU's full potential for faster boot times and better responsiveness.</p></div>
                    <div className="section-divider"></div>
                    <h4 className="section-subtitle"><i className="bi bi-display"></i> Refresh Rate</h4>
                    <div className="instruction-item"><span className="instruction-number">5</span><span>Go to <strong>Settings</strong> &gt; <strong>System</strong> &gt; <strong>Display</strong> &gt; <strong>Advanced display</strong>.</span></div>
                    <div className="instruction-item"><span className="instruction-number">6</span><span>Under <strong>Choose a refresh rate</strong>, select the highest available option (e.g., 144Hz, 165Hz, 240Hz).</span></div>
                    <div className="instruction-item"><span className="instruction-number">7</span><span>If you don't see your monitor's max Hz, ensure you are using a DisplayPort cable or high-speed HDMI.</span></div>
                </div>
            ),
            nextStep: 'completion'
        }
    };
    
    return steps[stepId];
};
