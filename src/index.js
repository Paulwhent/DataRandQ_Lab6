import React from 'react'; //import React to enable use of React library for single page application via index.html page
import ReactDOM from 'react-dom'; //importing React Document Object Model
import './index.css'; //styling using css
import App from './App'; //import App.js file
import * as serviceWorker from './serviceWorker';

ReactDOM.render( //Renders/draws to user interface
  // StrictMode runs checks and issues warnings.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // get root div from index.html file (in public folder) and add in imported App.js
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
