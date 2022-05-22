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
  
  popCircleRight.addEventListener("click", () => {
    console.log(popImages.length + "image slider length");
    const popHotSliderImagesAgain = dgebCName("popHotSliderImage");
    popCount++;
    let windowSizeWidth = getWindowWidthFunction();
    console.log(windowSizeWidth);
  
    if (windowSizeWidth == 576 || windowSizeWidth < 576) {
      decideMinusPoint();
      numOfSlidersperWidnowArray;
      if (popCount == popImages.length) {
        console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
        clonedImage = popImages[0].cloneNode(true);
        popImagesContainer.appendChild(clonedImage);
        popCount = 0;
        popImagesContainer.style.transition = "none";
      } else {
        popImagesContainer.style.transition = "transform 0.5s linear";
      }
    } else {
      if (popCount == popImages.length - 2) {
        console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
        clonedImage = popImages[0].cloneNode(true);
        popImagesContainer.appendChild(clonedImage);
        popCount = 0;
        popImagesContainer.style.transition = "none";
      } else {
        popImagesContainer.style.transition = "transform 0.5s linear";
      }
    }
  
  
    // if (windowSizeWidth > 0 && windowSizeWidth < 576) {
      
    //   decideMinusPoint();
    //   numOfSlidersperWidnowArray;
    //   if (popCount == popImages.length - numOfSlidersperWidnowArray[0]) {
    //     console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
    //     clonedImage = popImages[0].cloneNode(true);
    //     popImagesContainer.appendChild(clonedImage);
    //     popCount = 0;
    //     popImagesContainer.style.transition = "none";
    //   } else {
    //     popImagesContainer.style.transition = "transform 0.5s linear";
    //   }
    // } else if (windowSizeWidth >= 576 && windowSizeWidth < 768) {
      
    //   decideMinusPoint();
    //   numOfSlidersperWidnowArray;
    //   if (popCount == popImages.length - numOfSlidersperWidnowArray[1]) {
    //     console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
    //     clonedImage = popImages[0].cloneNode(true);
    //     popImagesContainer.appendChild(clonedImage);
    //     popCount = 0;
    //     popImagesContainer.style.transition = "none";
    //   } else {
    //     popImagesContainer.style.transition = "transform 0.5s linear";
    //   }
    // } else if (windowSizeWidth >= 768 && windowSizeWidth < 992) {
     
    //   decideMinusPoint();
    //   numOfSlidersperWidnowArray;
    //   if (popCount == popImages.length - numOfSlidersperWidnowArray[2]) {
    //     console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
    //     clonedImage = popImages[0].cloneNode(true);
    //     popImagesContainer.appendChild(clonedImage);
    //     popCount = 0;
    //     popImagesContainer.style.transition = "none";
    //   } else {
    //     popImagesContainer.style.transition = "transform 0.5s linear";
    //   }
    // } else if (windowSizeWidth >= 992) {
   
    //   decideMinusPoint();
    //   numOfSlidersperWidnowArray;
    //   console.log("numOfSlidersperWidnowArray for a larger screen is "+numOfSlidersperWidnowArray[3])
    //   if (popCount == popImages.length - numOfSlidersperWidnowArray[3]) {
    //     console.log(popHotSliderImagesAgain[popHotSliderImagesAgain.length - 1]);
    //     clonedImage = popImages[0].cloneNode(true);
    //     popImagesContainer.appendChild(clonedImage);
    //     popCount = 0;
    //     popImagesContainer.style.transition = "none";
    //   } else {
    //     popImagesContainer.style.transition = "transform 0.5s linear";
    //   }
    // }
  
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
    decideMinusPoint();
    console.log(numOfSlidersperWidnowArray);
  });
  let numOfSlidersperWidnowArray = [];
  const decideMinusPoint = () => {
    let arrayClassLists = popImages[0].classList;
    arrayClassLists.remove("popHotSliderImage");
  
    let col1 = "col";
    let col2 = "col-sm";
    let col3 = "col-md";
    let col4 = "col-lg";
    let col5 = "col-xl";
    let col6 = "col-xxl";
    arrayClassLists.forEach((colsize, id) => {
      //console.log("/////");
      console.log(id);
      // console.log(colsize.toString(colsize) + "  JOKE");
      let s = colsize.split(/((col-).[a-z])|(col-)/);
      // console.log(s + " HEREE");
      if (s[1] == undefined || s[3] == "col-") {
        console.log("index " + id + " it's an col-12");
        let st;
        if (s[4].includes("-")) {
          st = s[4].replace("-", "");
        } else {
          st = s[4];
        }
        console.log("col size is " + st);
        let numOfSlidersperWidnow = 12 / st;
        console.log("slides per window is " + numOfSlidersperWidnow);
        numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
      } else if (s[1] == "col-sm" && s[3] == undefined) {
        console.log("index " + id + " it's an col-sm");
        let st;
        if (s[4].includes("-")) {
          st = s[4].replace("-", "");
        } else {
          st = s[4];
        }
        console.log("col size is " + st);
        let numOfSlidersperWidnow = 12 / st;
        console.log("slides per window is " + numOfSlidersperWidnow);
        numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
      } else if (s[1] == "col-md" && s[3] == undefined) {
        console.log("index " + id + " it's an col-md");
        let st;
        if (s[4].includes("-")) {
          st = s[4].replace("-", "");
        } else {
          st = s[4];
        }
        console.log("col size is " + st);
        let numOfSlidersperWidnow = 12 / st;
        console.log("slides per window is " + numOfSlidersperWidnow);
        numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
      } else if (s[1] == "col-lg" && s[3] == undefined) {
        console.log("index " + id + " it's an col-lg");
        let st;
        if (s[4].includes("-")) {
          st = s[4].replace("-", "");
        } else {
          st = s[4];
        }
        console.log("col size is " + st);
        let numOfSlidersperWidnow = 12 / st;
        console.log("slides per window is " + numOfSlidersperWidnow);
        numOfSlidersperWidnowArray.push(numOfSlidersperWidnow - 1);
      }
      console.log("/////");
    });
  };
  