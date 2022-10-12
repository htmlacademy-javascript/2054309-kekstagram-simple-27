import {getPicturesData, PHOTOS_AMOUNT} from './data.js';

const createPhotoElement = (photoData, templatePicture) => {

  const randomElement = templatePicture.cloneNode(true);

  randomElement.querySelector('.picture__img').src = photoData.url;
  randomElement.querySelector('.picture__likes').textContent = photoData.likesAmount;
  randomElement.querySelector('.picture__comments').textContent = photoData.commentsAmount;

  return randomElement;
};

const renderPhoto = () => {
  const photoData = getPicturesData(PHOTOS_AMOUNT);
  const template = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const parent = document.querySelector('.pictures');

  photoData.forEach((photosData) => {
    parent.appendChild(createPhotoElement(photosData, template));
  });};

export {renderPhoto};
