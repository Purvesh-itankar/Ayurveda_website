let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0"; // show navbar when scrolling up
  } else {
    navbar.style.top = "-80px"; // hide navbar when scrolling down
  }
  prevScrollpos = currentScrollPos;
}
