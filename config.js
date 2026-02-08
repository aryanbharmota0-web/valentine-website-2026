// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Shreya",

    // The title that appears in the browser tab
    pageTitle: "Hey Shreya 🌺",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['🤍', '💗'],
        bears: ['🌺']
    },

    // Questions and answers
    questions: {
        first: {
            text: "Can I tell you something?",
            yesBtn: "Yeah",
            noBtn: "Maybe later",
            secretAnswer: "I like you 🌺"
        },
        second: {
            text: "How do you feel about us right now?",
            startText: "Probably like this",
            nextBtn: "Next"
        },
        third: {
            text: "Would you want to be my Valentine on February 14th?",
            yesBtn: "Yes",
            noBtn: "Not yet"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "Okay… noted 🙂",
        high: "That’s good to hear",
        normal: "Fair enough"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "That means a lot",
        message: "I’m really glad it’s you.",
        emojis: "🌺🤍"
    },

    // Color scheme for the website (soft, muted floral tones)
    colors: {
        backgroundStart: "#ffe5ec",
        backgroundEnd: "#ffd6a5",
        buttonBackground: "#ff758f",
        buttonHover: "#ff8fab",
        textColor: "#2f2f2f"
    },

    // Animation settings
    animations: {
        floatDuration: "16s",
        floatDistance: "45px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.3
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
