// --- 1. MATRIX BACKGROUND EFFECT ---
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

// --- 2. GAME DATA (10 Levels) ---
const levels = [
    {
        title: "LEVEL 1: First Protocol",
        lesson: "<p>Welcome to JavaScript. To hack this system, you must first learn how to communicate with it. We use a command called <code>console.log()</code> to print text directly to the system output.</p><p><strong>TASK:</strong> Print the exact phrase <strong>Hello World</strong> to the output. Fill in the blanks below:</p><pre><code>console.log(\"________\");</code></pre>",
        expectedOutput: "Hello World",
        hint: "Type console.log(\"Hello World\"); Make sure your capitalization is exact!"
    },
    {
        title: "LEVEL 2: Memory Storage (Variables)",
        lesson: "<p>You need to store temporary data. We use 'variables' for this. By using the keyword <code>let</code>, you create a variable that can be changed or updated later.</p><p><strong>TASK:</strong> Create a variable named <code>alias</code>, assign it the value <strong>Hacker</strong>, and print it.</p><pre><code>let alias = \"________\";\nconsole.log(alias);</code></pre>",
        expectedOutput: "Hacker",
        hint: "let alias = \"Hacker\"; \nconsole.log(alias);"
    },
    {
        title: "LEVEL 3: Immutable Data (Constants)",
        lesson: "<p>Sometimes data must be locked down and never changed. Use the <code>const</code> keyword for constant variables. The system will crash if you try to change a const.</p><p><strong>TASK:</strong> Create a <code>const</code> variable named <code>pin</code> and set it to the number <strong>1234</strong>. Print it.</p><pre><code>const pin = ____;\nconsole.log(pin);</code></pre>",
        expectedOutput: "1234",
        hint: "const pin = 1234; \nconsole.log(pin); (Numbers don't need quotation marks!)"
    },
    {
        title: "LEVEL 4: Processing Logic (Math)",
        lesson: "<p>JavaScript is a powerful calculator. Let's bypass a firewall by crunching its security code. You can use standard operators like <code>+</code> (add), <code>-</code> (subtract), <code>*</code> (multiply), and <code>/</code> (divide).</p><p><strong>TASK:</strong> Print the result of <strong>50 multiplied by 2</strong>.</p><pre><code>console.log(50 _ 2);</code></pre>",
        expectedOutput: "100",
        hint: "console.log(50 * 2);"
    },
    {
        title: "LEVEL 5: Data Fusion (Concatenation)",
        lesson: "<p>You can glue pieces of text (called Strings) together using the <code>+</code> symbol. This is known as concatenation.</p><p><strong>TASK:</strong> Create two strings, <strong>\"Access \"</strong> (notice the space!) and <strong>\"Granted\"</strong>. Add them together inside a console log.</p><pre><code>console.log(\"Access \" _ \"Granted\");</code></pre>",
        expectedOutput: "Access Granted",
        hint: "console.log(\"Access \" + \"Granted\");"
    },
    {
        title: "LEVEL 6: Decision Making (If Statements)",
        lesson: "<p>An <code>if</code> statement gives your code a brain. It tells the computer to execute a block of code ONLY if a certain condition is true.</p><p><strong>TASK:</strong> Write a condition checking if <strong>10 is greater than 5</strong> using the <code>></code> symbol.</p><pre><code>if (10 _ 5) {\n  console.log(\"Bypassed\");\n}</code></pre>",
        expectedOutput: "Bypassed",
        hint: "if (10 > 5) { console.log(\"Bypassed\"); }"
    },
    {
        title: "LEVEL 7: Automation (For Loops)",
        lesson: "<p>Hackers don't do repetitive work; they write loops. A <code>for</code> loop repeats code for a specific number of times.</p><p><strong>TASK:</strong> Complete the loop so it runs exactly 3 times. The counter <code>i</code> starts at 0.</p><pre><code>for(let i = 0; i < _; i++) {\n  console.log(\"Ping\");\n}</code></pre>",
        expectedOutput: "Ping\nPing\nPing",
        hint: "for(let i = 0; i < 3; i++) { console.log(\"Ping\"); }"
    },
    {
        title: "LEVEL 8: Reusable Code (Functions)",
        lesson: "<p>Functions are blocks of code you write once and can trigger (call) as many times as you want.</p><p><strong>TASK:</strong> The function <code>override</code> is already built, but you need to 'call' it to make it run.</p><pre><code>function override() {\n  console.log(\"System Overridden\");\n}\n\n________(); // Call it here</code></pre>",
        expectedOutput: "System Overridden",
        hint: "Just type override(); at the bottom of the script."
    },
    {
        title: "LEVEL 9: Data Lists (Arrays)",
        lesson: "<p>Arrays hold multiple values in a single list. In programming, we start counting at 0. So the first item is at index 0, the second is at index 1, etc.</p>  <p><strong>TASK:</strong> Target the second port (443) by putting its correct index number in the brackets.</p><pre><code>let ports = [80, 443, 8080];\nconsole.log(ports[_]);</code></pre>",
        expectedOutput: "443",
        hint: "let ports = [80, 443, 8080]; \nconsole.log(ports[1]);"
    },
    {
        title: "LEVEL 10: Complex Data (Objects)",
        lesson: "<p>Objects store data in 'key-value' pairs. You access an object's specific data using a period, known as 'dot notation'.</p><p><strong>TASK:</strong> Print the target's IP address using dot notation.</p><pre><code>let target = { ip: \"192.168.1.1\" };\nconsole.log(target.__);</code></pre>",
        expectedOutput: "192.168.1.1",
        hint: "let target = { ip: \"192.168.1.1\" }; \nconsole.log(target.ip);"
    }
];

// --- 3. GAME LOGIC ---
let currentLevel = 0;
let failedAttempts = 0;
let capturedOutput = [];

// Intercept console.log
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

        if (finalOutputString === levelData.expectedOutput) {
            outputDisplay.innerHTML += `<div class="success-msg">[+] PAYLOAD ACCEPTED. ACCESS GRANTED.<br>Moving to next protocol in 3 seconds...</div>`;
            document.getElementById('run-btn').disabled = true; // Prevent spam clicking
            
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

    // Reveal hint after exactly 4 failed attempts
    if (failedAttempts >= 4) {
        document.getElementById('hint-box').style.display = 'block';
    }
}

function gameComplete() {
    document.getElementById('level-indicator').innerText = `SYSTEM COMPROMISED`;
    document.getElementById('panel-1').innerHTML = "<h2 style='color:#fff; text-shadow: 0 0 10px #fff;'>[ ROOT ACCESS GRANTED ]</h2><p>Congratulations, Initiate. You have successfully bypassed all 10 JavaScript security protocols. The mainframe is yours. You are officially ready for the ICT strand.</p>";
    document.getElementById('panel-2').style.display = 'none';
    document.getElementById('panel-3').style.display = 'none';
    document.body.style.animation = "pulsing 0.5s infinite alternate";

}

// --- 4. EVENT LISTENERS ---
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('run-btn').addEventListener('click', runCode);
