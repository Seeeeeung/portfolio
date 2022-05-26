// const { get } = require("jquery");

const svgColor = ["#31b349", "#00c73c", "#3b5a9a", "#27a9e0", "#fdd000", "#ed2123", "#d83083"];
const svg = document.querySelector(".icons");
const setSvg = document.querySelector(".icons .icon svg");
let getI = svg.children[0].classList.length; // ==  0
let a = svg.children[getI].children[getI+1]; // == 0번째 a span
let b = svgColor[getI]; // == 0번째 색상
var i = 0;
var n = 0;
while(i > 7) {
  // const current01 = 0;
  // getI = current01;
  i++;
  n += i;

  }
  
  console.log(i);
  // a.style.color = b;

console.log(a);
// const getChild = svg.children[`${childIdx}`].children[1];
console.log(getI);
// const current01 = childIdx[];
// const child = svg.;
// // const a = setSvg.value;
// function readIdx() {
  
// }
// console.log(a);
// // const setSvg = document.querySelector(".icon:nth-child("+ `${}` +") circle");
// const setText = document.querySelector(".icons a span");
// console.log(setSvg.indexOf);
// console.log(setText);
// function handleChangeColor() {

// }