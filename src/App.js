import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import Container from "./components/Container";
import "./css/common.css";
import "./css/style.css";
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
              <div>
                  <Route exact path="/projects/htmlHelper" component={HtmlHelper}/>
                  <Route path="/projects/hackerMon" component={HackerMon}/>
                  <Route path="/projects/eightRecord" component={EightRecord}/>
                  <Route path="/projects/fashionAble" component={FashionAble}/>
                  <Route path="/projects/myTrello" component={MyTrello}/>
              </div>
      </Fragment>
    );
  };
}

export default App;
