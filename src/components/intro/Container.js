import React, {Component} from 'react';
import Title from "./Title";
import SubTitle from "./SubTitle";
import Email from "./Email";

class Container extends Component{
    render(){
        return(
          <div className="container">
              <Title name="박휘겸"/>
              <SubTitle ename="Park Hwigyeom"/>
              <Email email="phg5590@gmail.com"/>
          </div>
        );
    }
}
export default Container;