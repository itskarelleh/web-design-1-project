var socialMedia = document.getElementById("social-profiles");
var navMenu = document.getElementById("nav-menu");
var storeInfo = document.getElementById("store-info");

var hamburgerMenu = document.getElementsByClassName("fa-bars");
hamburgerMenu.style.visibility = "hidden";

function mediaQuery() {
    'use strict';
    if (window.matchMedia("(min-width: 320px)").matches && window.matchMedia("(max-width: 600px)").matches) {
    socialMedia.style.visibility = "hidden";
    navMenu.style.visibility = "hidden";
    hamburgerMenu.style.visibility = "visible";    }
}

mediaQuery();

