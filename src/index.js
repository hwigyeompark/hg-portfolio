import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import HtmlHelper from "./components/projects/HtmlHelper";
import {Router, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
        <Route component={HtmlHelper} path="/projects/htmlHelper"/>
    </Router>, document.getElementById('root'));

// If you want your apnt-aweork offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
