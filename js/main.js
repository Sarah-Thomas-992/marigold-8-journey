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

const returnFeelGood = document.querySelector(".return1");
const returnHorror = document.querySelector(".return2");
const returnRomance = document.querySelector(".return3");
const returnFantasy = document.querySelector(".return4");
const returnTrueCrime = document.querySelector(".return5");
const returnThriller = document.querySelector(".return6");
const returnSciFi = document.querySelector(".return7");
const returnDystopian = document.querySelector(".return8");


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

const finalFeelGood = document.querySelector(".final1");
const finalHorror = document.querySelector(".final2");
const finalRomance = document.querySelector(".final3");
const finalFantasy = document.querySelector(".final4");
const finalTrueCrime = document.querySelector(".final5");
const finalThriller = document.querySelector(".final6");
const finalSciFi = document.querySelector(".final7");
const finalDystopian = document.querySelector(".final8");

//Body elements
const body = document.querySelector("body");
const para1 = document.querySelector(".para1");
const heading3 = document.querySelector("h3");

//Scrolling function
const scrollToTop = function () {
    window.scrollTo(0, 0);
};

// Story event listners 
getStarted.addEventListener("click", function () {
    header.classList.add("hide");
    intro.classList.remove("hide");
    scrollToTop();
});

beginStory.addEventListener("click", function () {
    intro.classList.add("hide");
    firstChoice.classList.remove("hide");
    scrollToTop();
});

oneA.addEventListener("click", function () {
    firstChoice.classList.add("hide");
    secondChoiceOne.classList.remove("hide");
    scrollToTop();
});

oneB.addEventListener("click", function () {
    firstChoice.classList.add("hide");
    secondChoiceTwo.classList.remove("hide");
    scrollToTop();
});

twoAA.addEventListener("click", function () {
    secondChoiceOne.classList.add("hide");
    thirdChoiceOne.classList.remove("hide");
    scrollToTop();
});

twoAB.addEventListener("click", function () {
    secondChoiceOne.classList.add("hide");
    thirdChoiceTwo.classList.remove("hide");
    scrollToTop();
});

twoBA.addEventListener("click", function () {
    secondChoiceTwo.classList.add("hide");
    thirdChoiceThird.classList.remove("hide");
    scrollToTop();
});

twoBB.addEventListener("click", function () {
    secondChoiceTwo.classList.add("hide");
    thirdChoiceFour.classList.remove("hide");
    scrollToTop();
});

const returnToNormal = function () {
    body.style.backgroundColor = 'rgb(56, 56, 84)';
    para1.style.color = 'white';
    heading3.style.color = 'white';
};

threeAA.addEventListener("click", function () {
    thirdChoiceOne.classList.add("hide");
    finalFeelGood.classList.remove("hide");
    body.style.backgroundColor = 'lemonchiffon';
    para1.style.color = 'dimgray';
    heading3.style.color = 'dimgray';
    scrollToTop();
});

returnFeelGood.addEventListener("click", function () {
    finalFeelGood.classList.add("hide");
    header.classList.remove("hide");
    returnToNormal();
    scrollToTop();
});

threeAB.addEventListener("click", function () {
    thirdChoiceOne.classList.add("hide");
    finalHorror.classList.remove("hide");
    body.style.backgroundColor = 'rgb(65, 41, 41)';
    scrollToTop();
});

returnHorror.addEventListener("click", function () {
    finalHorror.classList.add("hide");
    header.classList.remove("hide");
    returnToNormal();
    scrollToTop();
});

threeBA.addEventListener("click", function () {
    thirdChoiceTwo.classList.add("hide");
    finalRomance.classList.remove("hide");
    body.style.backgroundColor = 'indianred';
    para1.style.color = 'mistyrose';
    heading3.style.color = 'mistyrose';
    scrollToTop();
});

returnRomance.addEventListener("click", function () {
    finalRomance.classList.add("hide");
    header.classList.remove("hide");
    returnToNormal();
    scrollToTop();
});

threeBB.addEventListener("click", function () {
    thirdChoiceTwo.classList.add("hide");
    finalFantasy.classList.remove("hide");
    body.style.backgroundColor = 'lavender';
    para1.style.color = 'black';
    heading3.style.color = 'black';
    scrollToTop();
});

returnFantasy.addEventListener("click", function () {
    finalFantasy.classList.add("hide");
    header.classList.remove("hide");
    returnToNormal();
    scrollToTop();
});




