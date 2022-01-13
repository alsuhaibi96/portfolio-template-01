/*Valuding a form 
Developed by alsuhaibi96
*/

function validateForm() {
 nameValidating();
messageValidating();
}


  function nameValidating(){
    let x = document.forms["form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if(x.length<3||x.length>=10){
        alert("Your Name Must be more than 2 characters and less than 10 charaters ! ")
    }
  }



function messageValidating(){
    let message = document.forms["form"]["message"].value;
    if(message.length<20){
        alert("Message has to be more than 20 characters");
    }

}
const hamburger = document.querySelector(".hamburger");
const a = document.querySelector("a");

const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
var countClicks = 0;

hamburger.addEventListener("click", () => {

  countClicks++;
  var img=document.getElementById("myImage");
  img.style.visibility="hidden";
 
  navlinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.add("fade");
  });
  if(countClicks>1){
 countClicks = 0;

    img.style.visibility="visible";
   
  }
});

// if(document.getElementById('burger').clicked == true){
//   alert("again");}
  
links.forEach(function (link) {
 
  link.addEventListener("click", function () {
 
    navlinks.classList.toggle("open");
  });
});

var angle = 0,
  img = document.getElementById('img_container');
document.getElementById('button').onclick = function() {
  angle = (angle + 90) % 360;
  img.className = "rotate" + angle;
  var imgid = document.getElementById('myprofileImage');
if(imgid && imgid.style) {
  imgid.style.height = '800px';
  imgid.style.width = '800px';
}
}
function changeTheme() {

  var element = document.body;  
  element.classList.toggle("theme-mode");
  var expeirenceId=document.getElementById("expeirenceId");
  
  
      // element.style.border = ...
 
  // var contact_id=document.getElementById("contact_id");
  if (document.getElementById('switch-btn').checked) {
 
    var allElements = document.getElementsByClassName("bg-color");
   
    var aElements = document.getElementsByTagName("a");
   
    for (var i = 0, len = allElements.length; i < len; i++) {
        var element = allElements[i];
     
        element.style.backgroundColor="black";
      


  }

  for (i = 0; i < aElements.length; i++) {
    aElements[i].style.color = "white";
  } 
 
  }
  else{
    var aElements = document.getElementsByTagName("a");
  
    var allElements = document.getElementsByClassName("bg-color");
    var anchor = document.getElementsByClassName("anchor");

    for (var i = 0, len = allElements.length; i < len; i++) {
        var element = allElements[i];
        element.style.backgroundColor="#f6f6f6";
  }
  for (i = 0; i < aElements.length; i++) {
    aElements[i].style.color = "black";
  } 
  for (i = 0; i < anchor.length; i++) {
    anchor[i].style.color = "white";
  } 

  }
  

}
function load(){
  
  document.getElementById("switch-btn").checked=false;
 }

