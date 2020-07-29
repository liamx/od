
//Navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-item");


//scroll up hidden menu

// var lastScrollTop = 0;
//     navbar = document.getElementById("navbar");
    
//     window.addEventListener("scroll", function scrollUp(){
//         var scrollTop = window.pageYOffset || document
//         .documentElement.scrollTop;
//         if (scrollTop > lastScrollTop){
//             navbar.style.top = "-80px";
//             navLinks.style.top = "0px";
            
//         } else {
//             navbar.style.top = "0";
//         }
//         lastScrollTop = scrollTop;

//     })


  


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

//Intersection Observer for intro scroll
// const sectionOne = document.querySelector(".Pop-detail");

// const popUp = document.querySelector(".Pop-container");




// const sectionOneOptions = {
//   root: null, // it is the viewport
//   threshold: 0.2, // if 1 = 100% content must be inside, 0 any pieces inside can fire
//   rootMargin: "900px"
// };

// const sectionOneObserver = new IntersectionObserver(function
//   (entries, sectionOneobserver){
//     entries.forEach(entry => {
//       if(entry. isIntersecting){
//         console.log("is intersecting!");
//         popUp.classList.add("active");
//       } else {
//         console.log("is not intersecting!");
//         popUp.classList.remove("active");
//       };
//     });
//   }, sectionOneOptions);

//   sectionOneObserver.observe(sectionOne);



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
// intro
// var animation6 = bodymovin.loadAnimation({
//   container: document.getElementById('introAnim'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'animation/introAnim/introAnim.json'
// });


//drop orange animation
//this has a duration and animates the playhead on the Lottie animation for a smoother result
ScrollLottie({
  target: '#introAnim',
  path: 'animation/introAnim/introAnim.json', 
  duration: 3, 
  speed: 'medium'
 })

 ScrollLottie({
  target: '#dropAnim',
  path: 'animation/dropAnim/dropAnim.json', 
  duration: 3, 
  speed: 'medium'
 })



// Way To Go lottie
LottieInteractivity.create({
  mode:"scroll",
  player:'#wayToGoAnim',
  actions: [
    {
      visibility:[0, 0.3],
      type: "stop",
      frames: [0]
    },
    {
      visibility:[0.3, 0.5],
      type: "seek",
      frames: [0,130]
    },
    {
      visibility:[ 0.5,1],
      type: "stop",
      frames: [130,180]
    }
  ]  
});

// Email validation

function validation()
{
  var form = document.getElementById("emailInput");
  var email = document.getElementById("email").value;
  var text = document.getElementById("emailText");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern))
  {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email address is Valid.";
    text.style.color = "#fff";
    console.log("valid")
  }
  else 
  {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#263C95";
    console.log("invalid")
  }
  if (email == "")
  {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }

}