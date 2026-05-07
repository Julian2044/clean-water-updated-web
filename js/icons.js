const icons = {
    mail: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-7.05 5.12a.92.92 0 0 1-1.1 0L4.4 8.25V6.7l7.6 5.52 7.6-5.52v1.55Z"/>
        </svg>
    `,

    phone: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1.1 1.1 0 0 1 1.12-.27 12.6 12.6 0 0 0 3.95.63A1.1 1.1 0 0 1 21.6 16.66v3.48a1.1 1.1 0 0 1-1.1 1.1A18.74 18.74 0 0 1 1.76 2.5a1.1 1.1 0 0 1 1.1-1.1h3.5a1.1 1.1 0 0 1 1.1 1.12 12.6 12.6 0 0 0 .63 3.95 1.1 1.1 0 0 1-.27 1.12l-2.2 2.2Z"/>
        </svg>
    `,

    whatsapp: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.09 0C5.52 0 .18 5.34.18 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.29-1.65a11.9 11.9 0 0 0 5.8 1.48h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.49-8.44ZM12.1 21.82h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.22-3.73.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.51-5.28C2.21 6.46 6.65 2.02 12.1 2.02a9.83 9.83 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.43 9.91-9.88 9.91Zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35Z"/>
        </svg>
    `,

    briefcase: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 4a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1h4a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2h4V4Zm2 1h2V4a1 1 0 0 0-2 0v1Zm10 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7h7v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h7Z"/>
        </svg>
    `,

    leaf: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21.6 2.4C13.2 2.8 6.5 6.2 4.2 11.3c-1.3 2.9-.7 5.8 1.4 7.8-1 .8-1.8 1.8-2.5 2.9h2.6c.5-.7 1.1-1.3 1.8-1.8 2.4 1.1 5.5.5 8-1.7 4-3.6 5.7-10.1 6.1-16.1ZM8.6 17.8c2.8-4 6.1-6.8 9.9-8.4-3.1 2.2-5.9 5.1-8.3 8.7-.5 0-1.1-.1-1.6-.3Z"/>
        </svg>
    `,

    shield: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 1.7 4 5v6.1c0 5 3.4 9.7 8 11.2 4.6-1.5 8-6.2 8-11.2V5l-8-3.3Zm3.7 8.1-4.3 4.5a1 1 0 0 1-1.45.02L8 12.36l1.42-1.42 1.23 1.23 3.6-3.78 1.45 1.39Z"/>
        </svg>
    `,

    users: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM8 13c-3.3 0-6 1.7-6 3.8V20h12v-3.2C14 14.7 11.3 13 8 13Zm8 .2c-.8 0-1.6.1-2.3.3 1.4.9 2.3 2 2.3 3.3V20h6v-2.8c0-2.2-2.7-4-6-4Z"/>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.2 16.6 4.9 12.3 3.5 13.7l5.7 5.7L21 7.6 19.6 6.2 9.2 16.6Z"/>
        </svg>
    `,

    target: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V2Zm1 1v8.6l6.1-6.1V9h2V2h-7v2h3.6L13 8.7V3Zm-1 5a4 4 0 1 0 4 4h-2a2 2 0 1 1-2-2V8Z"/>
        </svg>
    `,

    chart: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 21V3h2v16h15v2H4Zm5-4V9h3v8H9Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z"/>
        </svg>
    `,

    water: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2S5 9.2 5 14a7 7 0 0 0 14 0c0-4.8-7-12-7-12Zm0 18a5 5 0 0 1-5-5c0-2.6 3-6.8 5-9.2 2 2.4 5 6.6 5 9.2a5 5 0 0 1-5 5Z"/>
        </svg>
    `,

    location: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
        </svg>
    `,

    linkedin: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8V11c.54-.95 1.55-1.85 3.28-1.85 3.5 0 4.42 2.3 4.42 5.3v6.05h-4v-5.36c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.84v5.45h-4V9.5Z"/>
        </svg>
    `,

    facebook: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z"/>
        </svg>
    `,

    instagram: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm5-2.25a1.05 1.05 0 1 1-1.05 1.05A1.05 1.05 0 0 1 17 7.05Z"/>
        </svg>
    `,

    x: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.53 3H20.8l-7.14 8.16L22 21h-6.52l-5.1-6.67L4.54 21H1.26l7.64-8.73L1 3h6.68l4.61 6.1L17.53 3Zm-1.15 16.27h1.81L6.69 4.64H4.75l11.63 14.63Z"/>
        </svg>
    `,

    arrow: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.2 5.3 19.9 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3 1.4-1.4Z"/>
        </svg>
    `,

    wrench: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 6.7a6.6 6.6 0 0 1-8.4 8.4l-6.8 6.8a2.8 2.8 0 0 1-4-4l6.8-6.8A6.6 6.6 0 0 1 18 2.7l-4 4 3.9 3.9 4.1-3.9Z"/>
        </svg>
    `,

    wind: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 8h10.5A2.5 2.5 0 1 0 12 5.5h-2A4.5 4.5 0 1 1 14.5 10H4V8Zm0 5h14.5A2.5 2.5 0 1 1 16 15.5h-2A4.5 4.5 0 1 0 18.5 11H4v2Zm0 5h7.5A2.5 2.5 0 1 0 9 15.5H7A4.5 4.5 0 1 1 11.5 20H4v-2Z"/>
        </svg>
    `,

    plant: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21V11c-3.9-.4-7-3.7-7-7.7V2h1.3c3.3 0 6.1 2.1 7.1 5 1.1-1.8 3.1-3 5.4-3H20v1.2c0 3.6-2.9 6.5-6.5 6.5H14V21h-2Z"/>
        </svg>
    `,

    droplet: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2S6 8.7 6 13.3a6 6 0 1 0 12 0C18 8.7 12 2 12 2Z"/>
        </svg>
    `,

    recycle: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.2 5.4 9.7 1l2.8 4.9h-2l-2.3 4-3.5-2 1.5-2.5h1Zm9.6 0h-3.1l1.1-1.9h2.9l3 5.2-4.8 2.8-1-1.7 2.9-1.7-1-1.7Zm-1.2 13.2 1.6-2.8 3.5 2-3 5.2h-6v-5.5h2v3.5h2.8l-.9-1.6ZM6.1 18.6H3.2l-1.5-2.6 3-5.2 4.8 2.8-1 1.7-2.9-1.7-1.4 2.4.9 1.6h3.1v4h-2v-3Z"/>
        </svg>
    `,

    flask: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 2h6v2h-1v5.1l5.6 9.7A2.1 2.1 0 0 1 17.8 22H6.2a2.1 2.1 0 0 1-1.8-3.2L10 9.1V4H9V2Zm3 8-3 5.2h6L12 10Z"/>
        </svg>
    `,

    truck: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h12v9h1.2l2-3H22v7h-2a3 3 0 0 1-6 0H9a3 3 0 0 1-6 0H1V6a2 2 0 0 1 2-2Zm15.1 8-1 1.5H20V12h-1.9ZM6 18.5A1.5 1.5 0 1 0 6 15a1.5 1.5 0 0 0 0 3.5Zm11 0A1.5 1.5 0 1 0 17 15a1.5 1.5 0 0 0 0 3.5Z"/>
        </svg>
    `,

    building: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 21V3h10v4h6v14H4Zm3-14h2v2H7V7Zm4 0h2v2h-2V7Zm-4 4h2v2H7v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2H7v-2Zm4 0h2v2h-2v-2Zm5-5h2v2h-2v-2Zm0 4h2v2h-2v-2Z"/>
        </svg>
    `,

    tools: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m14.7 6.3 3-3 3 3-3 3-3-3ZM3 19.6l7.8-7.8 1.4 1.4L4.4 21H3v-1.4Zm6.2-14.4 2.6-2.6 9.6 9.6-2.6 2.6-9.6-9.6ZM2.5 7.5l3-3 3.1 3.1-1.4 1.4-1.7-1.7-1.6 1.6-1.4-1.4Z"/>
        </svg>
    `,

    cog: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.4 13.5c.1-.5.1-1 .1-1.5s0-1-.1-1.5l2.1-1.6-2-3.5-2.5 1a7.3 7.3 0 0 0-2.6-1.5L14 2h-4l-.4 2.9A7.3 7.3 0 0 0 7 6.4l-2.5-1-2 3.5 2.1 1.6c-.1.5-.1 1-.1 1.5s0 1 .1 1.5l-2.1 1.6 2 3.5 2.5-1a7.3 7.3 0 0 0 2.6 1.5L10 22h4l.4-2.9a7.3 7.3 0 0 0 2.6-1.5l2.5 1 2-3.5-2.1-1.6ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"/>
        </svg>
    `
};

function renderIcons(scope = document) {
    const elements = scope.querySelectorAll("[data-icon]");

    elements.forEach((element) => {
        const iconName = element.getAttribute("data-icon");

        if (icons[iconName]) {
            element.innerHTML = icons[iconName];
        }
    });
}

window.renderIcons = renderIcons;

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        renderIcons();
    });
} else {
    renderIcons();
}

document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType !== 1) return;

                if (node.matches && node.matches("[data-icon]")) {
                    renderIcons(node.parentElement || document);
                    return;
                }

                if (node.querySelectorAll) {
                    const hasIcons = node.querySelectorAll("[data-icon]").length > 0;

                    if (hasIcons) {
                        renderIcons(node);
                    }
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});