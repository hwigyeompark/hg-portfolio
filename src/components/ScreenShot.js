import React, {Component} from 'react';
import ThirdTitle from "./ThirdTitle";
class ScreenShot extends Component{
    render(){
        const style={
            div:{
                display:"flex",
                flexDirection:"column",
                marginLeft:"15%",
                marginTop:"5%"
            }
        };
        return(
            <div style={style.div}>
                <ThirdTitle thirdTitle="스크린샷"/><br/><br/>
            </div>
        );
    }
}
export default ScreenShot;