import {isEscapeKey} from './util.js';

const photoRedactionForm = document.querySelector('.img-upload__overlay');
const controlUploadFile = document.querySelector('#upload-file');
const bodyElement = document.querySelector('body');
const userModalCloseElement = document.querySelector('#upload-cancel');
const buttonForPost = document.querySelector('.img-upload__form');

const descriptionObject = document.querySelector('.text__description');

const closeUserModal = () => {
  photoRedactionForm.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPhotoEditor);
  controlUploadFile.value = '';
  descriptionObject.value = '';
  document.querySelector('input[name="effect"]:checked').checked = false;
  document.querySelector('#effect-none').checked = true;
  userModalCloseElement.removeEventListener('click', closeUserModal);
  controlUploadFile.addEventListener('change', openUserModal);
};
// Нужно "всплывание", поэтому не стрелочная
function openUserModal() {
  photoRedactionForm.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onPhotoEditor);
  userModalCloseElement.addEventListener('click',closeUserModal);
  controlUploadFile.removeEventListener('change', openUserModal);
}

// Нужно "всплывание", поэтому не стрелочная
function onPhotoEditor (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

controlUploadFile.addEventListener('change', openUserModal);

const validateData = new Pristine(buttonForPost, {
  classTo: 'validation-comment',
  errorTextParent: 'validation-comment',
  errorTextClass: 'validation-comment__error-text',
});

buttonForPost.addEventListener('submit', (evt) => {

  const isValid = validateData.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {validateData};
