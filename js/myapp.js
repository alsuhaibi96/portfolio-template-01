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
