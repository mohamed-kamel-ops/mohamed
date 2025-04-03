/**
 * السيرة الذاتية لمحمد أحمد كامل
 * تصميم وتطوير: Manus AI
 */

document.addEventListener("DOMContentLoaded", function() {
    // تحديد العناصر
    const navLinks = document.querySelectorAll(".main-nav ul li a");
    const sections = document.querySelectorAll(".section");
    const scrollTopBtn = document.querySelector(".scroll-top");
    const mainNav = document.querySelector(".main-nav");
    
    // إضافة صور المشاريع ديناميكياً
    addProjectImages();
    
    // تفعيل تأثيرات الظهور عند التمرير
    initScrollAnimations();
    
    // تفعيل التنقل السلس بين الأقسام
    initSmoothScrolling();
    
    // تفعيل زر التمرير لأعلى
    initScrollTopButton();
    
    // تفعيل تغيير حالة القائمة عند التمرير
    initNavbarScrollState();
    
    // تفعيل تأثيرات التفاعل مع العناصر
    initInteractionEffects();
});

/**
 * إضافة صور المشاريع ديناميكياً
 */
function addProjectImages() {
    const projectGallery = document.getElementById("project-gallery");
    
    // بيانات المشاريع
    const projects = [
        {
            image: "images/busway_design.jpg",
            title: "تصميم نظام Busway",
            description: "تصميم ونمذجة أنظمة busway شاملة باستخدام Revit"
        },
        {
            image: "images/mechanical_model.jpg",
            title: "نموذج ميكانيكي",
            description: "تصميم وتطوير نماذج ميكانيكية باستخدام SolidWorks"
        },
        {
            image: "images/industrial_project.jpg",
            title: "مشروع صناعي",
            description: "تصميم وتنفيذ مشاريع صناعية متكاملة"
        }
    ];
    
    // إنشاء بطاقات المشاريع
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card fade-in";
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-overlay">
                <div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                </div>
            </div>
        `;
        
        projectGallery.appendChild(projectCard);
    });
}

/**
 * تفعيل تأثيرات الظهور عند التمرير
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll(".fade-in");
    
    // إضافة فئة fade-in لجميع العناصر التي نريد تطبيق تأثير الظهور عليها
    document.querySelectorAll(".section-header, .timeline-item, .education-card, .skill-card, .certification-card, .language-card").forEach(el => {
        if (!el.classList.contains("fade-in")) {
            el.classList.add("fade-in");
        }
    });
    
    // تفعيل تأثير الظهور عند التمرير
    const checkFade = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add("visible");
            }
        });
    };
    
    // تحقق من العناصر عند تحميل الصفحة
    checkFade();
    
    // تحقق من العناصر عند التمرير
    window.addEventListener("scroll", checkFade);
}

/**
 * تفعيل التنقل السلس بين الأقسام
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
 * تفعيل زر التمرير لأعلى
 */
function initScrollTopButton() {
    const scrollTopBtn = document.querySelector(".scroll-top");
    
    // إظهار/إخفاء زر التمرير لأعلى
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("active");
        } else {
            scrollTopBtn.classList.remove("active");
        }
    });
    
    // التمرير لأعلى عند النقر على الزر
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/**
 * تفعيل تغيير حالة القائمة عند التمرير
 */
function initNavbarScrollState() {
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav ul li a");
    const sections = document.querySelectorAll(".section");
    
    // تغيير حالة القائمة عند التمرير
    window.addEventListener("scroll", function() {
        // إضافة فئة scrolled للقائمة عند التمرير
        if (window.scrollY > 100) {
            mainNav.classList.add("scrolled");
        } else {
            mainNav.classList.remove("scrolled");
        }
        
        // تحديث الرابط النشط في القائمة
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

/**
 * تفعيل تأثيرات التفاعل مع العناصر
 */
function initInteractionEffects() {
    // تأثير تفاعلي للمهارات
    document.querySelectorAll(".skill-card").forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px)";
            this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.15)";
        });
        
        card.addEventListener("mouseleave", function() {
            this.style.transform = "";
            this.style.boxShadow = "";
        });
    });
    
    // تأثير تفاعلي للشهادات
    document.querySelectorAll(".certification-card").forEach(card => {
        card.addEventListener("mouseenter", function() {
            const logo = this.querySelector(".certification-logo");
            if (logo) {
                logo.style.backgroundColor = "var(--secondary-color)";
            }
        });
        
        card.addEventListener("mouseleave", function() {
            const logo = this.querySelector(".certification-logo");
            if (logo) {
                logo.style.backgroundColor = "";
            }
        });
    });
    
    // تأثير تفاعلي للخبرات
    document.querySelectorAll(".timeline-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            const dot = this.querySelector(".timeline-dot");
            if (dot) {
                dot.style.transform = "scale(1.3)";
                dot.style.backgroundColor = "var(--accent-color)";
            }
        });
        
        item.addEventListener("mouseleave", function() {
            const dot = this.querySelector(".timeline-dot");
            if (dot) {
                dot.style.transform = "";
                dot.style.backgroundColor = "";
            }
        });
    });
    
    // تأثير تفاعلي للصورة الشخصية
    const profilePic = document.querySelector(".profile-pic");
    if (profilePic) {
        profilePic.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.05)";
        });
        
        profilePic.addEventListener("mouseleave", function() {
            this.style.transform = "";
        });
    }
}
