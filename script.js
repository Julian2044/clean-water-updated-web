// MENU RESPONSIVE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}

// CERRAR MENÚ AL HACER CLIC EN UN ENLACE
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navMenu && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
});

// BOTÓN VOLVER ARRIBA
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (!backToTop) return;

    if (window.scrollY > 450) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

// CAMBIO DE LINK ACTIVO SEGÚN SECCIÓN
const sections = document.querySelectorAll("section[id], main [id]");
const menuItems = document.querySelectorAll(".nav-menu a[href^='#']");

function activateMenuLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    menuItems.forEach((item) => {
        item.classList.remove("active");

        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", activateMenuLink);

// FORMULARIO DE CONTACTO
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = contactForm.querySelector("input[type='text']").value.trim();
        const correo = contactForm.querySelector("input[type='email']").value.trim();
        const telefono = contactForm.querySelector("input[type='tel']").value.trim();
        const servicio = contactForm.querySelector("select").value.trim();
        const mensaje = contactForm.querySelector("textarea").value.trim();

        if (!nombre || !correo || !telefono || !servicio) {
            alert("Por favor completa los campos obligatorios.");
            return;
        }

        const whatsappNumber = "573219619924";

        const whatsappMessage = `
Hola, quiero solicitar una cotización para Clean Water Updated S.A.S.

Nombre: ${nombre}
Correo: ${correo}
Teléfono: ${telefono}
Servicio de interés: ${servicio}
Mensaje: ${mensaje || "No especificado"}
    `;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
            "_blank"
        );

        contactForm.reset();
    });
}

// SIMULACIÓN DE SLIDER HERO
const dots = document.querySelectorAll(".dot");
const leftArrow = document.querySelector(".slider-arrow.left");
const rightArrow = document.querySelector(".slider-arrow.right");

let activeDot = 0;

function updateDots(index) {
    dots.forEach((dot) => dot.classList.remove("active"));

    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

function nextSlide() {
    activeDot++;

    if (activeDot >= dots.length) {
        activeDot = 0;
    }

    updateDots(activeDot);
}

function prevSlide() {
    activeDot--;

    if (activeDot < 0) {
        activeDot = dots.length - 1;
    }

    updateDots(activeDot);
}

if (rightArrow) {
    rightArrow.addEventListener("click", nextSlide);
}

if (leftArrow) {
    leftArrow.addEventListener("click", prevSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        activeDot = index;
        updateDots(activeDot);
    });
});

// ANIMACIONES SUAVES AL ENTRAR EN PANTALLA
const animatedElements = document.querySelectorAll(
    ".feature-card, .service-card, .quick-card, .technical-content, .contact-grid"
);

const observerOptions = {
    threshold: 0.15,
};

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
    revealOnScroll.observe(element);
});