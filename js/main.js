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
const para2 = document.querySelector(".para2");
const para3 = document.querySelector(".para3");
const heading3 = document.querySelector("h3");


// Story event listners 
getStarted.addEventListener("click", function(){
    header.classList.add("hide");
    intro.classList.remove("hide");
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    }); 
});

beginStory.addEventListener("click", function(){
    intro.classList.add("hide");
    firstChoice.classList.remove("hide");
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

oneA.addEventListener("click", function(){
    firstChoice.classList.add("hide");
    secondChoiceOne.classList.remove("hide");
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

oneB.addEventListener("click", function(){
    firstChoice.classList.add("hide");
    secondChoiceTwo.classList.remove("hide");
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

twoAA.addEventListener("click", function(){
    secondChoiceOne.classList.add("hide");
    thirdChoiceOne.classList.remove("hide");
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

twoAB.addEventListener("click", function(){
    secondChoiceOne.classList.add("hide");
    thirdChoiceTwo.classList.remove("hide");
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

twoBA.addEventListener("click", function(){
    secondChoiceTwo.classList.add("hide");
    thirdChoiceThird.classList.remove("hide");
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

twoBB.addEventListener("click", function(){
    secondChoiceTwo.classList.add("hide");
    thirdChoiceFour.classList.remove("hide");
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

threeAA.addEventListener("click", function(){
    thirdChoiceOne.classList.add("hide");
    finalFeelGood.classList.remove("hide");

    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});

threeAA.addEventListener("click", function(){
    body.style.backgroundColor = 'lemonchiffon';
    para1.style.color = 'dimgray';
    para2.style.color = 'dimgray';
    para3.style.color = 'dimgray';
    returnFeelGood.style.backgroundColor = 'gold';
    returnFeelGood.style.color = 'dimgray';
    heading3.style.color = 'dimgray';
});




