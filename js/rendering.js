import {getPicturesData, PHOTOS_AMOUNT} from './data.js';// Добавил PHOTOS_AMOUNT в импорт

const renderingPhoto = () => {
  const pictures = document.querySelector('.pictures');
  const templatePicture = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const groupPhotos = getPicturesData(PHOTOS_AMOUNT); //добавил число в скобки
  const listFragment = document.createDocumentFragment();

  groupPhotos.forEach(({ url, likes, commentsAmount }) => {
    const randomElement = templatePicture.cloneNode(true);
    randomElement.querySelector('.picture__img').src = url;
    randomElement.querySelector('.picture__likes').textContent = likes;
    randomElement.querySelector('.picture__comments').textContent = commentsAmount;
    pictures.appendChild(randomElement);
  });

  listFragment.appendChild(listFragment);
};

export {renderingPhoto};
