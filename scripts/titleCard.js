const title = document.querySelector('title')
const transitions = [
  { text: 'A', delay: 1 },
  { text: 'Ar', delay: 2 },
  { text: 'Ark', delay: 3 },
  { text: 'Arka', delay: 4 },
  { text: 'Arkai', delay: 5 },
  { text: 'Arkaiv', delay: 6 },
  { text: 'Arkaive', delay: 7 },
  { text: 'Arkaive1', delay: 8 },
  { text: 'Arkaive19', delay: 9 },
  { text: 'Arkaive1', delay: 10 },
  { text: 'Arkaive', delay: 11 },
  { text: 'Arkaiv', delay: 12 },
  { text: 'Arkai', delay: 13 },
  { text: 'Arka', delay: 14 },
  { text: 'Ark', delay: 15 },
  { text: 'Ar', delay: 16 },
  { text: 'A', delay: 17 },
  { text: 'Ar', delay: 18 },
  { text: 'Ark', delay: 19 },
  { text: 'Arka', delay: 20 },
  { text: 'Arkai', delay: 21 },
  { text: 'Arkaiv', delay: 22 },
  { text: 'Arkaive', delay: 23 },
  { text: 'Arkaive1', delay: 24 },
  { text: 'Arkaive19', delay: 25 },
]

transitions.forEach(({ text, delay }) => {
  setTimeout(() => (title.innerText = text), delay * 1000)
})
