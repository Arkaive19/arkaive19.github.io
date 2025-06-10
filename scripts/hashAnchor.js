const baseUrl = window.location.origin + window.location.pathname
window.location.hash
  ? window.location.replace(baseUrl)
  : console.log('Internal Error')
