import * as Rx from 'rxjs';
import { normalize } from 'normalizr';
import { camelizeKeys, decamelizeKeys } from 'humps';
import schemas from '../schemas';

// const root = 'http://localhost:8080';

// const defaultOptions = {
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest',
//     'Accept': 'application/json'
//     // 'X-CSRF-Param': document.head.querySelector('[name=csrf-param]').content,
//     // 'X-CSRF-Token': document.head.querySelector('[name=csrf-token]').content
//   },
//   crossDomain: true,
//   withCredentials: true,
//   responseType: 'json'
// };

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    // 'X-CSRF-Param': document.head.querySelector('[name=csrf-param]').content,
    // 'X-CSRF-Token': document.head.querySelector('[name=csrf-token]').content
  },
  mode: 'cors'
};

// const defaultSettings = {
//   responsetType: 'json'
// };

// const updateCsrfToken = token => document.head.querySelector('[name=csrf-token]').setAttribute('content', token);

// export default (endpoint, method, schema = null, data = null) => {
//   const options = { ...defaultOptions, url: endpoint, method };
//   if (data) options['body'] = JSON.stringify(data);
//   const observable = ajax(options);
//   // if (observable.xhr.getResponseHeader('x-csrf-token'))
//   //   updateCsrfToken(observable.xhr.getResponseHeader('x-csrf-token'));
//   if (observable.status.ok) {
//     if (schema) return from(normalize(camelizeKeys(observable.response), schemas));
//     else return from(camelizeKeys(observable.response));
//   }
//   else return observable.throw(observable.response)
// };

export default (endpoint, method, schema = null, data = null) => {
  const options = { ...defaultOptions, method };
  if (data) options['body'] = JSON.stringify(decamelizeKeys(data));
  fetch(endpoint, options)
    .then(response => {
      const data = camelizeKeys(response.json());
      if (response.ok) {
        if (schema) return Rx.Observable.from(normalize(data, schema));
        else return Rx.Observable.from(data);
      }
      else return Rx.Observable.throw(data)
    })
    .catch(err => Rx.Observable.throw(err));
};

// export default (url, method, schema = null, body = null) => {
//   const settings = { ...defaultSettings, method, url };
//   if (body) settings['body'] = JSON.stringify(decamelizeKeys(body));
//   return Rx.Observable.ajax(settings)
//     .map(response => {
//       if (schema) return Rx.Observable.from(normalize(camelizeKeys(response), schema));
//       else return Rx.Observable.from(camelizeKeys(response));
//     });
// };