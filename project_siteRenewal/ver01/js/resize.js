$(function(){
  var reWidth = $(window).width(); // resize window width

  /* start of desktop etc (tablet , mobile) */
  if (reWidth <= 1199){
    // start of #mgnb-modal
    $(".gnb-btn").on("click",function(){
      $("#mgnb-modal").slideToggle();
      $("#mgnb-modal").toggleClass("on");
      $(".gnb-btn").toggleClass("on");
      $("aside").toggleClass("off");
      $(".btn-top-slide").toggleClass("off");
      $(".gnb-btn span").toggleClass("act");
    });
    $(".mgnb > li > a").on("click",function(){
      if($(this).hasClass("open") == true){
        $(this).siblings(".msub").stop().slideUp(500);      
        $(this).removeClass("open");
      } else {
        $(".msub").slideUp(500);
        $(this).siblings(".msub").stop().slideDown(500);
        $(".mgnb > li > a").removeClass("open");
        $(this).addClass("open");
      }
    });
    //end of #mgnb-modal

    // start of .intro-cuntry slide effect
    var current0 = 0;
    function mbtnSlide(midx) {
      var idx1 = midx + 1;
      var $movePlace = $(".box-place-slider .place").outerWidth(true);
      current0 = midx;
      $(".intro-cuntry .box-place").animate({
        left: - $movePlace * midx
      });
      $(".place-tit li").stop().fadeOut(100);
      $(".idx-place li").css("top","50px");
      $(".place-tit li").eq(midx).stop().fadeIn(200);
      $(".idx-place li").eq(midx).animate({
        top: "0px"
      });
      $(".intro-cuntry .place").removeClass("hover");
      $(".intro-cuntry .place").eq(midx).addClass("hover");
      $(".idx-place li").text("0" + idx1);
    }
    $(".place-tit li").stop().fadeOut(100);
    $(".place-tit li").eq(0).fadeIn(100);
    $(".intro-cuntry .place").on("click",function(){
      var midx = $(this).index();
      mbtnSlide(midx);
    });
    
    $(".btn-next").on("click",function(){
      if(current0 < 6){
        mbtnSlide(current0 + 1);
      } else {
        mbtnSlide(0);
      }
    });
    $(".btn-prev").on("click",function(){
      if(current0 > 0){
        mbtnSlide(current0 - 1); 
      } else {
        mbtnSlide(6);
      }
    });
    // end of .intro-cuntry slide effect
    
    // start of .promotion fade effect
    var current1 = 0;
    var $mFadeSlides = $(".box-hover-contents li");
    $mFadeSlides.css("display","none");
    $mFadeSlides.eq(0).css("display","block");
    $(".box-hover-contents li").on("click",function(){
      var mconIdx = $(this).index();
      mproFade(mconIdx);
    });
    function mproFade(mconIdx){
      $mFadeSlides.stop().fadeOut();
      $mFadeSlides.eq(mconIdx).stop().fadeIn();
      current1 = mconIdx;
    }
    function msetFade(){
      if(current1 == 4){
        mproFade(0);
      } else {
        mproFade(current1 + 1);
      }
    }
    var mfadeTimer = setInterval(msetFade,1000);
    $(".box-hover-contents li").on("mouseover",function(){
      clearInterval(mfadeTimer);
    });
    $(".box-hover-contents li").on("mouseout",function(){
      fadeTimer = setInterval(msetFade,1000);
    });
    //end of promotion mfade   
  /* end of desktop etc */ 
  } else {
  /* start of desktop (rewidth > 1199)*/ 
    // start of #gnb-modal
    $(".gnb-btn").on("click",function(){
      $("#gnb-modal").slideToggle();
      $(".gnb-btn").toggleClass("on");
      $("aside").toggleClass("off");
      $(".btn-top-slide").toggleClass("off");
      $(".gnb-btn span").toggleClass("act");
    }); // end of .gnb-btn

    $(".gnb li").on("click",function(){
      $(".gnb li").removeClass("up")
      $(this).addClass("up");
      $(".gnb li").removeClass("act-move");
      $(this).addClass("act-move");
    });
    $(".gnb li").on("mouseover",function(){
      $(".gnb li").addClass("hover-off");
      $(this).removeClass("hover-off");
      $(this).addClass("on");
    });
    $(".gnb li").on("mouseout",function(){
      $(".gnb li").removeClass("hover-off");
    });
    $(".sub-name li").on("mouseover",function(){
      var idx3 = $(this).index()-1;
      $(".sub li").eq(idx3).addClass("act-svg");
      $(this).addClass("act-svg");
    });
    $(".sub-name li").on("mouseout",function(){
      $(".sub li").removeClass("act-svg");
      $(this).removeClass("act-svg");
    });
    // end of #gnb-modal

    // start of .intro-cuntry
    // start of .intro-cuntry slide effect
    var windowWidth=$("html").outerWidth(true); // window width
    if(windowWidth > 1199){  
      function setSlide(longIdx){
        $(".intro-cuntry .place").each(function(){
        var longIdx = $(this).index();
        longIdx = current3;
        });
        
        var inWidth = $(".intro-cuntry .place").outerWidth(true);
        $(".intro-cuntry .box-place").animate({
          left: - inWidth * longIdx
        });
      } // end of .intro-cuntry slide effect
      
      // start of .intro-cuntry auto slide effect
      var current3 = 0;
      function actSlide() {
        if(current3 > 5){        
          current3 = 0;
        } else {
          setSlide(current3 - 1);
        }    
        current3 ++;
      } // end of .intro-cuntry auto slide effect
    }
    var mainTimer = setInterval(actSlide,2000);
    $(".intro-cuntry .place").on("click",function(){
      clearInterval(mainTimer);
    }); 
    // end of auto slide .intro-cuntry effect

    var cunWidth = $(".intro-cuntry").outerWidth(true);
    if(cunWidth >= 1056){
      $(".intro-cuntry .place").removeClass("hover");
      $(".intro-cuntry .place").on("click",function(){
        $(".intro-cuntry.show").css("width","70%")
        $(".intro-cuntry h2").css("display","none");
        $(".tit01").stop().fadeIn();
        $(".intro-cuntry .box-btn-slide").css("display","flex"); 
        $(".box-place-slider .box-place").css({
          "width" : "300%"
        });
        $(".intro-cuntry .place").css({
          "width" : "10%",
          "margin" : "0.5% 1% 0 0"
        });
      });
    } 
    /* click event of .intro-cuntry */
    $(".intro-cuntry .place").on("click",function(){
      var idx = $(this).index();
      btnSlide(idx);
    });
    var current2 = 0;    
    function btnSlide(idx) {
      var idx2 = idx + 1;
      current2 = idx;
      var movePersent = $(".intro-cuntry .place").outerWidth(true);
      $(".intro-cuntry .box-place").animate({
        left: - movePersent * idx
      });
      $(".place-tit li").stop().fadeOut(100);
      $(".idx-place li").css({"top":"50px"});
      $(".place-tit li").eq(idx).stop().fadeIn(200);
      $(".idx-place li").eq(idx).animate({
        top: "0px"
      });
      $(".intro-cuntry .place").removeClass("hover");
      $(".intro-cuntry .place").eq(idx).addClass("hover");
      $(".idx-place li").text("0" + idx2);
    }
    // end of btnSlide
     
    $(".btn-next").on("click",function(){
      if(current2 < 6){
        btnSlide(current2 + 1);
      } else {
        btnSlide(0);
      }
    });
    $(".btn-prev").on("click",function(){
      if(current2 > 0){
        btnSlide(current2 - 1); 
      } else {
        btnSlide(6);
      }
    }); // end of .btn-next,prev

    //start of .promotion fade effect
    var current4 = 0;
    var $fadeSlides = $(".fade-contents li");
    $fadeSlides.css("display","none");
    $fadeSlides.eq(0).css("display","block");

    $(".box-hover-contents li").on("mouseover",function(){
      var conIdx = $(this).index();
      proFade(conIdx);
      $(".box-hover-contents li").css("opacity","1");
      $(this).css("opacity","0.6");
    });

    function proFade(conIdx){
      $fadeSlides.stop().fadeOut();
      $fadeSlides.eq(conIdx).stop().fadeIn();
      current4 = conIdx;
      $(".content").css("opacity","1");
      $(".content").eq(conIdx).css("opacity","0.6");
    }
    function setFade() {
      if(current4 == 4){
        proFade(0);
      } else {
        proFade(current4 + 1);
      }
    }
    var fadeTimer = setInterval(setFade,1000);
    $(".box-hover-contents li").on("mouseover",function(){
      clearInterval(fadeTimer);
    });
    $(".box-hover-contents li").on("mouseout",function(){
      fadeTimer = setInterval(setFade,1000);
    });
    //end of .promotion fade effect

    // start of footer .sns-icon event
    function slideIcon(){
      $(".sns-icon").animate({
        left: "-150px"
      },{
        complete: function(){
          var $cloneIcon = $(".sns-icon li").first().clone();
          $(".sns-icon").append($cloneIcon);
          $(".sns-icon li").first().remove();
          $(".sns-icon").css("left","0");
        }
      },1000);
    }
    var slideTimer = setInterval(slideIcon,2000)
    $(".sns-icon").on("mouseover",function(){
      clearInterval(slideTimer);
    });
    $(".sns-icon").on("mouseout",function(){
      slideTimer = setInterval(slideIcon,2000)
    });
    //end of foot-slideIcon
  } 
  /* end of desktop */
}); // end of function