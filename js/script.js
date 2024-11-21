// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
