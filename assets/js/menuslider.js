export function mobileMenuSlider() {
    // *************************************************
    // Mobile Menu
    // *************************************************
    // mobile slide menu
    let hamburgerBtn = document.getElementsByClassName('navbar-toggler')[0];

    // slide Menu
    let mobileMenu = document.getElementsByClassName('mobile-menu')[0];

    // slide Menu close button X
    let mobileCloseBtn = document.getElementsByClassName('mobile-menu__close-btn')[0];

    // slide Menu close button X
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.add('mobile-menu--open');
    });

    mobileCloseBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu--open');
    });
}