import {isEscapeKey} from './util.js';
import {sendData} from './api.js';

const photoRedactionFormElement = document.querySelector('.img-upload__overlay');
const controlUploadFileElement = document.querySelector('#upload-file');
const bodyElement = document.querySelector('body');
const userModalCloseElement = document.querySelector('#upload-cancel');
const buttonForPostElement = document.querySelector('.img-upload__form');
const descriptionObjectElement = document.querySelector('.text__description');
const uploadSuccessTemplateElement = document.querySelector('#success').content;
const uploadErrorTemplateElement = document.querySelector('#error').content;
const uploadSubmitElement = document.querySelector('#upload-submit');

const imageContainerElement = document.querySelector('.img-upload__preview');
const imageCoreElement = imageContainerElement.querySelector('img');
const sliderFieldsetElement = document.querySelector('.img-upload__effect-level');

const showSuccessModal = () => {
  const successElement = uploadSuccessTemplateElement.cloneNode(true);
  bodyElement.appendChild(successElement);
  const closeSuccessButtonElement = document.querySelector('.success__button');
  const successModalElement = document.querySelector('.success');
  const successInnerElement = successModalElement.querySelector('.success__inner');

  const onSuccessModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successModalElement.remove();
      document.removeEventListener('keydown', onSuccessModalEscKeydown);
    }
  };

  const onMissClickClose = (node) => {
    const closeMessage = () => {
      successModalElement.remove();
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

  onMissClickClose(successInnerElement);
  closeSuccessButtonElement.addEventListener('click', () => {
    successModalElement.remove();
    document.removeEventListener('keydown', onSuccessModalEscKeydown);
  });

  document.addEventListener('keydown', onSuccessModalEscKeydown);
};

const closeUserModal = () => {
  photoRedactionFormElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  showSuccessModal();
  document.removeEventListener('keydown', onPhotoEditor);
  controlUploadFileElement.value = '';
  descriptionObjectElement.value = '';
  document.querySelector('input[name="effect"]:checked').checked = false;
  document.querySelector('#effect-none').checked = true;
  userModalCloseElement.removeEventListener('click', closeUserModal);
  controlUploadFileElement.addEventListener('change', openUserModal);
  imageCoreElement.style.filter = 'none';
  sliderFieldsetElement.style.display = 'none';
};
// Нужно "всплывание", поэтому не стрелочная
function openUserModal() {
  photoRedactionFormElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  sliderFieldsetElement.style.display = 'none';
  document.addEventListener('keydown', onPhotoEditor);
  userModalCloseElement.addEventListener('click',closeUserModal);
  controlUploadFileElement.removeEventListener('change', openUserModal);
}

// Нужно "всплывание", поэтому не стрелочная
function onPhotoEditor (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

controlUploadFileElement.addEventListener('change', openUserModal);

const validateData = new Pristine(buttonForPostElement, {
  classTo: 'validation-comment',
  errorTextParent: 'validation-comment',
  errorTextClass: 'validation-comment__error-text',
});

const showFailUpload = () => {
  const errorElement = uploadErrorTemplateElement.cloneNode(true);
  bodyElement.appendChild(errorElement);
  const closeErrorButtonElement = document.querySelector('.error__button');
  const errorModalElement = document.querySelector('.error');
  const errorInnerElement = errorModalElement.querySelector('.error__inner');

  const onErrorModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorModalElement.remove();
      document.removeEventListener('keydown', onErrorModalEscKeydown);
    }
  };

  const missClickErrorClose = (node) => {
    const closeMessage = () => {
      errorModalElement.remove();
    };

    const checkError = (element) => {
      const target = element.target;
      const itsMessage = target === node || node.contains(target);

      if (!itsMessage) {
        closeMessage();
      }
    };

    document.addEventListener('click', checkError);
  };

  missClickErrorClose(errorInnerElement);
  closeErrorButtonElement.addEventListener('click', () => {
    errorModalElement.remove();
    document.removeEventListener('keydown', onErrorModalEscKeydown);
  });

  document.addEventListener('keydown', onErrorModalEscKeydown);
};

const disableButton = () => {
  uploadSubmitElement.disabled = true;
  uploadSubmitElement.textContent = 'Обожди, работаем...';
};

const enableUploadButton = () => {
  uploadSubmitElement.disabled = false;
  uploadSubmitElement.textContent = 'Опубликовать';
};

const initForm = (onSuccess, onError) => {
  buttonForPostElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = validateData.validate();
    if (isValid) {
      disableButton();
      const dataForm = new FormData(evt.target);
      sendData(onSuccess, onError, dataForm);
    }});
};

export {validateData, controlUploadFileElement, initForm, closeUserModal, openUserModal, showFailUpload, enableUploadButton};
