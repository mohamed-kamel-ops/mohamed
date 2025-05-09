/**
 * Mohamed Ahmed Kamel Resume
 * JavaScript functionality
 */

document.addEventListener("DOMContentLoaded", function() {
    // Initialize fade-in animations on scroll
    initScrollAnimations();
    
    // Enable smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Set up the scroll to top button
    initScrollTopButton();
    
    // Initialize navbar scroll state and active link tracking
    initNavbarScrollState();
});

/**
 * Initialize fade-in animations on scroll
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll(".fade-in");
    
    // Add 'fade-in' class to all section elements we want to animate
    document.querySelectorAll(".section-header, .timeline-item, .education-card, .skill-card, .certification-card, .language-card").forEach(el => {
        if (!el.classList.contains("fade-in")) {
            el.classList.add("fade-in");
        }
    });
    
    // Check if elements are in the viewport and add 'visible' class
    const checkFade = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add("visible");
            }
        });
    };
    
    // Check elements on page load
    checkFade();
    
    // Check elements on scroll
    window.addEventListener("scroll", checkFade);
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll(".main-nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
}

/**
 * Initialize the scroll to top button
 */
function initScrollTopButton() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    
    // Show/hide the scroll-to-top button based on scroll position
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("active");
        } else {
            scrollTopBtn.classList.remove("active");
        }
    });
    
    // Scroll to top when the button is clicked
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/**
 * Initialize navbar state changes on scroll and active link tracking
 */
function initNavbarScrollState() {
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav ul li a");
    const sections = document.querySelectorAll(".section");
    
    window.addEventListener("scroll", function() {
        // Add 'scrolled' class to navbar when scrolled
        if (window.scrollY > 100) {
            mainNav.classList.add("scrolled");
        } else {
            mainNav.classList.remove("scrolled");
        }
        
        // Update active link in navigation
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
}
