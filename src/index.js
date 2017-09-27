import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
