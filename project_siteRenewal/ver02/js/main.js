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
    headLogo.setAttribute("src","../img/logo/logo_mautumn.png");
  } else {
    headLogo.setAttribute("src","../img/logo/logo_msummer.png");
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