document.addEventListener('DOMContentLoaded', function() {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all service modules
        const serviceModules = document.querySelectorAll('.service-module');
        serviceModules.forEach(module => {
            observer.observe(module);
        });
    } else {
        // If user prefers reduced motion, show all modules immediately
        const serviceModules = document.querySelectorAll('.service-module');
        serviceModules.forEach(module => {
            module.style.opacity = '1';
            module.style.transform = 'translateY(0)';
        });
    }
    
    // Improve keyboard navigation for dropdown menus
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Trap focus in open dropdown menus
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const toggle = this.previousElementSibling;
                toggle.click();
                toggle.focus();
            }
        });
    });
}); 