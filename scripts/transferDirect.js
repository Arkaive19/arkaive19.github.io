setTimeout(() => {
  const landing = document.querySelector('.main-cnt')
  if (landing) {
    landing.scrollIntoView({ behavior: 'auto', block: 'start' })
  }
}, 1000)
