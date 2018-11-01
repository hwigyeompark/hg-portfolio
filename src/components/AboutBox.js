import React, {Component} from 'react';
import MyPic from "./MyPic";
import MyIntro from "./MyIntro";

class AboutBox extends Component{
    render(){
        const boxStyle = {
            width:"60%",
            margin:"0 auto",
            display:"flex"
        };
        return(
            <div style={boxStyle}>
                <MyPic/>
                <MyIntro/>
            </div>
        );
    }
}
export default AboutBox;