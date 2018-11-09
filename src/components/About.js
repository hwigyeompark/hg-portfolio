import React, {Component} from 'react';
import MyPic from "./MyPic";
import MyIntro from "./MyIntro";

class About extends Component{
    render(){
        const boxStyle = {
            width:"60%",
            margin:"0 auto",
            marginTop:"2.3%",
            display:"flex"
        };
        return(
            <div style={boxStyle}>
                <MyPic/>
                <MyIntro introMent="사람의 평균 나이를 80으로 가정하였을 때, 계산한 제 인생시간입니다.
                  적절한 시기라는 것은 정해져 있지 않습니다.
                  이른 새벽부터 저만의 날개를 펼치려 합니다."/>
            </div>
        );
    }
}
export default About;