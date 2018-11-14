import React, {Component} from 'react';
import MyPic from "./MyPic";
import MyIntro from "./MyIntro";

class About extends Component{
    render(){
        return(
            <div className="about-box">
                <MyPic/>
                <MyIntro/>
            </div>
        );
    }
}
export default About;