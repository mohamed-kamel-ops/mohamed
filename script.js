document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    window.addEventListener("scroll", function() {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
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

    // Add profile image dynamically
    document.querySelector(".profile-pic").src = "images/mohamed.jpeg";

    // Add project images dynamically
    const projectsSection = document.getElementById("project-gallery");
    const projectImages = ["busway_design.jpg", "mechanical_model.jpg", "industrial_project.jpg"];

    projectImages.forEach(image => {
        let imgElement = document.createElement("img");
        imgElement.src = "images/" + image;
        imgElement.alt = "Project Image";
        imgElement.style.width = "200px";
        imgElement.style.margin = "10px";
        projectsSection.appendChild(imgElement);
    });
});
