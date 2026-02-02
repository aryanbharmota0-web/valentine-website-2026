// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Jacquie",

    // The title that appears in the browser tab
    pageTitle: "Hey Jacquie 💗",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💗', '💖'],
        bears: ['🧸']
    },

    // Questions and answers
    questions: {
        first: {
            text: "Can I tell you something, sweet girl?",
            yesBtn: "Yeah",
            noBtn: "Maybe later",
            secretAnswer: "I love you ❤️"
        },
        second: {
            text: "How much do you care about me?",
            startText: "Like this much",
            nextBtn: "Next 💗"
        },
        third: {
            text: "Will you be my Valentine this February 14th?",
            yesBtn: "Yes 💕",
            noBtn: "Not yet"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "Okay wow… that’s a lot 🥰",
        high: "That means more than you think 💗",
        normal: "That’s really sweet"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "You just made my day 💖",
        message: "I’m really glad it’s you.",
        emojis: "💝🤍💗"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#fbc2eb",
        backgroundEnd: "#a6c1ee",
        buttonBackground: "#ff6b81",
        buttonHover: "#ff8fa3",
        textColor: "#2f3542"
    },

    // Animation settings
    animations: {
        floatDuration: "16s",
        floatDistance: "45px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.4
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
