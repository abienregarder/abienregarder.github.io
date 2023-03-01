  
   $(document).ready(function(){
  
        $(".menu_close_hamburger").click(function() {
            $(".menu_close_hamburger").toggleClass('active');        
            $(".header__menu_open").toggleClass('--show')
        });

        let cart = 0;
        $(".products__card_cart_button").click(function() {
            cart = cart+1
            $(".close_cart_count").text(cart)
        })

        $(".menu_close_login").click(function() {        
            $(".modal-fade").toggleClass('active')
        });


        function hideModal() {
            $(".modal-fade").toggleClass('active')
        }

        $('.modal-fade').click(function(event) {
            const notChild = event.target == event.currentTarget
            if (notChild) {
                hideModal()
            }
        })

        // hide modal when esc key is pressed
        $(window).keydown(function(e) {
            if (e.keyCode == 27) hideModal()
        })


        $('.input_pass_checkbox').on('click', function(){
            // ternary
            // const type = $(this).is(':checked') ? 'text': 'password'

            let type

            if ($(this).is(':checked')) {
                type = 'text'
            } else {
                type = 'password'
            }

            $('#password').attr('type', type);
        })

   });

//    res__slider


const slider1 = tns({
    container: '.restaurants__slider_cards',
    
    items: 1,
    slideBy: 1,
    controls: true,
    nav: false,

    "loop": true,
    "controlsContainer": ".restaurants__slider_controls",
    
    "autoWidth": true,
    "items": 4,
    "gutter": 0,
    "speed": 800,
    preventScrollOnTouch: 'auto',
    
    
});

//    spec__slider

const slider2 = tns({
    container: '.specialities__slider_cards',
    
    items: 1,
    slideBy: 1,
    controls: true,
    nav: false,

    "loop": true,
    "controlsContainer": ".specialities__slider_controls",
    
    "autoWidth": true,
    "items": 4,
    "gutter": 0,
    "speed": 800,
    preventScrollOnTouch: 'auto',
    
    
});


