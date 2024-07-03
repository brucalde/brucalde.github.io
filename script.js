// Función para el menú hamburgesa

(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');



    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show')
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    })
})();


//Efecto typing title

const typed = new Typed('.typed', {
    strings: ['<i class="especial">Bienvenidos </i>',
        '<i class="especial">Bienvenidas </i>'
    ],

    typeSpeed: 75,
    startDelay: 400,
    backSpeed: 85,
    backDelay: 2000,
    loop: true,
    loopCount: false,
    showCursor: false,

});