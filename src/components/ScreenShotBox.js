import React, {Component} from 'react';
import ScreenShotItem from "./ScreenShotItem";
import ScreenShotExplanation from "./ScreenShotExplanation";

class ScreenShotBox extends Component{
    render(){
        const style={
            screenShotBox : {
                display:"flex",
                flexDirection:"row",
                margin: "0 auto",
                flexWrap:"wrap",
                width:"70%"
            }
        };
        return(
            <div style={style.screenShotBox}>
                <ScreenShotItem pic={this.props.pic}/>
                <ScreenShotExplanation explanation1={this.props.explanation1} explanation2={this.props.explanation2} explanation3={this.props.explanation3}/>
            </div>
        );
    }
}
export default ScreenShotBox;