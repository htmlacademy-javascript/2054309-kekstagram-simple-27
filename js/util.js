const isEscapeKey = (evt) => evt.key === 'Escape';

const loadUserPhotosError = () => {
  const windowError = document.createElement('div');
  const textError = document.createElement('p');
  textError.textContent = 'Что-то пошло совсем не по плану :С Возможно, гремлины украли сервер';
  textError.style.color = 'black';
  windowError.appendChild(textError);
  windowError.style.position = 'absolute';
  windowError.style.top = '50%';
  windowError.style.left = '50%';
  windowError.style.marginTop = '-100px';
  windowError.style.marginLeft = '-200px';
  windowError.style.width = '400px';
  windowError.style.backgroundColor = 'red';
  windowError.style.borderRadius = '8px';
  windowError.style.border = '5px solid #ffaaff';
  windowError.style.padding = ' 5px 10px';
  document.body.append(windowError);

  setTimeout(() => {
    windowError.remove();
  }, 5000);
};

export {isEscapeKey, loadUserPhotosError};
