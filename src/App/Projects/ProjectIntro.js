import React, {Component} from 'react';
import ThirdTitle from "../../common/ThirdTitle";

export default class ProjectIntro extends Component{
    render(){
        return(
            <div className="project-intro">
                <ThirdTitle thirdTitle="프로젝트 소개"/>
                <p>{this.props.introMent}</p>
            </div>
        );
    }
}