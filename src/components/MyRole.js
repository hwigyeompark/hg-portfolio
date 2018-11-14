import React, {Component} from 'react';
import ThirdTitle from "./ThirdTitle";

class MyRole extends Component{
    render(){
        return(
            <div className="my-role">
                <ThirdTitle thirdTitle="담당 역할"/>
                <h1>{this.props.introTitle}</h1>
                <br/>
                <p>{this.props.introMent1}</p>
                <p>{this.props.introMent2}</p>
                <p>{this.props.introMent3}</p>
            </div>
        );
    }
}
export default MyRole;