var input = document.querySelector('#options-gap-input')

var glide = new Glide('#options-gap', {
  gap: 0,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    gap: event.target.value
  })
})

glide.mount()