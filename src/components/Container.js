import React, {Component} from 'react';
import Title from "./Title";
import SubTitle from "./SubTitle";
import ThirdTitle from "./ThirdTitle";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

class Container extends Component{
    render(){
        return(
          <div className="container">
              <div id="intro">
                  <div>
                      <Title title="삶은 여행, 여행하는 개발자 '박휘겸'입니다." /><br/>
                      <SubTitle subTitle="Park Hwigyeom's Portfolio"/><br/><br/><br/><br/><br/>
                      <ThirdTitle thirdTitle="phg5590@gmail.com"/>
                  </div>
              </div>

              <div id="about">
                  <Title title="About" />
                  <About/>
              </div>

              <div id="projects">
                  <Title title="Projects"/>
                  <Project/>
              </div>

              <div id="contact">
                  <Title title="Contact"/>
                  <Contact/>
              </div>
          </div>
        );
    }
}
export default Container;