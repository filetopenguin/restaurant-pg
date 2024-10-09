console.log('Webpack is working!');
import { loadHomePage, loadAboutUs,loadMenu}  from './page-load';
import "./styles.css";

const btnHome = document.querySelector("#homepg");
const btnMenu = document.querySelector("#menupg");
const btnAbout = document.querySelector("#aboutpg");

loadHomePage();
btnHome.addEventListener("click",loadHomePage);
btnMenu.addEventListener("click",loadMenu);
btnAbout.addEventListener("click",loadAboutUs);