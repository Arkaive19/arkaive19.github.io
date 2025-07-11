document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay')
  const content = document.querySelector('.content-cnt')

  function showContent() {
    if (content) {
      content.style.opacity = 1
      content.style.pointerEvents = 'auto'
    }
  }

  overlay.classList.add('visible')

  setTimeout(() => {
    const hexBorder = document.querySelector('.hex-border-shape')
    hexBorder ? (hexBorder.style.strokeDashoffset = '0') : null

    setTimeout(() => {
      overlay.classList.add('fade-out')
      setTimeout(() => {
        overlay.remove()
        showContent()
      }, 1000)
    }, 1200)
  }, 1000)
})
