console.log('hi');

// hamburger

const hamburgerBtn = document.querySelector('.hamburger')

hamburgerBtn.addEventListener('click', function() {
  // то, что происходит, когда мы кликаем на кнопку
  // добавляем к меню класс, чтобы оно показалось
  const menu = document.querySelector('.header__menu')
  menu.classList.toggle('--open')
})




// slider 1: rooms

const slider = tns({
    container: '.rooms__my-slider',
    slideBy: 1,
    ////
    "autoWidth": true,
    "items": 3,
    "gutter": 32,
    "controlsContainer": ".rooms__controls",
    controls: true,
    nav: false,
    "speed": 800,
    loop: true,
    preventScrollOnTouch: 'auto'
});

console.log(slider)

const info = slider.getInfo()

console.log({
    totalSlides: info.slideCount,
    currentSlide: info.displayIndex
})

// select element by selector & set current index
const elementCurrentSlide = document.querySelector('.slide_count__current')
elementCurrentSlide.textContent = info.displayIndex


// set max slides number
const elementMaxSlides = document.querySelector('.slide_count__total')
elementMaxSlides.textContent = info.slideCount

function updateCurrent(event) {
    const currentSlide = event.displayIndex
    console.log({currentSlide})

    elementCurrentSlide.textContent = currentSlide
}

slider.events.on('indexChanged', updateCurrent)







// slider 2: insper

const slider2 = tns({
    container: '.inspirations__my-slider',
    disable: true,


    items: 1,
    slideBy: 1,
    controls: false,
    nav: false,

    "loop": false,
    "controlsContainer": ".inspirations__controls",
    
    "autoWidth": true,
    "items": 3.3,
    "gutter": 30,
    "speed": 800,
    preventScrollOnTouch: 'auto',
    
    

        responsive: {
           
            720: {
              disable: false,
              controls: true,
              
              

            },
          }
});


const info_2 = slider2.getInfo()

console.log({
    totalSlides: info_2.slideCount,
    currentSlide: info_2.displayIndex
})

// select element by selector & set current index
const elementCurrentSlide_2 = document.querySelector('.inspirations__slide_count__current')
elementCurrentSlide_2.textContent = info.displayIndex


// set max slides number
const elementMaxSlides_2 = document.querySelector('.inspirations__slide_count__total')
elementMaxSlides_2.textContent = info_2.slideCount

function updateCurrent_2(event) {
    const currentSlide_2 = event.displayIndex
    console.log({currentSlide_2})

    elementCurrentSlide_2.textContent = currentSlide_2
}

slider2.events.on('indexChanged', updateCurrent_2)




