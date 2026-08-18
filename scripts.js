
const menuIcon = document.querySelector('.menu');



window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menuIcon.classList.add('visible');
    } else {
        menuIcon.classList.remove('visible');
    }
});

const btnEmail = document.querySelector(".email");

btnEmail.addEventListener("click", () => {
    window.location.href = "mailto:contato@shakavisuals.com?subject=Quero%20conversar%20sobre%20minha%20marca"
})

const btnWhats = document.querySelector(".whatsapp");

btnWhats.addEventListener("click", () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=5551995501596&text&type=phone_number&app_absent=0&utm_source=ig"
})


const sideMenu = document.querySelector('.list-menu')
const closeMenu = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

const menuLinks = document.querySelectorAll('.menu-itens a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        overlay.classList.remove('active');
    });
});

const globalCarousels = document.querySelectorAll('.global-carousel');

globalCarousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, Number(carousel.dataset.interval || 2500));
    }
});

const othersToggle = document.querySelector('.toggle-others-cases');
const othersCaseContainer = document.querySelector('.others-case-container');
const othersToggles = document.querySelectorAll('.toggle-others-cases');

if (othersCaseContainer) {
    const updateOthersState = (isOpen) => {
        othersCaseContainer.classList.toggle('open', isOpen);
        othersCaseContainer.setAttribute('aria-hidden', String(!isOpen));
        othersToggles.forEach((button) => {
            button.textContent = isOpen ? 'Ver menos' : 'Mostrar todos';
            button.setAttribute('aria-expanded', String(isOpen));
        });
    };

    othersToggles.forEach((button) => {
        button.addEventListener('click', () => {
            const shouldOpen = !othersCaseContainer.classList.contains('open');
            updateOthersState(shouldOpen);
        });
    });
}