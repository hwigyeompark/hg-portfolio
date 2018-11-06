import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
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
      <Fragment>
        <Container/>
      </Fragment>
    );
  };
}

export default App;
