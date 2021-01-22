$(function () {

    $('.top_stories_slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 800,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
           }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
           },
  ]

    });

});
