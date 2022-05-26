var agent = navigator.userAgent.toLowerCase();

if( navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1 || (agent.indexOf("msie") != -1)) {
  
  // JQuery IE //
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

  // Javascript IE //
  var getMainKey = $("#main").height(); // load value

  // Scroll #main
  function onScrollMain() {
    $("html,body").animate({    
      scrollTop: getMainKey * 1
  });  
  }
  setTimeout(function () {
    onScrollMain();
  }, 2000);

  // Header
  function onShowHeader() {
    var headEle = document.querySelector("header");
    var headLogo = document.querySelector(".head-logo img");
    var mainEle = document.querySelector("#main");
    var scrollLocation = $(window).scrollTop();
    var showHeader = getMainKey / 1.5;
    var showHeaderBg = getMainKey * 1.5;
    var changeHeaderLogo = getMainKey * 2;
    if (scrollLocation >= showHeader) {
      mainEle.style.opacity = 1;
      headEle.style.opacity = 1;
      document.querySelector('aside').style.opacity = 1;
      // Background Color
      if (scrollLocation >= showHeaderBg) {
        headEle.style.backgroundColor = "rgba(255,255,255,0.8)";
      } else {
        headEle.style.backgroundColor = "transparent";
      }
    } else {
      mainEle.style.opacity = 0;
      headEle.style.opacity = 0;
      document.querySelector('aside').style.opacity = 0;
    }
    // head-logo
    if (scrollLocation >= changeHeaderLogo) {
      headLogo.setAttribute("src", "./img/logo/logo_mautumn.png");
    } else {
      headLogo.setAttribute("src", "./img/logo/logo_msummer.png");
    }

    // Contry
    var contryEle = document.querySelector("#contry");
    var showContry = getMainKey * 1.5;
    if (scrollLocation >= showContry) {
      contryEle.classList.add("on");
    } else {
      contryEle.classList.remove("on");
    }

    // Popular
    var popularEle = document.querySelector('#popular-place');
    var showPopular = getMainKey * 2.8;
    if (scrollLocation >= showPopular) {
      popularEle.classList.add('on');
    } else {
      popularEle.classList.remove('on');
    }

    // Thema
    var themaEle = document.querySelector('#thema-travel');
    var themaLineEle = document.querySelector('.box-thema');
    var showthema = getMainKey * 3.5;
    if (scrollLocation >= showthema) {
      themaEle.classList.add('on');
      themaLineEle.classList.add('on');
    } else {
      themaEle.classList.remove('on');
      themaLineEle.classList.remove('on');
    }
  }
  setTimeout(function () {
    window.addEventListener("scroll", onShowHeader);
  }, 1000);

  // hash-wrap
  var moreIcon = document.querySelector(".hash-wrap");
  function moreView() {
    moreIcon.classList.toggle("on");
  }
  moreIcon.addEventListener("click", moreView);

  // none typing
  var typingText = document.querySelector('#typing-title');

  function noneTyping() {
    typingText.innerText = '어디로 떠나고 싶나요 ? ';
  }
  noneTyping();

  // Window Resize
  function resizeWindow() {
    setTimeout(function () {
      onScrollMain();
      window.addEventListener("scroll", onShowHeader);
    }, 1000);
  }
  window.addEventListener("resize", resizeWindow);

} else { // !IE Browser
  // JQuery //
  $(function () {
    // Sliding jQuery
    $('.gnb a, .top').on("click",function(e){
      $.scrollTo(this.hash || 0, 800);
      e.preventDefault();
    });
  
    // hash-slider
    const slideHash = $(".hash-slider");
    const hashTag = $(".hash-slider li");
    let getHashHeight = hashTag.height(); // 태그 세로너비
  
    function moveHashTag () {
      slideHash.animate({
        top: -getHashHeight },
        {
          complete: function(){
            var $cloneTag = $(".hash-slider li").first().clone();
           slideHash.append($cloneTag);
            $(".hash-slider li").first().remove();
            slideHash.css("top","0");
          }
        });
    }
    let moveHash = setInterval(moveHashTag, 2000);
  
    const wrap = $(".hash-wrap");
    wrap.on("mouseover",function(){
      clearInterval(moveHash);
      hashTag.addClass("on")
    }).on("mouseout",function(){
      moveHash = setInterval(moveHashTag, 2000);
      hashTag.removeClass("on")
    });
  
    // modal-location
    $(".my-location").on("click", function(){
      $("#modal-location").stop().fadeIn().addClass("on");
    });
    $(".btn-close").on("click", function(){
      $("#modal-location").stop().fadeOut();
      $("#modal-location").removeClass("on");
    });
  
    // typeIt
    new TypeIt("#typing-title", {
      strings: "어디로 떠나고 싶나요? ",
      speed: 300,
      waitUntilVisible: true
    }).go();
  
    
    // click event (web)
    const webWidth = $(window).width();
    if(webWidth >= 1025) {
      // Contry slide slick
      $('.slide.slick').on('click', function(){
        $('#contry .list').fadeIn();
        $('.btn-slide').fadeIn();
        $('.click-icon').fadeOut();
        $('.click-icon').addClass('off');
        $('#contry').addClass('show-tit');
      }); 
  
      // mouseover event Popular place
      $('.box-place .place').on('mouseover', function(){
        $(this).addClass('hover');
  
      }).on('mouseout', function(){
        $('.box-place .place').removeClass('hover');
  
      });
      
      // Promotion fade event 
      let promotionIndex = 0;
      const $fadeSlides = $(".box-fade li");
      $fadeSlides.css("display","none");
      $fadeSlides.eq(0).css("display","flex");
  
      $(".box-hover a").on("mouseover",function(){
        let hoverContentIndex = $(this).index();
        promotionFadeSet(hoverContentIndex);
        $(".box-hover a").css("opacity","1");
        $(this).css("opacity","0.6");
      });
  
      function promotionFadeSet(hoverContentIndex){
        $fadeSlides.stop().fadeOut();
        $fadeSlides.eq(hoverContentIndex).stop().fadeIn();
        promotionIndex = hoverContentIndex;
        $(".box-hover a").css("opacity","1");
        $(".box-hover a").eq(hoverContentIndex).css("opacity","0.6");
      }
      function handleFadeIndex() {
        if(promotionIndex == 4){
          promotionFadeSet(0);
        } else {
          promotionFadeSet(promotionIndex + 1);
        }
      }
      let fadeTimer = setInterval(handleFadeIndex,1000);
      $(".box-hover a").on("mouseover",function(){
        clearInterval(fadeTimer);
      });
      $(".box-hover a").on("mouseout",function(){
        fadeTimer = setInterval(handleFadeIndex,1000);
      });
      
    } 
    // mobile
    if(webWidth < 1025) {
      
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
    if (webWidth <= 767) {
      
      // footer logo change 
      $('.foot-logo a:nth-child(1) img').attr('src','./img/footbanner/foot-logo-01-m.png');
      $('.foot-logo a:nth-child(2) img').attr('src','./img/footbanner/foot-logo-02-m.png');
      $('.foot-logo a:nth-child(3) img').attr('src','./img/footbanner/foot-logo-03-m.png');
    } else {
      $('.foot-logo a:nth-child(1) img').attr('src','./img/footbanner/foot-logo-01.png');
      $('.foot-logo a:nth-child(2) img').attr('src','./img/footbanner/foot-logo-02.png');
      $('.foot-logo a:nth-child(3) img').attr('src','./img/footbanner/foot-logo-03.png');
    }
  
    // background change season
    function timeDesign(){
      var today = new Date();
      var season = today.getMonth()+1;
      var H = today.getHours();
    
      if(H >= 18 && H <= 24){ // night
        $("#index").addClass("night");
        $("#promotion").addClass("night");
      } else if (H >= 0 && H <= 6) { // night
        $("#index").addClass("night");
        $("#promotion").addClass("night");
      } else if (season >= 3 && season <= 6) { // spring
        $("#index").addClass("spring");
      } else if (season >= 7 && season <= 9) { // summer
        $("#index").removeClass("spring");
      } else if (season >= 8 && season <= 11) { // autumn
        $("#index").addClass("autumn");
        $("#promotion").addClass("autumn");
      } else { //winter, day
        $("#index").removeClass("night");
        $("#promotion").removeClass("night");
        $("#index").addClass("winter");
        $("#promotion").addClass("winter");
      }
    }
    timeDesign();
    setInterval(timeDesign,1000);
  
  });

  // Javascript
  // Scroll javascript
  const main = document.getElementById("main");
  let getScrollTop = main.getBoundingClientRect();

  // element set
  const mainTop = getScrollTop.top; // document top.value
  const MAIN = "localTop"; // keyname
  let MAIN_KEY = localStorage.setItem(MAIN, mainTop); // localset
  let getMainKey = parseInt(localStorage.getItem(MAIN)); // load value

  // Scroll #main
  function onScrollMain () {
    window.scrollTo(0, getMainKey);
  }
  setTimeout(function(){ 
    onScrollMain();
  }, 1000);

  // Header
  function onShowHeader() {
    const headEle = document.querySelector("header");  
    const headLogo = document.querySelector(".head-logo img");
    const mainEle = document.querySelector("#main");
    const scrollLocation = window.scrollY;
    const showHeader = getMainKey / 1.5;
    const showHeaderBg = getMainKey * 1.5;
    const changeHeaderLogo = getMainKey * 2;
    if(scrollLocation >= (showHeader)) {
      mainEle.style.opacity = 1;
      // Background Color
      if (scrollLocation >= showHeaderBg) {
        headEle.style.backgroundColor = "rgba(255,255,255,0.8)";
      } else {
        headEle.style.backgroundColor = "transparent";
      }
    } else {
      mainEle.style.opacity = 0;
    }
    // head-logo
    if(scrollLocation >= changeHeaderLogo) {
      headLogo.setAttribute("src","./img/logo/logo_mautumn.png");
    } else {
      headLogo.setAttribute("src","./img/logo/logo_msummer.png");
    }

    // Contry
    const contryEle = document.querySelector("#contry");
    const showContry = getMainKey * 1.5;
    if( scrollLocation >= showContry) {
      contryEle.classList.add("on");
    } else {
      contryEle.classList.remove("on");
    }

    // Popular
    const popularEle = document.querySelector('#popular-place');
    const showPopular = getMainKey * 2.8;
    if( scrollLocation >= showPopular) {
      popularEle.classList.add('on');
    } else {
      popularEle.classList.remove('on');
    }

    // Thema
    const themaEle = document.querySelector('#thema-travel');
    const themaLineEle = document.querySelector('.box-thema');
    const showthema = getMainKey * 3.5;
    if( scrollLocation >= showthema) {
      themaEle.classList.add('on');
      themaLineEle.classList.add('on');
    } else {
      themaEle.classList.remove('on');
      themaLineEle.classList.remove('on');
    }

  }
  setTimeout(function(){   
    window.addEventListener("scroll", onShowHeader);
  }, 1000);

  // hash-wrap
  const moreIcon = document.querySelector(".hash-wrap");
  function moreView() {
    moreIcon.classList.toggle("on");
  }
  moreIcon.addEventListener("click", moreView);

  // Window Resize
  function resizeWindow() {
    localStorage.removeItem(MAIN);
    MAIN_KEY = localStorage.setItem(MAIN, mainTop); // localset
    getMainKey = parseInt(localStorage.getItem(MAIN)); // load value
    
    // setTimeout(function(){ 
    //  onScrollMain();
    // }, 1000);
    setTimeout(function(){   
    window.addEventListener("scroll", onShowHeader);
    }, 1000);
  }
  window.addEventListener("resize", resizeWindow);
}