

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


//scrollup WHO/ HOW
// function scrollAppear(){
//   var introText = document.querySelector('.scrollup');
//   var introPosition = introText.getBoundingClientRect().top;
//   var screenPosition = window.innerHeight/1.2;

//   if(introPosition < screenPosition){
//       introText.classList.add('scrollup-appear');
//   }
// }
//   console.log('introPosition');
//   window.addEventListener('scroll', scrollAppear);



//scroll up hidden menu
var lastScrollTop = 0;
    navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function(){
        var scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;
        if (scrollTop > lastScrollTop){
            navbar.style.top = "-80px";
        } else {
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;

    })

//Service Lottie animation
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('oneAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/oneAnim/oneAnim.json'
  });
  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('twoAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/twoAnim/twoAnim.json'
  });
  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('threeAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/threeAnim/threeAnim.json'
  });
var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('fourAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/fourAnim/fourAnim.json'
  });
var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('fiveAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/fiveAnim/fiveAnim.json'
  });
var animation5 = bodymovin.loadAnimation({
  container: document.getElementById('sixAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/sixAnim/sixAnim.json'
});
//not too big
var animation5 = bodymovin.loadAnimation({
  container: document.getElementById('notTooBigAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/notTooBigAnim/notTooBigAnim.json'
});
//intro
var animation6 = bodymovin.loadAnimation({
  container: document.getElementById('introAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/introAnim/introAnim.json'
});


//drop orange animation
//this has a duration and animates the playhead on the Lottie animation for a smoother result
ScrollLottie({
  target: '#five',
  path: 'animation/fiveAnim/fiveAnim.json', 
  duration: 3, 
  speed: 'medium'
 })

 ScrollLottie({
  target: '#dropAnim',
  path: 'animation/dropAnim/dropAnim.json', 
  duration: 3, 
  speed: 'medium'
 })





 
//way to go
// var animation5 = bodymovin.loadAnimation({
//   container: document.getElementById('wayToGoAnim'),
//   renderer: 'svg',
//   loop: false,
//   autoplay: true,
//   path: 'animation/wayToGoAnim/wayToGoAnim.json'
// });

// Way To Go lottie
LottieInteractivity.create({
  mode:"scroll",
  player:'#wayToGoAnim',
  actions: [
    {
      visibility:[0, 0.4],
      type: "stop",
      frames: [0]
    },
    {
      visibility:[0.4, 0.9],
      type: "seek",
      frames: [0,180]
    },
    {
      visibility:[ 1],
      type: "loop",
      frames: [180]
    }
  ]  
});

//popup job

jQuery(document).ready(function () {

  
  //use onComplete event to modify inline css 
  $("#ModalPopup").fancybox({
      'modal': true,
      'onComplete': function () {
          $(".compensate-for-scrollbar").css({ 'margin-right': '0'});
      }
  });

});