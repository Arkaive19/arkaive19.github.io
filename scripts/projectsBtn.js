const btn = document.querySelector('.more')
const div = document.querySelector('.enclosure')
let bool = true

div.style.transition = 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)'
div.style.opacity = '0'
div.style.display = 'none'

const toggleDisplay = () => {
  if (bool) {
    div.style.display = 'flex'
    div.style.flexDirection = 'column'

    setTimeout(() => {
      div.style.opacity = '1'
    }, 10)
    btn.textContent = 'See Less'
    bool = false
  } else {
    const target = document.getElementById('nav-area-4')
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })

    div.style.opacity = '0'
    setTimeout(() => {
      div.style.display = 'none'
    }, 400)
    btn.textContent = 'See More'
    bool = true
  }
}
btn.addEventListener('click', toggleDisplay)
