import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ProjectHeader from "../ProjectHeader";
import Project_1 from '../../images/header_project_1.png';

class HtmlHelper extends Component{
    render(){
        return(
            <div id="html-helper">
                <ProjectHeader title="HTMLHelper" pic={Project_1}/>
                <SubTitle subTitle="HTMLHelper"/>
                <br/><hr/>
                <SubTitle subTitle="프로젝트 소개"/>
            </div>
        );
    }
}
export default HtmlHelper;