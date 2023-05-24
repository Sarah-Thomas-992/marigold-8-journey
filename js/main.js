// Button variables 
const getStarted = document.querySelector("#get-started");
const beginStory = document.querySelector("#begin-story");

const oneA = document.querySelector("#one-A");
// const oneB = document.querySelector("#1B");

// const twoAA = document.querySelector("#2AA");
// const twoAB = document.querySelector("#2AB");
// const twoBA = document.querySelector("#2BA");
// const twoBB = document.querySelector("#2BB");

// const threeAA = document.querySelector("#3AA");
// const threeAB = document.querySelector("#3AB");
// const threeBA = document.querySelector("#3BA");
// const threeBB = document.querySelector("#3BB");
// const threeCA = document.querySelector("#3CA");
// const threeCB = document.querySelector("#3CB");
// const threeDA = document.querySelector("#3DA");
// const threeDB = document.querySelector("#3DB");

// const returnOne = document.querySelector(".return1");
// const returnTwo = document.querySelector(".return2");
// const returnThree = document.querySelector(".return3");
// const returnFour = document.querySelector(".return4");
// const returnFive = document.querySelector(".return5");
// const returnSix = document.querySelector(".return6");
// const returnSeven = document.querySelector(".return7");
// const returnEight = document.querySelector(".return8");


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