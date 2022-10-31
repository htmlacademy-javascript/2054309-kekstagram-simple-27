import {controlUploadFile} from './form.js';
import {onFilterChange} from './slider.js';

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.img-upload__effects');

const writeTargetScale = (imageScaleValue) => {
  scaleValue.value = `${imageScaleValue}%`;
  const scalePercent = imageScaleValue / 100;
  imageContainer.style.transform = `scale(${scalePercent})`;
};

const initChangePhoto = () => {
  let imageScaleValue = 100;
  controlUploadFile.addEventListener('change', reloadPhoto);

  biggerButton.addEventListener('click', () => {
    if (imageScaleValue < 100 && imageScaleValue >= 25) {
      imageScaleValue += 25;
      writeTargetScale(imageScaleValue);
    }
  });

  smallerButton.addEventListener('click', () => {
    if (imageScaleValue <= 100 && imageScaleValue > 25) {
      imageScaleValue -= 25;
      writeTargetScale(imageScaleValue);
    }
  });

  let previousClass;

  effectsList.addEventListener('change', (evt) => {
    const imageCore = imageContainer.querySelector('img');
    imageCore.classList.remove(previousClass);
    const imageEditedClass = `effects__preview--${evt.target.value}`;
    imageCore.classList.add(imageEditedClass);
    previousClass = imageEditedClass;
  });

  effectsList.addEventListener('change', onFilterChange);
};

function reloadPhoto (imageScaleValue) {
  imageScaleValue = 100;
  writeTargetScale(imageScaleValue);
}

export {writeTargetScale, initChangePhoto};
