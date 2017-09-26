import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginModule from './LoginModule';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<LoginModule />, document.getElementById('login'));
registerServiceWorker();
