document.addEventListener("DOMContentLoaded", () => {
    const data = window.cleanWaterData || window.siteData || {};

    const WHATSAPP_NUMBER = data.company?.phoneHref || "+573219648702";
    const WHATSAPP_TEXT =
        data.company?.whatsappText ||
        "Hola, quiero solicitar información sobre los servicios de Clean Water Updated S.A.S.";

    const getWhatsAppUrl = (message = WHATSAPP_TEXT) => {
        const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
        return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    };

    const safeText = (value) => value || "";

    const renderAllIcons = (scope = document) => {
        if (typeof window.renderIcons === "function") {
            window.renderIcons(scope);
        }
    };

    /* =========================
       HERO
    ========================= */

    const renderHero = () => {
        if (!data.hero) return;

        const heroImage = document.querySelector(".hero-background img");
        const heroKicker = document.querySelector(".hero-kicker");
        const heroTitle = document.querySelector(".hero-banner-text h1");

        if (heroImage && data.hero.image) {
            heroImage.src = data.hero.image;
            heroImage.alt = "Sistemas de tratamiento de aguas Clean Water Updated S.A.S.";
        }

        if (heroKicker && data.hero.kicker) {
            heroKicker.textContent = data.hero.kicker;
        }

        if (heroTitle) {
            heroTitle.innerHTML = `
        <span>Sistemas de tratamiento de</span>
        <span class="hero-blue-word">aguas</span>
        <strong>con calidad certificada</strong>
    `;
        }
    };

    /* =========================
       NAVEGACIÓN POR SECCIONES
    ========================= */

    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");
    const viewLinks = document.querySelectorAll("[data-view-link]");
    const views = document.querySelectorAll(".view");

    const setActiveView = (viewName) => {
        const targetViewName = viewName || "inicio";

        views.forEach((view) => {
            const isActive = view.dataset.view === targetViewName;
            view.classList.toggle("active", isActive);
        });

        document.querySelectorAll(".nav-link").forEach((link) => {
            const isActive = link.dataset.viewLink === targetViewName;
            link.classList.toggle("active", isActive);
        });

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        renderAllIcons();

        const currentHash = `#${targetViewName}`;

        if (window.location.hash !== currentHash) {
            history.pushState(null, "", currentHash);
        }
    };

    viewLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const viewName = link.dataset.viewLink;

            if (viewName) {
                setActiveView(viewName);
            }
        });
    });

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    window.addEventListener("popstate", () => {
        const hashView = window.location.hash.replace("#", "") || "inicio";
        setActiveView(hashView);
    });

    /* =========================
       SERVICIOS
    ========================= */

    const servicesGrid = document.getElementById("servicesGrid");
    const services = data.services || window.servicesData || window.services || [];

    const renderServices = () => {
        if (!servicesGrid || !services.length) return;

        servicesGrid.innerHTML = services.map((service, index) => {
            const iconColor = index % 2 === 0 ? "blue" : "green";

            return `
                <article class="service-card">
                    <div class="service-image">
                        <img
                            src="${safeText(service.image)}"
                            alt="${safeText(service.title)}"
                            loading="lazy"
                        />
                    </div>

                    <div class="service-content">
                        <div class="service-icon ${iconColor}">
                            <span class="svg-icon" data-icon="${safeText(service.icon)}"></span>
                        </div>

                        <span class="service-number">${safeText(service.number)}</span>

                        <h3>${safeText(service.title)}</h3>

                        <p>${safeText(service.description)}</p>

                        <button
                            type="button"
                            class="card-action"
                            data-service-contact="${safeText(service.title)}"
                        >
                            ${safeText(service.cta) || "Solicitar información"}
                            <span class="svg-icon" data-icon="arrow"></span>
                        </button>
                    </div>
                </article>
            `;
        }).join("");

        renderAllIcons(servicesGrid);
    };

    /* =========================
       CARRUSEL DE SERVICIOS INICIO
    ========================= */

    const homeServicesTrack = document.getElementById("homeServicesTrack");
    const homeCarouselPrev = document.getElementById("homeCarouselPrev");
    const homeCarouselNext = document.getElementById("homeCarouselNext");

    let carouselIndex = 0;

    const getVisibleCards = () => {
        if (window.innerWidth <= 720) return 1;
        if (window.innerWidth <= 960) return 2;
        if (window.innerWidth <= 1180) return 3;
        return 4;
    };

    const updateHomeCarousel = () => {
        if (!homeServicesTrack) return;

        const firstCard = homeServicesTrack.querySelector(".home-service-card");
        if (!firstCard) return;

        const visibleCards = getVisibleCards();
        const maxIndex = Math.max(0, services.length - visibleCards);

        if (carouselIndex > maxIndex) {
            carouselIndex = maxIndex;
        }

        if (carouselIndex < 0) {
            carouselIndex = 0;
        }

        const cardWidth = firstCard.offsetWidth;
        const gap = 18;
        const translateX = carouselIndex * (cardWidth + gap);

        homeServicesTrack.style.transform = `translateX(-${translateX}px)`;
    };

    const renderHomeCarousel = () => {
        if (!homeServicesTrack || !services.length) return;

        homeServicesTrack.innerHTML = services.map((service) => {
            return `
                <article class="home-service-card" data-home-service="${safeText(service.title)}">
                    <img
                        src="${safeText(service.image)}"
                        alt="${safeText(service.title)}"
                        loading="lazy"
                    />

                    <div class="home-service-info">
                        <div class="home-service-top">
                            <span class="home-service-number">${safeText(service.number)}</span>
                            <span class="home-service-icon">
                                <span class="svg-icon" data-icon="${safeText(service.icon)}"></span>
                            </span>
                        </div>

                        <h3>${safeText(service.title)}</h3>
                        <span>Ver servicio</span>
                    </div>
                </article>
            `;
        }).join("");

        renderAllIcons(homeServicesTrack);
        updateHomeCarousel();
    };

    if (homeCarouselNext) {
        homeCarouselNext.addEventListener("click", () => {
            const visibleCards = getVisibleCards();
            const maxIndex = Math.max(0, services.length - visibleCards);

            carouselIndex += 1;

            if (carouselIndex > maxIndex) {
                carouselIndex = 0;
            }

            updateHomeCarousel();
        });
    }

    if (homeCarouselPrev) {
        homeCarouselPrev.addEventListener("click", () => {
            const visibleCards = getVisibleCards();
            const maxIndex = Math.max(0, services.length - visibleCards);

            carouselIndex -= 1;

            if (carouselIndex < 0) {
                carouselIndex = maxIndex;
            }

            updateHomeCarousel();
        });
    }

    window.addEventListener("resize", updateHomeCarousel);

    document.addEventListener("click", (event) => {
        const homeServiceCard = event.target.closest("[data-home-service]");

        if (homeServiceCard) {
            setActiveView("servicios");
        }
    });

    /* =========================
       TRÁMITES AMBIENTALES
    ========================= */

    const environmentList = document.getElementById("environmentList");
    const environmentItems = data.environmentItems || window.environmentItems || window.environmentData || [];

    const renderEnvironment = () => {
        if (!environmentList || !environmentItems.length) return;

        environmentList.innerHTML = environmentItems.map((item) => {
            return `
                <div class="environment-item">
                    <span class="environment-svg">
                        <span class="svg-icon" data-icon="${safeText(item.icon)}"></span>
                    </span>

                    <span>${safeText(item.title)}</span>
                </div>
            `;
        }).join("");

        renderAllIcons(environmentList);
    };

    /* =========================
       CLIENTES
    ========================= */

    const clientsGrid = document.getElementById("clientsGrid");
    const clients = data.clients || window.clientsData || window.clients || [];

    const renderClients = () => {
        if (!clientsGrid || !clients.length) return;

        clientsGrid.innerHTML = clients.map((client) => {
            return `
                <article class="client-card">
                    <div class="client-logo-box">
                        <img
                            src="${safeText(client.logo)}"
                            alt="${safeText(client.name)}"
                            loading="lazy"
                            onerror="this.style.display='none'; this.closest('.client-logo-box').querySelector('.client-fallback').style.display='grid';"
                        />

                        <div class="client-fallback">
                            ${safeText(client.fallback)}
                        </div>
                    </div>

                    <h3>${safeText(client.name)}</h3>
                    <p>${safeText(client.type)}</p>
                </article>
            `;
        }).join("");
    };

    /* =========================
       GALERÍA / PROYECTOS
       Nueva estructura:
       media arriba + texto debajo
    ========================= */

    const galleryGrid = document.getElementById("galleryGrid");
    const galleryItems = data.gallery || window.galleryData || window.galleryItems || [];

    const renderGallery = () => {
        if (!galleryGrid || !galleryItems.length) return;

        galleryGrid.innerHTML = galleryItems.map((item) => {
            const isVideo = item.type === "video" && item.video;

            const mediaContent = isVideo
                ? `
                    <video
                        class="gallery-video"
                        autoplay
                        muted
                        loop
                        playsinline
                        preload="metadata"
                        poster="${safeText(item.image)}"
                        aria-label="${safeText(item.title)}"
                    >
                        <source src="${safeText(item.video)}" type="video/mp4" />
                    </video>
                `
                : `
                    <div class="gallery-icon-media">
                        <span class="gallery-icon-bg"></span>
                        <span class="gallery-main-icon svg-icon" data-icon="${safeText(item.icon)}"></span>
                    </div>
                `;

            return `
                <article class="gallery-card ${isVideo ? "gallery-card-video" : "gallery-card-icon"}">
                    <div class="gallery-media-frame">
                        ${mediaContent}
                    </div>

                    <div class="gallery-card-body">
                        <span class="gallery-category">${safeText(item.category)}</span>
                        <h3>${safeText(item.title)}</h3>
                    </div>
                </article>
            `;
        }).join("");

        renderAllIcons(galleryGrid);

        const videos = galleryGrid.querySelectorAll("video");

        videos.forEach((video) => {
            video.muted = true;
            video.loop = true;
            video.playsInline = true;

            video.addEventListener("error", () => {
                const card = video.closest(".gallery-card");
                const mediaFrame = video.closest(".gallery-media-frame");

                if (card && mediaFrame) {
                    card.classList.remove("gallery-card-video");
                    card.classList.add("gallery-card-icon");

                    mediaFrame.innerHTML = `
                        <div class="gallery-icon-media">
                            <span class="gallery-icon-bg"></span>
                            <span class="gallery-main-icon svg-icon" data-icon="water"></span>
                        </div>
                    `;

                    renderAllIcons(card);
                }
            });

            const playPromise = video.play();

            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    video.setAttribute("controls", "controls");
                });
            }
        });
    };

    /* =========================
       CONTACTO / WHATSAPP
    ========================= */

    const contactForm = document.getElementById("contactForm");

    const openWhatsApp = (message) => {
        window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    };

    document.addEventListener("click", (event) => {
        const serviceButton = event.target.closest("[data-service-contact]");

        if (!serviceButton) return;

        const serviceName = serviceButton.dataset.serviceContact;
        const message = `Hola, quiero solicitar información sobre el servicio de ${serviceName} de Clean Water Updated S.A.S.`;

        openWhatsApp(message);
    });

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name")?.value.trim() || "";
            const phone = document.getElementById("phone")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const service = document.getElementById("service")?.value.trim() || "";
            const message = document.getElementById("message")?.value.trim() || "";

            const whatsappMessage = [
                "Hola, quiero solicitar una cotización con Clean Water Updated S.A.S.",
                "",
                `Nombre: ${name}`,
                `Teléfono: ${phone}`,
                `Correo: ${email}`,
                `Servicio de interés: ${service}`,
                "",
                `Mensaje: ${message || "No aplica"}`
            ].join("\n");

            openWhatsApp(whatsappMessage);
        });
    }

    /* =========================
       BOTÓN VOLVER ARRIBA
    ========================= */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            const shouldShow = window.scrollY > 400;
            backToTop.classList.toggle("show", shouldShow);
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* =========================
       INICIALIZACIÓN
    ========================= */

    renderHero();
    renderServices();
    renderHomeCarousel();
    renderEnvironment();
    renderClients();
    renderGallery();
    renderAllIcons();

    const initialView = window.location.hash.replace("#", "") || "inicio";
    setActiveView(initialView);
});