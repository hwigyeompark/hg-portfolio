import React, {Component} from 'react';
import ScreenShotItem from "./ScreenShotItem";
import ScreenShotExplanation from "./ScreenShotExplanation";

class ScreenShotBox extends Component{
    render(){
        return(
            <div className="screen-shot-box">
                <ScreenShotItem pic={this.props.pic}/>
                <ScreenShotExplanation explanation1={this.props.explanation1} explanation2={this.props.explanation2} explanation3={this.props.explanation3}/>
            </div>
        );
    }
}
export default ScreenShotBox;