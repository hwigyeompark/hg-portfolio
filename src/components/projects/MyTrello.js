import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ThirdTitle from "../ThirdTitle";
import ProjectHeader from "../ProjectHeader";
import ProjectIntro from "../ProjectIntro";
import MyRole from "../MyRole";
import UsedTechnique from "../UsedTechnique";
import ScreenShot from "../ScreenShot";
import ScreenShotBox from "../ScreenShotBox";
import Project_5 from '../../images/header_project_5.png';
import myTrello_1 from '../../images/my_trello_1.png';
import myTrello_2 from '../../images/my_trello_2.png';
import myTrello_3 from '../../images/my_trello_3.png';

class MyTrello extends Component{
    render(){
        return(
            <div id="my-trello">
                <ProjectHeader pic={Project_5}/>
                <div className="project-detail-name">
                    <SubTitle subTitle="MyTrello"/><br/>
                    <ThirdTitle thirdTitle="2018.8.~9."/>
                </div>
                <ProjectIntro introMent="'Trello'라는 기존에 있는 서비스를 나만의 Trello로 재탄생 시켜 만든 사이트"/>
                <MyRole introTitle="개인 프로젝트"
                        introMent1="- 기획 및 UI/UX/ 디자인"
                        introMent2="- 퍼블리싱 및 프론트엔드 구현"/>
                <UsedTechnique introTitle1="Front-End" introMent1="- jQuery, javascript, HTML, CSS..."/>
                <ScreenShot />
                <ScreenShotBox pic={myTrello_1} explanation1="- 메인 페이지" explanation2="- 원하는 리스트 작성해서 추가"/>
                <ScreenShotBox pic={myTrello_2} explanation1="- 리스트 제목 작성 및 리스트 내의 카드 추가"/>
                <ScreenShotBox pic={myTrello_3} explanation1="- 카드 내에서 사진 추가" explanation2="사진 추가 시 브러쉬 색깔 및 굵기 조절 가능" explanation3="카드 리스트 내에서 드래그 앤 드롭으로 순서 조절 가능"/>
            </div>
        );
    }
}
export default MyTrello;