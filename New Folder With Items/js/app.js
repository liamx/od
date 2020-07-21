
//  const btn = document.getElementById('btn-click');
//  const sect1 = document.getElementById('sect1');

   

//     const morphing = anime({
//         targets:'.morph',
//         d:[
//             {value:'M 0 0 L 0.49 561.973 C 0.49 561.973 56.361 434.809 172.047 430.118 C 287.733 425.427 272.585 583 458.271 582.754 C 643.957 582.508 612.703 410.575 795.581 401.378 C 978.459 392.181 976.95 565.059 1144.254 561.978 C 1311.558 558.897 1302.981 417.984 1430.362 415.016 C 1557.743 412.048 1556.192 541.324 1721.831 537.599 C 1887.47 533.874 1921.466 454.285 1921.466 454.285 L 1920.975 0 Z'},
//             {value:'M 0 0 L 0 658.548 C 0 658.548 55.871 531.384 171.557 526.693 C 287.243 522.002 272.095 679.577 457.781 679.328 C 643.467 679.079 612.213 507.149 795.091 497.952 C 977.969 488.755 976.46 661.633 1143.764 658.552 C 1311.068 655.471 1302.491 514.559 1429.872 511.59 C 1557.253 508.621 1555.702 637.898 1721.341 634.173 C 1886.98 630.448 1920.976 550.86 1920.976 550.86 L 1920.976 0 Z'},
            
//         ],
//         easing:'easeInOutSine',
//         duration:1200,
//         loop: false,
//         autoplay: false
//     });

    

//     window.addEventListener('scroll',function() {
//         morphing.restart();
        
//     })

    

    // // const intro = document.querySelector(".intro");
    // // const anime = document.querySelector(".animation");

    // // Init ScrollMagic
    // const controller = new ScrollMagic.controller();

    // //build a scene
    // var scene = new ScrollMagic.Scene({
    //     duration: 1000,
    //     triggerElemnt: '.animation',
    //     triggerHook:0
    // })

    // // .addIndicators()
    // // .addTo(controller);



// //Carousel add class on hover
// const indicator = document.querySelector(".carousel-indicators li");



// toggle menu
// $('#button-toggle').click(function() {
//     $(this).toggleClass('active');
//     $('#nav-overlay').toggleClass('open');
//    });
 
// $('#navbar').toggleClass('open').show(); // <-- added .show()




const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-item");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
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


//hover img
function mouseIn() {
  $('.img').addClass('show');
}

function mouseOut() {
  $('.img').removeClass('show');
}

$('.hover-me').hover(mouseIn, mouseOut);