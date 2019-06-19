import React, {Component} from 'react';
import MyPic from "../About/MyPic";
import MyIntro from "../About/MyIntro";

export default class AboutComponent extends Component{
    render(){
        return(
            <div className="about-box">
                <MyPic/>
                <MyIntro/>
            </div>
        );
    }
}