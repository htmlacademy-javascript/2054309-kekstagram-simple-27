import {isEscapeKey} from './util.js';
import {sendData} from './api.js';

const photoRedactionForm = document.querySelector('.img-upload__overlay');
const controlUploadFile = document.querySelector('#upload-file');
const bodyElement = document.querySelector('body');
const userModalCloseElement = document.querySelector('#upload-cancel');
const buttonForPost = document.querySelector('.img-upload__form');
const descriptionObject = document.querySelector('.text__description');
const uploadSuccessTemplate = document.querySelector('#success').content;
const uploadErrorTemplate = document.querySelector('#error').content;
const uploadSubmit = document.querySelector('#upload-submit');

const imageContainer = document.querySelector('.img-upload__preview');
const imageCore = imageContainer.querySelector('img');
const sliderFieldset = document.querySelector('.img-upload__effect-level');

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
  imageCore.style.filter = 'none';
  sliderFieldset.style.display = 'none';
};
// Нужно "всплывание", поэтому не стрелочная
function openUserModal() {
  photoRedactionForm.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  sliderFieldset.style.display = 'none';
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

const showOkUpload = () => {
  const successElement = uploadSuccessTemplate.cloneNode(true);
  bodyElement.appendChild(successElement);
  const closeSuccessButton = document.querySelector('.success__button');
  const successModal = document.querySelector('.success');
  const successInner = successModal.querySelector('.success__inner');

  const onSuccessModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successModal.remove();
      document.removeEventListener('keydown', onSuccessModalEscKeydown);
    }
  };

  const onMissClickClose = (node) => {
    const closeMessage = () => {
      successModal.remove();
    };

    const testFunction = (element) => {
      const target = element.target;
      const itsMessage = target === node || node.contains(target);

      if (!itsMessage) {
        closeMessage();
        document.removeEventListener('keydown', onSuccessModalEscKeydown);
      }
    };

    document.addEventListener('click', testFunction);
  };

  onMissClickClose(successInner);
  closeSuccessButton.addEventListener('click', () => {
    successModal.remove();
    document.removeEventListener('keydown', onSuccessModalEscKeydown);
  });

  document.addEventListener('keydown', onSuccessModalEscKeydown);
};

const showFailUpload = () => {
  const errorElement = uploadErrorTemplate.cloneNode(true);
  bodyElement.appendChild(errorElement);
  const closeErrorButton = document.querySelector('.error__button');
  const errorModal = document.querySelector('.error');
  const errorInner = errorModal.querySelector('.error__inner');

  const onErrorModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorModal.remove();
      document.removeEventListener('keydown', onErrorModalEscKeydown);
    }
  };

  const missClickErrorClose = (node) => {
    const closeMessage = () => {
      errorModal.remove();
    };

    const tesrErrFunction = (element) => {
      const target = element.target;
      const itsMessage = target === node || node.contains(target);

      if (!itsMessage) {
        closeMessage();
      }
    };

    document.addEventListener('click', tesrErrFunction);
  };

  missClickErrorClose(errorInner);
  closeErrorButton.addEventListener('click', () => {
    errorModal.remove();
    document.removeEventListener('keydown', onErrorModalEscKeydown);
  });

  document.addEventListener('keydown', onErrorModalEscKeydown);
};

const disableButton = () => {
  uploadSubmit.disabled = true;
  uploadSubmit.textContent = 'Обожди, работаем...';
};

const enableUploadButton = () => {
  uploadSubmit.disabled = false;
  uploadSubmit.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  buttonForPost.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = validateData.validate();
    if (isValid) {
      disableButton();
      sendData(onSuccess, evt);
    }});
};

export {validateData, controlUploadFile, setUserFormSubmit, closeUserModal, showOkUpload, showFailUpload, enableUploadButton};
