let init = () => {
  // *************************************************
  // Hero Section Animations y video, hero section
  // *************************************************
  let container = document.getElementsByClassName('jumbo-slider__container')[0], 
  slides = document.getElementsByClassName('jumbo-slider__slide'),
  circles = document.getElementsByClassName('jumbo-slider__circle'),
  links = document.getElementsByClassName('jumbo-slider__link'),
  current = 1,
  time = 6000;

  slides[0].classList.add('jumbo-slider__slide--active');
  links[current-1].classList.add('jumbo-slider__link--active');

  // update elipsis
  let updateNav = (current) => {
    console.log(`update current: ${current}`)
    for (let index = 0; index < slides.length; index++) {
      links[index].classList.remove('jumbo-slider__link--active');
      circles[index].classList.remove('jumbo-slider__circle--filled');
    }
    links[current-1].classList.add('jumo-slider__link--active');
    links[current-1].classList.add('jumo-slider__link--active');
  }
  
  let startSlide = () => {
    setInterval(() => {
      console.log(`update current test: ${current}`)
      slides[1].classList.add('jumbo-slider__slide--active');
      slides[0].classList.remove('jumbo-slider__slide--active');
      
      console.log(`¿Que?: ${slides.length}`)
      if (current < slides.length) {
        current++
        updateNav(current)
      } else {
        current = 1;
      }
      container.appendChild(slides[0].cloneNode([true]));
      container.removeChild(slides[0]);
    }, 6000)
  }

  // startSlide();


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

init();
