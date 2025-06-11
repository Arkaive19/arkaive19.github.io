const hov = document.querySelectorAll('.hov')
hov.forEach((e) => {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      e.style.animation =
        'fade-up-in 2s cubic-bezier(0.77, 0, 0.175, 1) forwards'
    }, 3200)
    setTimeout(() => {
      e.style.animation = ''
    }, 5200)
  })
})
