import {validateData} from './form.js';
import {renderPhoto} from './rendering.js';
import {writeTargetScale} from './change-photo.js';
import {onFilterChange} from './slider.js';

renderPhoto();
console.log(validateData);
writeTargetScale();
onFilterChange();
