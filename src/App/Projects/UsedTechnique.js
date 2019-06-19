import React, {Component} from 'react';
import ThirdTitle from "../../common/ThirdTitle";

export default class UsedTechnique extends Component{
    render(){
        return(
            <div className="used-technique">
                <ThirdTitle thirdTitle="사용 기술"/>
                <h1>{this.props.introTitle1}</h1>
                <p>{this.props.introMent1}</p>
                <br/>
                <h1>{this.props.introTitle2}</h1>
                <p>{this.props.introMent2}</p>
            </div>
        );
    }
}