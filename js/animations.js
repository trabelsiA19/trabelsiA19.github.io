// Animation related functionality
const animations = {
    // Initialize all animations
    init() {
        this.initScrollAnimations();
        this.initSkillBarsAnimation();
        this.initMobileMenuAnimation();
    },

    // Handle scroll-based animations
    initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    },

    // Animate skill bars when they come into view
    initSkillBarsAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-progress-bar').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            bar.setAttribute('data-width', width);
            observer.observe(bar);
        });
    },

    // Mobile menu animations
    initMobileMenuAnimation() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.nav-list');

        menuBtn?.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    },

    // Add fade-in animation to elements
    fadeIn(element, delay = 0) {
        element.style.opacity = '0';
        element.style.animation = `fadeIn 0.8s ease-out ${delay}s forwards`;
    },

    // Add slide-in animation to elements
    slideIn(element, direction = 'left', delay = 0) {
        element.style.opacity = '0';
        element.style.animation = `slideIn${direction.charAt(0).toUpperCase() + direction.slice(1)} 0.6s ease-out ${delay}s forwards`;
    }
};