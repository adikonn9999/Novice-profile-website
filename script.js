// Typing Effect for Hero Section
const typingEffectContainer = document.querySelector('.typing-effect-container');
const typingEffect = document.querySelector('.typing-effect');
const phrases = ["Programmer", "Aspiring AI researcher", "Artist"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        typingEffect.textContent = currentPhrase.substring(0, currentLetterIndex--);
        if (currentLetterIndex < 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
    } else {
        typingEffect.textContent = currentPhrase.substring(0, currentLetterIndex++);
        if (currentLetterIndex > currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    }
    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

document.addEventListener('DOMContentLoaded', type);

// Tab Navigation with Fade Effect
const tabs = document.querySelectorAll('nav a');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1);
        contents.forEach(content => {
            if (content.id === target) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

// Parallax Effect for Hand Image
document.addEventListener('mousemove', (e) => {
    const parallaxImage = document.querySelector('.parallax');
    const x = (window.innerWidth - e.pageX * 4) / 100;
    const y = (window.innerHeight - e.pageY * 4) / 100;

    parallaxImage.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});

// Parallax Effect for Hand Images on Scroll within the Skills Section
const skillsCard = document.querySelector('#skills .card');
const parallaxHand2 = document.querySelector('.parallax-hand2');
const parallaxHand3 = document.querySelector('.parallax-hand3');

skillsCard.addEventListener('scroll', () => {
    const scrollY = skillsCard.scrollTop;

    parallaxHand2.style.transform = `translateY(${scrollY * -0.07}px)`; // Moves up with a moderate speed
    parallaxHand3.style.transform = `translateY(${scrollY * -0.03}px)`; // Moves up with a faster speed
});
