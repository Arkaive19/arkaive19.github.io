setTimeout(() => {
  const landing = document.querySelector('.main-cnt')
  if (landing) {
    landing.scrollIntoView({ behavior: 'auto', block: 'start' })
  }
}, 1000)

setTimeout(() => {
  document.querySelector('body').style.overflow = 'hidden'
}, 10)

setTimeout(() => {
  document.querySelector('body').style.overflow = 'auto'
}, 3200)
