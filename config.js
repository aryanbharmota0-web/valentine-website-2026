// ============================================
// 🧡 PERSONAL VALENTINE PAGE FOR SHREYA 🧡
// ============================================

const CONFIG = {
    // Name shown across the site
    valentineName: "Shreya",

    // Browser tab title
    pageTitle: "For Shreya 🧡",

    // Floating background elements (full emoji vibe)
    floatingEmojis: {
        hearts: ['🧡', '🤍', '💛', '💖'],
        flowers: ['🏵️', '🌼', '🌸'],
        others: ['✨', '🌟', '💫']
    },

    // Messages & interactions
    questions: {
        first: {
            text: "Hey… I’ve been thinking about you a lot lately.",
            yesBtn: "I’ve been thinking about you too 🧡",
            noBtn: "Later maybe",
            secretAnswer: "I miss you a lot and hope we can see each other soon 🌸"
        },
        second: {
            text: "So… would you be my Valentine this February 14th?",
            yesBtn: "Yes 🧡",
            noBtn: "Let’s see"
        }
    },

    // Slider / meter responses
    loveMessages: {
        extreme: "Thinking about you makes me smile 🧡",
        high: "Can’t wait to be together soon 💛",
        normal: "Every moment matters 🤍"
    },

    // After a “yes”
    celebration: {
        title: "I love you 🧡",
        message: "I’m so happy it’s you, Shreya.",
        emojis: "🧡🏵️💛✨"
    },

    // Warm emoji-filled color palette
    colors: {
        backgroundStart: "#fff3e0",   // soft cream-orange
        backgroundEnd: "#ff9f45",     // warm orange
        buttonBackground: "#ff7a18",  // bold orange
        buttonHover: "#ff9f45",
        textColor: "#2b1d0e"
    },

    // Motion & animation
    animations: {
        floatDuration: "12s",
        floatDistance: "60px",  // bigger float for more dynamic emoji effect
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.3
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
