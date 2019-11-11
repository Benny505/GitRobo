import React from 'react';
import ReactDOM from 'react-dom'; // import - imports things that will be used for anything index.js is included in
import './index.css';
import App from "./containers/App"; // if there is no file type specified, it will be assumed as javascript
import * as serviceWorker from './serviceWorker';
import "tachyons"; // little nodes of code (like bootstrap) only it's for css


ReactDOM.render(<App /> , document.getElementById('root'));
// robot is a prop, it can be named litterally anything and set to any data type go to CardList.js to see what it does

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
