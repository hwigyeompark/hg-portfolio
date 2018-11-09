import React, {Component} from 'react';
import ThirdTitle from "./ThirdTitle";

class UsedTechnique extends Component{
    render(){
        const style={
            div:{
                display:"flex",
                flexDirection:"column",
                marginLeft:"15%",
                marginTop:"5%"
            },
            h1 : {
                fontSize:"1.2rem"
            },
            p:{
                wordBreak:"break-all",
                fontSize:"1.1rem"
            }
        };
        return(
            <div style={style.div}>
                <ThirdTitle thirdTitle="사용 기술"/><br/>
                <h1 style={style.h1}>{this.props.introTitle1}</h1>
                <p style={style.p}>{this.props.introMent1}</p>
                <h1 style={style.h1}>{this.props.introTitle2}</h1>
                <p style={style.p}>{this.props.introMent2}</p>
            </div>
        );
    }
}
export default UsedTechnique;