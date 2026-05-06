document.addEventListener("DOMContentLoaded", () => {
    // Cargar íconos estáticos del HTML desde js/icons.js
    if (typeof mountStaticIcons === "function") {
        mountStaticIcons();
    }

    const views = document.querySelectorAll(".view");
    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");
    const backToTop = document.getElementById("backToTop");
    const serviceField = document.getElementById("service");
    const messageField = document.getElementById("message");

    const homeServicesTrack = document.getElementById("homeServicesTrack");
    const homeCarouselPrev = document.getElementById("homeCarouselPrev");
    const homeCarouselNext = document.getElementById("homeCarouselNext");

    const validViews = [
        "inicio",
        "nosotros",
        "servicios",
        "tramites",
        "clientes",
        "galeria",
        "contacto"
    ];

    let homeCarouselIndex = 0;
    let homeCarouselTimer = null;

    renderHomeServicesCarousel();
    renderServices();
    renderEnvironmentalProcesses();
    renderClients();
    renderGallery();

    const initialView = getInitialView();
    showView(initialView, false);

    initHomeServicesCarousel();

    // Navegación general por vistas
    document.addEventListener("click", (event) => {
        const link = event.target.closest("[data-view-link]");

        if (!link) return;

        const viewName = link.getAttribute("data-view-link");

        if (!viewName || !validViews.includes(viewName)) return;

        const selectedService = link.getAttribute("data-service-name");

        if (selectedService && serviceField) {
            serviceField.value = selectedService;

            if (messageField) {
                messageField.value = `Hola, quiero recibir información sobre el servicio: ${selectedService}.`;
            }
        }

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
            updateMenuIcon();
        });
    }

    // Cerrar menú móvil con tecla Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
            closeMobileMenu();
        }
    });

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

    // Si el usuario cambia manualmente el hash de la URL
    window.addEventListener("hashchange", () => {
        const hashView = getInitialView();
        showView(hashView, false);
    });

    // Recalcular carrusel al cambiar tamaño
    window.addEventListener("resize", () => {
        updateHomeCarouselPosition();
    });

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
        if (!navMenu) return;

        navMenu.classList.remove("active");
        updateMenuIcon();
    }

    function updateMenuIcon() {
        if (!menuToggle || !navMenu) return;

        const icon = menuToggle.querySelector(".menu-icon");

        if (!icon) return;

        if (navMenu.classList.contains("active")) {
            icon.textContent = "×";
        } else {
            icon.textContent = "☰";
        }
    }

    function getInitialView() {
        const hash = window.location.hash.replace("#", "");

        if (validViews.includes(hash)) {
            return hash;
        }

        return "inicio";
    }

    function renderHomeServicesCarousel() {
        if (!homeServicesTrack || typeof cleanWaterData === "undefined") return;

        homeServicesTrack.innerHTML = cleanWaterData.services
            .map((service) => {
                return `
                    <article
                        class="home-service-card"
                        data-view-link="servicios"
                        aria-label="Ver servicio ${service.title}"
                    >
                        <img
                            src="${service.image}"
                            alt="${service.title}"
                            loading="lazy"
                        >

                        <div class="home-service-info">
                            <div class="home-service-top">
                                <span class="home-service-number">${service.number}</span>

                                <span class="home-service-icon">
                                    ${getIcon(service.icon)}
                                </span>
                            </div>

                            <h3>${service.title}</h3>
                            <span>Ver servicio</span>
                        </div>
                    </article>
                `;
            })
            .join("");
    }

    function initHomeServicesCarousel() {
        if (!homeServicesTrack) return;

        if (homeCarouselPrev) {
            homeCarouselPrev.addEventListener("click", () => {
                moveHomeCarousel(-1);
                restartHomeCarouselAutoPlay();
            });
        }

        if (homeCarouselNext) {
            homeCarouselNext.addEventListener("click", () => {
                moveHomeCarousel(1);
                restartHomeCarouselAutoPlay();
            });
        }

        homeServicesTrack.addEventListener("mouseenter", stopHomeCarouselAutoPlay);
        homeServicesTrack.addEventListener("mouseleave", startHomeCarouselAutoPlay);

        updateHomeCarouselPosition();
        startHomeCarouselAutoPlay();
    }

    function moveHomeCarousel(direction) {
        const maxIndex = getHomeCarouselMaxIndex();

        homeCarouselIndex += direction;

        if (homeCarouselIndex < 0) {
            homeCarouselIndex = maxIndex;
        }

        if (homeCarouselIndex > maxIndex) {
            homeCarouselIndex = 0;
        }

        updateHomeCarouselPosition();
    }

    function updateHomeCarouselPosition() {
        if (!homeServicesTrack) return;

        const cards = homeServicesTrack.querySelectorAll(".home-service-card");

        if (!cards.length) return;

        const maxIndex = getHomeCarouselMaxIndex();

        if (homeCarouselIndex > maxIndex) {
            homeCarouselIndex = maxIndex;
        }

        const firstCard = cards[0];
        const cardStyles = window.getComputedStyle(firstCard);
        const trackStyles = window.getComputedStyle(homeServicesTrack);

        const cardWidth = firstCard.getBoundingClientRect().width;
        const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || 0);

        const moveX = homeCarouselIndex * (cardWidth + gap);

        homeServicesTrack.style.transform = `translateX(-${moveX}px)`;
    }

    function getHomeCarouselMaxIndex() {
        if (!homeServicesTrack || typeof cleanWaterData === "undefined") return 0;

        const totalCards = cleanWaterData.services.length;
        const visibleCards = getHomeCarouselVisibleCards();

        return Math.max(totalCards - visibleCards, 0);
    }

    function getHomeCarouselVisibleCards() {
        const width = window.innerWidth;

        if (width <= 720) return 1;
        if (width <= 960) return 2;
        if (width <= 1180) return 3;

        return 4;
    }

    function startHomeCarouselAutoPlay() {
        stopHomeCarouselAutoPlay();

        homeCarouselTimer = setInterval(() => {
            moveHomeCarousel(1);
        }, 4200);
    }

    function stopHomeCarouselAutoPlay() {
        if (homeCarouselTimer) {
            clearInterval(homeCarouselTimer);
            homeCarouselTimer = null;
        }
    }

    function restartHomeCarouselAutoPlay() {
        stopHomeCarouselAutoPlay();
        startHomeCarouselAutoPlay();
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
                                ${getIcon(service.icon)}
                            </div>

                            <span class="service-number">${service.number}</span>

                            <h3>${service.title}</h3>

                            <p>${service.description}</p>

                            <button
                                type="button"
                                class="card-action"
                                data-view-link="contacto"
                                data-service-name="${service.title}"
                            >
                                Solicitar información
                                ${getIcon("arrow")}
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
            .map((item, index) => {
                return `
                    <div class="environment-item">
                        <span class="environment-svg">
                            ${getIcon(getEnvironmentalIcon(index))}
                        </span>

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

                            <span class="client-fallback">${initials}</span>
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

        const whatsappNumber = "573219648702";

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
            .replace(/\./g, "")
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

    function getEnvironmentalIcon(index) {
        const icons = [
            "water",
            "leaf",
            "leaf",
            "briefcase",
            "recycle",
            "shield"
        ];

        return icons[index] || "check";
    }

    function getIcon(iconName) {
        if (typeof cwIcon === "function") {
            return cwIcon(iconName);
        }

        return "";
    }
});