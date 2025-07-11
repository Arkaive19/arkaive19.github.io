let lastScrollTop = 0
const navbar = document.querySelector('.nav-bar')
window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop

  currentScroll > lastScrollTop
    ? (navbar.style.top = '-100px')
    : (navbar.style.top = '0')

  currentScroll > 0
    ? navbar.classList.add('shadow')
    : navbar.classList.remove('shadow')

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll // Prevent negative values
})
