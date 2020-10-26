import "../sass/index.scss";
import "./menu-mobile-bar.js"
import "./SliderCarousel.js"


// ===================
import { PostFormFooter } from "./PostFormFooter.js";
const form = new PostFormFooter(document.querySelector("body"));
form.render();

// ===================
// import { SliderCarousel } from "./SliderCarousel.js";
// const carousel = new SliderCarousel()
// carousel.init();