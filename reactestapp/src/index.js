import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App3 from './App3';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App3 />, document.getElementsByClassName('root3'));

registerServiceWorker();

