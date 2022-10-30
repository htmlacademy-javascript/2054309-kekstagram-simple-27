import {renderPhoto} from './rendering.js';
import {userPhotosLoadError} from './util.js';
import {showOkUpload, showFailUpload, enableUploadButton} from './form.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        userPhotosLoadError();
      }
    })
    .then((photos) => {
      renderPhoto(photos);
    })
    .catch(() => {
      userPhotosLoadError();
    });
};

const sendData = (onSuccess, evt) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showOkUpload();
      } else {
        showFailUpload();
      }
    })
    .catch(() => {
      showFailUpload();
    })
    .finally(() => {
      enableUploadButton();
    });
};

export {getData, sendData};
