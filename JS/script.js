// //*********************************BANNER IMAGE CHANGER SCRIPT***************************************/
let topImages = document.querySelectorAll(".banner__item--top");

let removeTop = true;
let previousIndexes = [];

setInterval(() => {
  let number = findOrignalRandom();

  if (removeTop) {
    topImages[number].style.opacity = "0";
    previousIndexes.push(number);

    if (previousIndexes.length === topImages.length) {
      removeTop = false;
    }
  } else {
    let index = randomIndex();
    let previousIndexesValue = previousIndexes[index];

    topImages[previousIndexes[index]].style.opacity = "1";
    previousIndexes = previousIndexes.filter(
      (num) => num !== previousIndexesValue
    );

    if (previousIndexes.length === 0) {
      removeTop = true;
    }
  }
}, 5500);

const findOrignalRandom = () => {
  let ran = Math.floor(Math.random() * topImages.length - 1) + 1;
  while (previousIndexes.includes(ran) && previousIndexes.length !== 9) {
    ran = Math.floor(Math.random() * topImages.length - 1) + 1;
  }

  return ran;
};

const randomIndex = () => {
  return Math.floor(Math.random() * previousIndexes.length - 1) + 1;
};
