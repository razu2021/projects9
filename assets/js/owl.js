
$(document).ready(function(){
    $(".index_banner_slider").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        nav: true,
        dots:false,
        marginbottom:0,
        navText: ["<span class='prev'>  <  </span>", "<span class='next'> > </span>"],
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            600:{
                items:1,
                nav: false,
            },
            1000:{
                items:1
            }
        }
    });
  });
// index service slider end here 
$(document).ready(function(){
    $(".future_image_slider").owlCarousel({
        items:3,
        autoplay:true,
        loop:true,
        nav: true,
        dots:false,
        margin:10,
        navText: ["<span class='future_prev'>  <  </span>", "<span class='future_next'> > </span>"],
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            600:{
                items:1,
                nav: false,
            },
            1000:{
                items:3
            }
        }
    });
  });
// index service slider end here 
$(document).ready(function(){
    $(".index_testimonials").owlCarousel({
        items:2,
        autoplay:true,
        loop:true,
        nav: false,
        dots:false,
        margin:10,
        mouseDrag:true,
       dots:true,
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            600:{
                items:1,
                nav: false,
            },
            1000:{
                items:2
            }
        }
    });
  });
// index service slider end here 
