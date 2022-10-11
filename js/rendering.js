import {getPicturesData, PHOTOS_AMOUNT} from './data.js';

let iteration = 0;

const createSomeElement = (photoData, templatePicture) => {

  const randomElement = templatePicture.cloneNode(true);
  //console.log(randomElement);
  randomElement.querySelector('.picture__img').src = photoData[iteration].url;
  randomElement.querySelector('.picture__likes').textContent = photoData[iteration].likesAmount;
  randomElement.querySelector('.picture__comments').textContent = photoData[iteration].commentsAmount;
  //console.log(randomElement);
  return randomElement;
};

const renderingPhoto = () => {
  const photoData = getPicturesData(PHOTOS_AMOUNT);
  //console.log(photoData);
  const template = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  //const someElement = createSomeElement(photoData, template);
  //console.log(someElement);
  const parent = document.querySelector('.pictures');
  photoData.forEach(() => {
    parent.appendChild(createSomeElement(photoData, template));
    iteration++;
  });};

/*const createSomeElement = (photoData, templatePicture) => {
  photoData.forEach(({ url, likesAmount, commentsAmount }) => {
    const randomElement = templatePicture.cloneNode(true);
    randomElement.querySelector('.picture__img').src = url;
    randomElement.querySelector('.picture__likes').textContent = likesAmount;
    randomElement.querySelector('.picture__comments').textContent = commentsAmount;
    console.log(randomElement);
    return randomElement;
  });};

const renderingPhoto = () => {
  const photoData = getPicturesData(PHOTOS_AMOUNT);
  //console.log(photoData);
  const template = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const someElement = createSomeElement(photoData, template);
  //console.log(someElement);
  const parent = document.querySelector('.pictures');
  parent.appendChild(someElement);
};
/*
const renderingPhoto = () => {
  const pictures = document.querySelector('.pictures');
  const templatePicture = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const groupPhotos = getPicturesData(PHOTOS_AMOUNT);
  const listFragment = document.createDocumentFragment();

  groupPhotos.forEach(({ url, likesAmount, commentsAmount }) => {
    const randomElement = templatePicture.cloneNode(true);
    randomElement.querySelector('.picture__img').src = url;
    randomElement.querySelector('.picture__likes').textContent = likesAmount;
    randomElement.querySelector('.picture__comments').textContent = commentsAmount;
    pictures.appendChild(randomElement);
  });

  listFragment.appendChild(listFragment);
};
*/
export {renderingPhoto};
