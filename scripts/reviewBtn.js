let more = document.querySelectorAll('.view-btn')
let view = document.querySelector('.view')

const contentHandler = (btn, i) => {
  // let btnSn = document.querySelector(`.client-${i + 1}`)
  const clientReview = {
    'client-1': 'first button wsp gang',
    'client-2': 'second button wsp gang',
    'client-3': 'third button wsp gang',
    'client-4': 'fourth button wsp gang',
    'client-5': 'fifth button wsp gang',
  }
  view.textContent = clientReview[`client-${i + 1}`]
}

more.forEach((el, i) =>
  el.addEventListener('click', (e) => contentHandler(e, i))
)
