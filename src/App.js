import React, { Component } from 'react';
import "css/common.css";
import Title from "./components/intro/Title";
import Container from "./components/intro/Container";
import SubTitle from "./components/intro/SubTitle";
import Email from "./components/intro/Email";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title name="박휘겸"/>
          <SubTitle ename="Park Hwigyeom"/>
          <Email email="phg5590@gmail.com"/>
        </Container>
      </div>
    );
  }
}

export default App;
