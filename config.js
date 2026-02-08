<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For Shreya 🧡</title>
<style>
    body {
        margin: 0;
        font-family: sans-serif;
        background: linear-gradient(135deg, #fff3e0, #ff9f45);
        color: #2b1d0e;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        text-align: center;
    }
    .screen {
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .screen.active { display: flex; }
    button {
        padding: 10px 25px;
        border: none;
        border-radius: 8px;
        background: #ff7a18;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover { background: #ff9f45; }
    .emojis {
        font-size: 40px;
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    }
    .emoji {
        position: absolute;
        animation: float 10s linear infinite;
    }
    @keyframes float {
        0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-10vh) translateX(50px) rotate(360deg); opacity: 0; }
    }
</style>
</head>
<body>

<div id="screen1" class="screen active">
    <h1>Hey Shreya, I miss you a lot 🌸</h1>
    <div>
        <button id="yes1">I miss you too 🧡</button>
        <button id="no1">Later</button>
    </div>
</div>

<div id="screen2" class="screen">
    <h1>Will you be my Valentine this February 14th?</h1>
    <div>
        <button id="yes2">Yes 🧡</button>
        <button id="no2">Maybe later</button>
    </div>
</div>

<div id="celebration" class="screen">
    <h1>I love you 🧡</h1>
    <p>So happy it’s you, Shreya!</p>
</div>

<div class="emojis" id="emojiContainer"></div>

<script>
    // Screen navigation
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const celebration = document.getElementById('celebration');

    document.getElementById('yes1').onclick = () => {
        screen1.classList.remove('active');
        screen2.classList.add('active');
    };
    document.getElementById('no1').onclick = () => alert("Okay, we can do this later 🧡");

    document.getElementById('yes2').onclick = () => {
        screen2.classList.remove('active');
        celebration.classList.add('active');
    };
    document.getElementById('no2').onclick = () => alert("No worries, maybe later 🧡");

    // Floating emojis
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['🧡', '🤍', '💛', '🏵️', '🌼', '🌸', '✨'];
    
    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.className = 'emoji';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.fontSize = (20 + Math.random() * 30) + 'px';
        emoji.style.animationDuration = (8 + Math.random() * 7) + 's';
        emojiContainer.appendChild(emoji);
        setTimeout(() => { emoji.remove(); }, 15000);
    }
    setInterval(createEmoji, 500);
</script>

</body>
</html>
