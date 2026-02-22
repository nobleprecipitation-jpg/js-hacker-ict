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

function gameComplete() {
    document.getElementById('level-indicator').innerText = `SYSTEM COMPROMISED`;
    document.getElementById('panel-1').innerHTML = "<h2 style='color:#fff; text-shadow: 0 0 10px #fff;'>[ ROOT ACCESS GRANTED ]</h2><p>Congratulations, Initiate. You have successfully bypassed all 10 JavaScript security protocols. The mainframe is yours. You are officially ready for the ICT strand.</p>";
    document.getElementById('panel-2').style.display = 'none';
    document.getElementById('panel-3').style.display = 'none';
    document.body.style.animation = "pulsing 0.5s infinite alternate";

}

// 4.Event listeners
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('run-btn').addEventListener('click', runCode);
