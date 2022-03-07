const config = {
    type: 'carousel',
    focusAt: 'center',
    hoverpause: true,
    autoplay: 2000,
    perView: 5,
    gap:20  ,
    keyboard: true  ,
    breakpoints: {
        760:{
            perView:2
        }
    }

}
new Glide('.glide', config).mount()