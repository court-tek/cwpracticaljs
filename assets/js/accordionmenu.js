export function accordionMenu() {
    // *************************************************
    // Accordion Menu, located in the footer on mobile
    // *************************************************
    let accordion = document.getElementsByClassName('accordion-menu__contentBx');
    let accordionContent = document.getElementsByClassName('amc');

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');     
        })
    }

    let openDropdown = () => {
            // dropdownMenu.classList.toggle('trans--open');
            // dropdownMenu.classList.toggle('opacity-100');
            // caret.classList.toggle('rotate-180');
            console.log(`accordion array: ${accordion}`);
    }
}