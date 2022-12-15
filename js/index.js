const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /emojis', {})

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }
  const navbarToggle = navbar.querySelector("#navbar-toggle");
  const navbarMenu = document.querySelector("#navbar-menu");
  const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
  let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
  
  const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
  };
  
  navbarToggle.addEventListener("click", toggleNavbarVisibility);
  
  navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
  navbarMenu.addEventListener("click", toggleNavbarVisibility);


  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(() => {
      console.log("[ServiceWorker**] - Registered");
    });
  }