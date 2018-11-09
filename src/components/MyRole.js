import React, {Component} from 'react';
import ThirdTitle from "./ThirdTitle";

class MyRole extends Component{
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
                <ThirdTitle thirdTitle="담당 역할"/>
                <h1 style={style.h1}>{this.props.introTitle}</h1>
                <br/>
                <p style={style.p}>{this.props.introMent1}</p>
                <p style={style.p}>{this.props.introMent2}</p>
                <p style={style.p}>{this.props.introMent3}</p>
            </div>
        );
    }
}
export default MyRole;