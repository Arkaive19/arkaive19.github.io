let lastScrollTop = 0;
const navbar = document.querySelector(".nav-bar");
window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Scroll down
  if (currentScroll > lastScrollTop) {
    navbar.style.top = "-100px"; // Hide navbar
  }
  // Scroll up
  else {
    navbar.style.top = "0"; // Show navbar
  }

  // Add shadow if not at top
  if (currentScroll > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
});
