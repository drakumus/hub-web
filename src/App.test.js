import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginModule from './LoginModule';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginModule />, div);
});
