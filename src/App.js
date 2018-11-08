import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import Container from "./components/Container";
import "./css/common.css";
import "./css/style.css";
import HtmlHelper from "./components/projects/HtmlHelper";

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <Container/>
              <div>
                  <Route path="/projects/htmlHelper" component={HtmlHelper}/>
              </div>
      </Fragment>
    );
  };
}

export default App;
