
const menuIcon = document.querySelector('.menu');



window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menuIcon.classList.add('visible');
    } else {
        menuIcon.classList.remove('visible');
    }
});

const btnEmail = document.querySelector(".btn-contact");

btnEmail.addEventListener("click", () => {
    window.location.href = "mailto:contato@shakavisuals.com?subject=Quero%20conversar%20sobre%20minha%20marca"
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