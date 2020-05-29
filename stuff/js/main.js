$(".your-class ").slick({
    dots: true,
    infinite:false,
    speed: 100,
    accessibility:true,
    autoplay:true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
       responsive: [
  
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite:true,
        },
      },
      {
        breakpoint: 680,
        settings: {
         
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          infinite:true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });