import React, {Component} from 'react';
import Title from "./Title";
import SubTitle from "./SubTitle";
import Email from "./Email";
import ArrowDown from "./ArrowDown";
import MyPic from "./MyPic";
import MyIntro from "./MyIntro";
import AboutBox from "./AboutBox";

class Container extends Component{
    render(){
        return(
          <div className="container">
              <div id="intro">
                  <div>
                      <Title title="삶은 여행, 여행하는 개발자 '박휘겸'입니다." /><br/>
                      <SubTitle subtitle="Park Hwigyeom's Portfolio"/>
                      <Email email="phg5590@gmail.com"/><br/><br/><br/>
                      <ArrowDown/>
                  </div>
              </div>

              <div id="about">
                  <Title title="About" />
                  <AboutBox/>
              </div>
          </div>
        );
    }
}
export default Container;