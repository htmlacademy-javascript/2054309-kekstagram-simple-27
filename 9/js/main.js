//import {validateData} from './form.js';
import {initChangePhoto} from './change-photo.js';
import {initialisationSlider} from './slider.js';
import {getData} from './api.js';
import {setUserFormSubmit, closeUserModal} from './form.js';

//console.log(validateData);
initChangePhoto();
initialisationSlider();
getData();
setUserFormSubmit(closeUserModal);
