import React, { Component } from 'react';
import "./css/common.css";
import Title from "./components/intro/Title";
import Container from "./components/intro/Container";
import SubTitle from "./components/intro/SubTitle";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title name="박휘겸"/>
          <SubTitle ename="Park Hwigyeom"/>
        </Container>
      </div>
    );
  }
}

export default App;
