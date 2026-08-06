// =========================
// NAVIGATION AND MOBILE MENU
// =========================
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMobileMenu() {
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            closeMobileMenu();
        }
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove("hidden");
        return;
    }


    if (currentScroll > lastScroll) {
        navbar.classList.add("hidden");
    }

    else {
        navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});

// =========================
// SMOOTH SCROLL LINKS
// =========================
const homeLink = document.getElementById("home-link");

homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const servicesLink = document.getElementById("services-link");

servicesLink.addEventListener("click", (event) => {
    event.preventDefault();
    const servicesSection = document.querySelector(".services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
});

const clientsLink = document.getElementById("clients-link");

clientsLink.addEventListener("click", (event) => {
    event.preventDefault();
    const clientsSection = document.querySelector(".clients");
    clientsSection.scrollIntoView({ behavior: "smooth" });
});

const portfolioLink = document.getElementById("portfolio-link");

portfolioLink.addEventListener("click", (event) => {
    event.preventDefault();
    const portfolioSection = document.querySelector(".portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
});

const contactsLink = document.getElementById("contacts-link");

contactsLink.addEventListener("click", (event) => {
    event.preventDefault();
    const contactsSection = document.querySelector(".contacts");
    contactsSection.scrollIntoView({ behavior: "smooth" });
});

// =========================
// PORTFOLIO DATA
// =========================
const projects = [

    {
        title: "Global Soccer Agency",
        description: "Branding, Estratégia, Identidade Visual, Manual de Marca.",
        image: "portfolio-images/globalsoccer.png"
    },

    {
        title: "Cataguá - Loja Oficial",
        description: "Branding, Merchandising, Coleção Exclusiva, Experiência de loja, Ilustrações.",
        image: "portfolio-images/catagua.png"
    },

    {
        title: "Ginkgo Cafés",
        description: "Branding, Embalagem, Ilustrações.",
        image: "portfolio-images/ginkgo.png"
    },

    {
        title: "Tai Sushi",
        description: "Branding, Identidade Visual, Manual de Marca, Embalagem.",
        image: "portfolio-images/taisushi.png"
    },

    {
        title: "Studio Body Balance",
        description: "Branding, Identidade Visual, Manual de Marca.",
        image: "portfolio-images/bodybalance.png"
    },

    {
        title: "Roda FG - Loja Oficial",
        description: "Branding, Coleção Exclusiva, Experiência de loja, Ilustrações, Merchandising.",
        image: "portfolio-images/rodafg.png"
    },

    {
        title: "Surfland - Loja Oficial",
        description: "Branding, Coleção Exclusiva, Ilustrações, Merchandising.",
        image: "portfolio-images/surfland.png"
    },

    {
        title: "Fuoco Pizzaria",
        description: "Branding, Identidade Visual, Manual de Marca, Embalagem.",
        image: "portfolio-images/fuoco.png"
    },

    {
        title: "Vinci & Griffo Advocacia",
        description: "Branding, Identidade Visual, Manual de Marca.",
        image: "portfolio-images/vinci.png"
    },

    {
        title: "Brt Contabilidade",
        description: "Branding, Identidade Visual, Manual de Marca.",
        image: "portfolio-images/brt.png"
    },

    {
        title: "Ekologica",
        description: "Branding, Identidade Visual, Manual de Marca.",
        image: "portfolio-images/ekologica.png"
    },

     {
        title: "Parque Unipraias Loja Oficial",
        description: "Branding, Coleção Exclusiva, Experiência de loja, Ilustrações.",
        image: "portfolio-images/unipraias.png"
    },

     {
        title: "Surf Section",
        description: "Branding, Identidade Visual, Manual de Marca.",
        image: "portfolio-images/surfsection.png"
    },

];

// =========================
// PORTFOLIO RENDERING
// =========================
let current = 0;

const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const image = document.getElementById("project-image");
const portfolioCard = document.getElementById("portfolio-card");

function renderProject() {
    image.classList.add("fade");
    document.querySelector(".portfolio-content").classList.add("fade");

    setTimeout(() => {
        title.textContent = projects[current].title;
        description.textContent = projects[current].description;
        image.src = projects[current].image;

        image.classList.remove("fade");
        document.querySelector(".portfolio-content").classList.remove("fade");
    }, 250);
}

renderProject();

let touchStartX = 0;
let touchEndX = 0;

portfolioCard?.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

portfolioCard?.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
    const delta = touchEndX - touchStartX;

    if (Math.abs(delta) < 50) return;

    if (delta < 0) {
        current = (current + 1) % projects.length;
    } else {
        current = (current - 1 + projects.length) % projects.length;
    }

    renderProject();
}, { passive: true });


// =========================
// CONTACT BUTTON ACTION
// =========================
const btnEmail = document.querySelector(".btn-contact");

btnEmail.addEventListener("click", () => {
    window.location.href = "mailto:contato@shakavisuals.com?subject=Quero%20conversar%20sobre%20minha%20marca"
})