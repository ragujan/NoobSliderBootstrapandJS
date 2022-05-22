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

let decideMinusPoint = () => {
  let numOfSlidersperWidnowArray = [];
  let popImageArrayList = [];
  let arrayClassLists = popImages[0].classList;
  arrayClassLists.forEach((cl) => {
    popImageArrayList.push(cl);
  });
  console.log(popImageArrayList);
  popImageArrayList.splice(0, 1);

  let col1 = "col";
  let col2 = "col-sm";
  let col3 = "col-md";
  let col4 = "col-lg";
  let col5 = "col-xl";
  let col6 = "col-xxl";
  popImageArrayList.forEach((colsize, id) => {
    let s = colsize.split(/((col-).[a-z])|(col-)/);

    if (s[1] == undefined || s[3] == "col-") {
      let st;
      if (s[4].includes("-")) {
        st = s[4].replace("-", "");
      } else {
        st = s[4];
      }

      let numOfSlidersperWidnow = 12 / st;

      numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
    } else if (s[1] == "col-sm" && s[3] == undefined) {
      let st;
      if (s[4].includes("-")) {
        st = s[4].replace("-", "");
      } else {
        st = s[4];
      }

      let numOfSlidersperWidnow = 12 / st;

      numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
    } else if (s[1] == "col-md" && s[3] == undefined) {
      let st;
      if (s[4].includes("-")) {
        st = s[4].replace("-", "");
      } else {
        st = s[4];
      }

      let numOfSlidersperWidnow = 12 / st;

      numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
    } else if (s[1] == "col-lg" && s[3] == undefined) {
      let st;
      if (s[4].includes("-")) {
        st = s[4].replace("-", "");
      } else {
        st = s[4];
      }

      let numOfSlidersperWidnow = 12 / st;

      numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
    }
  });
  return numOfSlidersperWidnowArray;
};
console.log(popImages[0].classList);
let arrayofSliderPerWindowsMinus = [];
arrayofSliderPerWindowsMinus = decideMinusPoint();
console.log(popImages[0].classList);
console.log(arrayofSliderPerWindowsMinus[0]);

popCircleRight.addEventListener("click", () => {
  console.log(popImages.length + "image slider length");
  const popHotSliderImagesAgain = dgebCName("popHotSliderImage");
  popCount++;
  let windowSizeWidth = getWindowWidthFunction();
  console.log(windowSizeWidth);
  if (windowSizeWidth > 0 && windowSizeWidth < 576) {
    if (popCount == popImages.length - arrayofSliderPerWindowsMinus[0]) {
      console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
      clonedImage = popImages[0].cloneNode(true);
      popImagesContainer.appendChild(clonedImage);
      popCount = 0;
      popImagesContainer.style.transition = "none";
    } else {
      popImagesContainer.style.transition = "transform 0.5s linear";
    }
  } else if (windowSizeWidth >= 576 && windowSizeWidth < 768)  {
    if (popCount == popImages.length - arrayofSliderPerWindowsMinus[1]) {
      console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
      clonedImage = popImages[0].cloneNode(true);
      popImagesContainer.appendChild(clonedImage);
      popCount = 0;
      popImagesContainer.style.transition = "none";
    } else {
      popImagesContainer.style.transition = "transform 0.5s linear";
    }
  }else if  (windowSizeWidth >= 768 && windowSizeWidth < 992)  {
    if (popCount == popImages.length - arrayofSliderPerWindowsMinus[2]) {
      console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
      clonedImage = popImages[0].cloneNode(true);
      popImagesContainer.appendChild(clonedImage);
      popCount = 0;
      popImagesContainer.style.transition = "none";
    } else {
      popImagesContainer.style.transition = "transform 0.5s linear";
    }
  } else if  ( windowSizeWidth >=992)  {
    if (popCount == popImages.length - arrayofSliderPerWindowsMinus[3]) {
      console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
      clonedImage = popImages[0].cloneNode(true);
      popImagesContainer.appendChild(clonedImage);
      popCount = 0;
      popImagesContainer.style.transition = "none";
    } else {
      popImagesContainer.style.transition = "transform 0.5s linear";
    }
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
