// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-content, .project-card, .skill-category, .education-card, .certification-card, .certificate-image-container');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to hero name (optional enhancement)
const heroName = document.querySelector('.hero-title .name');
if (heroName) {
    const text = heroName.textContent;
    heroName.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroName.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Handle profile photo loading - show fallback if image fails to load
const profilePhoto = document.getElementById('profilePhoto');
const imageFallback = document.querySelector('.image-fallback');

if (profilePhoto) {
    profilePhoto.addEventListener('error', () => {
        // If image fails to load, show the fallback icon
        profilePhoto.style.display = 'none';
        if (imageFallback) {
            imageFallback.style.display = 'flex';
        }
    });
    
    // If image loads successfully, hide the fallback
    profilePhoto.addEventListener('load', () => {
        if (imageFallback) {
            imageFallback.style.display = 'none';
        }
    });
}

// Handle certificate image loading
const certificateImage = document.getElementById('certificateImage');
const certificateFallback = document.querySelector('.certificate-fallback');

if (certificateImage) {
    certificateImage.addEventListener('error', () => {
        // If image fails to load, show the fallback
        certificateImage.style.display = 'none';
        if (certificateFallback) {
            certificateFallback.style.display = 'flex';
        }
    });
    
    // If image loads successfully, hide the fallback
    certificateImage.addEventListener('load', () => {
        if (certificateFallback) {
            certificateFallback.style.display = 'none';
        }
    });

    // Add click to zoom functionality
    certificateImage.addEventListener('click', () => {
        // Open image in new tab for full view
        window.open(certificateImage.src, '_blank');
    });
}

