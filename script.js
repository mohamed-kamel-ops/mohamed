document.addEventListener("DOMContentLoaded", function() { const navLinks = document.querySelectorAll("nav ul li a"); const sections = document.querySelectorAll(".section");

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
const profileImage = document.createElement("img");
profileImage.src = "images/profile.jpg"; // Ensure you upload an image with this name
profileImage.alt = "Mohamed Ahmed Kamel";
profileImage.style.width = "150px";
profileImage.style.borderRadius = "50%";
document.getElementById("profile").appendChild(profileImage);

// Add personal details
document.getElementById("name").innerText = "Mohamed Ahmed Kamel";
document.getElementById("title").innerText = "Mechanical Design Engineer";
document.getElementById("location").innerText = "Abu Hammad, Sharkia, Egypt";
document.getElementById("phone").innerText = "+201014599752";
document.getElementById("email").innerText = "kamelmohamedahmed154@gmail.com";
document.getElementById("linkedin").innerText = "mohamed-kamel";
document.getElementById("summary").innerText = "Mechanical Design Engineer with extensive experience in developing innovative engineering solutions...";

// Add project images dynamically
const projectsSection = document.getElementById("projects");
const projectImages = ["project1.jpg", "project2.jpg", "project3.jpg"]; // Add actual image names

projectImages.forEach(image => {
    let imgElement = document.createElement("img");
    imgElement.src = "images/" + image;
    imgElement.alt = "Project Image";
    imgElement.style.width = "200px";
    imgElement.style.margin = "10px";
    projectsSection.appendChild(imgElement);
});

});
