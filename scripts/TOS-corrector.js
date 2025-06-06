const tos = document.querySelector('.TOS')
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    tos.style.animation =
      'fade-up-in 2s cubic-bezier(0.77, 0, 0.175, 1) forwards'
    //     animation: fade-side-in 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }, 3200)
  setTimeout(() => {
    tos.style.animation = ''
    //     animation: fade-side-in 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }, 5200)
})
