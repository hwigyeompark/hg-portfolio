import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ProjectHeader from "../ProjectHeader";
import Project_2 from '../../images/header_project_2.png';
import ThirdTitle from "../ThirdTitle";
import ProjectIntro from "../../ProjectIntro";
import MyRole from "../MyRole";
import UsedTechnique from "../UsedTechnique";
import ScreenShot from "../ScreenShot";
import hackerMon_1 from '../../images/hacker_mon_1.png';
import hackerMon_2 from '../../images/hacker_mon_2.png';

import ScreenShotBox from "../ScreenShotBox";
import Title from "../Title";

class HackerMon extends Component{
    render(){
        return(
            <div id="hacker-mon">
                <ProjectHeader pic={Project_2}/>
                <div className="project-detail-name">
                    <Title title="HackerMon(해커몬)"/>
                    <SubTitle subTitle="제6회 단국대학교 집현전 해커톤"/>
                    <ThirdTitle thirdTitle="2017.5.19.~5.20."/>
                </div>
                <ProjectIntro introMent="해커톤 팀빌딩을 게임 퀘스트 형식과 같이 재밌고 편하게 할 수 있게끔 하는 웹 사이트"/>
                <MyRole introTitle="UI/UX 및 프론트엔드 개발"
                        introMent1="- 페이지 전체 구성"
                        introMent2="- 디자인 및 퍼블리싱"
                        introMent3="- Drag&Drop 및 세부 효과 구현"/>
                <UsedTechnique introTitle1="Publishing" introMent1="- HTML, CSS, Bootstrap..."
                               introTitle2="Front-End" introMent2="Javascript, jQuery..."/>
                <ScreenShot />
                <ScreenShotBox pic={hackerMon_1} explanation1="- Intro 화면"/>
                <ScreenShotBox pic={hackerMon_2} explanation1="- "/>
            </div>
        );
    }
}
export default HackerMon;