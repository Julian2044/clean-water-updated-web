const ICONS = {
    mail: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 7.2L3.8 7H3v.6l9 5.7 9-5.7V7h-.8L12 12.2Z"/>
        </svg>
    `,

    phone: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8c1.5 3 3.9 5.4 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.6c0 .7-.5 1.2-1.2 1.2C10.2 22 2 13.8 2 3.4 2 2.7 2.5 2.2 3.2 2.2h3.6c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-1.7 2.2Z"/>
        </svg>
    `,

    location: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
        </svg>
    `,

    whatsapp: `
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.4.7 4.6 1.8 6.6L3.5 29l6.8-1.8c1.8 1 3.8 1.5 5.9 1.5 7.2 0 13-5.7 13-12.8C29.2 8.7 23.3 3 16 3Zm0 23.5c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8 0-5.9 4.8-10.6 10.7-10.6 5.9 0 10.7 4.7 10.7 10.6 0 5.9-4.8 10.7-10.8 10.7Zm5.9-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z"/>
        </svg>
    `,

    linkedin: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.4 8h4.2v14H.4V8Zm7.3 0h4v1.9h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.8V22h-4.2v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V22H7.7V8Z"/>
        </svg>
    `,

    facebook: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v2h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/>
        </svg>
    `,

    instagram: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.8-3.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
        </svg>
    `,

    x: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.9 2h3.2l-7 8 8.2 12h-6.4l-5-7.3L6.2 22H2.9l7.5-8.6L2.5 2h6.6l4.5 6.5L18.9 2Zm-1.1 17.9h1.8L8.1 4H6.2l11.6 15.9Z"/>
        </svg>
    `,

    users: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3ZM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3Zm8 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C23 14.2 18.3 13 16 13ZM8 13c-2.3 0-7 1.2-7 3.5V19h6v-2.5c0-.9.4-1.7 1.1-2.4.4-.4.9-.8 1.5-1.1H8Z"/>
        </svg>
    `,

    target: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V2Zm0 5a5 5 0 1 0 5 5h-2a3 3 0 1 1-3-3V7Zm9.7-4.7-3.1.6.6-3.1-5.9 5.9V9h3.3l5.1-5.1Z"/>
        </svg>
    `,

    chart: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 20h18v2H1V2h2v18Zm4-3h3V9H7v8Zm5 0h3V5h-3v12Zm5 0h3v-7h-3v7Z"/>
        </svg>
    `,

    leaf: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 3S8 3 5 9c-2 4 1 8 4 9-2 1-4 2-6 4l1.5 1.5c2.5-2.5 5-3.6 7.5-4.1C19 18 21 10 21 3Zm-5.2 5.2C13 11 11 14 10 17c-2.4-.8-4-3.4-2.7-6C9.1 7.2 16 5.8 18.8 5.3c-.4 2.2-1.2 5.3-3 7.4-1.2 1.4-2.7 2.2-4.5 2.6.9-2.2 2.6-4.3 5.5-7.1h-1Z"/>
        </svg>
    `,

    shield: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1 14-4-4 1.4-1.4 2.6 2.6 5.6-5.6L18 9l-7 7Z"/>
        </svg>
    `,

    briefcase: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 3h6a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4V5a2 2 0 0 1 2-2Zm6 4V5H9v2h6Z"/>
        </svg>
    `,

    check: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"/>
        </svg>
    `,

    water: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Zm0 18a5 5 0 0 1-5-5c0-2.5 2.8-6.5 5-9.2 2.2 2.7 5 6.7 5 9.2a5 5 0 0 1-5 5Z"/>
        </svg>
    `,

    arrow: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m13 5 7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5Z"/>
        </svg>
    `,

    wrench: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 19.6 19.6 22l-6.8-6.8-2.1 2.1-1.4-1.4 6.5-6.5a5 5 0 0 0 5.8-6.8l-3.4 3.4-2.1-2.1L19.5.5a5 5 0 0 0-6.8 5.8L2 17l5 5 4.4-4.4L18.2 24l2.4-2.4L13.8 14.8l1.4-1.4L22 19.6Z"/>
        </svg>
    `,

    fan: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 10.2A1.8 1.8 0 1 0 12 13.8a1.8 1.8 0 0 0 0-3.6Zm0-8.2c2.3 0 4.2 1.9 4.2 4.2 0 1.4-.7 2.7-1.8 3.4 2.5-.2 5.6.2 7.2 2.8 1.1 1.9.5 4.4-1.4 5.5-1.2.7-2.7.7-3.9.1 1.4 2.1 2.3 5.1.8 7.7-1.1 1.9-3.6 2.6-5.5 1.4-1.2-.7-1.9-2-2-3.3-1.1 2.3-3.1 4.7-6.1 4.7-2.2 0-4-1.8-4-4 0-1.4.7-2.7 1.8-3.4-2.5.2-5.6-.2-7.2-2.8-1.1-1.9-.5-4.4 1.4-5.5 1.2-.7 2.7-.7 3.9-.1C1.9 10.2 1 7.2 2.5 4.6 3.6 2.7 6.1 2 8 3.1c1.2.7 1.9 2 2 3.3C10.4 4 10.9 2 12 2Z"/>
        </svg>
    `,

    wind: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 8h11a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5H4V8Zm0 5h15a3 3 0 1 1-3 3h-2a5 5 0 1 0 5-5H4v2Zm0 5h7a2 2 0 1 1-2 2H7a4 4 0 1 0 4-4H4v2Z"/>
        </svg>
    `,

    recycle: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m7.5 4 2.2 3.8H6.8l-3 5.2-1.8-1 3.6-6.2c.4-.7 1.1-1.1 1.9-1.1Zm7.8 0c.8 0 1.5.4 1.9 1.1l2.3 4h2.5l-3.7 3.7-3.7-3.7h2.6l-1.7-3H12V4h3.3ZM4 15.7l1.7 3h3.6v2H5.7c-.8 0-1.5-.4-1.9-1.1l-2.3-4H0l3.7-3.7 3.7 3.7H4Zm14.3-.6h2.4l-3.6 6.2c-.4.7-1.1 1.1-1.9 1.1h-6v-2h6l3.1-5.3Z"/>
        </svg>
    `,

    flask: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 2h6v2h-1v5.4l5.5 8.8A3 3 0 0 1 17 23H7a3 3 0 0 1-2.5-4.8L10 9.4V4H9V2Zm3 8.1-5.8 9.2A1 1 0 0 0 7 21h10a1 1 0 0 0 .8-1.5L12 10.1ZM8.4 17h7.2l-1.2-2H9.6l-1.2 2Z"/>
        </svg>
    `,

    truck: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h13v5h3l3 4v5h-2a3 3 0 0 1-6 0H9a3 3 0 0 1-6 0H1V6a2 2 0 0 1 2-2Zm13 7v2h4.4L18.9 11H16ZM6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
        </svg>
    `,

    helmet: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a8 8 0 0 1 8 8v3h1a1 1 0 0 1 1 1v3H2v-3a1 1 0 0 1 1-1h1v-3a8 8 0 0 1 8-8Zm-3 2.7A6 6 0 0 0 6 10v3h3V4.7Zm2-.6V13h2V4.1a6.5 6.5 0 0 0-2 0Zm4 .6V13h3v-3a6 6 0 0 0-3-5.3ZM2 19h20v2H2v-2Z"/>
        </svg>
    `
};

const ICON_ALIASES = {
    "fa-solid fa-envelope": "mail",
    "fa-solid fa-phone": "phone",
    "fa-solid fa-location-dot": "location",

    "fa-brands fa-whatsapp": "whatsapp",
    "fa-brands fa-linkedin-in": "linkedin",
    "fa-brands fa-facebook-f": "facebook",
    "fa-brands fa-instagram": "instagram",
    "fa-brands fa-x-twitter": "x",
    "fa-brands fa-twitter": "x",

    "fa-solid fa-users": "users",
    "fa-solid fa-users-gear": "users",
    "fa-solid fa-building": "briefcase",
    "fa-solid fa-briefcase": "briefcase",
    "fa-solid fa-file-lines": "briefcase",
    "fa-solid fa-bullseye": "target",
    "fa-solid fa-chart-line": "chart",
    "fa-solid fa-leaf": "leaf",
    "fa-solid fa-shield-halved": "shield",
    "fa-solid fa-check": "check",
    "fa-solid fa-circle-check": "check",
    "fa-solid fa-droplet": "water",
    "fa-solid fa-water": "water",

    "fa-solid fa-fan": "fan",
    "fa-solid fa-screwdriver-wrench": "wrench",
    "fa-solid fa-wind": "wind",
    "fa-solid fa-industry": "briefcase",
    "fa-solid fa-recycle": "recycle",
    "fa-solid fa-flask": "flask",
    "fa-solid fa-clipboard-list": "briefcase",
    "fa-solid fa-truck-droplet": "truck",
    "fa-solid fa-helmet-safety": "helmet",
    "fa-solid fa-arrow-right": "arrow",
    "fa-solid fa-paper-plane": "arrow"
};

function cwIcon(name) {
    const normalizedName = ICON_ALIASES[name] || name;
    return ICONS[normalizedName] || ICONS.check;
}

function mountStaticIcons() {
    document.querySelectorAll("[data-icon]").forEach((element) => {
        const iconName = element.getAttribute("data-icon");
        element.innerHTML = cwIcon(iconName);
    });
}

window.ICONS = ICONS;
window.cwIcon = cwIcon;
window.mountStaticIcons = mountStaticIcons;