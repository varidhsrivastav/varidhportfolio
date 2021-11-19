const scriptURL = 'https://script.google.com/macros/s/AKfycbxFuW-V0KC9ykw-GZ9EaiSKv6Crb62JKbvYlx1ozxHIlwhYDI8sW354SZMdcAYcZbZNqQ/exec'
const form = document.forms['feedback']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
