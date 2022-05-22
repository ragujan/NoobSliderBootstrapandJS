 if (windowSizeWidth > 576 && windowSizeWidth <= 768) {
    if (popCount == popImages.length - numOfSlidersperWidnowArray[1]) {
      clonedImage = popImages[0].cloneNode(true);
      popImagesContainer.appendChild(clonedImage);
      popCount = 0;
      popImagesContainer.style.transition = "none";
    } else {
      popImagesContainer.style.transition = "transform 0.5s linear";
    }
  } else if (windowSizeWidth > 768 && windowSizeWidth <= 992) {
    if (popCount == popImages.length - numOfSlidersperWidnowArray[2]) {
      clonedImage = popImages[0].cloneNode(true);
      popImagesContainer.appendChild(clonedImage);
      popCount = 0;
      popImagesContainer.style.transition = "none";
    } else {
      popImagesContainer.style.transition = "transform 0.5s linear";
    }
  }