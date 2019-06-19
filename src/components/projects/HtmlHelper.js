import React, {Component} from 'react';
import ProjectHeader from "../ProjectHeader";
import SubTitle from "../SubTitle";
import ThirdTitle from "../ThirdTitle";
import ProjectIntro from "../ProjectIntro";
import MyRole from "../MyRole";
import UsedTechnique from "../UsedTechnique";
import ScreenShot from "../ScreenShot";
import ScreenShotBox from "../ScreenShotBox";
import Project_1 from '../../assets/images/projects/htmlHelper/header_project_1.png';
import htmlHelper_1 from '../../assets/images/projects/htmlHelper/html_helper_1.png';
import htmlHelper_2 from '../../assets/images/projects/htmlHelper/html_helper_2.png';
import htmlHelper_3 from '../../assets/images/projects/htmlHelper/html_helper_3.png';
import htmlHelper_4 from '../../assets/images/projects/htmlHelper/html_helper_4.png';
import htmlHelper_5 from '../../assets/images/projects/htmlHelper/html_helper_5.png';
import NavBar from "../NavBar";

class HtmlHelper extends Component{
    render(){
        return(
            <div id="html-helper">
                <NavBar/>
                <ProjectHeader pic={Project_1}/>
                <div className="project-detail-name">
                    <SubTitle subTitle="HTMLHelper"/><br/>
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
                    <ScreenShotBox pic={htmlHelper_2} explanation1="- Intro 페이지"/>
                    <ScreenShotBox pic={htmlHelper_3} explanation1="- 작업 페이지" explanation2="- 좌측에 있는 HTML 태그를 가운데에 있는 드롭화면으로 드래그 앤 드롭"/>
                    <ScreenShotBox pic={htmlHelper_4} explanation1="- 태그를 선택하면 우측 속성창에서 태그 별 속성 및 스타일 편집 가능"/>
                    <ScreenShotBox pic={htmlHelper_1} explanation1="- 수정하고자 하는 속성 값과 스타일 값 입력 시, 실행 화면에서 적용"/>
                    <ScreenShotBox pic={htmlHelper_5} explanation1="- 하단에는 드래그 앤 드롭으로 반영된 속성 및 스타일이 적용되고 있는지 코드로 확인 가능"/>
            </div>
        );
    }
}
export default HtmlHelper;