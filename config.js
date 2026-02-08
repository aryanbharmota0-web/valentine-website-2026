// ============================================
// 🧡 PERSONAL VALENTINE PAGE FOR SHREYA 🧡
// ============================================

const CONFIG = {
    valentineName: "Shreya",
    pageTitle: "For Shreya 🧡",

    // Background emojis
    floatingEmojis: {
        hearts: ['🧡', '🤍'],
        flowers: ['🏵️', '🌼'],
        others: ['✨']
    },

    // Questions / interactions
    questions: {
        first: {
            text: "Hey Shreya, I miss you a lot 🌸",
            yesBtn: "I miss you too 🧡",
            noBtn: "Later",
            secretAnswer: "Hopefully we can see each other soon"
        },
        second: {
            text: "Will you be my Valentine this February 14th?",
            yesBtn: "Yes 🧡",
            noBtn: "Maybe later"
        }
    },

    // Messages shown during slider / interaction (optional)
    loveMessages: {
        extreme: "You make me really happy 🧡",
        high: "I’m looking forward to seeing you 💛",
        normal: "Every moment with you matters 🤍"
    },

    // After the "Yes" response
    celebration: {
        title: "I love you 🧡",
        message: "I’m really happy it’s you, Shreya.",
        emojis: "🧡🏵️💛"
    },

    // Colors
    colors: {
        backgroundStart: "#fff3e0",
        backgroundEnd: "#ff9f45",
        buttonBackground: "#ff7a18",
        buttonHover: "#ff9f45",
        textColor: "#2b1d0e"
    },

    // Animations
    animations: {
        floatDuration: "12s",
        floatDistance: "60px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.3
    }
};

// Fix: assign the config globally
window.VALENTINE_CONFIG = CONFIG;
