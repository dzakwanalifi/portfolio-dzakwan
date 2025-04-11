// src/scripts/main.js

// --- Easter Egg Console Log ---
const styles = [
    'font-family: "Space Grotesk", monospace',
    'font-size: 14px',
    'font-weight: bold',
    'background-color: #000000',
    'color: #FFFFFF',
    'padding: 8px 12px',
    'border: 1px solid #333333'
];

const styleString = styles.join(';');
const message = `Hey there, curious developer! 👋 Thanks for checking out my code. Let's connect: https://www.linkedin.com/in/dzakwanalifi/`;

const asciiArt = `
██████╗ ███████╗ █████╗ ██╗  ██╗██╗    ██╗ █████╗ ███╗   ██╗
██╔══██╗╚══███╔╝██╔══██╗██║ ██╔╝██║    ██║██╔══██╗████╗  ██║
██║  ██║  ███╔╝ ███████║█████╔╝ ██║ █╗ ██║███████║██╔██╗ ██║
██║  ██║ ███╔╝  ██╔══██║██╔═██╗ ██║███╗██║██╔══██║██║╚██╗██║
██████╔╝███████╗██║  ██║██║  ██╗╚███╔███╔╝██║  ██║██║ ╚████║
╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝
`;

console.log(asciiArt);
console.log('%c' + message, styleString);
// --- End Easter Egg ---

// --- Intersection Observer ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach(el => observer.observe(el));
// --- End Observer ---