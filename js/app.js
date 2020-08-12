
//Navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-item");

$(document).ready(function(){
  $(hamburger).click(function(){
    $(navLinks).toggleClass("open");
    $(hamburger).toggleClass("open");
  });
});


//Nav-link toggle
$(document).ready(function(){
$('.nav-item').on('click', function(){
    $('.nav-links').removeClass('open');
    $('.hamburger').removeClass('open');
})
});


//Service Lottie animation
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('ProductDevelopmentAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/ProductDevelopmentAnim/ProductDevelopmentAnim.json'
  });
  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('ItSolutionAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/ItSolutionAnim/ItSolutionAnim.json'
  });
  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('InfrastructureAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/InfrastructureAnim/InfrastructureAnim.json'
  });
var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('FrontEndAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/FrontEndAnim/FrontEndAnim.json'
  });
var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('StrategyAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/StrategyAnim/StrategyAnim.json'
  });
var animation6 = bodymovin.loadAnimation({
  container: document.getElementById('QualityAssuranceAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/QualityAssuranceAnim/QualityAssuranceAnim.json'
});
//not too big
var animation7 = bodymovin.loadAnimation({
  container: document.getElementById('notTooBigAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/notTooBigAnim/notTooBigAnim.json'
});
//arrow down
var animation8 = bodymovin.loadAnimation({
  container: document.getElementById('arrowAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/arrowAnim/arrowAnim.json'
});
var animation8 = bodymovin.loadAnimation({
  container: document.getElementById('arrowAnim2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/arrowAnim/arrowAnim.json'
});




