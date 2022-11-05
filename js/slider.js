const sliderFieldsetElement = document.querySelector('.img-upload__effect-level');
const overlayElement = document.querySelector('.img-upload__overlay');
const levelLineElement = overlayElement.querySelector('.effect-level__slider');
const imgPreviewElement = overlayElement.querySelector('.img-upload__preview').querySelector('img');
const sliderInputElement = overlayElement.querySelector('.effect-level__value');

const onFilterChange = (evt) => {
  if (evt.target.value === 'none') {
    sliderFieldsetElement.style.display = 'none';
    imgPreviewElement.style.filter = 'none';
  } else {
    sliderFieldsetElement.style.display = 'block';
    if (evt.target.matches('input[type="radio"]')) {
      imgPreviewElement.style.filter = 'none';
      levelLineElement.noUiSlider.updateOptions({
        range: {
          min: Number(evt.target.dataset.minValue),
          max: Number(evt.target.dataset.maxValue)
        },
        start: Number(evt.target.dataset.startValue),
        step: Number(evt.target.dataset.step),
      });
      levelLineElement.noUiSlider.on('update', () => {
        sliderInputElement.value = levelLineElement.noUiSlider.get();
        imgPreviewElement.style.filter = 'none';
        {
          imgPreviewElement.style.filter = `${evt.target.dataset.styleName}(${sliderInputElement.value}${evt.target.dataset.styleSuffix})`;
        }
      });
      imgPreviewElement.style.filter = `${evt.target.dataset.styleName}(${sliderInputElement.value}${evt.target.dataset.styleSuffix})`;
    }
  }
};

const initSlider = () => {
  noUiSlider.create(levelLineElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });

  levelLineElement.noUiSlider.on('update', () => {
    sliderInputElement.value = parseInt(levelLineElement.noUiSlider.get(), 10);
  });
};

export {onFilterChange, initSlider};
