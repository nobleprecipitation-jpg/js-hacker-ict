// 1. Matrix Background shit
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'\'#&_(),.;:?!\\|{}<>[]^~';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

//Levels 1 to 10
const levels = [
    {
        title: "LEVEL 1: Document Creation",
        scenario: "A student wants to type a research paper.",
        questions: [
            {
                prompt: "Which INPUT device is used?",
                options: ["A Monitor", "B Keyboard", "C Printer", "D Speaker"],
                correct: "B",
                hint: "Choose the device used to type text."
            },
            {
                prompt: "Which SOFTWARE is used?",
                options: ["A Microsoft Word", "B VLC", "C Paint", "D Calculator"],
                correct: "A",
                hint: "Choose the word processor for writing a paper."
            },
            {
                prompt: "Which OUTPUT device displays the document?",
                options: ["A Monitor", "B Mouse", "C Webcam", "D Scanner"],
                correct: "A",
                hint: "Pick the screen that shows the document."
            }
        ]
    },
    {
        title: "LEVEL 2: Report Printing",
        scenario: "Print a report.",
        questions: [
            {
                prompt: "Software?",
                options: ["A Word", "B Paint", "C Chrome", "D Spotify"],
                correct: "A",
                hint: "Choose the application used to create documents."
            },
            {
                prompt: "Temporary memory?",
                options: ["A RAM", "B Speaker", "C Mouse", "D Webcam"],
                correct: "A",
                hint: "Select the short-term working memory."
            },
            {
                prompt: "Final output device?",
                options: ["A Printer", "B Keyboard", "C Scanner", "D Microphone"],
                correct: "A",
                hint: "Choose the device that produces a hard copy."
            }
        ]
    },
    {
        title: "LEVEL 3: Online Class",
        scenario: "Join an online class.",
        questions: [
            {
                prompt: "Input device for voice?",
                options: ["A Microphone", "B Speaker", "C Printer", "D Monitor"],
                correct: "A",
                hint: "Pick the device that captures sound."
            },
            {
                prompt: "Software?",
                options: ["A Zoom", "B Excel", "C Paint", "D VLC"],
                correct: "A",
                hint: "Choose the video conferencing app."
            },
            {
                prompt: "Output device?",
                options: ["A Speaker", "B Mouse", "C Webcam", "D SSD"],
                correct: "A",
                hint: "Select the device that plays audio."
            }
        ]
    },
    {
        title: "LEVEL 4: Video Editing",
        scenario: "Edit a high-resolution video.",
        questions: [
            {
                prompt: "Which hardware performs rendering?",
                options: ["A GPU", "B Keyboard", "C SSD", "D Mouse"],
                correct: "A",
                hint: "Choose the component specialized for graphics processing."
            },
            {
                prompt: "Why is RAM important?",
                options: ["A Temporary memory", "B Prints documents", "C Stores internet", "D Connects Wi-Fi"],
                correct: "A",
                hint: "Select the purpose of RAM."
            },
            {
                prompt: "Software?",
                options: ["A Premiere Pro", "B Calculator", "C Paint", "D Notepad"],
                correct: "A",
                hint: "Choose the editing application."
            }
        ]
    },
    {
        title: "LEVEL 5: Online Banking",
        scenario: "Complete an online banking transaction.",
        questions: [
            {
                prompt: "Software?",
                options: ["A Banking App", "B Paint", "C VLC", "D Calculator"],
                correct: "A",
                hint: "Choose the application for banking tasks."
            },
            {
                prompt: "Hardware that connects to the Internet?",
                options: ["A Network Adapter", "B Speaker", "C Mouse", "D SSD"],
                correct: "A",
                hint: "Select the component that enables networking."
            },
            {
                prompt: "Input device?",
                options: ["A Keyboard", "B Printer", "C Speaker", "D Webcam"],
                correct: "A",
                hint: "Pick the device used to enter information."
            }
        ]
    },
    {
        title: "LEVEL 6: Monitor Failure",
        scenario: "The monitor stops working.",
        questions: [
            {
                prompt: "What happens?",
                options: ["A CPU stops", "B CPU continues processing but nothing is displayed", "C SSD is deleted", "D RAM stops"],
                correct: "B",
                hint: "The processor can still run, but output is lost."
            }
        ]
    },
    {
        title: "LEVEL 7: Operating System Crash",
        scenario: "The operating system crashes.",
        questions: [
            {
                prompt: "Can hardware still perform normal user tasks?",
                options: ["A Yes", "B No"],
                correct: "B",
                hint: "The system is no longer functioning correctly."
            }
        ]
    },
    {
        title: "LEVEL 8: Classification Round",
        scenario: "Classify each item as Hardware or Software.",
        questions: [
            { prompt: "CPU", options: ["A Hardware", "B Software"], correct: "A", hint: "The CPU is physical equipment." },
            { prompt: "Windows 11", options: ["A Hardware", "B Software"], correct: "B", hint: "Windows 11 is an operating system program." },
            { prompt: "Keyboard", options: ["A Hardware", "B Software"], correct: "A", hint: "The keyboard is a physical device." },
            { prompt: "Google Chrome", options: ["A Hardware", "B Software"], correct: "B", hint: "Chrome is an application program." },
            { prompt: "SSD", options: ["A Hardware", "B Software"], correct: "A", hint: "An SSD is a storage device." },
            { prompt: "Microsoft Word", options: ["A Hardware", "B Software"], correct: "B", hint: "Word is application software." }
        ]
    },
    {
        title: "LEVEL 9: Execution Order",
        scenario: "Put the system actions in the correct order.",
        questions: [
            {
                prompt: "Which sequence is correct?",
                options: [
                    "A User Clicks Save -> Software Sends Command -> CPU Processes -> SSD Stores File",
                    "B CPU Processes -> SSD Stores File -> Software Sends Command -> User Clicks Save",
                    "C SSD Stores File -> User Clicks Save -> CPU Processes -> Software Sends Command",
                    "D Software Sends Command -> SSD Stores File -> User Clicks Save -> CPU Processes"
                ],
                correct: "A",
                hint: "Start with the user action, then the software, then the CPU, then storage."
            }
        ]
    },
    {
        title: "LEVEL 10: Final Mission",
        scenario: "A student wants to type a report, save it, and print it.",
        questions: [
            { prompt: "Input Device", options: ["A Keyboard", "B Printer", "C SSD", "D CPU"], correct: "A", hint: "Choose the device used for typing." },
            { prompt: "Software", options: ["A Word Processor", "B Monitor", "C RAM", "D Mouse"], correct: "A", hint: "Choose the application used to write the report." },
            { prompt: "CPU", options: ["A Processor", "B Printer", "C Speaker", "D Scanner"], correct: "A", hint: "Pick the main processing unit." },
            { prompt: "RAM", options: ["A Temporary Memory", "B Storage Drive", "C Output Screen", "D Network Card"], correct: "A", hint: "Select the short-term working memory." },
            { prompt: "Storage", options: ["A SSD", "B Keyboard", "C Monitor", "D Speaker"], correct: "A", hint: "Choose the component that stores files." },
            { prompt: "Output Device", options: ["A Printer", "B Microphone", "C Mouse", "D Webcam"], correct: "A", hint: "Select the device that produces the final printout." }
        ]
    }
];

