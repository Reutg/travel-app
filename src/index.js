import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-montserrat';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.register();
