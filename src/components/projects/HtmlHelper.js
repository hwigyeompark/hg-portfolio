import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ProjectHeader from "../ProjectHeader";
import Project_1 from '../../images/header_project_1.png';
import ThirdTitle from "../ThirdTitle";
import ProjectIntro from "../../ProjectIntro";
import MyRole from "../MyRole";
import UsedTechnique from "../UsedTechnique";
import ScreenShot from "../ScreenShot";
import htmlHelper_1 from '../../images/html_helper_1.png';
import htmlHelper_2 from '../../images/html_helper_2.png';
import htmlHelper_3 from '../../images/html_helper_3.png';
import htmlHelper_4 from '../../images/html_helper_4.png';
import htmlHelper_5 from '../../images/html_helper_5.png';
import ScreenShotBox from "../ScreenShotBox";

class HtmlHelper extends Component{
    render(){
        const images = [
            {
                id : '0',
                img : htmlHelper_1
            },
            {
                id : '1',
                img : htmlHelper_2
            },
            {
                id : '2',
                img : htmlHelper_3
            },
            {
                id : '3',
                img : htmlHelper_4
            },
            {
                id : '4',
                img : htmlHelper_5
            }
        ];
        return(
            <div id="html-helper">
                <ProjectHeader title="HTMLHelper" pic={Project_1}/>
                <div className="project-detail-name">
                    <SubTitle subTitle="HTMLHelper"/>
                    <ThirdTitle thirdTitle="2017.4.~12."/>
                </div>
                <ProjectIntro introMent="HTML 입문자들을 위한 쉽고 간편한 Drag&Drop 교육용 웹 사이트"/>
                <MyRole introTitle="UI/UX 및 프론트엔드 개발"
                        introMent1="- 페이지 전체 구성"
                        introMent2="- 디자인 및 퍼블리싱"
                        introMent3="- Drag&Drop 및 세부 효과 구현"/>
                <UsedTechnique introTitle1="Publishing" introMent1="- HTML, CSS, Bootstrap..."
                introTitle2="Front-End" introMent2="Javascript, jQuery..."/>
                <ScreenShot />
                    <ScreenShotBox pic={htmlHelper_2} explanation1="- Intro 화면"/>
                    <ScreenShotBox pic={htmlHelper_3} explanation1="- "/>
                    <ScreenShotBox pic={htmlHelper_4}/>
                    <ScreenShotBox pic={htmlHelper_1}/>
                    <ScreenShotBox pic={htmlHelper_5}/>
            </div>
        );
    }
}
export default HtmlHelper;