const createPhotoElement = (photoData, templatePicture) => {

  const randomElement = templatePicture.cloneNode(true);
  randomElement.querySelector('.picture__img').src = photoData.url;
  randomElement.querySelector('.picture__likes').textContent = photoData.likes;
  randomElement.querySelector('.picture__comments').textContent = photoData.comments;

  return randomElement;
};

const renderPhoto = (photoDataServer) => {
  const templateElement = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const parentElement = document.querySelector('.pictures');
  photoDataServer.forEach((photosData) => {
    parentElement.appendChild(createPhotoElement(photosData, templateElement));
  });};

export {renderPhoto};
