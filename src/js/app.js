$(document).ready(function(){
  $('.cruelty-results__slider').slick({
  	autoplay: true,
  	autoplaySpeed: 2000,
  	arrows: false,
  	dots: true,
  	dotsClass: 'cruelty-results__slider-dots',
  	centerMode: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});

