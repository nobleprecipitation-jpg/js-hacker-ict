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

//Levels 1 to 10 (HEHEEHE to10)
const levels = [
    {
        title: "LEVEL 1: Terminal Communication",
        lesson: `<h3>The 'Console' Command</h3>
        <p>In JavaScript, <code>console</code> is an object that refers to your browser's debug terminal. The <code>.log()</code> method tells the computer to "print" or "output" whatever is inside the parentheses.</p>
        <p><strong>RULE:</strong> Text (Strings) must always be wrapped in quotation marks <code>""</code>.</p>
        <p><strong>TASK:</strong> Use the command to output <strong>Hello World</strong>.</p>
        <pre><code>console.log("________");</code></pre>`,
        expectedOutput: "Hello World",
        hint: "Type: console.log(\"Hello World\"); (Don't forget the semicolon at the end!)"
    },
    {
        title: "LEVEL 2: Creating Variables",
        lesson: `<h3>What is a Variable?</h3>
        <p>Think of a variable as a labeled box that holds information. We use <code>let</code> to "declare" (create) the box. Once created, we can change what's inside the box later.</p>
        <p><strong>TASK:</strong> Create a variable named <code>alias</code> and store the name <strong>Hacker</strong> inside it.</p>
        <pre><code>let alias = "________";\nconsole.log(alias);</code></pre>`,
        expectedOutput: "Hacker",
        hint: "Type: let alias = \"Hacker\"; then console.log(alias);"
    },
    {
        title: "LEVEL 3: Constants (The 'Vault')",
        lesson: `<h3>Constants vs. Variables</h3>
        <p>Sometimes data should never change (like your Birth Date or a System ID). We use <code>const</code> for these. If you try to change a <code>const</code> later, the program will crash!</p>
        <p><strong>TASK:</strong> Create a constant named <code>pin</code> and set it to <strong>1234</strong>.</p>
        <pre><code>const pin = ____;\nconsole.log(pin);</code></pre>`,
        expectedOutput: "1234",
        hint: "Type: const pin = 1234; (Note: Numbers do NOT need quotation marks!)"
    },
    {
        title: "LEVEL 4: Arithmetic Operators",
        lesson: `<h3>Math in Code</h3>
        <p>Computers are just giant calculators. JavaScript uses <code>+</code>, <code>-</code>, <code>*</code> (multiply), and <code>/</code> (divide) to process numbers.</p>
        <p><strong>TASK:</strong> Calculate 50 times 2 to bypass the gate.</p>
        <pre><code>console.log(50 _ 2);</code></pre>`,
        expectedOutput: "100",
        hint: "Use the asterisk (*) for multiplication: console.log(50 * 2);"
    },
    {
        title: "LEVEL 5: String Concatenation",
        lesson: `<h3>Combining Text</h3>
        <p>In ICT, "Concatenation" means gluing strings together. You use the <code>+</code> sign to join two pieces of text into one sentence.</p>
        <p><strong>TASK:</strong> Join the words <strong>"Access "</strong> and <strong>"Granted"</strong>.</p>
        <pre><code>console.log("Access " _ "Granted");</code></pre>`,
        expectedOutput: "Access Granted",
        hint: "Type: console.log(\"Access \" + \"Granted\");"
    },
    {
        title: "LEVEL 6: Conditional Logic (IF)",
        lesson: `<h3>Decision Making</h3>
        <p>The <code>if</code> statement checks a "Boolean" (True or False). If the condition inside <code>( )</code> is true, the code inside <code>{ }</code> runs.</p>
        
        <p><strong>TASK:</strong> Check if 10 is greater than 5.</p>
        <pre><code>if (10 _ 5) {\n  console.log("Bypassed");\n}</code></pre>`,
        expectedOutput: "Bypassed",
        hint: "Use the greater-than sign: if (10 > 5) { ... }"
    },
    {
        title: "LEVEL 7: The For Loop",
        lesson: `<h3>Repetitive Tasks</h3>
        <p>Instead of typing 'Ping' three times, we use a loop. The loop has three parts: Start (<code>i=0</code>), Condition (<code>i < 3</code>), and Step (<code>i++</code>).</p>
        <p><strong>TASK:</strong> Complete the loop to run 3 times.</p>
        <pre><code>for(let i = 0; i < _; i++) {\n  console.log("Ping");\n}</code></pre>`,
        expectedOutput: "Ping\nPing\nPing",
        hint: "The condition should be i < 3 to run it three times."
    },
    {
        title: "LEVEL 8: Defining Functions",
        lesson: `<h3>Reusable Code</h3>
        <p>A <code>function</code> is a saved recipe. You write the steps once, then "call" it by name whenever you need it.</p>
        <p><strong>TASK:</strong> Call the function <code>override()</code> to execute the code inside.</p>
        <pre><code>function override() {\n  console.log("System Overridden");\n}\n\n________();</code></pre>`,
        expectedOutput: "System Overridden",
        hint: "To call a function, type its name followed by parentheses: override();"
    },
    {
        title: "LEVEL 9: Array Indexing",
        lesson: `<h3>Storing Lists</h3>
        <p>An <strong>Array</strong> is a list of items. Important: JavaScript starts counting at <strong>0</strong>. <br>Index 0 = 1st item, Index 1 = 2nd item.</p>
        
        <p><strong>TASK:</strong> Get the 2nd item (443) from the ports array.</p>
        <pre><code>let ports = [80, 443, 8080];\nconsole.log(ports[_]);</code></pre>`,
        expectedOutput: "443",
        hint: "Since we start at 0, the second item is at index 1: ports[1];"
    },
    {
        title: "LEVEL 10: Objects (Final Boss)",
        lesson: `<h3>Key-Value Pairs</h3>
        <p>Objects store complex data. For example, a User has a Name, Age, and IP. We use "Dot Notation" (<code>object.property</code>) to get data out.</p>
        <p><strong>TASK:</strong> Access the 'ip' property of the 'target' object.</p>
        <pre><code>let target = { ip: "192.168.1.1" };\nconsole.log(target.__);</code></pre>`,
        expectedOutput: "192.168.1.1",
        hint: "Type: console.log(target.ip);"
    }
];


