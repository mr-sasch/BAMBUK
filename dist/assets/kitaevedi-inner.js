$(document).ready(function(){
  $('.kitaevedi__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
  {
    breakpoint: 1250,
    settings: {
      arrows: false
      }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false
      }
    },
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    }
  }
]
  });
});

$(document).ready(function(){
  $('.nii__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
    ]
  });
});
