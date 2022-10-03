const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;
const MIN_COMMENTS_AMOUNT = 0;
const MAX_COMMENTS_AMOUNT = 200;
const PHOTOS_AMOUNT = 25;
let urlNumber = 0;
let id = 0;

const getUrl = () => {
  urlNumber += 1;
  return urlNumber;
};

const getId = () => {
  id += 1;
  return id;
};

const DESCRIPTION = [
  'Зачем я это сфоткал?',
  'Сейчас бы на работу, а не вот это вот все...',
  'Помогите, что происходит?',
  'Траву едим, травой заедаем.',
  'Что-то очень сильно философское.',
  'ПАМАГИТИ!'
];

const getRandomPositiveInteger = (a, b) => {
  // Если переданы отрицительные числа, возвращаем NaN
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//getRandomPositiveInteger(1, 10);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const generateRandomPhoto = () => {
  const photo = {};
  photo.id = getId();
  photo.url = `photos/${ getUrl() }.jpg`;
  photo.likes = getRandomPositiveInteger(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT);
  photo.commentsAmount = getRandomPositiveInteger(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT);
  photo.description = getRandomArrayElement(DESCRIPTION, 1);

  return photo;
};

const generateGroupOfPhotos = Array.from({length: PHOTOS_AMOUNT}, generateRandomPhoto);

console.log(generateGroupOfPhotos());

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength ('1i', 2);
