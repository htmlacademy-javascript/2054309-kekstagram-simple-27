import {enableUploadButton} from './form.js';

const getData = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError();
      }
    })
    .then(onSuccess)
    .catch(onError);
};

const sendData = (onSuccess, onError, eventTarget) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(eventTarget),
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    })
    .finally(() => {
      enableUploadButton();
    });
};

export {getData, sendData};
