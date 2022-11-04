import {controlUploadFileElement} from './form.js';
import {onFilterChange} from './slider.js';

const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imageContainerElement = document.querySelector('.img-upload__preview');
const effectsListElement = document.querySelector('.img-upload__effects');

const writeTargetScale = (imageScaleValue) => {
  scaleValueElement.value = `${imageScaleValue}%`;
  const scalePercent = imageScaleValue / 100;
  imageContainerElement.style.transform = `scale(${scalePercent})`;
};

const initChangePhoto = () => {
  let imageScaleValue = 100;
  controlUploadFileElement.addEventListener('change', reloadPhoto);

  biggerButtonElement.addEventListener('click', () => {
    if (imageScaleValue < 100 && imageScaleValue >= 25) {
      imageScaleValue += 25;
      writeTargetScale(imageScaleValue);
    }
  });

  smallerButtonElement.addEventListener('click', () => {
    if (imageScaleValue <= 100 && imageScaleValue > 25) {
      imageScaleValue -= 25;
      writeTargetScale(imageScaleValue);
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

  effectsListElement.addEventListener('change', onFilterChange);
};

function reloadPhoto (imageScaleValue) {
  imageScaleValue = 100;
  writeTargetScale(imageScaleValue);
}

export {writeTargetScale, initChangePhoto};
