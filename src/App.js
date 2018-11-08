import React, {Component, Fragment} from 'react';
import Container from "./components/Container";
import "./css/common.css";
import "./css/style.css";
import {BrowserRouter, Route} from 'react-router-dom';
import HtmlHelper from "./components/projects/HtmlHelper";
import HackerMon from "./components/projects/HackerMon";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <Fragment>
        <Container/>
          <div>
              <Route component={HtmlHelper} path="/projects/htmlHelper"/>
              <Route component={HackerMon} path="/projects/hackerMon"/>
          </div>
      </Fragment>
        </BrowserRouter>
    );
  };
}

export default App;
