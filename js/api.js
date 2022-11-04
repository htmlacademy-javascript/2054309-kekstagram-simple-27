import {enableUploadButton} from './form.js';

const Addresses = {
  ADDRESS_TO: 'https://27.javascript.pages.academy/kekstagram-simple',
  ADDRESS_FROM: 'https://27.javascript.pages.academy/kekstagram-simple/data'
};

const getData = (onSuccess, onError) => {
  fetch(Addresses.ADDRESS_FROM)
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
    Addresses.ADDRESS_TO,
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
