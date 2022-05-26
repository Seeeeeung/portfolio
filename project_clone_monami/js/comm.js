$(function(){
  $(".close").click(function(){
    $("#modal-wrap").fadeOut();
  });
  $(".lang").click(function(){
    $(this).toggleClass("on");
  });    
  $menu_btn = 0;
  $(".sub").hide();
  $(".menu-btn").click(function(){
    if($menu_btn == 0){
      $(this).addClass("on");
      $(".sub").slideDown();
      $(".lnb").stop().slideUp();
      $menu_btn = 1;
    } else {
      $(this).removeClass("on");
      $(".sub").stop().slideUp();
      $menu_btn = 0;
    }
  });
  var $gnb = $("nav > ul > li");
  $gnb.mouseover(function(){
    if($menu_btn == 1){
      $gnb.find(".lnb").slideUp();
    } else {
      $(this).find(".lnb").stop().slideDown();
    }
  }).mouseout(function(){
    $(this).find(".lnb").stop().slideUp();
  });
  $(".redbox").mouseover(function(){
    $(this).addClass("on");
  }).mouseout(function(){
    $(".redbox").removeClass("on");
  });
  $(".product-tit > li").eq(0).addClass("on");
  $(".product-wrap > ul").fadeOut();
  $(".product-wrap > ul").eq(0).fadeIn();
  $(".product-tit > li").click(function(){
    var titIdx = $(this).index();
    $(".product-tit > li").removeClass("on");
    $(this).addClass("on");
    $(".product-wrap > ul").stop().fadeOut();
    $(".product-wrap > ul").eq(titIdx).stop().fadeIn();
  });
  $(".product-li").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 300,
    centerMode: false,
    variableWidth: true
  });
  $('.product-li').slick('slickGoTo');
});