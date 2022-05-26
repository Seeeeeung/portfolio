$(function (){
  // slick slide title fade event
  var mobileTitleWidth = $(window).width();
  if(mobileTitleWidth <= 1045) {
    $('.contry-desc').eq(0).stop().fadeIn();
  }

  function contryTitleFn() {
    var getPlaceIndex = $('.slick-dots li.slick-active').index();
    $('.contry-desc').stop().fadeOut(200);
    $('.contry-desc').eq(getPlaceIndex).stop().fadeIn(200);
  }
  $('#contry .slick-track').on('click', function(){
    contryTitleFn();
  });
  $('#contry .slick-track').on('mousedown', function(){
    contryTitleFn();
  });
  $("#contry .slick-arrow").on('click', function(){
    contryTitleFn();
  });

  // web hover gnb
  if(mobileTitleWidth > 1045) {
    $('nav > .gnb > li').on('mouseover', function(){
      $(this).addClass('hover');
    });
    $('nav > .gnb > li').on('mouseout', function(){
      $(this).removeClass('hover');
    });
  } else {
    $('nav > .gnb > li').on('mouseover', function(){
      $(this).removeClass('hover');
    });
  }
});