// 3.Game Logic
let currentLevel = 0;
let failedAttempts = 0;
let capturedOutput = [];

const originalConsoleLog = console.log;
console.log = function(...args) {
    const outputString = args.join(' ');
    capturedOutput.push(outputString);
    const outputDisplay = document.getElementById('output-display');
    outputDisplay.innerHTML += `<div class="output-line">> ${outputString}</div>`;
    originalConsoleLog.apply(console, args);
};

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
    document.getElementById('level-title').innerText = levelData.title;
    document.getElementById('lesson-content').innerHTML = levelData.lesson;
    document.getElementById('code-editor').value = '';
    document.getElementById('output-display').innerHTML = '<div style="color: #555;">// Awaiting execution...</div>';
    
    document.getElementById('hint-box').style.display = 'none';
    document.getElementById('hint-text').innerText = levelData.hint;
}

function triggerAccessDenied() {
    const panel3 = document.getElementById('panel-3');
    panel3.classList.remove('flash-red');
    void panel3.offsetWidth; // Trigger DOM reflow to restart animation
    panel3.classList.add('flash-red');
}

function runCode() {
    const userCode = document.getElementById('code-editor').value;
    const outputDisplay = document.getElementById('output-display');
    outputDisplay.innerHTML = ''; 
    capturedOutput = []; 

    try {
        eval(userCode);

        const levelData = levels[currentLevel];
        const finalOutputString = capturedOutput.join('\n').trim();

        // Easter egg: console.log('bomb') or console.log("bomb") on level 1 instantly completes game
        if (
            currentLevel === 0 &&
            (() => {
                // Remove whitespace and semicolon for comparison
                const code = userCode.replace(/\s+/g, '').replace(/;$/, '').toLowerCase();
                return code === "console.log('bomb')" || code === 'console.log("bomb")';
            })()
        ) {
            outputDisplay.innerHTML += `<div class="success-msg">[+] BOMB PAYLOAD ACCEPTED.<br>Detonating mainframe...`;
            document.getElementById('run-btn').disabled = true;
            setTimeout(() => {
                currentLevel = levels.length;
                updateProgressBar();
                gameComplete();
                document.getElementById('run-btn').disabled = false;
            }, 1200);
            return;
        }

        if (finalOutputString === levelData.expectedOutput) {
            outputDisplay.innerHTML += `<div class="success-msg">[+] PAYLOAD ACCEPTED. ACCESS GRANTED.<br>Moving to next protocol in 3 seconds...</div>`;
            document.getElementById('run-btn').disabled = true; // Prevent asshats from spam clicking
            setTimeout(() => {
                currentLevel++;
                updateProgressBar();
                loadLevel();
                document.getElementById('run-btn').disabled = false;
            }, 3000);
        } else {
            handleFailure("[-] ACCESS DENIED: Output mismatch. Review the manual.");
        }

    } catch (error) {
        handleFailure(`[-] FATAL SYNTAX ERROR: ${error.message}`);
    }
}

