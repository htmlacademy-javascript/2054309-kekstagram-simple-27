import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';

const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;
const MIN_COMMENTS_AMOUNT = 0;
const MAX_COMMENTS_AMOUNT = 200;
const PHOTOS_AMOUNT = 25;

const DESCRIPTION = [
  'Зачем я это сфоткал?',
  'Сейчас бы на работу, а не вот это вот все...',
  'Помогите, что происходит?',
  'Траву едим, травой заедаем.',
  'Что-то очень сильно философское.',
  'ПАМАГИТИ!'
];

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('fefede', 3);

const getPictureData = (id) => {
  const description = getRandomArrayElement(DESCRIPTION, 1);
  const likesAmount = getRandomPositiveInteger(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT);
  const commentsAmount = getRandomPositiveInteger(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT);
  const url = `photos/${id}.jpg`;

  return { id, description, likesAmount, commentsAmount, url };
};

const getPicturesData = (picturesCount) => {
  const result = [];

  for (let i = 1; i <= picturesCount; i++) {
    const pictureData = getPictureData(i);
    result.push(pictureData);
  }

  return result;
};
export {getPicturesData, PHOTOS_AMOUNT};
