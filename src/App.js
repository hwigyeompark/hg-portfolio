import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomeComponent from "./App/Home/HomeComponent";
import "./stylesheets/scss/common.scss";
import "./stylesheets/scss/style.scss";
import HtmlHelper from "./App/Projects/pages/HtmlHelper";
import HackerMon from "./App/Projects/pages/HackerMon";
import EightRecord from "./App/Projects/pages/EightRecord";
import FashionAble from "./App/Projects/pages/FashionAble";
import MyTrello from "./App/Projects/pages/MyTrello";

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Route exact path="/" component={HomeComponent}/>
                <Route path="/projects/htmlHelper" component={HtmlHelper}/>
                <Route path="/projects/hackerMon" component={HackerMon}/>
                <Route path="/projects/eightRecord" component={EightRecord}/>
                <Route path="/projects/fashionAble" component={FashionAble}/>
                <Route path="/projects/myTrello" component={MyTrello}/>
            </div>
        );
    };
}

export default App;
