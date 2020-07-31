
//Navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-item");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
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


//drop orange animation
//this has a duration and animates the playhead on the Lottie animation for a smoother result
ScrollLottie({
  target: '#introAnim',
  path: 'animation/introAnim/introAnim.json', 
  duration: 3, 
  speed: 'slow'
 })

 ScrollLottie({
  target: '#dropAnim',
  path: 'animation/dropAnim/dropAnim.json', 
  duration: 6, 
  speed: 'slow'
 })
 ScrollLottie({
  target: '#dropMobileAnim',
  path: 'animation/dropMobileAnim/dropMobileAnim.json', 
  duration: 3, 
  speed: 'slow'
 })

//  LottieInteractivity.create({
//   mode:"scroll",
//   player:'#wayToGoAnim',
//   actions: [
//     {
//       visibility:[0,1],
//       type: "seek",
//       frames: [0, 200]
//     },
//     {
//       visibility:[1,1],
//       type: "loop",
//       frames: [199, 201]
//     }
//   ]
// });

// Way To Go lottie
LottieInteractivity.create({
  mode:"scroll",
  player:'#wayToGoAnim',
  actions: [
    // {
    //   visibility:[0, 0.1],
    //   type: "stop",
    //   frames: [0]
    // },
    {
      visibility:[0.1, 0.8],
      type: "seek",
      frames: [1,130]
    }
    // {
    //   visibility:[ 0.1,1],
    //   type: "stop",
    //   frames: [130]
    // }
  ]  
});

// Email validation

// Get element with ".animated" class, which has "data-sal" attribute
const element = document.querySelector('.animated');

element.addEventListener('sal:in', ({ detail }) => {
  console.log('entering', detail.target);
});



