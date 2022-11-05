import {enableUploadButton} from './form.js';

const ApiUrsl = {
  ROOT: 'https://27.javascript.pages.academy/kekstagram-simple',
  DATA: 'https://27.javascript.pages.academy/kekstagram-simple/data'
};

const getData = (onSuccess, onError) => {
  fetch(ApiUrsl.DATA)
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

const sendData = (onSuccess, onError, dataForPost) => {
  fetch(
    ApiUrsl.ROOT,
    {
      method: 'POST',
      body: dataForPost,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(onError)
    .finally(enableUploadButton);
};

export {getData, sendData};
