let answerExpanded1 = false;
let answerExpanded2 = false;
let answerExpanded3 = false;
let answerExpanded4 = false;

function expandCard1() {
  const answer1 = document.querySelector(".answer1");
  const expand1 = document.querySelector(".expand1");

  answer1.style.transition = "max-height .5s ease, padding .5s ease";

  if (answerExpanded1) {
    answer1.style.maxHeight = "0";
    answer1.style.opacity = "0";
    answer1.style.paddingTop = "0";
    answer1.style.paddingBottom = "0";
    expand1.src = "icon-plus.svg";
    answerExpanded1 = false;
  } else {
    answer1.style.maxHeight = "80px";
    answer1.style.opacity = "1";
    answer1.innerHTML = `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`;
    answer1.style.fontFamily = "Work Sans";
    answer1.style.color = "#8b6991";
    answer1.style.lineHeight = "20px";
    answer1.style.paddingTop = "12px";
    answer1.style.paddingBottom = "12px";
    expand1.src = "icon-minus.svg";
    answerExpanded1 = true;
  }
}

function expandCard2() {
  const answer2 = document.querySelector(".answer2");
  const expand2 = document.querySelector(".expand2");

  answer2.style.transition = "max-height .5s ease, padding .5s ease";

  if (answerExpanded2) {
    answer2.style.maxHeight = "0";
    answer2.style.opacity = "0";
    answer2.style.paddingTop = "0";
    answer2.style.paddingBottom = "0";
    expand2.src = "icon-plus.svg";
    answerExpanded2 = false;
  } else {
    answer2.style.maxHeight = "80px";
    answer2.style.opacity = "1";
    answer2.innerHTML = `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`;
    answer2.style.fontFamily = "Work Sans";
    answer2.style.color = "#8b6991";
    answer2.style.lineHeight = "20px";
    answer2.style.paddingTop = "12px";
    answer2.style.paddingBottom = "12px";

    expand2.src = "icon-minus.svg";
    answerExpanded2 = true;
  }
}

function expandCard3() {
  const answer3 = document.querySelector(".answer3");
  const expand3 = document.querySelector(".expand3");

  answer3.style.transition = "max-height .5s ease, padding .5s ease";

  if (answerExpanded3) {
    answer3.style.paddingTop = "0";
    answer3.style.paddingBottom = "0";
    answer3.style.maxHeight = "0";
    answer3.style.opacity = "0";
    expand3.src = "icon-plus.svg";
    answerExpanded3 = false;
  } else {
    answer3.style.maxHeight = "80px";
    answer3.style.opacity = "1";
    answer3.innerHTML = `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`;
    answer3.style.fontFamily = "Work Sans";
    answer3.style.color = "#8b6991";
    answer3.style.lineHeight = "20px";
    answer3.style.paddingTop = "12px";
    answer3.style.paddingBottom = "12px";
    expand3.src = "icon-minus.svg";
    answerExpanded3 = true;
  }
}

function expandCard4() {
  const answer4 = document.querySelector(".answer4");
  const expand4 = document.querySelector(".expand4");

  answer4.style.transition = "max-height .5s ease, padding .5s ease";

  if (answerExpanded4) {
    answer4.style.paddingTop = "0";
    answer4.style.paddingBottom = "0";
    answer4.style.maxHeight = "0";
    answer4.style.opacity = "0";
    expand4.src = "icon-plus.svg";
    answerExpanded4 = false;
  } else {
    answer4.style.maxHeight = "80px";
    answer4.style.opacity = "1";
    answer4.innerHTML = `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`;
    answer4.style.fontFamily = "Work Sans";
    answer4.style.color = "#8b6991";
    answer4.style.lineHeight = "20px";
    answer4.style.paddingTop = "12px";
    answer4.style.paddingBottom = "12px";

    expand4.src = "icon-minus.svg";
    answerExpanded4 = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const expand1 = document.querySelector(".expand1");
  expand1.addEventListener("click", expandCard1);

  const expand2 = document.querySelector(".expand2");
  expand2.addEventListener("click", expandCard2);

  const expand3 = document.querySelector(".expand3");
  expand3.addEventListener("click", expandCard3);

  const expand4 = document.querySelector(".expand4");
  expand4.addEventListener("click", expandCard4);
});
