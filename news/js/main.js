//init
function init() {
    'use strict';   
}

window.onload = init();

function removeElement(x){
    x.removeChild(this);
}

function submitForm() {
    //alert("Thank you");
    
    var formSubmitted = "Thank you for signing up!";
    var formContainer = document.getElementById("inputs");
    var inputContainer = document.getElementsByClassName("input-and-label");
    var inputLine = document.getElementsByTagName("input");
    var formLabels = document.getElementsByTagName("label");
    
    removeElement(inputContainer);
    removeElement(inputLine);
    removeElement(formLabels);
    removeElement(submitButton);
}

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitButton, true);