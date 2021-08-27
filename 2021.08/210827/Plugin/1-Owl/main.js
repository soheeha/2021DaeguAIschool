// $('.owl-carousel').owlCarousel({

  /*
  loop:true,
  margin: 10,
  nav: true,
  // items: 5

  responsive:{
        0:{
            items:1,
            nav: true
        },
        600:{
            items:3,
            nav: false
        },
        1000:{
            items:5,
            loop: false,
            nav: true
        }
    }
    */

    /*
    center: true,
    items:2,
    loop: false,
    margin:10
    */

    /*
    autoWidth:true,
    margin: 10,
    loop: true,
    items: 4
   */

    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX', 
    // stagePadding:30,
    // smartSpeed:450


    /*
    items:4,
    margin:30,
    loop: true,

    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true


})

$('.play').on('click',function(){
    $('.owl-carousel').trigger('play.owl.autoplay',[1000])
})

$('.stop').on('click',function(){
    $('.owl-carousel').trigger('stop.owl.autoplay')
})
*/






var $owl = $('.owl-carousel');

$owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    
});

$owl.on('mousewheel', '.owl-stage', function (e) {
    e.preventDefault();

    if (e.deltaY > 0) {
        $owl.trigger('next.owl');
    } else {
        $owl.trigger('prev.owl');
    }
});

