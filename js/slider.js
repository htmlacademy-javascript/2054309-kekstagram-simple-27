const sliderFieldset = document.querySelector('.img-upload__effect-level');
const overlay = document.querySelector('.img-upload__overlay');
const levelLine = overlay.querySelector('.effect-level__slider');
const imgPreview = overlay.querySelector('.img-upload__preview').querySelector('img');
const sliderInput = overlay.querySelector('.effect-level__value');

const onFilterChange = (evt) => {
  if (evt.target.value === 'none') {
    sliderFieldset.style.display = 'none';
    imgPreview.style.filter = 'none';
  } else {
    sliderFieldset.style.display = 'block';
    if (evt.target.matches('input[type="radio"]')) {
      imgPreview.style.filter = 'none';
      levelLine.noUiSlider.updateOptions({
        range: {
          min: Number(evt.target.dataset.minValue),
          max: Number(evt.target.dataset.maxValue)
        },
        start: Number(evt.target.dataset.startValue),
        step: Number(evt.target.dataset.step),
      });
      levelLine.noUiSlider.on('update', () => {
        sliderInput.value = levelLine.noUiSlider.get();
        imgPreview.style.filter = 'none';
        {
          imgPreview.style.filter = `${evt.target.dataset.styleName}(${sliderInput.value}${evt.target.dataset.styleSuffix})`;
        }
      });
      imgPreview.style.filter = `${evt.target.dataset.styleName}(${sliderInput.value}${evt.target.dataset.styleSuffix})`;
    }
  }
};

const initialisationSlider = () => {
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
};

export {onFilterChange, initialisationSlider};