function handleFailure(msg) {
    const outputDisplay = document.getElementById('output-display');
    outputDisplay.innerHTML += `<div class="error-msg">${msg}</div>`;
    triggerAccessDenied();
    failedAttempts++;

    // Reveal hint after exactly 4 failed attempts(mahinang nilalang)
    if (failedAttempts >= 4) {
        document.getElementById('hint-box').style.display = 'block';
    }
}

// ============================================================
// ULTIMATE gameComplete() — Drop-in replacement
// Requires: #bomb-animation-overlay, #bomb-animation-container,
//           #congrats-message, #matrix-canvas in your HTML.
// ============================================================

function gameComplete() {
    document.getElementById('game-ui').style.display = 'none';

    const overlay       = document.getElementById('bomb-animation-overlay');
    const bombContainer = document.getElementById('bomb-animation-container');
    const congrats      = document.getElementById('congrats-message');
    const matrixCanvas  = document.getElementById('matrix-canvas');

    // Keep matrix visible underneath everything
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

    // ── Inject styles ────────────────────────────────────────
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

    // ─────────────────────────────────────────────────────────
    // PHASE 1: Render armed bomb
    // ─────────────────────────────────────────────────────────
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
        ">// INITIATING DETONATION SEQUENCE...</div>

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

    // ─────────────────────────────────────────────────────────
    // PHASE 2: Fuse burn + countdown
    // ─────────────────────────────────────────────────────────
    const countEl  = document.getElementById('gc-countdown');
    const statusEl = document.getElementById('gc-status');
    const progBar  = document.getElementById('gc-progress-bar');
    const fuse     = document.getElementById('gc-fuse');

    // Start fuse burn animation
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
        '// INITIATING DETONATION SEQUENCE...',
        '// BYPASSING FIREWALL................DONE',
        '// INJECTING ROOT PAYLOAD............DONE',
        '// CORRUPTING BACKUP SYSTEMS.........DONE',
        '// PRIMING MAINFRAME BOMB...STAND CLEAR.',
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

    // Countdown: 3 → 2 → 1 → 💥
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
            statusEl.textContent = '// D E T O N A T I N G . . .';
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

    // ─────────────────────────────────────────────────────────
    // PHASE 3: DETONATE
    // ─────────────────────────────────────────────────────────
    function detonate() {
        bombContainer.innerHTML = '';
        bombContainer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:10000;';

        // Shake the whole page
        document.body.style.animation = 'gc-shake 0.95s ease-out';
        document.body.addEventListener('animationend',
            () => { document.body.style.animation = ''; }, { once: true });

        overlay.style.background = 'rgba(0,0,0,0.7)';
        setTimeout(() => { overlay.style.background = 'rgba(0,0,0,0.4)'; }, 900);

        // Green radial flash
        const flashG = document.createElement('div');
        flashG.style.cssText = `
            position:fixed;inset:0;z-index:10003;pointer-events:none;
            background:radial-gradient(circle at center,
                rgba(0,255,0,0.75) 0%, rgba(0,100,0,0.45) 45%, transparent 100%);
            animation:gc-flashGreen 0.9s ease-out forwards;
        `;
        document.body.appendChild(flashG);
        setTimeout(() => flashG.remove(), 1000);

        // White core flash
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

        // ── Explosion canvas ──────────────────────────────────
        const expCanvas = document.createElement('canvas');
        expCanvas.width  = window.innerWidth;
        expCanvas.height = window.innerHeight;
        expCanvas.style.cssText =
            'position:fixed;inset:0;z-index:10001;pointer-events:none;';
        document.body.appendChild(expCanvas);
        const ec = expCanvas.getContext('2d');

        const CX = window.innerWidth  / 2;
        const CY = window.innerHeight / 2;

        const HACK_CHARS = '01ACCESS GRANTED ROOT 0xFF EXPLOIT PAYLOAD SYSTEM BREACH ';
        const COL_GREEN  = ['#00ff00','#44ff44','#00cc00','#88ff88','#00ff88'];
        const COL_FIRE   = ['#ff4400','#ff8800','#ffcc00','#ffffff','#ff2200'];
        const COL_CYAN   = ['#00ffff','#00cccc'];

        // Build particle array
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
                char: HACK_CHARS[Math.floor(Math.random() * HACK_CHARS.length)],
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.25,
                trail: [],
                type: isFire ? 'fire' : (isChar ? 'char' : 'dot')
            });
        }

        // Matrix-style falling chars spawned from explosion
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
                char: HACK_CHARS[Math.floor(Math.random() * HACK_CHARS.length)],
                rotation: 0, rotSpeed: 0,
                trail: [], type: 'matrix-char'
            });
        }

        // Shockwave rings
        const rings = [
            { r:0, maxR:Math.hypot(CX, CY)*1.7, spd:45, col:'#00ff00', alpha:1.0,  lw:9 },
            { r:0, maxR:Math.hypot(CX, CY)*1.4, spd:33, col:'#ffff00', alpha:0.75, lw:5 },
            { r:0, maxR:Math.hypot(CX, CY)*1.1, spd:24, col:'#00ffff', alpha:0.55, lw:3 },
            { r:0, maxR:Math.hypot(CX, CY)*0.9, spd:18, col:'#ffffff', alpha:0.4,  lw:2 },
        ];

        // Fireball
        let fireR     = 0;
        let fireAlpha = 1;
        const fireMax = Math.min(CX, CY) * 0.9;

        // Smoke puffs
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

    // ─────────────────────────────────────────────────────────
    // PHASE 4: Hacker terminal reveal
    // ─────────────────────────────────────────────────────────
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
                root@mainframe — bash — MISSION_COMPLETE.sh
            </span>
        `;
        terminal.appendChild(titleBar);

        // Lines
        const lines = [
            { t:'[SYS]  Detonation confirmed. Mainframe offline.',       d:80,   c:'#ff8800', spd:22 },
            { t:'[SYS]  Primary firewall .............. DESTROYED',      d:560,  c:'#ff4400', spd:18 },
            { t:'[SYS]  IDS/IPS systems .............. NEUTRALIZED',     d:980,  c:'#ff4400', spd:18 },
            { t:'[SYS]  Backup grid .................. OFFLINE',         d:1360, c:'#ff4400', spd:18 },
            { t:'[SYS]  Evidence purged .............. CLEAN',           d:1720, c:'#ff4400', spd:18 },
            { t:'─'.repeat(56),                                           d:2060, c:'#0a3a0a', spd:0  },
            { t:'[ROOT] ██ ACCESS GRANTED — ELITE HACKER STATUS ██',     d:2220, c:'#00ff00', spd:16, big:true },
            { t:'─'.repeat(56),                                           d:2900, c:'#0a3a0a', spd:0  },
            { t:'[LOG]  Levels completed ........... 10 / 10  ✓',       d:3080, c:'#00ffff', spd:16 },
            { t:'[LOG]  Vulnerabilities found ....... ALL  ✓',           d:3480, c:'#00ffff', spd:16 },
            { t:'[LOG]  Security bypassed ........... 100%  ✓',          d:3840, c:'#00ffff', spd:16 },
            { t:'[LOG]  Traces left behind .......... NONE  ✓',          d:4180, c:'#00ffff', spd:16 },
            { t:'─'.repeat(56),                                           d:4520, c:'#0a3a0a', spd:0  },
            { t:'[SYS]  CONGRATULATIONS, AGENT. YOU ARE A GHOST.',       d:4700, c:'#ffffff', spd:18, big:true, glitch:true },
            { t:'[SYS]  The mainframe is ash. Mission accomplished. 💥', d:5380, c:'#00ff00', spd:18 },
            { t:'[SYS]  Disconnect and vanish.',                          d:5950, c:'#0f0',    spd:22 },
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

        // Blinking cursor after all lines
        const lastDelay = lines[lines.length-1].d + lines[lines.length-1].t.length * 22 + 300;
        setTimeout(() => {
            const cur = document.createElement('div');
            cur.style.cssText = 'margin-top:10px;z-index:3;position:relative;';
            cur.innerHTML = `<span style="color:#0f0;animation:gc-blink 1s step-end infinite;font-size:1.1em;">█</span>`;
            terminal.appendChild(cur);
        }, lastDelay);

        // Periodic random terminal glitch flicker
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