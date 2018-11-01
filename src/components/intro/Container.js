import React, {Component} from 'react';
import Title from "./Title";
import SubTitle from "./SubTitle";
import Email from "./Email";
import ArrowDown from "./ArrowDown";

class Container extends Component{
    render(){
        return(
          <div className="container">
              <div id="intro">
                  <div>
                      <Title title="삶은 여행, 여행하는 개발자 '박휘겸'입니다." /><br/>
                      <SubTitle subtitle="Park Hwigyeom's Portfolio"/>
                      <Email email="phg5590@gmail.com"/>
                  </div>
                  <ArrowDown/>
              </div>
          </div>
        );
    }
}
export default Container;