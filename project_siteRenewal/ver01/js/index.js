$(function(){ 
  // start of modal scroll-off
  $(".gnb-btn").on("click",function(){
    $("body").toggleClass("scroll-off");
  });
  
  // start of scroll event
  var startPos = $(".btn-top-slide").offset().top; // start position of .btn-top-slide

  $(window).on("scroll",function(){
    var tabShow = $("html").scrollTop(); // scroll effect of scroll effect 
    var scrollPos = $("html").scrollTop();
    var newPos = startPos + scrollPos; // reposition of .btn-top-slide

    // start of scroll effect
    $("aside")[
      tabShow > height * 0.8 ? "addClass" : "removeClass"
    ]("show");
    $(".btn-top-slide")[
      tabShow > height * 0.6 ? "addClass" : "removeClass"
    ]("show"); // end of aside
    $("header")[
      tabShow >= height * 0.8 ? "addClass" : "removeClass"
    ]("show");
    $("header")[
      tabShow >= height * 1.1 ? "addClass" : "removeClass"
    ]("header-opa")
    $(".tag-wrap")[
      tabShow >= height * 2 ? "addClass" : "removeClass"
    ]("wrap-bg"); // end of header
    $(".container").eq(0)[
      tabShow > height * 0.6 ? "addClass" : "removeClass"
    ]("show"); // end of mainvisual
    $(".tit01")[
      tabShow >= height * 1.7 ? "addClass" : "removeClass"
    ]("show");
    $(".intro-cuntry")[
      tabShow >= height * 1.7 ? "addClass" : "removeClass"
    ]("show"); // end of .page02-bg
    $(".tit02")[
      tabShow >= height * 2.7 ? "addClass" : "removeClass"
    ]("slide-up");
    $(".popular")[
      tabShow >= height * 2.7 ? "addClass" : "removeClass"
    ]("slide-up"); // end of .popular section
    $(".tit03")[
      tabShow >= height * 4 ? "addClass" : "removeClass"
    ]("size");
    $(".show01")[
      tabShow >= height * 4 ? "addClass" : "removeClass"
    ]("show-row");
    $(".show02")[
      tabShow >= height * 4.3 ? "addClass" : "removeClass"
    ]("show-row");
    $(".show03")[
      tabShow >= height * 4.3 ? "addClass" : "removeClass"
    ]("show-row");
    $(".show04")[
      tabShow >= height * 4.3 ? "addClass" : "removeClass"
    ]("show-row"); // end of .hilling section
    $("section.tit04")[
      tabShow > height * 4.5 ? "addClass" : "removeClass"
    ]("show2");
    $(".promotion")[
      tabShow > height * 4.5 ? "addClass" : "removeClass"
    ]("show2"); // end of .promotion section

    var bigDesktop = $("html,body").outerWidth(true)
    if(bigDesktop > 1700) {
      $(".tit03")[
        tabShow >= height * 3.3 ? "addClass" : "removeClass"
      ]("size");
      $(".show01")[
        tabShow >= height * 3.3 ? "addClass" : "removeClass"
      ]("show-row");
      $(".show02")[
        tabShow >= height * 3.4 ? "addClass" : "removeClass"
      ]("show-row");
      $(".show03")[
        tabShow >= height * 3.6 ? "addClass" : "removeClass"
      ]("show-row");
      $(".show04")[
        tabShow >= height * 3.9 ? "addClass" : "removeClass"
      ]("show-row"); // end of .hilling section
    }

    // end of scrollTop-toggleClass
   
    $(".btn-top-slide").animate({
      top:newPos
    },10,"swing");
    // end of .btn-top-slide swing-animation
    if($(".logo-head img").offset().top >= height * 2-1) {
      $(".logo-head img").attr("src","./img/logo/logo_mautumn.png");
    } else {
      $(".logo-head img").attr("src","./img/logo/logo_msummer.png");
    }
    // start of header change .logo-head img
  });
  // end of scrollTop

  // start of .tab-slider
  function slideHashy() {
    $(".tag-slider").animate({
      top: "-40px"  
    },{
      complete: function(){
        var $cloneTag = $(".tag-slider li").first().clone();
        $(".tag-slider").append($cloneTag);
        $(".tag-slider li").first().remove();
        $(".tag-slider").css("top","0");
      }
    });
  }
  var timer = setInterval(slideHashy,1500);
  $(".tag-slider").on("mouseover",function(){
    clearInterval(timer);
  });
  $(".tag-slider").on("mouseout",function(){
    timer = setInterval(slideHashy,1500);
  });
  // end of .tab-slider
  
  //start of .box-btn-slide button
  function chooseNext () { // .btn-next
    $(".box-btn-slide button").removeClass("choose-on");
    $(".intro-cuntry .place").on("click",function(){
      $(".btn-next").addClass("choose-on");
  });
  }
  function choosePrev () { // .btn-prev
    $(".box-btn-slide button").removeClass("choose-on");
    $(".intro-cuntry .place").on("click",function(){
      $(".btn-prev").addClass("choose-on");    
    });
  }
  $(".intro-cuntry .place").on("click",function() {
    var a = $(this).index();// select index()
    var b = $(".intro-cuntry .place.hover").index(); // seleted index()
    if (a == b) {
      $(".box-btn-slide button").addClass("choose-on");
    } else if (a > b) {
      chooseNext();
    } else  {
      choosePrev();
    } 
  });
  // end of button effect

  // start of footer.site-banner
  function slideBanner(){
    $(".site-banner").animate({
      left: "-200px"
    },{
      complete: function(){
        var $cloneBann = $(".site-banner li").first().clone();
        $(".site-banner").append($cloneBann);
        $(".site-banner li").first().remove();
        $(".site-banner").css("left","0");
      } 
    },1000); 
  }
  var slideTimer2 = setInterval(slideBanner,2000);
  $(".site-banner").on("mouseover",function(){
    clearInterval(slideTimer2);
  });
  $(".site-banner").on("mouseout",function(){
    slideTimer2 = setInterval(slideBanner,2000)
  });
  //end of footer .site-banner

  // start of .page01-bg scrollTop event
  var height = $(window).innerHeight();
  $("html,body").animate({    
      scrollTop: height * 1
  },2000);
  //end of .page01-bg scrollTop event

  // start of timeDesign
  function timeDesign(){
    var today = new Date();
    var season = today.getMonth()+1;
    var H = today.getHours();
  
    if(H >= 18 && H <= 24){ // night
      $(".page01-bg").addClass("night");
      $(".page04-bg").addClass("night");
    } else if (H >= 0 && H <= 6) { // night
      $(".page01-bg").addClass("night");
      $(".page04-bg").addClass("night");
    } else if (season >= 3 && season <= 6) { // spring
      $(".page01-bg").addClass("spring");
    } else if (season >= 7 && season <= 9) { // summer
      $(".page01-bg").removeClass("spring");
    } else if (season >= 8 && season <= 11) { // autumn
      $(".page01-bg").addClass("autumn");
      $(".page04-bg").addClass("autumn");
    } else { //winter, day
      $(".page01-bg").removeClass("night");
      $(".page04-bg").removeClass("night");
      $(".page01-bg").addClass("winter");
      $(".page04-bg").addClass("winter");
    }
  }
  timeDesign();
  setInterval(timeDesign,1000);
  // end of timeDesign
}); //end of function