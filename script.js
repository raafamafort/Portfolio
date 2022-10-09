// ABRIR MOBILE

const menuMobile = document.getElementById('menu-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

menuMobile.addEventListener('click', toggleMenu)


// FECHAR MENU
const itemMenu = document.getElementById('menu')

function closeMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

itemMenu.addEventListener('click', closeMenu)