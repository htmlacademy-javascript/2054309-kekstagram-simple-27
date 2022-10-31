import {initChangePhoto} from './change-photo.js';
import {initialisationSlider} from './slider.js';
import {getData} from './api.js';
import {setUserFormSubmit, closeUserModal, showFailUpload} from './form.js';
import {renderPhoto} from './rendering.js';
import {loadUserPhotosError} from './util.js';

initChangePhoto();
initialisationSlider();
getData(renderPhoto, loadUserPhotosError);
setUserFormSubmit(closeUserModal, showFailUpload);
