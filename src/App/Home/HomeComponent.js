import React, {Component} from 'react';
import Title from "../../common/Title";
import SubTitle from "../../common/SubTitle";
import ThirdTitle from "../../common/ThirdTitle";
import AboutComponent from "./AboutComponent";
import ProjectComponent from "./ProjectComponent";
import ContactComponent from "./ContactComponent";
import Header from "../../common/Header";

export default class HomeComponent extends Component{
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
                  <AboutComponent/>
              </div>

              <div id="projects">
                  <Title title="Projects"/>
                  <ProjectComponent/>
              </div>

              <div id="contact">
                  <Title title="Contact"/>
                  <ContactComponent/>
              </div>
          </div>
        );
    }
}