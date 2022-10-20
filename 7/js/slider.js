const sliderFieldset = document.querySelector('.img-upload__effect-level');
const overlay = document.querySelector('.img-upload__overlay');
const levelLine = overlay.querySelector('.effect-level__slider');
const imgPreview = overlay.querySelector('.img-upload__preview').querySelector('img');
const sliderInput = overlay.querySelector('.effect-level__value');

noUiSlider.create(levelLine, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

levelLine.noUiSlider.on('update', () => {
  sliderInput.value = parseInt(levelLine.noUiSlider.get(), 10);
});

function onFilterChange (evt) {
  if (evt.target.value === 'none') {
    sliderFieldset.style.display = 'none';
    imgPreview.style.filter = 'none';
  } else {
    sliderFieldset.style.display = 'block';
    if (evt.target.matches('input[type="radio"]')) {
      imgPreview.style.filter = 'none';
      levelLine.noUiSlider.updateOptions({
        range: {
          min: +evt.target.dataset.minValue,
          max: +evt.target.dataset.maxValue
        },
        start: +evt.target.dataset.startValue,
        step: +evt.target.dataset.step,
      });
      levelLine.noUiSlider.on('update', () => {
        sliderInput.value = levelLine.noUiSlider.get();
        imgPreview.style.filter = 'none';
        setTimeout(() => {
          imgPreview.style.filter = `${evt.target.dataset.styleName}(${sliderInput.value}${evt.target.dataset.styleSuffix})`;
        },0);
      });
      setTimeout(() => {
        imgPreview.style.filter = `${evt.target.dataset.styleName}(${sliderInput.value}${evt.target.dataset.styleSuffix})`;
      },0);
    }
  }
}

export {onFilterChange};
