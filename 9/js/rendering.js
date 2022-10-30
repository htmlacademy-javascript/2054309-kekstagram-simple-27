const createPhotoElement = (photoData, templatePicture) => {

  const randomElement = templatePicture.cloneNode(true);
  randomElement.querySelector('.picture__img').src = photoData.url;
  randomElement.querySelector('.picture__likes').textContent = photoData.likes;
  randomElement.querySelector('.picture__comments').textContent = photoData.comments;

  return randomElement;
};

const renderPhoto = (photoDataServer) => {
  const template = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const parent = document.querySelector('.pictures');
  photoDataServer.forEach((photosData) => {
    parent.appendChild(createPhotoElement(photosData, template));
  });};

export {renderPhoto};
