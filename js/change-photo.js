import {controlUploadFileElement} from './form.js';
import {onFilterChange} from './slider.js';

const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imageContainerElement = document.querySelector('.img-upload__preview');
const imageElement = document.querySelector('img');
const effectsListElement = document.querySelector('.img-upload__effects');

const changeScale = (imageScaleValue) => {
  scaleValueElement.value = `${imageScaleValue}%`;
  const scalePercent = imageScaleValue / 100;
  imageElement.style.transform = `scale(${scalePercent})`;
};

const initChangePhoto = () => {
  let imageScaleValue = 100;
  controlUploadFileElement.addEventListener('change', reloadPhoto);
  imageScaleValue = 100;
  biggerButtonElement.addEventListener('click', () => {
    if (imageScaleValue < 100 && imageScaleValue >= 25) {
      imageScaleValue += 25;
      changeScale(imageScaleValue);
    }
  });

  smallerButtonElement.addEventListener('click', () => {
    if (imageScaleValue <= 100 && imageScaleValue > 25) {
      imageScaleValue -= 25;
      changeScale(imageScaleValue);
    }
  });

  let previousClass;

  effectsListElement.addEventListener('change', (evt) => {
    const imageCore = imageContainerElement.querySelector('img');
    imageCore.classList.remove(previousClass);
    const imageEditedClass = `effects__preview--${evt.target.value}`;
    imageCore.classList.add(imageEditedClass);
    previousClass = imageEditedClass;
  });

  function reloadPhoto () {
    imageScaleValue = 100;
    changeScale(imageScaleValue);
  }

  effectsListElement.addEventListener('change', onFilterChange);
};

export {changeScale, initChangePhoto};
