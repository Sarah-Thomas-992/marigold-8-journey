// Button variables 
const getStarted = document.querySelector("#get-started");
const beginStory = document.querySelector("#begin-story");

const oneA = document.querySelector("#one-A");
const oneB = document.querySelector("#one-B");

const twoAA = document.querySelector("#two-AA");
const twoAB = document.querySelector("#two-AB");
const twoBA = document.querySelector("#two-BA");
const twoBB = document.querySelector("#two-BB");

const threeAA = document.querySelector("#three-AA");
const threeAB = document.querySelector("#three-AB");
const threeBA = document.querySelector("#three-BA");
const threeBB = document.querySelector("#three-BB");
const threeCA = document.querySelector("#three-CA");
const threeCB = document.querySelector("#three-CB");
const threeDA = document.querySelector("#three-DA");
const threeDB = document.querySelector("#three-DB");

const returnOne = document.querySelector(".return1");
const returnTwo = document.querySelector(".return2");
const returnThree = document.querySelector(".return3");
const returnFour = document.querySelector(".return4");
const returnFive = document.querySelector(".return5");
const returnSix = document.querySelector(".return6");
const returnSeven = document.querySelector(".return7");
const returnEight = document.querySelector(".return8");


// Div variables 
const header = document.querySelector(".header");
const intro = document.querySelector(".intro");

const firstChoice = document.querySelector(".first-choice");

const secondChoiceOne = document.querySelector(".second-choice1");
const secondChoiceTwo = document.querySelector(".second-choice2");

const thirdChoiceOne = document.querySelector(".third-choice1");
const thirdChoiceTwo = document.querySelector(".third-choice2");
const thirdChoiceThird = document.querySelector(".third-choice3");
const thirdChoiceFour = document.querySelector(".third-choice4");

const finalOne = document.querySelector(".final1");
const finalTwo = document.querySelector(".final2");
const finalThree = document.querySelector(".final3");
const finalFour = document.querySelector(".final4");
const finalFive = document.querySelector(".final5");
const finalSix = document.querySelector(".final6");
const finalSeven = document.querySelector(".final7");
const finalEight = document.querySelector(".final8");


// Story buttons
getStarted.addEventListener("click", function(){
    header.classList.add("hide");
    intro.classList.remove("hide");
});

beginStory.addEventListener("click", function(){
    intro.classList.add("hide");
    firstChoice.classList.remove("hide");
});