document.addEventListener("DOMContentLoaded", () => {
    const views = document.querySelectorAll(".view");
    const viewLinks = document.querySelectorAll("[data-view-link]");
    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");
    const backToTop = document.getElementById("backToTop");

    renderServices();
    renderEnvironmentalProcesses();
    renderClients();
    renderGallery();

    const initialView = getInitialView();
    showView(initialView);

    viewLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const viewName = link.getAttribute("data-view-link");

            if (!viewName) return;

            event.preventDefault();
            showView(viewName);

            if (navMenu && navMenu.classList.contains("active")) {
                closeMobileMenu();
            }
        });
    });

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

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            showView("inicio");
        });
    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", handleContactForm);
    }

    function showView(viewName) {
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

        history.replaceState(null, "", `#${viewName}`);
    }

    function updateActiveMenu(viewName) {
        viewLinks.forEach((link) => {
            link.classList.remove("active");

            if (
                link.classList.contains("nav-link") &&
                link.getAttribute("data-view-link") === viewName
            ) {
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
        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        if (!icon) return;

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

    function getInitialView() {
        const hash = window.location.hash.replace("#", "");

        const validViews = [
            "inicio",
            "nosotros",
            "servicios",
            "tramites",
            "clientes",
            "galeria",
            "contacto"
        ];

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
                            <img src="${service.image}" alt="${service.title}">
                        </div>

                        <div class="service-content">
                            <div class="service-icon ${service.color}">
                                <i class="${service.icon}"></i>
                            </div>

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

        bindDynamicViewLinks();
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
                return `
                    <article class="client-card">
                        <div class="client-logo-placeholder">
                            ${getClientInitials(client.name)}
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
                        <img src="${item.image}" alt="${item.title}">

                        <div class="gallery-overlay">
                            <span>${item.category}</span>
                            <h3>${item.title}</h3>
                        </div>
                    </article>
                `;
            })
            .join("");
    }

    function bindDynamicViewLinks() {
        const dynamicLinks = document.querySelectorAll("[data-view-link]");

        dynamicLinks.forEach((link) => {
            if (link.dataset.bound === "true") return;

            link.dataset.bound = "true";

            link.addEventListener("click", (event) => {
                const viewName = link.getAttribute("data-view-link");

                if (!viewName) return;

                event.preventDefault();
                showView(viewName);
            });
        });
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
        const words = name
            .replace("Centro Empresarial", "")
            .replace("S.A.", "")
            .trim()
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