// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Display current deployment time
    const deployTime = document.getElementById('deploy-time');
    if (deployTime) {
        deployTime.textContent = new Date().toLocaleString();
    }
    
    // Add some interactivity
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'scale(1.02)' ? 'scale(1)' : 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
    });
});