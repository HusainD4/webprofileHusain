// Animasi saat scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Animasi saat elemen muncul di viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-img, .about-text, .skill-card, .portfolio-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    const animatedElements = document.querySelectorAll('.about-img, .about-text, .skill-card, .portfolio-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Jalankan saat load dan scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Efek hover untuk card keterampilan
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'rotateY(360deg)';
            this.querySelector('i').style.transition = 'transform 0.8s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'rotateY(0deg)';
        });
    });

    // Efek scroll header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Animasi teks di hero section
    const heroText = document.querySelector('.hero-content h1');
    const heroSubtext = document.querySelector('.hero-content p');
    const heroButton = document.querySelector('.hero-content .btn');

    setTimeout(() => {
        heroText.style.opacity = '1';
    }, 400);

    setTimeout(() => {
        heroSubtext.style.opacity = '1';
    }, 600);

    setTimeout(() => {
        heroButton.style.opacity = '1';
    }, 800);
});

