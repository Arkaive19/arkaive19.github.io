const thres = (v = 1) => {
  return { threshold: v }
}

const obsfunc = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting)
      document
        .querySelectorAll('.scroll')
        .forEach((el) => el.classList.add('fade-up-in'))
    else
      document
        .querySelectorAll('.scroll')
        .forEach((el) => el.classList.remove('fade-up-in'))
  })
}

const obs = new IntersectionObserver(obsfunc, thres(0.1))
obs.observe(document.querySelector('#nav-area-1'))
