import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Container from "./components/Container";
import "./scss/common.scss";
import "./scss/style.scss";
import HtmlHelper from "./components/projects/HtmlHelper";
import HackerMon from "./components/projects/HackerMon";
import EightRecord from "./components/projects/EightRecord";
import FashionAble from "./components/projects/FashionAble";
import MyTrello from "./components/projects/MyTrello";

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Route exact path="/" component={Container}/>
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
