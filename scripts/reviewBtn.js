let more = document.querySelectorAll('.view-btn')
let view = document.querySelector('.view-content')
let animborder = document.querySelector('.focus-cnt')
let isFirstClick = true

const contentHandler = (btn, i) => {
  const clientReview = {
    'client-1':
      '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
    'client-2':
      'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg',
    'client-3':
      '{}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[](){}[]()',
    'client-4':
      '*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&*^*&',
    'client-5':
      '/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?/|?',
  }

  view.classList.add('fade-up-in')
  view.textContent = clientReview[`client-${i + 1}`]
  setTimeout(() => view.classList.remove('fade-up-in'), 1000)
}

more.forEach((el, i) =>
  el.addEventListener('click', (e) => contentHandler(e, i))
)
