import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-day-picker/lib/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

moment.locale("fr");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
