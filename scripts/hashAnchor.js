const baseUrl = window.location.origin + window.location.pathname
window.location.hash
  ? window.location.replace(baseUrl)
  : console.log(
      'If you see this message, this means that the #anchor was not in your URL. '
    ) 
