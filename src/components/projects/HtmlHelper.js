import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ProjectHeader from "../ProjectHeader";
import Project_1 from '../../images/header_project_1.png';
import ThirdTitle from "../ThirdTitle";

class HtmlHelper extends Component{
    render(){
        return(
            <div id="html-helper">
                <ProjectHeader title="HTMLHelper" pic={Project_1}/>
                <div>
                    <SubTitle subTitle="HTMLHelper"/>
                    <ThirdTitle thirdTitle="2017.4.~12."/>
                </div>
                <div>
                    <ThirdTitle thirdTitle="프로젝트 소개"/>
                </div>
            </div>
        );
    }
}
export default HtmlHelper;