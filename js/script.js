// Smooth scrolling pour la navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Particules dynamiques
function createParticles() {
    document.querySelectorAll('.particles').forEach((particlesContainer) => {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particlesContainer.appendChild(particle);
        }
    });
}

// Navigation active
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Génération des étoiles
function createStars() {
    const aboutSection = document.getElementById('about');
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        
        if (i % 20 === 0) {
            star.classList.add('shooting');
            star.style.animationDelay = Math.random() * 10 + 's';
        }
        
        starsContainer.appendChild(star);
    }
    
    aboutSection.appendChild(starsContainer);
}

// Génération des particules de vent
function createWindParticles() {
    const aboutSection = document.getElementById('about');
    const windContainer = document.createElement('div');
    windContainer.className = 'wind-particles';
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'wind-particle';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        windContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 20000);
    }, 300);
    
    aboutSection.appendChild(windContainer);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createStars();
    createWindParticles();
    
    console.log(`%cBienvenue dans mon portfolio, Tarnished! Prépare-toi à explorer les terres entre les réseaux et la technologie.`);
});