// 3.Game Logic
let currentLevel = 0;
let currentQuestionIndex = 0;
let failedAttempts = 0;

function startGame() {
    document.getElementById('menu-overlay').style.display = 'none';
    document.getElementById('game-ui').style.display = 'flex';
    updateProgressBar();
    loadLevel();
}

function updateProgressBar() {
    const progressPercentage = (currentLevel / levels.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
    document.getElementById('level-indicator').innerText = `LVL ${currentLevel + 1}/10`;
}

function loadLevel() {
    if (currentLevel >= levels.length) {
        gameComplete();
        return;
    }

    failedAttempts = 0;
    const levelData = levels[currentLevel];
    const question = levelData.questions[currentQuestionIndex];
    document.getElementById('level-title').innerText = levelData.title;
    document.getElementById('lesson-content').innerHTML = `
        <h3>${levelData.scenario}</h3>
        <p><strong>Question ${currentQuestionIndex + 1}:</strong> ${question.prompt}</p>
        <p>${question.options.join('<br>')}</p>
    `;
    document.getElementById('code-editor').value = '';
    document.getElementById('code-editor').placeholder = 'Type A, B, C, or D...';
    document.getElementById('output-display').innerHTML = '<div style="color: #555;">// Awaiting analysis...</div>';
    
    document.getElementById('hint-box').style.display = 'none';
    document.getElementById('hint-text').innerText = question.hint;
}

function triggerAccessDenied() {
    const panel3 = document.getElementById('panel-3');
    panel3.classList.remove('flash-red');
    void panel3.offsetWidth;
    panel3.classList.add('flash-red');
}

function runCode() {
    const userAnswer = document.getElementById('code-editor').value.trim().toUpperCase();
    const outputDisplay = document.getElementById('output-display');
    const levelData = levels[currentLevel];
    const question = levelData.questions[currentQuestionIndex];

    outputDisplay.innerHTML = '';

    if (!['A', 'B', 'C', 'D'].includes(userAnswer)) {
        handleFailure('[-] Incorrect Component Selected.\nSystem Execution Failed.');
        return;
    }

    if (userAnswer === question.correct) {
        outputDisplay.innerHTML += `<div class="success-msg">[+] Correct Component Selected.<br>Continuing System Execution...</div>`;
        document.getElementById('run-btn').disabled = true;

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex >= levelData.questions.length) {
                currentQuestionIndex = 0;
                currentLevel++;
                updateProgressBar();
            }
            loadLevel();
            document.getElementById('run-btn').disabled = false;
        }, 1800);
    } else {
        handleFailure('[-] Incorrect Component Selected.\nSystem Execution Failed.');
    }
}

function handleFailure(msg) {
    const outputDisplay = document.getElementById('output-display');
    outputDisplay.innerHTML += `<div class="error-msg">${msg}</div>`;
    triggerAccessDenied();
    failedAttempts++;

    if (failedAttempts >= 4) {
        document.getElementById('hint-box').style.display = 'block';
    }
}

// gameComplete() — Drop-in replacement
// #bomb-animation-overlay, #bomb-animation-container,
// #congrats-message, #matrix-canvas in your HTML.

