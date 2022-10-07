import {getRandomArrayElement} from './util.js';
import {getId} from './util.js';
import {getUrl} from './util.js';
import {getRandomPositiveInteger} from './util.js';

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

const generateRandomPhoto = () => {
  const photo = {};
  photo.id = getId();
  photo.url = `photos/${ getUrl() }.jpg`;
  photo.likes = getRandomPositiveInteger(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT);
  photo.commentsAmount = getRandomPositiveInteger(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT);
  photo.description = getRandomArrayElement(DESCRIPTION, 1);

  return photo;
};

const generateGroupOfPhotos = () => Array.from({length: PHOTOS_AMOUNT}, generateRandomPhoto);

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('fefede', 3);

export {generateGroupOfPhotos};
