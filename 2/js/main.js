function getRandomNumber (min, max) {
  if (typeof min === 'number' && typeof max === 'number') {
    return Math.round(Math.random() * (max - min)) + min; //Генерируем float от 0 до 1 и приводим его к заданным границам
  }
  return NaN;
}
getRandomNumber(1, 132);

function checkValidComment (targetString, maxLength) {
  if (typeof targetString === 'string') {
    return !(targetString.length > maxLength);
  }
  return 'В функцию передана не строка!';
}
checkValidComment (23, 1);
