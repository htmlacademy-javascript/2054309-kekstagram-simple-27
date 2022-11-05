import {initChangePhoto} from './change-photo.js';
import {initSlider} from './slider.js';
import {getData} from './api.js';
import {initForm, closeUserModal, showFailUpload} from './form.js';
import {renderPhoto} from './rendering.js';
import {showErrorModal} from './util.js';

initChangePhoto();
initSlider();
getData(renderPhoto, showErrorModal);
initForm(closeUserModal, showFailUpload);
