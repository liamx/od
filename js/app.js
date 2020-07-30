
//Navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-item");


//scroll up hidden menu


  


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
var animation6 = bodymovin.loadAnimation({
  container: document.getElementById('sixAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/sixAnim/sixAnim.json'
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
 ScrollLottie({
  target: '#dropMobileAnim',
  path: 'animation/dropMobileAnim/dropMobileAnim.json', 
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


// $(document).ready(function(){
//     $(".myForm").sumbit(function(event){
//         event.preventDefault();
//         var name = $("#mail-name").val();
//         var email = $("#mail-email").val();
//         var message = $("#mail-message").val();
//         var submit = $("#mail-submit").val();
//         $(".form-message").load("mail.php",{
//             name: name,
//             email: email,
//             message: message,
//             submit: submit
//         })
//     });
// });

// const Name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');

// //form
// const form = document.getElementById('myForm');
// //Validation colors
// const green = '#4CAF50';
// const red = '#F44336';


// //Validators
// function validateName(){
//     //check if is empty
//     if(checkIfEmpty(Name)) return;
//     //is if it has only letters
//     if(!checkIfOnlyLetters(Name)) return;
//     return true;
// }
// function validateMessage(){
//     //check if is empty
//     if(checkIfEmpty(message)) return;
//     //is if it has only letters
//     if(!checkIfOnlyLetters(message)) return;
//     return true;
// }
// function validateEmail(){
//     //check if is empty
//     if(checkIfEmpty(email)) return;
//     if(!containsCharaters(email, 2)) return;
//     return true;
// }
// // handle form
// form.addEventListener('submit', function(event) {
//     //prevent default behaviour
//     event.preventDefault();
//     if (
//       validateName() &&
//       validateMessage() &&
//       validateEmail() 
//       ) {
//       const container = document.querySelector('div.container');
//       const panel = document.createElement('div');
//       panel.className = 'card-panel orange';
//       const text = document.createElement('span');
//       text.appendChild(document.createTextNode('message sent!'));
//       panel.appendChild(text);
//       console.log("success");
//     }
// });

// // Utillity functions
// function checkIfEmpty(field){
//     if(isEmpty(field.value.trim())){
//       // set field invalid
//       setInvalid(field, `${field.name}must not be empty`);
//       return true;
//     } else {
//       //set field valid
//       setValid(field);
//       return false;
//     }
// }
// function isEmpty(value){
//     if(value === '') return true;
//     return false;
// }
// function setInvalid(field, message){
//     field.className = 'invalid';
//     field.nextElementSibling.innerHTML = message;
//     field.nextElementSibling.style.color = red;
//     // field.insertAdjacentHTML("afterend", "<p>My new paragraph</p>");

// }
// function setValid(field, message){
//     field.className = 'valid';
//     field.nextElementSibling.innerHTML = '';
//     field.nextElementSibling.style.color = green;

// }
// function checkIfOnlyLetters(field){
//     if(/^[a-zA-Z ]+$/.test(field.name)){
//         setValid(field);
//         return true;
//     } else{
//         setInvalid(field, `${field.name} must contain only letters`)
//         return false;
//     }
// }

// function containsCharaters(field, code){
//     let regEx;
//     switch(code){
//         case 1:
//           // letters
//           regEx = /(?=.*[a-zA-Z])/;
//           matchWithRegEx(regEx, field, 'Must container at least one letter');
//         case 2:
//           // email
//           regEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//           return matchWidthRegEx(regEX, field, 'Must be a validate email address');
//         default:
//           return false;
//     }
// }
// function matchWithRegEx(regEX, field, message){
//     if(field.value.match(regEx)){
//         setValid(field);
//         return true;
//     } else{
//         setInvalid(field, message);
//         return false;
//     }
// }



// function validation()
// {
//   var form = document.getElementById("emailInput");
//   var email = document.getElementById("email").value;
//   var text = document.getElementById("emailText");
//   var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//   if (email.match(pattern))
//   {
//     form.classList.add("valid");
//     form.classList.remove("invalid");
//     text.innerHTML = "Your Email address is valid";
//     text.style.color = "#fff";
//     console.log("valid")
//   }
//   else 
//   {
//     form.classList.remove("valid");
//     form.classList.add("invalid");
//     text.innerHTML = "Please enter valid Email address";
//     text.style.color = "#fff";
//     console.log("invalid")
//   }
//   if (email == "")
//   {
//     form.classList.remove("valid");
//     form.classList.remove("invalid");
//     text.innerHTML = "Email";
//     text.style.color = "#fff";
//   }

// }