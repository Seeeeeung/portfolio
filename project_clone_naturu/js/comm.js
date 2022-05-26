$(function(){
  $(".gnb > li:not(:last-child)").mouseover(function(){
    $(".lnb").stop().slideDown();
    $(".lnb-bg").stop().slideDown();
  }).mouseout(function(){
    $(".lnb").stop().slideUp();
    $(".lnb-bg").stop().slideUp();
  });
  $(".link > a").mouseover(function(){
    $(".link > a > .round").stop().animate({
      width: "263px"
    });
  }).mouseout(function(){
    $(".link > a > .round").stop().animate({
      width: "67px"
    });
  });
  $(".family").click(function(){
    $(".family").toggleClass("on");
    $(".family-site").slideToggle();
  });
  $(".play-icon").click(function(){
    $(this).toggleClass("play");
    if($(".play-icon").hasClass("play") == true) {
      mySwiper.autoplay.stop();
      return false;
    } else {
      mySwiper.autoplay.start();
      return false;
    }
  });
});