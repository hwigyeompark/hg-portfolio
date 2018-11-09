import React, {Component} from 'react';
import ThirdTitle from "./components/ThirdTitle";

class ProjectIntro extends Component{
    render(){
        const style={
            div:{
                display:"flex",
                flexDirection:"column",
                marginLeft:"15%",
                marginTop:"7%"
            },
            p:{
                wordBreak:"break-all",
                fontSize:"1.1rem"
            }
        };
        return(
            <div style={style.div}>
                <ThirdTitle thirdTitle="프로젝트 소개"/>
                <p style={style.p}>{this.props.introMent}</p>
            </div>
        );
    }
}
export default ProjectIntro;