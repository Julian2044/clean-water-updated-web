document.addEventListener("DOMContentLoaded", () => {
    const views = document.querySelectorAll(".view");
    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");
    const backToTop = document.getElementById("backToTop");

    const validViews = [
        "inicio",
        "nosotros",
        "servicios",
        "tramites",
        "clientes",
        "galeria",
        "contacto"
    ];

    renderServices();
    renderEnvironmentalProcesses();
    renderClients();
    renderGallery();

    const initialView = getInitialView();
    showView(initialView, false);

    // Navegación por vistas
    document.addEventListener("click", (event) => {
        const link = event.target.closest("[data-view-link]");

        if (!link) return;

        const viewName = link.getAttribute("data-view-link");

        if (!viewName || !validViews.includes(viewName)) return;

        event.preventDefault();

        showView(viewName);

        if (navMenu && navMenu.classList.contains("active")) {
            closeMobileMenu();
        }
    });

    // Menú responsive
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (!icon) return;

            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    }

    // Botón volver al inicio
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            showView("inicio");
        });
    }

    // Formulario de contacto
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", handleContactForm);
    }

    function showView(viewName, updateUrl = true) {
        views.forEach((view) => {
            const currentView = view.getAttribute("data-view");

            if (currentView === viewName) {
                view.classList.add("active");
            } else {
                view.classList.remove("active");
            }
        });

        updateActiveMenu(viewName);
        updateBackToTop(viewName);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (updateUrl) {
            history.replaceState(null, "", `#${viewName}`);
        }
    }

    function updateActiveMenu(viewName) {
        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("data-view-link") === viewName) {
                link.classList.add("active");
            }
        });
    }

    function updateBackToTop(viewName) {
        if (!backToTop) return;

        if (viewName === "inicio") {
            backToTop.classList.remove("show");
        } else {
            backToTop.classList.add("show");
        }
    }

    function closeMobileMenu() {
        if (!navMenu || !menuToggle) return;

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        if (!icon) return;

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

    function getInitialView() {
        const hash = window.location.hash.replace("#", "");

        if (validViews.includes(hash)) {
            return hash;
        }

        return "inicio";
    }

    function renderServices() {
        const servicesGrid = document.getElementById("servicesGrid");

        if (!servicesGrid || typeof cleanWaterData === "undefined") return;

        servicesGrid.innerHTML = cleanWaterData.services
            .map((service) => {
                return `
                    <article class="service-card">
                        <div class="service-image">
                            <img
                                src="${service.image}"
                                alt="${service.title}"
                                loading="lazy"
                            >
                        </div>

                        <div class="service-content">
                            <div class="service-icon ${service.color}">
                                <i class="${service.icon}"></i>
                            </div>

                            <span class="service-number">${service.number}</span>

                            <h3>${service.title}</h3>

                            <p>${service.description}</p>

                            <button type="button" class="card-action" data-view-link="contacto">
                                Solicitar información
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </article>
                `;
            })
            .join("");
    }

    function renderEnvironmentalProcesses() {
        const environmentList = document.getElementById("environmentList");

        if (!environmentList || typeof cleanWaterData === "undefined") return;

        environmentList.innerHTML = cleanWaterData.environmentalProcesses
            .map((item) => {
                return `
                    <div class="environment-item">
                        <i class="fa-solid fa-check"></i>
                        <span>${item}</span>
                    </div>
                `;
            })
            .join("");
    }

    function renderClients() {
        const clientsGrid = document.getElementById("clientsGrid");

        if (!clientsGrid || typeof cleanWaterData === "undefined") return;

        clientsGrid.innerHTML = cleanWaterData.clients
            .map((client) => {
                const initials = getClientInitials(client.name);

                return `
                    <article class="client-card">
                        <div class="client-logo-box">
                            <img
                                src="${client.logo}"
                                alt="${client.name}"
                                loading="lazy"
                                onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
                            >

                            <span class="client-fallback">
                                ${initials}
                            </span>
                        </div>

                        <h3>${client.name}</h3>
                        <p>${client.description}</p>
                    </article>
                `;
            })
            .join("");
    }

    function renderGallery() {
        const galleryGrid = document.getElementById("galleryGrid");

        if (!galleryGrid || typeof cleanWaterData === "undefined") return;

        galleryGrid.innerHTML = cleanWaterData.gallery
            .map((item) => {
                return `
                    <article class="gallery-card">
                        <img
                            src="${item.image}"
                            alt="${item.title}"
                            loading="lazy"
                        >

                        <div class="gallery-overlay">
                            <span>${item.category}</span>
                            <h3>${item.title}</h3>
                        </div>
                    </article>
                `;
            })
            .join("");
    }

    function handleContactForm(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !email || !service) {
            alert("Por favor completa los campos obligatorios.");
            return;
        }

        const whatsappNumber = "573219619924";

        const whatsappMessage = `
Hola, quiero solicitar una cotización con Clean Water Updated S.A.S.

Nombre: ${name}
Teléfono: ${phone}
Correo: ${email}
Servicio de interés: ${service}
Mensaje: ${message || "No especificado"}
        `;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
            "_blank"
        );

        event.target.reset();
    }

    function getClientInitials(name) {
        const cleanName = name
            .replace("Centro Empresarial", "")
            .replace("S.A.", "")
            .replace("S.A.S.", "")
            .replace(".", "")
            .trim();

        const words = cleanName
            .split(" ")
            .filter(Boolean);

        if (words.length === 1) {
            return words[0].substring(0, 2).toUpperCase();
        }

        return words
            .slice(0, 2)
            .map((word) => word[0])
            .join("")
            .toUpperCase();
    }
});