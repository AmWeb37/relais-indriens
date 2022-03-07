var checkbox = document.querySelector('#options-keyboard-checkbox')

var glide = new Glide('#options-keyboard', {
  keyboard: checkbox.checked,
  perView: 3
})

checkbox.addEventListener('change', function () {
  glide.update({
    keyboard: checkbox.checked
  })
})

glide.mount()