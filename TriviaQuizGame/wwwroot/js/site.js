// Light effect
function createLights() {
    const lightEffect = document.getElementById('light-effect');
    for (let i = 0; i < 5; i++) {
        const light = document.createElement('div');
        light.className = 'light';
        light.style.left = `${Math.random() * 100}%`;
        light.style.top = `${Math.random() * 100}%`;
        light.style.animationDelay = `${Math.random() * 6}s`;
        lightEffect.appendChild(light);
    }
}

// Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 2 + 2}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particlesContainer.appendChild(particle);
    }
}

// Initialize effects
window.addEventListener('load', () => {
    createLights();
    createParticles();
});