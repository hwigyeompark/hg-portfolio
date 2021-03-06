import React, {Component} from 'react';
import SubTitle from "../../../common/SubTitle";
import ThirdTitle from "../../../common/ThirdTitle";
import ProjectHeader from "../../../common/ProjectHeader";
import ProjectIntro from "../ProjectIntro";
import MyRole from "../MyRole";
import UsedTechnique from "../UsedTechnique";
import ScreenShot from "../ScreenShot";
import ScreenShotBox from "../../../common/ScreenShotBox";
import Project_2 from '../../../assets/images/projects/hackerMon/header_project_2.png';
import hackerMon_1 from '../../../assets/images/projects/hackerMon/hacker_mon_1.png';
import hackerMon_2 from '../../../assets/images/projects/hackerMon/hacker_mon_2.png';
import Header from "../../../common/Header";

class HackerMon extends Component{
    render(){
        return(
            <div id="hacker-mon">
                <Header/>
                <ProjectHeader pic={Project_2}/>
                <div className="project-detail-name">
                    <SubTitle subTitle="HackerMon(해커몬)"/><br/>
                    <ThirdTitle thirdTitle="제6회 단국대학교 집현전 해커톤"/><br/><br/>
                    <ThirdTitle thirdTitle="2017.5.19.~5.20."/>
                </div>
                <ProjectIntro introMent="해커톤 팀빌딩을 게임 퀘스트 형식과 같이 재밌고 편하게 할 수 있게끔 하는 웹 사이트"/>
                <MyRole introTitle="프론트엔드 개발"
                        introMent1="- 모든 페이지 구성 및 퍼블리싱"
                        introMent2="- 팝업 기능 구현"/>
                <UsedTechnique introTitle1="Publishing" introMent1="- HTML, CSS, Bootstrap..."
                               introTitle2="Front-End" introMent2="Javascript, jQuery..."/>
                <ScreenShot />
                <ScreenShotBox pic={hackerMon_1} explanation1="- 메인 페이지" explanation2="- 파싱된 해커톤 리스트에서 각 정보 확인"/>
                <ScreenShotBox pic={hackerMon_2} explanation1="- 팀빌딩 페이지" explanation2="- 포지션 별 진행되고 있는 팀빌딩 상황 확인"/>
            </div>
        );
    }
}
export default HackerMon;