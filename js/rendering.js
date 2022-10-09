import {generateGroupOfPhotos} from './data.js';

function startRenderind () {
  const pictures = document.querySelector('.pictures');
  const templePicture = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  const groupPhotos = generateGroupOfPhotos();
  const listFragment = document.createDocumentFragment();

  groupPhotos.forEach(({ url, likes, commentsAmount }) => {
    const randomElement = templePicture.cloneNode(true);
    randomElement.querySelector('.picture__img').src = url;
    randomElement.querySelector('.picture__likes').textContent = likes;
    randomElement.querySelector('.picture__comments').textContent = commentsAmount;
    pictures.appendChild(randomElement);
  });

  listFragment.appendChild(listFragment);
}

export {startRenderind};
