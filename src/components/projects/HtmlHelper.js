import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ProjectHeader from "../ProjectHeader";
import Project_1 from '../../images/header_project_1.png';
import ThirdTitle from "../ThirdTitle";
import ProjectIntro from "../../ProjectIntro";

class HtmlHelper extends Component{
    render(){
        return(
            <div id="html-helper">
                <ProjectHeader title="HTMLHelper" pic={Project_1}/>
                <div>
                    <SubTitle subTitle="HTMLHelper"/>
                    <ThirdTitle thirdTitle="2017.4.~12."/>
                </div>
                <ProjectIntro introMent="HTML 입문자들을 위한 쉽고 간편한 Drag&Drop 교육용 웹 사이트"/>
            </div>
        );
    }
}
export default HtmlHelper;