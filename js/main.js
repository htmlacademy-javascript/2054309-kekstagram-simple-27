import {validateData} from './form.js';
import {renderPhoto} from './rendering.js';
import {initChangePhoto} from './change-photo.js';
import {initialisationSlider} from './slider.js';

renderPhoto();
console.log(validateData);
initChangePhoto();
initialisationSlider();
