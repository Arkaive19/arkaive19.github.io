;(function () {
  const cursor = document.createElement('div')
  Object.assign(cursor.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    pointerEvents: 'none',
    background: 'rgba(255, 111, 97, 0)', // soft coral
    outline: '2px solid #FF6F61', // accent color
    transform: 'translate(-50%, -50%) scale(1)',
    zIndex: '9999',
    animation: 'pulseScale 1.5s ease-in-out infinite',
  })

  const styleTag = document.createElement('style')
  styleTag.textContent = `
    @keyframes pulseScale {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
      }
      50% {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
    body, * {
      cursor: none !important;
    }
  `
  document.head.appendChild(styleTag)
  document.body.appendChild(cursor)

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
  })
})()