function gameComplete() {
    document.getElementById('game-ui').style.display = 'none';

    const overlay       = document.getElementById('bomb-animation-overlay');
    const bombContainer = document.getElementById('bomb-animation-container');
    const congrats      = document.getElementById('congrats-message');
    const matrixCanvas  = document.getElementById('matrix-canvas');

    // matrix effect in effect
    if (matrixCanvas) {
        matrixCanvas.style.zIndex   = '1';
        matrixCanvas.style.position = 'fixed';
        matrixCanvas.style.inset    = '0';
    }

    overlay.style.cssText = `
        display:flex; flex-direction:column; align-items:center;
        justify-content:center; position:fixed; inset:0;
        z-index:9999; overflow:hidden;
        background:rgba(0,0,0,0.5);
        transition: background 0.8s ease;
    `;

    congrats.style.display = 'none';
    congrats.innerHTML = '';
    bombContainer.innerHTML = '';

    // Injecting the styles 
    if (!document.getElementById('gc-styles')) {
        const s = document.createElement('style');
        s.id = 'gc-styles';
        s.textContent = `
            @keyframes gc-bombFloat {
                0%,100% { transform:translateY(0px) scale(1); }
                50%      { transform:translateY(-10px) scale(1.02); }
            }
            @keyframes gc-bombPulseGlow {
                0%,100% { filter:drop-shadow(0 0 6px #0f0) drop-shadow(0 0 12px #0f0); }
                50%      { filter:drop-shadow(0 0 20px #0f0) drop-shadow(0 0 40px #00ff88); }
            }
            @keyframes gc-fuseTravel {
                0%   { stroke-dashoffset: 220; }
                100% { stroke-dashoffset: 0; }
            }
            @keyframes gc-sparkSpin {
                from { transform:rotate(0deg); }
                to   { transform:rotate(360deg); }
            }
            @keyframes gc-countGlitch {
                0%   { transform:none; opacity:1; }
                10%  { transform:skewX(-15deg) scaleX(1.1); opacity:0.7; }
                20%  { transform:skewX(10deg) scaleX(0.95); opacity:1; }
                30%  { transform:translateX(-5px); opacity:0.8; }
                40%  { transform:translateX(5px) scaleY(1.1); opacity:1; }
                50%  { transform:none; opacity:1; }
                60%  { clip-path:inset(30% 0 40% 0); transform:translateX(6px); }
                65%  { clip-path:none; transform:none; }
                70%  { clip-path:inset(60% 0 10% 0); transform:translateX(-4px); }
                75%  { clip-path:none; }
                100% { transform:none; opacity:1; }
            }
            @keyframes gc-shake {
                0%,100% { transform:translate(0,0) rotate(0); }
                8%   { transform:translate(-12px,8px) rotate(-2deg); }
                16%  { transform:translate(14px,-10px) rotate(1.5deg); }
                24%  { transform:translate(-10px,12px) rotate(-1deg); }
                32%  { transform:translate(12px,-8px) rotate(2deg); }
                40%  { transform:translate(-8px,6px) rotate(-0.5deg); }
                48%  { transform:translate(10px,-5px) rotate(1deg); }
                56%  { transform:translate(-5px,4px) rotate(-0.3deg); }
                64%  { transform:translate(6px,-3px) rotate(0.5deg); }
                72%  { transform:translate(-3px,2px) rotate(0deg); }
                80%  { transform:translate(4px,-2px) rotate(0.2deg); }
                90%  { transform:translate(-1px,1px); }
            }
            @keyframes gc-flashGreen {
                0%   { opacity:0; }
                8%   { opacity:0.85; }
                100% { opacity:0; }
            }
            @keyframes gc-flashWhite {
                0%   { opacity:0; }
                5%   { opacity:1; }
                100% { opacity:0; }
            }
            @keyframes gc-empRing {
                0%   { transform:translate(-50%,-50%) scale(0); opacity:1; }
                100% { transform:translate(-50%,-50%) scale(4); opacity:0; }
            }
            @keyframes gc-scanline {
                0%   { transform:translateY(-100%); }
                100% { transform:translateY(100vh); }
            }
            @keyframes gc-blink {
                0%,100% { opacity:1; } 50% { opacity:0; }
            }
            @keyframes gc-borderPulse {
                0%,100% { box-shadow:0 0 20px #0f0, 0 0 40px rgba(0,255,0,0.3), inset 0 0 20px rgba(0,255,0,0.05); }
                50%      { box-shadow:0 0 40px #0f0, 0 0 80px rgba(0,255,0,0.5), inset 0 0 30px rgba(0,255,0,0.1); }
            }
            @keyframes gc-glitchRow {
                0%,89%,100% { clip-path:none; transform:none; opacity:1; }
                90%  { clip-path:inset(15% 0 70% 0); transform:translateX(8px); opacity:0.8; }
                92%  { clip-path:inset(55% 0 25% 0); transform:translateX(-6px); }
                94%  { clip-path:none; transform:none; }
                96%  { clip-path:inset(80% 0 5% 0); transform:translateX(4px); }
                98%  { clip-path:none; }
            }
            .gc-bomb-wrap {
                animation: gc-bombFloat 2s ease-in-out infinite,
                           gc-bombPulseGlow 2s ease-in-out infinite;
            }
            .gc-fuse {
                stroke-dasharray: 220;
                stroke-dashoffset: 220;
            }
            .gc-fuse.burning {
                animation: gc-fuseTravel 2.8s linear forwards;
            }
            .gc-spark-rotor {
                animation: gc-sparkSpin 0.25s linear infinite;
                transform-origin: 185px 4px;
            }
            #gc-terminal {
                animation: gc-borderPulse 2s ease-in-out 0.4s infinite;
            }
            #gc-terminal::before {
                content:'';
                position:absolute; inset:0;
                background: repeating-linear-gradient(
                    0deg, transparent, transparent 2px,
                    rgba(0,255,0,0.018) 2px, rgba(0,255,0,0.018) 4px
                );
                pointer-events:none; z-index:1;
            }
            .gc-scanline-sweep {
                position:absolute; left:0; right:0; height:80px;
                background:linear-gradient(to bottom, transparent,
                    rgba(0,255,0,0.07) 50%, transparent);
                animation:gc-scanline 2.5s linear infinite;
                pointer-events:none; z-index:2;
            }
            .gc-term-line {
                overflow:hidden; white-space:nowrap;
                position:relative; z-index:3;
            }
            .gc-glitch-text {
                animation:gc-glitchRow 3s linear infinite;
            }
        `;
        document.head.appendChild(s);
    }

    // PHASE 1: Render armed bomb
    bombContainer.style.cssText = `
        display:flex; flex-direction:column; align-items:center;
        position:relative; z-index:10000;
    `;

    bombContainer.innerHTML = `
        <div class="gc-bomb-wrap" id="gc-bomb-wrap">
            <svg width="230" height="245" viewBox="0 0 230 245" id="gc-bomb-svg">
                <defs>
                    <radialGradient id="gc-bodyGrad" cx="38%" cy="32%" r="65%">
                        <stop offset="0%"   stop-color="#1e2e1e"/>
                        <stop offset="100%" stop-color="#040804"/>
                    </radialGradient>
                    <radialGradient id="gc-sparkGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%"   stop-color="#ffffff"/>
                        <stop offset="40%"  stop-color="#ffff00"/>
                        <stop offset="100%" stop-color="#ff8800" stop-opacity="0"/>
                    </radialGradient>
                    <filter id="gc-glow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="4" result="blur"/>
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <filter id="gc-softglow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                </defs>

                <!-- Outer faint halo -->
                <circle cx="112" cy="150" r="82" fill="none" stroke="#0f0" stroke-width="1" opacity="0.15"/>
                <circle cx="112" cy="150" r="90" fill="none" stroke="#0f0" stroke-width="0.5" opacity="0.07"/>

                <!-- Bomb body -->
                <circle cx="112" cy="150" r="74" fill="url(#gc-bodyGrad)"
                        stroke="#0f0" stroke-width="4.5" filter="url(#gc-glow)"/>

                <!-- Hex bolt details -->
                <circle cx="76"  cy="125" r="5" fill="none" stroke="#0f0" stroke-width="1.5" opacity="0.35"/>
                <circle cx="148" cy="125" r="5" fill="none" stroke="#0f0" stroke-width="1.5" opacity="0.35"/>
                <circle cx="112" cy="213" r="5" fill="none" stroke="#0f0" stroke-width="1.5" opacity="0.35"/>

                <!-- Circuit trace lines -->
                <polyline points="72,135 55,135 55,150 72,150"
                    fill="none" stroke="#0f0" stroke-width="1" opacity="0.3"/>
                <circle cx="72" cy="135" r="2" fill="#0f0" opacity="0.45"/>
                <circle cx="72" cy="150" r="2" fill="#0f0" opacity="0.45"/>

                <polyline points="152,135 169,135 169,150 152,150"
                    fill="none" stroke="#0f0" stroke-width="1" opacity="0.3"/>
                <circle cx="152" cy="135" r="2" fill="#0f0" opacity="0.45"/>
                <circle cx="152" cy="150" r="2" fill="#0f0" opacity="0.45"/>

                <!-- Skull: eye sockets -->
                <ellipse cx="97"  cy="142" rx="11" ry="12" fill="none" stroke="#0f0" stroke-width="2.5" opacity="0.75"/>
                <ellipse cx="127" cy="142" rx="11" ry="12" fill="none" stroke="#0f0" stroke-width="2.5" opacity="0.75"/>
                <!-- Glowing pupils -->
                <circle cx="97"  cy="142" r="3.5" fill="#0f0" opacity="0.9" filter="url(#gc-softglow)"/>
                <circle cx="127" cy="142" r="3.5" fill="#0f0" opacity="0.9" filter="url(#gc-softglow)"/>
                <!-- Nose cavity -->
                <path d="M109 158 L112 165 L115 158 Z"
                    fill="none" stroke="#0f0" stroke-width="1.5" opacity="0.45"/>
                <!-- Teeth row -->
                <path d="M93 172 Q112 180 131 172" stroke="#0f0" stroke-width="2" fill="none" opacity="0.65"/>
                <line x1="99"  y1="172" x2="99"  y2="180" stroke="#0f0" stroke-width="2" opacity="0.55"/>
                <line x1="107" y1="171" x2="107" y2="180" stroke="#0f0" stroke-width="2" opacity="0.55"/>
                <line x1="115" y1="171" x2="115" y2="180" stroke="#0f0" stroke-width="2" opacity="0.55"/>
                <line x1="123" y1="172" x2="123" y2="180" stroke="#0f0" stroke-width="2" opacity="0.55"/>

                <!-- Stem -->
                <rect x="101" y="66" width="22" height="34" rx="5"
                    fill="#0c180c" stroke="#0f0" stroke-width="3"/>
                <line x1="101" y1="76" x2="123" y2="76" stroke="#0f0" stroke-width="1" opacity="0.35"/>
                <circle cx="108" cy="72" r="2" fill="#0f0" opacity="0.4"/>
                <circle cx="116" cy="72" r="2" fill="#0f0" opacity="0.4"/>

                <!-- Fuse background (dark groove) -->
                <path d="M112 66 Q132 44 155 55 Q182 67 172 34 Q164 10 188 4"
                    stroke="#0a140a" stroke-width="5" fill="none" stroke-linecap="round"/>

                <!-- Animated fuse -->
                <path class="gc-fuse" id="gc-fuse"
                    d="M112 66 Q132 44 155 55 Q182 67 172 34 Q164 10 188 4"
                    stroke="#ffee00" stroke-width="3.5" fill="none" stroke-linecap="round"/>

                <!-- Fuse spark group (at tip) -->
                <g id="gc-spark-group">
                    <!-- Static glow -->
                    <circle cx="188" cy="4" r="12" fill="url(#gc-sparkGrad)" opacity="0.85"/>
                    <!-- Spinning star lines -->
                    <g class="gc-spark-rotor">
                        <line x1="174" y1="4"  x2="202" y2="4"  stroke="#ffee00" stroke-width="2" opacity="0.8" stroke-linecap="round"/>
                        <line x1="188" y1="-10" x2="188" y2="18" stroke="#ffee00" stroke-width="2" opacity="0.8" stroke-linecap="round"/>
                        <line x1="178" y1="-6"  x2="198" y2="14" stroke="#ff8800" stroke-width="1.5" opacity="0.6" stroke-linecap="round"/>
                        <line x1="198" y1="-6"  x2="178" y2="14" stroke="#ff8800" stroke-width="1.5" opacity="0.6" stroke-linecap="round"/>
                    </g>
                </g>
            </svg>
        </div>

        <!-- Countdown number -->
        <div id="gc-countdown" style="
            font-family:'Courier New',monospace; font-size:5.5em;
            font-weight:bold; letter-spacing:10px; color:#0f0;
            text-shadow:0 0 20px #0f0, 0 0 50px #0f0;
            margin-top:6px; user-select:none; line-height:1;
        ">3</div>

        <!-- Status ticker -->
        <div id="gc-status" style="
            font-family:monospace; color:#0f0; opacity:0.65;
            font-size:0.82em; margin-top:12px; letter-spacing:2px;
            max-width:320px; text-align:center;
        ">// INITIALIZING SYSTEM ANALYSIS...</div>

        <!-- Progress bar -->
        <div style="
            width:240px; height:5px; background:#040a04;
            border:1px solid #0f0; margin-top:16px; overflow:hidden;
            box-shadow:0 0 10px rgba(0,255,0,0.4);
        ">
            <div id="gc-progress-bar" style="
                height:100%; width:0%; background:#0f0;
                box-shadow:0 0 10px #0f0;
                transition:width 0.08s linear;
            "></div>
        </div>
    `;

    // PHASE 2: Fuse burn + countdown
    const countEl  = document.getElementById('gc-countdown');
    const statusEl = document.getElementById('gc-status');
    const progBar  = document.getElementById('gc-progress-bar');
    const fuse     = document.getElementById('gc-fuse');

    //fuse burn animation
    fuse.classList.add('burning');

    // Animate progress bar over ~3.7s
    let progVal = 0;
    const progInterval = setInterval(() => {
        progVal = Math.min(progVal + 0.7, 100);
        progBar.style.width = progVal + '%';
        if (progVal >= 100) { clearInterval(progInterval); progBar.style.background = '#f00'; }
    }, 26);

    // Status messages cycling
    const statusMessages = [
        '// INITIALIZING SYSTEM ANALYSIS...',
        '// VERIFYING HARDWARE COMPONENTS....DONE',
        '// VALIDATING SOFTWARE LAYERS........DONE',
        '// CHECKING PROCESSING PATH.........DONE',
        '// ARCHITECTURE READY...STAND BY.',
    ];
    let msgIdx = 0;
    const msgInterval = setInterval(() => {
        msgIdx = (msgIdx + 1) % statusMessages.length;
        statusEl.textContent = statusMessages[msgIdx];
    }, 700);

    // Matrix canvas subtle rumble helper
    function matrixRumble(intensity, duration) {
        if (!matrixCanvas) return;
        const start = performance.now();
        function doRumble(now) {
            const elapsed = now - start;
            if (elapsed > duration) { matrixCanvas.style.transform = ''; return; }
            const mag = intensity * (1 - elapsed / duration);
            matrixCanvas.style.transform =
                `translate(${(Math.random()-0.5)*mag*2}px,${(Math.random()-0.5)*mag*2}px)`;
            requestAnimationFrame(doRumble);
        }
        requestAnimationFrame(doRumble);
    }

    // Countdown:321 boom!
    const tickDurations = [900, 900, 900];
    let ci = 0;

    function doTick() {
        ci++;
        if (ci > 3) {
            clearInterval(msgInterval);
            clearInterval(progInterval);
            progBar.style.width = '100%';
            progBar.style.boxShadow = '0 0 16px #f00';
            countEl.textContent = '💥';
            countEl.style.animation = 'none';
            countEl.style.fontSize = '6.5em';
            countEl.style.color = '#ff4400';
            countEl.style.textShadow = '0 0 30px #ff4400, 0 0 60px #ff8800';
            statusEl.textContent = '// S Y S T E M   V E R I F Y I N G . . .';
            statusEl.style.color = '#f00';
            matrixRumble(8, 700);
            setTimeout(detonate, 550);
            return;
        }

        const num = 3 - ci;
        countEl.textContent = String(num);
        countEl.style.animation = 'none';
        void countEl.offsetWidth;
        countEl.style.animation = `gc-countGlitch ${0.65 - ci * 0.1}s ease-in-out`;

        const urgencyColors  = ['#0f0', '#ff0', '#f80'];
        const urgencyGlows   = ['#0f0', '#ff0', '#f80'];
        countEl.style.color       = urgencyColors[ci - 1];
        countEl.style.textShadow  = `0 0 20px ${urgencyGlows[ci-1]}, 0 0 60px ${urgencyGlows[ci-1]}`;
        matrixRumble(ci * 2, tickDurations[ci - 1]);

        setTimeout(doTick, tickDurations[ci - 1]);
    }
    setTimeout(doTick, tickDurations[0]);

    // PHASE 3: DETONATE(BOOM BOOM BAKUDAN!)
    function detonate() {
        bombContainer.innerHTML = '';
        bombContainer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:10000;';

        // Shake the whole page
        document.body.style.animation = 'gc-shake 0.95s ease-out';
        document.body.addEventListener('animationend',
            () => { document.body.style.animation = ''; }, { once: true });

        overlay.style.background = 'rgba(0,0,0,0.7)';
        setTimeout(() => { overlay.style.background = 'rgba(0,0,0,0.4)'; }, 900);

        // Green flash
        const flashG = document.createElement('div');
        flashG.style.cssText = `
            position:fixed;inset:0;z-index:10003;pointer-events:none;
            background:radial-gradient(circle at center,
                rgba(0,255,0,0.75) 0%, rgba(0,100,0,0.45) 45%, transparent 100%);
            animation:gc-flashGreen 0.9s ease-out forwards;
        `;
        document.body.appendChild(flashG);
        setTimeout(() => flashG.remove(), 1000);

        // White flash
        const flashW = document.createElement('div');
        flashW.style.cssText = `
            position:fixed;inset:0;z-index:10004;pointer-events:none;
            background:#ffffff;
            animation:gc-flashWhite 0.4s ease-out forwards;
        `;
        document.body.appendChild(flashW);
        setTimeout(() => flashW.remove(), 450);

        // EMP rings
        const empColors = ['#0f0','#ff0','#0ff','#fff'];
        empColors.forEach((col, i) => {
            const ring = document.createElement('div');
            ring.style.cssText = `
                position:fixed; left:50%; top:50%;
                width:220px; height:220px; border-radius:50%;
                border:${4 - i * 0.7}px solid ${col};
                opacity:0;
                box-shadow:0 0 ${18 - i*3}px ${col}, inset 0 0 ${10-i*2}px ${col};
                pointer-events:none; z-index:10002;
                animation:gc-empRing ${0.85 + i * 0.2}s cubic-bezier(0.1,0.8,0.4,1) ${i * 0.1}s forwards;
            `;
            overlay.appendChild(ring);
            setTimeout(() => ring.remove(), 1600);
        });

        // ── BOOM BOOM canvas
        const expCanvas = document.createElement('canvas');
        expCanvas.width  = window.innerWidth;
        expCanvas.height = window.innerHeight;
        expCanvas.style.cssText =
            'position:fixed;inset:0;z-index:10001;pointer-events:none;';
        document.body.appendChild(expCanvas);
        const ec = expCanvas.getContext('2d');

        const CX = window.innerWidth  / 2;
        const CY = window.innerHeight / 2;

        const SYSTEM_CHARS = '01HARDWARE SOFTWARE CPU RAM STORAGE OUTPUT DEVICE SYSTEM ARCHITECTURE ';
        const COL_GREEN  = ['#00ff00','#44ff44','#00cc00','#88ff88','#00ff88'];
        const COL_FIRE   = ['#ff4400','#ff8800','#ffcc00','#ffffff','#ff2200'];
        const COL_CYAN   = ['#00ffff','#00cccc'];

        // Build particle array(particle effects)
        const P = [];

        // Main burst: outward particles
        for (let i = 0; i < 320; i++) {
            const angle   = Math.random() * Math.PI * 2;
            const spd     = 3 + Math.random() * 20;
            const isFire  = Math.random() > 0.65;
            const isChar  = !isFire && Math.random() > 0.45;
            const colPool = isFire ? COL_FIRE : (isChar ? COL_GREEN : COL_CYAN);
            const col     = colPool[Math.floor(Math.random() * colPool.length)];
            P.push({
                x: CX, y: CY,
                vx: Math.cos(angle) * spd * (0.6 + Math.random() * 0.8),
                vy: Math.sin(angle) * spd * (0.6 + Math.random() * 0.8) - Math.random() * 4,
                size: isChar ? 8 + Math.random() * 16 : 2 + Math.random() * 7,
                col,
                life: 0.75 + Math.random() * 0.25,
                decay: 0.007 + Math.random() * 0.017,
                gravity: 0.07 + Math.random() * 0.13,
                drag: 0.97 + Math.random() * 0.015,
                isChar,
                char: SYSTEM_CHARS[Math.floor(Math.random() * SYSTEM_CHARS.length)],
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.25,
                trail: [],
                type: isFire ? 'fire' : (isChar ? 'char' : 'dot')
            });
        }

        // Matrix style falling shit spawned from explosion
        for (let i = 0; i < 70; i++) {
            const spread = 450;
            P.push({
                x: CX + (Math.random() - 0.5) * spread,
                y: CY + (Math.random() - 0.5) * 200,
                vx: (Math.random() - 0.5) * 1.5,
                vy: -3 - Math.random() * 5,
                size: 11 + Math.random() * 10,
                col: '#00ff00',
                life: 1,
                decay: 0.004 + Math.random() * 0.007,
                gravity: 0.35 + Math.random() * 0.2,
                drag: 1,
                isChar: true,
                char: SYSTEM_CHARS[Math.floor(Math.random() * SYSTEM_CHARS.length)],
                rotation: 0, rotSpeed: 0,
                trail: [], type: 'matrix-char'
            });
        }

        // Shockwave rings
        const rings = [
            { r:0, maxR:Math.hypot(CX, CY)*1.7, spd:45, col:'#00ff00', alpha:1.0,  lw:9 },
            { r:0, maxR:Math.hypot(CX, CY)*1.4, spd:33, col:'#ff0000', alpha:0.75, lw:5 },
            { r:0, maxR:Math.hypot(CX, CY)*1.1, spd:24, col:'#00ff', alpha:0.55, lw:3 },
            { r:0, maxR:Math.hypot(CX, CY)*0.9, spd:18, col:'#ff6', alpha:0.4,  lw:2 },
        ];

        // Fireball tententnetnente!!!
        let fireR     = 0;
        let fireAlpha = 1;
        const fireMax = Math.min(CX, CY) * 0.9;

        // Smoke puffs like Snoop DO double G!!
        const smokes = Array.from({ length: 16 }, () => {
            const a = Math.random() * Math.PI * 2;
            return {
                x: CX + Math.cos(a) * 35, y: CY + Math.sin(a) * 35,
                vx: Math.cos(a) * (0.4 + Math.random() * 1.8),
                vy: -(0.8 + Math.random() * 2.5),
                r: 18 + Math.random() * 28,
                life: 0.5 + Math.random() * 0.5,
                decay: 0.003 + Math.random() * 0.005
            };
        });

        function drawFrame() {
            ec.clearRect(0, 0, expCanvas.width, expCanvas.height);

            // Smoke behind fireball
            smokes.forEach(sm => {
                if (sm.life <= 0) return;
                sm.x += sm.vx; sm.y += sm.vy; sm.r += 0.9; sm.life -= sm.decay;
                const sg = ec.createRadialGradient(sm.x, sm.y, 0, sm.x, sm.y, sm.r);
                sg.addColorStop(0,   `rgba(0,50,0,${sm.life * 0.45})`);
                sg.addColorStop(0.5, `rgba(0,25,0,${sm.life * 0.2})`);
                sg.addColorStop(1,   'rgba(0,0,0,0)');
                ec.beginPath(); ec.arc(sm.x, sm.y, sm.r, 0, Math.PI*2);
                ec.fillStyle = sg; ec.fill();
            });

            // Fireball
            if (fireR < fireMax) fireR += fireMax / 22;
            else fireAlpha = Math.max(0, fireAlpha - 0.035);

            if (fireAlpha > 0) {
                const pct = Math.min(fireR / fireMax, 1);
                const fg = ec.createRadialGradient(CX, CY, 0, CX, CY, fireR);
                fg.addColorStop(0,    `rgba(255,255,220,${fireAlpha*(1-pct*0.2)})`);
                fg.addColorStop(0.12, `rgba(255,200,0,${fireAlpha*0.95*(1-pct*0.35)})`);
                fg.addColorStop(0.3,  `rgba(0,255,80,${fireAlpha*0.75*(1-pct*0.5)})`);
                fg.addColorStop(0.6,  `rgba(0,160,0,${fireAlpha*0.3*(1-pct*0.65)})`);
                fg.addColorStop(1,    'rgba(0,0,0,0)');
                ec.beginPath(); ec.arc(CX, CY, fireR, 0, Math.PI*2);
                ec.fillStyle = fg; ec.fill();

                // Bright white hot core
                if (pct < 0.55) {
                    const coreR = fireR * 0.22;
                    const cg = ec.createRadialGradient(CX, CY, 0, CX, CY, coreR);
                    cg.addColorStop(0,   `rgba(255,255,255,${fireAlpha*(1-pct*1.5)})`);
                    cg.addColorStop(0.6, `rgba(255,255,180,${fireAlpha*0.4*(1-pct*1.5)})`);
                    cg.addColorStop(1,   'rgba(255,255,255,0)');
                    ec.beginPath(); ec.arc(CX, CY, coreR, 0, Math.PI*2);
                    ec.fillStyle = cg; ec.fill();
                }
            }

            // Shockwave rings
            rings.forEach(ring => {
                if (ring.r >= ring.maxR) return;
                ring.r = Math.min(ring.r + ring.spd, ring.maxR);
                const fade = 1 - ring.r / ring.maxR;
                ec.beginPath(); ec.arc(CX, CY, ring.r, 0, Math.PI*2);
                ec.strokeStyle = ring.col;
                ec.lineWidth   = ring.lw * fade;
                ec.globalAlpha = ring.alpha * fade;
                ec.shadowBlur  = 24; ec.shadowColor = ring.col;
                ec.stroke();
                ec.globalAlpha = 1; ec.shadowBlur = 0;
            });

            // Particles
            P.forEach(p => {
                if (p.life <= 0) return;
                p.trail.push({ x: p.x, y: p.y });
                if (p.trail.length > 8) p.trail.shift();
                p.x  += p.vx; p.y += p.vy;
                p.vy += p.gravity; p.vx *= p.drag; p.vy *= p.drag;
                p.life -= p.decay;
                p.rotation += p.rotSpeed;

                const a = Math.max(0, p.life);
                ec.globalAlpha = a;

                if (p.type === 'fire') {
                    const fr = p.size * (1.5 + p.life);
                    const fg2 = ec.createRadialGradient(p.x, p.y, 0, p.x, p.y, fr);
                    fg2.addColorStop(0, p.col);
                    fg2.addColorStop(1, 'rgba(0,0,0,0)');
                    ec.beginPath(); ec.arc(p.x, p.y, fr, 0, Math.PI*2);
                    ec.fillStyle = fg2; ec.fill();

                } else if (p.type === 'char' || p.type === 'matrix-char') {
                    // Trail
                    if (p.trail.length > 2) {
                        ec.strokeStyle = p.col;
                        ec.lineWidth   = 1;
                        ec.globalAlpha = a * 0.25;
                        ec.beginPath();
                        ec.moveTo(p.trail[0].x, p.trail[0].y);
                        p.trail.forEach(pt => ec.lineTo(pt.x, pt.y));
                        ec.stroke();
                        ec.globalAlpha = a;
                    }
                    ec.save();
                    ec.translate(p.x, p.y);
                    ec.rotate(p.rotation);
                    ec.fillStyle  = p.col;
                    ec.shadowBlur = 10; ec.shadowColor = p.col;
                    ec.font = `bold ${p.size}px monospace`;
                    ec.fillText(p.char, -p.size * 0.3, p.size * 0.35);
                    ec.restore();

                } else {
                    // Glowing dot with trail
                    if (p.trail.length > 2) {
                        ec.strokeStyle = p.col;
                        ec.lineWidth   = p.size * 0.7;
                        ec.lineCap     = 'round';
                        ec.globalAlpha = a * 0.35;
                        ec.beginPath();
                        ec.moveTo(p.trail[0].x, p.trail[0].y);
                        p.trail.forEach(pt => ec.lineTo(pt.x, pt.y));
                        ec.stroke();
                        ec.globalAlpha = a;
                    }
                    ec.shadowBlur = 14; ec.shadowColor = p.col;
                    ec.beginPath(); ec.arc(p.x, p.y, p.size, 0, Math.PI*2);
                    ec.fillStyle = p.col; ec.fill();
                    ec.shadowBlur = 0;
                }
                ec.globalAlpha = 1;
            });

            const done = P.every(p => p.life <= 0)
                      && rings.every(r => r.r >= r.maxR)
                      && fireAlpha <= 0;

            if (!done) requestAnimationFrame(drawFrame);
            else { expCanvas.remove(); showTerminal(); }
        }
        requestAnimationFrame(drawFrame);
    }

    // PHASE 4: System terminal reveal
    function showTerminal() {
        overlay.style.background = 'rgba(0,0,0,0.52)';

        congrats.innerHTML = '';
        congrats.style.cssText = `
            display:flex; align-items:center; justify-content:center;
            position:fixed; inset:0; z-index:10002; pointer-events:none;
        `;

        const terminal = document.createElement('div');
        terminal.id = 'gc-terminal';
        terminal.style.cssText = `
            font-family:'Courier New',Courier,monospace;
            color:#0f0; text-align:left;
            padding:32px 38px 36px;
            max-width:720px; width:93%;
            border:1px solid #0f0;
            background:rgba(0,7,0,0.76);
            backdrop-filter:blur(3px);
            position:relative; overflow:hidden;
            opacity:0; transition:opacity 0.5s ease;
            pointer-events:auto;
        `;
        congrats.appendChild(terminal);
        requestAnimationFrame(() => { terminal.style.opacity = '1'; });

        // Scanline sweep
        const scan = document.createElement('div');
        scan.className = 'gc-scanline-sweep';
        terminal.appendChild(scan);

        // Title bar
        const titleBar = document.createElement('div');
        titleBar.style.cssText = `
            display:flex; align-items:center; gap:8px;
            padding-bottom:14px; margin-bottom:14px;
            border-bottom:1px solid rgba(0,255,0,0.25);
            position:relative; z-index:3;
        `;
        titleBar.innerHTML = `
            <div style="width:11px;height:11px;border-radius:50%;background:#f55;box-shadow:0 0 7px #f00;"></div>
            <div style="width:11px;height:11px;border-radius:50%;background:#ff0;box-shadow:0 0 7px #ff0;"></div>
            <div style="width:11px;height:11px;border-radius:50%;background:#0f0;box-shadow:0 0 7px #0f0;"></div>
            <span style="margin-left:14px;color:rgba(0,255,0,0.55);font-size:0.78em;letter-spacing:2.5px;">
                system@architecture — analysis — MISSION_COMPLETE.sh
            </span>
        `;
        terminal.appendChild(titleBar);

        // Lines
        const lines = [
            { t:'[SYS]  Analysis confirmed. System architecture online.', d:80,   c:'#ff8800', spd:22 },
            { t:'[SYS]  Hardware verified .............. COMPLETE',         d:560,  c:'#ff4400', spd:18 },
            { t:'[SYS]  Software verified .............. COMPLETE',         d:980,  c:'#ff4400', spd:18 },
            { t:'[SYS]  CPU and RAM aligned ............ COMPLETE',         d:1360, c:'#ff4400', spd:18 },
            { t:'[SYS]  Storage and output confirmed ... COMPLETE',        d:1720, c:'#ff4400', spd:18 },
            { t:'─'.repeat(56),                                             d:2060, c:'#0a3a0a', spd:0  },
            { t:'[SYS]  ██ MISSION COMPLETE — SYSTEM ARCHITECTURE VERIFIED ██', d:2220, c:'#00ff00', spd:16, big:true },
            { t:'[SYS]  Hardware',                                         d:2900, c:'#00ffff', spd:16 },
            { t:'[SYS]  ↓',                                                d:3140, c:'#00ffff', spd:16 },
            { t:'[SYS]  Software',                                         d:3380, c:'#00ffff', spd:16 },
            { t:'[SYS]  ↓',                                                d:3620, c:'#00ffff', spd:16 },
            { t:'[SYS]  CPU',                                              d:3860, c:'#00ffff', spd:16 },
            { t:'[SYS]  ↓',                                                d:4100, c:'#00ffff', spd:16 },
            { t:'[SYS]  RAM',                                              d:4340, c:'#00ffff', spd:16 },
            { t:'[SYS]  ↓',                                                d:4580, c:'#00ffff', spd:16 },
            { t:'[SYS]  Storage',                                         d:4820, c:'#00ffff', spd:16 },
            { t:'[SYS]  ↓',                                                d:5060, c:'#00ffff', spd:16 },
            { t:'[SYS]  Output Device',                                    d:5300, c:'#00ffff', spd:16 },
            { t:'[SYS]  All system components worked together successfully.', d:5620, c:'#ffffff', spd:18 },
            { t:'[SYS]  Congratulations! You are now certified as a SYSTEM ARCHITECT.', d:6060, c:'#00ff00', spd:18 },
        ];

        function typeOut(el, text, speed, onDone) {
            if (speed === 0) { el.textContent = text; if (onDone) onDone(); return; }
            let i = 0;
            const iv = setInterval(() => {
                el.textContent = text.slice(0, i) + (i < text.length ? '▌' : '');
                i++;
                if (i > text.length) {
                    clearInterval(iv);
                    el.textContent = text;
                    if (onDone) onDone();
                }
            }, speed);
        }

        lines.forEach(({ t, d, c, spd, big, glitch }) => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = 'gc-term-line' + (glitch ? ' gc-glitch-text' : '');
                line.style.cssText = `
                    margin:3px 0; color:${c};
                    font-size:${big ? '1.22em' : '0.88em'};
                    font-weight:${big ? 'bold' : 'normal'};
                    ${big ? `text-shadow:0 0 10px ${c}, 0 0 22px ${c};` : ''}
                    position:relative; z-index:3;
                `;
                terminal.appendChild(line);
                terminal.scrollTop = terminal.scrollHeight;
                typeOut(line, t, spd);
            }, d);
        });

        // Blinking cursor
        const lastDelay = lines[lines.length-1].d + lines[lines.length-1].t.length * 22 + 300;
        setTimeout(() => {
            const cur = document.createElement('div');
            cur.style.cssText = 'margin-top:10px;z-index:3;position:relative;';
            cur.innerHTML = `<span style="color:#0f0;animation:gc-blink 1s step-end infinite;font-size:1.1em;">█</span>`;
            terminal.appendChild(cur);
        }, lastDelay);

        // Periodic random terminal glitch flicker type shi
        const glitchLoop = setInterval(() => {
            if (Math.random() > 0.8) {
                terminal.style.filter = `brightness(${1.3 + Math.random()*0.4}) saturate(1.5)`;
                setTimeout(() => { terminal.style.filter = ''; }, 50 + Math.random() * 80);
            }
        }, 1800);
    }
}

// 4.Event listeners
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('run-btn').addEventListener('click', runCode);