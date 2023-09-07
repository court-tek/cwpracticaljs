export function signUpModal() {
    let modalState = false;

    // phone number input modal
	let phoneModal = document.getElementsByClassName('phone-modal')[0];

    // signup modal btn 
    let ctaButton = document.getElementsByClassName('page-header__cta-btn')[0];
    // test
	// modal close btn
	let closeModal = document.getElementsByClassName('phone-modal__close-btn')[0];

	// phone number mobile discount Opt In btn
	let mobileOptIn = document.getElementsByClassName('phone-modal__button')[0];

	// modal nothanks close btn
	let noThanksBtn = document.getElementsByClassName(
		'phone-modal__decline-offer'
	)[0];

	// phone input
	let phoneInput = document.getElementsByClassName('phone-modal__input')[0];

	// mobile input success message
	let textInstructions = document.getElementsByClassName(
		'phone-thank__instructions'
	)[0];


	// phone modal functionality
	let showModal = () => {
			phoneModal.classList.add('phone-modal--visibility');
			modalState = true;
	};

	let phoneIsValid = phoneNumber => {
		return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phoneNumber);
	};

	let displayInstructions = () => {
		textInstructions.classList.add('phone-thank--success');
	};

	ctaButton.addEventListener('click', () => {
		showModal();
	});

	closeModal.addEventListener('click', () => {
		phoneModal.classList.remove('phone-modal--visibility');
	});

}