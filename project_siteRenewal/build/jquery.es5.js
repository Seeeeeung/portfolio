
$(function () {
  // Sliding jQuery
  $('.gnb a, .top, .scroll-down a').on("click", function (e) {
    $.scrollTo(this.hash || 0, 800);
    e.preventDefault();
  });

  // hash-slider
  var slideHash = $(".hash-slider");
  var hashTag = $(".hash-slider li");
  var getHashHeight = hashTag.height(); // 태그 세로너비

  function moveHashTag() {
    slideHash.animate({
      top: -getHashHeight }, {
      complete: function complete() {
        var $cloneTag = $(".hash-slider li").first().clone();
        slideHash.append($cloneTag);
        $(".hash-slider li").first().remove();
        slideHash.css("top", "0");
      }
    });
  }
  var moveHash = setInterval(moveHashTag, 2000);

  var wrap = $(".hash-wrap");
  wrap.on("mouseover", function () {
    clearInterval(moveHash);
    hashTag.addClass("on");
  }).on("mouseout", function () {
    moveHash = setInterval(moveHashTag, 2000);
    hashTag.removeClass("on");
  });

  // modal-location
  $(".my-location").on("click", function () {
    $("#modal-location").stop().fadeIn().addClass("on");
  });
  $(".btn-close").on("click", function () {
    $("#modal-location").stop().fadeOut();
    $("#modal-location").removeClass("on");
  });

  // click event (web)
  var webWidth = $(window).width();
  if (webWidth >= 1025) {
    var promotionFadeSet = function promotionFadeSet(hoverContentIndex) {
      $fadeSlides.stop().fadeOut();
      $fadeSlides.eq(hoverContentIndex).stop().fadeIn();
      promotionIndex = hoverContentIndex;
      $(".box-hover a").css("opacity", "1");
      $(".box-hover a").eq(hoverContentIndex).css("opacity", "0.6");
    };

    var handleFadeIndex = function handleFadeIndex() {
      if (promotionIndex == 4) {
        promotionFadeSet(0);
      } else {
        promotionFadeSet(promotionIndex + 1);
      }
    };

    // Contry slide slick
    $('.slide.slick').on('click', function () {
      $('#contry .list').fadeIn();
      $('.btn-slide').fadeIn();
      $('.click-icon').fadeOut();
      $('.click-icon').addClass('off');
      $('#contry').addClass('show-tit');
    });

    // mouseover event Popular place
    $('.box-place .place').on('mouseover', function () {
      $(this).addClass('hover');
    }).on('mouseout', function () {
      $('.box-place .place').removeClass('hover');
    });

    // Promotion fade event 
    var promotionIndex = 0;
    var $fadeSlides = $(".box-fade li");
    $fadeSlides.css("display", "none");
    $fadeSlides.eq(0).css("display", "flex");

    $(".box-hover a").on("mouseover", function () {
      var hoverContentIndex = $(this).index();
      promotionFadeSet(hoverContentIndex);
      $(".box-hover a").css("opacity", "1");
      $(this).css("opacity", "0.6");
    });

    var fadeTimer = setInterval(handleFadeIndex, 1000);
    $(".box-hover a").on("mouseover", function () {
      clearInterval(fadeTimer);
    });
    $(".box-hover a").on("mouseout", function () {
      fadeTimer = setInterval(handleFadeIndex, 1000);
    });
  } else { // mobile
    
    // trigger on/off
    $('.trigger').on('click', function () {
      $(this).toggleClass('on');
      $('.gnb').toggle('on');
      $('.gnb').toggleClass('mobileon');
    });
    $('.gnb > li > a').on('click', function () {
      if ($(this).hasClass("open") == true) {
        $(this).siblings(".sub").stop().slideUp(500);
        $(this).removeClass("open");
        $(this).removeClass('click');
        $('.sub').removeClass('on');
      } else {
        $(".sub").slideUp(500);
        $(this).siblings(".sub").stop().slideDown(500);
        $(".gnb > li > a").removeClass("open");
        $(this).addClass("open");
        $('.gnb > li > a').removeClass('click');
        $(this).addClass('click');
        $('.sub').removeClass('on');
        $(this).siblings('.sub').addClass('on');
      }
    });
    $('.sub li').on('click', function () {
      $('.sub li').removeClass('on');
      $(this).addClass('on');
    });
  }


  // mobile footer logo
  if (webWidth <= 767) {
    $('.foot-logo a:nth-child(1) img').attr('src', './img/footbanner/foot-logo-01-m.png');
    $('.foot-logo a:nth-child(2) img').attr('src', './img/footbanner/foot-logo-02-m.png');
    $('.foot-logo a:nth-child(3) img').attr('src', './img/footbanner/foot-logo-03-m.png');
  } else {
    $('.foot-logo a:nth-child(1) img').attr('src', './img/footbanner/foot-logo-01.png');
    $('.foot-logo a:nth-child(2) img').attr('src', './img/footbanner/foot-logo-02.png');
    $('.foot-logo a:nth-child(3) img').attr('src', './img/footbanner/foot-logo-03.png');
  }

  // background change season
  function timeDesign() {
    var today = new Date();
    var season = today.getMonth() + 1;
    var H = today.getHours();

    if (H >= 18 && H <= 24) {
      // night
      $("#index").addClass("night");
      $("#promotion").addClass("night");
    } else if (H >= 0 && H <= 6) {
      // night
      $("#index").addClass("night");
      $("#promotion").addClass("night");
    } else if (season >= 3 && season <= 6) {
      // spring
      $("#index").addClass("spring");
    } else if (season >= 7 && season <= 9) {
      // summer
      $("#index").removeClass("spring");
    } else if (season >= 8 && season <= 11) {
      // autumn
      $("#index").addClass("autumn");
      $("#promotion").addClass("autumn");
    } else {
      //winter, day
      $("#index").removeClass("night");
      $("#promotion").removeClass("night");
      $("#index").addClass("winter");
      $("#promotion").addClass("winter");
    }
  }
  timeDesign();
  setInterval(timeDesign, 1000);

  


});
