import { mobileMenuSlider } from "./menuslider";
import { accordionMenu } from "./accordionmenu";
import { jumboHeroSlider } from "./jumboslider";
import { signUpModal } from "./signupmodal";

let init = () => { // init function initializes the slider
  mobileMenuSlider();
  accordionMenu();
  jumboHeroSlider(); 
  signUpModal();
}

init();
