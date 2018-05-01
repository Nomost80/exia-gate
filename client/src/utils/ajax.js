import * as Rx from 'rxjs';
import { normalize } from 'normalizr';
import { camelizeKeys, decamelizeKeys } from 'humps';

// const progressObserver = Rx.Observable.create(
//   e => e.loaded / e.total,
//   err => console.log(err),
//   () => console.log('Ajax request completed')
// );

const ajax = ({ auth, body, ...settings }, schema, method) => {
  const ajaxSettings = {
    ...settings,
    ...body && {
      body: JSON.stringify(decamelizeKeys(body))
    },
    ...auth && { headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    }},
    method,
    responseType: 'json'
  };

  return Rx.Observable.ajax(ajaxSettings)
    .map(data => camelizeKeys(data.response))
    .map(response => schema ? normalize(response, schema) : response)
};

export default {
  get: (url, settings, schema) => ajax({...settings, url}, schema, 'GET'),
  post: (url, settings, schema) => ajax({...settings, url}, schema, 'POST'),
  put: (url, settings, schema) => ajax({...settings, url}, schema, 'PUT'),
  delete: (url, settings, schema) => ajax({...settings, url}, schema, 'DELETE'),
};