const isEscapeKey = (evt) => evt.key === 'Escape';

const showErrorModal = () => {
  const windowErrorElemet = document.createElement('div');
  const textErrorElement = document.createElement('p');
  textErrorElement.textContent = 'Что-то пошло совсем не по плану :С Возможно, гремлины украли сервер';
  textErrorElement.style.color = 'black';
  windowErrorElemet.appendChild(textErrorElement);
  windowErrorElemet.style.position = 'absolute';
  windowErrorElemet.style.top = '50%';
  windowErrorElemet.style.left = '50%';
  windowErrorElemet.style.marginTop = '-100px';
  windowErrorElemet.style.marginLeft = '-200px';
  windowErrorElemet.style.width = '400px';
  windowErrorElemet.style.backgroundColor = 'red';
  windowErrorElemet.style.borderRadius = '8px';
  windowErrorElemet.style.border = '5px solid #ffaaff';
  windowErrorElemet.style.padding = ' 5px 10px';
  document.body.append(windowErrorElemet);

  setTimeout(() => {
    windowErrorElemet.remove();
  }, 5000);
};

export {isEscapeKey, showErrorModal};
