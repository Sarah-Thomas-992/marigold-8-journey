// Button variables 
const getStarted = document.querySelector("#get-started");
const beginStory = document.querySelector("#begin-story");

// Div variables 
const header = document.querySelector(".header");
const intro = document.querySelector(".intro");

getStarted.addEventListener("click", function(){
    header.classList.add("hide");
    intro.classList.remove("hide");
});