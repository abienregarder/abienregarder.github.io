const slider = tns({
    container: '.my-slider',

    disable: true,

    items: 2,
    slideBy: 1,
    controls: false,
    nav: false,

    "loop": false,
    "controlsContainer": ".sponsor__controls",
    
    
   
    "gutter": 20,
    "speed": 800,
    preventScrollOnTouch: 'auto',



    responsive: {
         992: {
            disable: false,
            controls: true,
           
        }
      },
});




