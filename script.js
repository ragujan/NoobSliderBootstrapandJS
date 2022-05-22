const dgebi = (id) => {
  const selectedelement = document.querySelector("#" + id);
  return selectedelement;
};
const dgebCName = (cname) => {
  const selectedelement = document.querySelectorAll("." + cname);
  return selectedelement;
};
let getWindowSizeFunction = () => {
  let windowWidthSize;
  
    windowWidthSize = window.outerWidth;
    if (windowWidthSize == 588 || windowWidthSize < 588) {
      console.log("YEAH its smaller")
    }
  console.log(windowWidthSize + "HEY");
  return windowWidthSize;
  
};


const popCircleRight = dgebi("popNavigateCircleRight");
const popCircleLeft = dgebi("popNavigateCircleLeft");
const popImagesContainer = dgebCName("popHotSliderImageContainer")[0];
let clonedImage;
const popImages = [...dgebCName("popHotSliderImage")];
let popCount = 0;
let oglength = popImages.length;
console.log(oglength);

popCircleRight.addEventListener("click", () => {
  console.log(popImages.length + "image slider length");
  const popHotSliderImagesAgain = dgebCName("popHotSliderImage");
  popCount++;
  let windowSizeWidth = getWindowSizeFunction();
   console.log(windowSizeWidth)
  if ( windowSizeWidth== 588 || windowSizeWidth < 588 ) {
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
    if (popCount == popImages.length - 1) {
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

  console.log(popCount);

  let popImageLength = popImages[0].clientWidth;
  console.log(popImageLength);
  let transferLength = popCount * popImageLength * 1;
  let totalSliderLength = popImageLength * popImages.length;
  console.log(transferLength);

  console.log(totalSliderLength);

  popImagesContainer.style.transform = "translateX(-" + transferLength + "px)";
  popImagesContainer.style.transition = "transform 0.5s linear";
  popImagesContainer.insertBefore(
    popImages[popImages.length - 1],
    popImagesContainer.firstChild
  );
});
