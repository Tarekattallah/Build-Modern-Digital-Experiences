/*=========================================
    Mobile Menu
=========================================*/

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/*=========================================
 Close Menu After Click
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*=========================================
 Sticky Header
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

/*=========================================
 Back To Top
=========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollBtn.style.display="flex";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
 Dark Mode
=========================================*/

const themeBtn=document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});
/*=========================================
    Typing Effect
=========================================*/

const typingElement = document.getElementById("typing");

const words = [
    "Modern Websites",
    "Web Applications",
    "Creative UI Design",
    "Responsive Layouts"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {

        speed = 1800;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

/*=========================================
    Counter Animation
=========================================*/

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let count = 0;
        const increment = target / 80;

        function updateCounter() {

            count += increment;

            if (count < target) {

                counter.textContent = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + "+";

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));

/*=========================================
    FAQ Accordion
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("i");

    question.addEventListener("click", () => {

        const opened = answer.style.maxHeight;

        faqItems.forEach(faq => {

            faq.querySelector(".faq-answer").style.maxHeight = null;

            faq.querySelector("i").classList.remove("fa-minus");
            faq.querySelector("i").classList.add("fa-plus");

        });

        if (!opened) {

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        }

    });

});
/*==================================================
  Active Navigation On Scroll
===================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==================================================
  Scroll Reveal
===================================================*/

const revealElements = document.querySelectorAll(

    ".section-title,\
    .hero-content,\
    .hero-image,\
    .service-card,\
    .project-card,\
    .testimonial,\
    .price-card,\
    .stat,\
    .contact-info,\
    .contact-form"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:.15

}

);

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/*==================================================
  Save Theme
===================================================*/

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }

    else{

        localStorage.setItem("theme","light");

    }

});

/*==================================================
  Current Year
===================================================*/

const year = new Date().getFullYear();

const copy = document.querySelector(".copyright");

if(copy){

    copy.innerHTML = `© ${year} TechNova. All Rights Reserved.`;

}

/*==================================================
  Loading Animation
===================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});