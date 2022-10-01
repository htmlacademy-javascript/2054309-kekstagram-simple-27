function getRandomNumber (min, max) {
  if (!(typeof min === 'number' && typeof max === 'number')) {
    return NaN;
  }
  if (min > max) {
    const buffer = min;
    min = max;
    max = buffer;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber(1, 10);

function checkValidComment (targetString, maxLength) {
  return (targetString.length <= maxLength);
}
checkValidComment ('1i', 2);
