import React, {Component, Fragment} from 'react';
import Container from "./components/Container";
import "./css/common.css";
import "./css/style.css";
import {BrowserRouter, Route} from 'react-router-dom';
import HtmlHelper from "./components/projects/HtmlHelper";
import HackerMon from "./components/projects/HackerMon";
import EightRecord from "./components/projects/EightRecord";
import FashionAble from "./components/projects/FashionAble";
import MyTrello from "./components/projects/MyTrello";

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <Container/>
        <BrowserRouter>
            <div>
                <Route component={HtmlHelper} exact path="/projects/htmlHelper"/>
                <Route component={HackerMon} path="/projects/hackerMon"/>
                <Route component={EightRecord} path="/projects/eightRecord"/>
                <Route component={FashionAble} path="/projects/fashionAble"/>
                <Route component={MyTrello} path="/projects/myTrello"/>
            </div>
        </BrowserRouter>
      </Fragment>
    );
  };
}

export default App;
