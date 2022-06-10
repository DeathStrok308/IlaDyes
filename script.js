const navigationHeight = document.querySelector('nav').offsetHeight;

console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight -200+ "px");