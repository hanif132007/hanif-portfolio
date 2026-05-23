// Smooth Scroll Function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Message Sent Successfully!");

    contactForm.reset();
});

// Navbar Active Link Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Fade-In Animation on Scroll

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-content"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});

// Typing Effect

const typingText = [
    "Frontend Web Developer",
    "UI Designer",
    "JavaScript Developer"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-text h3");

function typeEffect() {

    if (charIndex < typingText[textIndex].length) {

        typingElement.textContent +=
            typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            typingText[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if (textIndex >= typingText.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

typingElement.textContent = "";

typeEffect();

// Scroll To Top Button

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "12px 18px";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#38bdf8";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Dynamic Footer Year

const footer = document.querySelector("footer p");

footer.innerHTML =
    `© ${new Date().getFullYear()} HANIF SHAIK | All Rights Reserved`;