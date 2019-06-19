import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App/>
    </BrowserRouter>, document.getElementById('root'));


if (module.hot){
    module.hot.accept();
}
serviceWorker.unregister();
