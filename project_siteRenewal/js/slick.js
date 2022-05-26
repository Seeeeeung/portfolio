$(function() {
  var onWidth = window.innerWidth;
  
  if($('.slick').hasClass('slide') === true) {
    $('.slide.slick').slick({
      centerMode: true,
      centerPadding: '20px',
      slidesToShow: 3,
      autoplay: true,
      adaptiveHeight: true,
      infinite: false,
      slidesToScroll: 1,
      initialSlide: 0,
      variableWidth: true,
      speed: 200,
      dots: true,
      // focusOnSelect: boolean
    },{
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            autoplay: false,
            slidesToShow: 3,
            centerMode: false
          }
        },{
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            adaptiveHeight: false,
            centerMode: true,
            autoplay: false,
            variableWidth: true
          }
        }
      ]
    });


    // $('.title.slick').slick({
    //   slidesToShow: 1,
    //   fade: true,
    //   dots: false,
    //   arrows: false
    // });
    
    if(onWidth <= 1045) {
      $('.slide.slick').slick('slickPause');
      $('.box-hover.slick').slick({
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        infinite: false,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        initialSlide: 0,
        speed: 200,
      });
      } 
  }
    
  $('.slide.slick').on('click', function(){
    $('.slide.slick').slick('slickPause');
  });


  // contry list fade event
  
  
//   function fuck() {
//   $('.contry-desc').fadeOut();
//   var see = $('.contry-desc').eq(slideIdx);
//   $('.contry-desc').eq(slideIdx).fadeIn();

//   console.log(see);  
// }
// var abxd = $('.slide.slick').slick('slickCurrentSlide'); 
    
//   function Fade(abxd) {
//     abxd++
//   }
//   setInterval(Fade);
  
//   console.log(Fade);
  // $('.slide.slick').slick('goTo', 1); 
});