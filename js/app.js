

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
  target: '#dropAnim',
  path: 'animation/dropAnim/dropAnim.json', 
  duration: 3, 
  speed: 'medium'
 })

//way to go
var animation5 = bodymovin.loadAnimation({
  container: document.getElementById('wayToGoAnim'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'animation/wayToGoAnim/wayToGoAnim.json'
});
// lottie
LottieInteractivity.create({
  mode:"scroll",
  player:'#wayToGoAnim',
  actions: [
    {
      visibility:[0, 0.1],
      type: "stop",
      frames: [0,100]
    },
    {
      visibility:[0.1, 0.5],
      type: "seek",
      frames: [0,100]
    },
    {
      visibility:[0.5, 1],
      type: "stop",
      frames: [100,101]
    }
  ]  
});

//popup job
// function togglePopup(){
//   document.getElementById("popup-1").classList.toggle("active");
// }
// function togglePopupb(){
//   document.getElementById("ab").classList.toggle("active");
// }


//popup close when clicking outside
// $(document).ready(function(){
//   $('.overlay').on('click', function(){
//     $('.popup').removeClass('active');
//   })
// });


//popup test
$(".job-title").click(function () {
  $(this).parent(".popup_main").children(".popup_body").addClass("popup_body_show");
  });
$(".open_popup").click(function () {
  $(this).parent(".popup_main").children(".popup_body").addClass("popup_body_show");
  });
$(".popup_close").click(function () {
  $(".popup_body").removeClass("popup_body_show");
  });
$(".popup_back").click(function () {
  $(".popup_body").removeClass("popup_body_show");
  });
