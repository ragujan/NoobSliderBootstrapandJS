const dgebi = (id) => {
  const selectedelement = document.querySelector("#" + id);
  return selectedelement;
};
const dgebCName = (cname) => {
  const selectedelement = document.querySelectorAll("." + cname);
  return selectedelement;
};
let getWindowWidthFunction = () => {
  let windowWidthSize;
  windowWidthSize = window.innerWidth;
  return windowWidthSize;
};

const popCircleRight = dgebi("popNavigateCircleRight");
const popCircleLeft = dgebi("popNavigateCircleLeft");
const popImagesContainer = dgebCName("popHotSliderImageContainer")[0];
const popImages = [...dgebCName("popHotSliderImage")];
let clonedImage;
let popCount = 0;

let bootstrapGridRanges = [576, 768, 992, 1200];
let arrayPusher = (s, numOfSlidersperWidnowArray) => {
  let st;
  s.includes("-") ? st = s.replace("-", "") : st = s

  let numOfSlidersperWidnow = 12 / st;

  numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
};
let decideMinusPoint = () => {
  let numOfSlidersperWidnowArray = [];
  let popImageArrayList = [];
  let arrayClassLists = popImages[0].classList;
  arrayClassLists.forEach((cl) => {
    popImageArrayList.push(cl);
  });

  popImageArrayList.splice(0, 1);
  popImageArrayList.forEach((colsize, id) => {
    let s = colsize.split(/((col-).[a-z])|(col-)/);

    if (s[1] == undefined || s[3] == "col-") {
      arrayPusher(s[4], numOfSlidersperWidnowArray);
    } else if (s[1] == "col-sm" && s[3] == undefined) {
      arrayPusher(s[4], numOfSlidersperWidnowArray);
    } else if (s[1] == "col-md" && s[3] == undefined) {
      arrayPusher(s[4], numOfSlidersperWidnowArray);
    } else if (s[1] == "col-lg" && s[3] == undefined) {
      arrayPusher(s[4], numOfSlidersperWidnowArray);
    }
  });
  return numOfSlidersperWidnowArray;
};

let arrayofSliderPerWindowsMinus = [];
arrayofSliderPerWindowsMinus = decideMinusPoint();
let imageMoveandCloneFunction = (arrayMinusValue) => {
  if (popCount == popImages.length - arrayMinusValue) {
    clonedImage = popImages[0].cloneNode(true);
    popImagesContainer.appendChild(clonedImage);
    popCount = 0;
    popImagesContainer.style.transition = "none";
  } else {
    popImagesContainer.style.transition = "transform 0.5s linear";
  }
};
popCircleRight.addEventListener("click", () => {
  popCount++;
  let windowSizeWidth = getWindowWidthFunction();

  if (windowSizeWidth > 0 && windowSizeWidth < 576) {
    imageMoveandCloneFunction(arrayofSliderPerWindowsMinus[0]);
  } else if (windowSizeWidth >= 576 && windowSizeWidth < 768) {
    imageMoveandCloneFunction(arrayofSliderPerWindowsMinus[1]);
  } else if (windowSizeWidth >= 768 && windowSizeWidth < 992) {
    imageMoveandCloneFunction(arrayofSliderPerWindowsMinus[2]);
  } else if (windowSizeWidth >= 992) {
    imageMoveandCloneFunction(arrayofSliderPerWindowsMinus[3]);
  }

  if (popCount === 0) {
    const popHotSliderImagesAgain = dgebCName("popHotSliderImage");
    console.log(popHotSliderImagesAgain.length);
    popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1].remove();
  }
  console.log(popCount);

  let singleImageWidth = popImages[0].clientWidth;
  console.log(singleImageWidth);
  popImagesContainer.style.transform =
    "translateX(-" + singleImageWidth * popCount + "px)";
});

popCircleLeft.addEventListener("click", () => {
  if (popCount == 0) {
    popCount = 1;
  }
  popCount--;

  let singleImageWidth = popImages[0].clientWidth;
  console.log(singleImageWidth);
  popImagesContainer.style.transform =
    "translateX(-" + singleImageWidth * popCount + "px)";
});
const getWidthBtn = dgebi("getWidthBtn");
getWidthBtn.addEventListener("click", () => {
  console.log(popImages[0].classList);

  console.log(decideMinusPoint());
});
