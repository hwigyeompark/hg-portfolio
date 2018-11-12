import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ThirdTitle from "../ThirdTitle";
import ProjectHeader from "../ProjectHeader";
import ProjectIntro from "../ProjectIntro";
import MyRole from "../MyRole";
import UsedTechnique from "../UsedTechnique";
import ScreenShot from "../ScreenShot";
import EightRecordBox from "../EightRecordBox";
import Project_3 from '../../images/header_project_3.png';
import eightRecord_1 from '../../images/eight_record_1.png';
import eightRecord_2 from '../../images/eight_record_2.png';
import eightRecord_3 from '../../images/eight_record_3.png';
import eightRecord_4 from '../../images/eight_record_4.png';
import eightRecord_5 from '../../images/eight_record_5.png';
import eightRecord_6 from '../../images/eight_record_6.png';

class EightRecord extends Component{
    render(){
        const eightRecordBoxWrap = {
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            width:"80%",
            margin:"0 auto",
            justifyContent:"center"
        };
        return(
            <div id="eight-record">
                <ProjectHeader pic={Project_3}/>
                <div className="project-detail-name">
                    <SubTitle subTitle="8Record(팔레코드)"/><br/>
                    <ThirdTitle thirdTitle="Django girld Daejeon Djthon(해커톤)"/><br/><br/>
                    <ThirdTitle thirdTitle="2017.8.19.~8.20."/>
                </div>
                <ProjectIntro introMent="'8가지의 색상' 가운데, 그 날 기분에 맞게끔 원하는 색상을 선택하여 기록하고 싶은 것들을 '기록'하는 컬러 다이어리"/>
                <MyRole introTitle="프론트엔드 개발"
                        introMent1="- 퍼블리싱"
                        introMent2="- Angular.js 이용하여 하이브리드 앱 개발"/>
                <UsedTechnique introTitle1="Publishing" introMent1="- HTML, CSS"
                               introTitle2="Front-End" introMent2="Angular.js, jQuery..."/>
                <ScreenShot />

                <div style={eightRecordBoxWrap}>
                    <EightRecordBox pic={eightRecord_1} explanation1="- 시작화면"/>
                    <EightRecordBox pic={eightRecord_2} explanation1="- 오늘 날짜 또는 작성을 원하는 날짜 선택"/>
                    <EightRecordBox pic={eightRecord_3}/>
                    <EightRecordBox pic={eightRecord_4} explanation1="- 그 날 기분에 맞는 원하는 색상 선택"/>
                    <EightRecordBox pic={eightRecord_5} explanation1="- 마음껏 원하는 것들을 기록"/>
                    <EightRecordBox pic={eightRecord_6} explanation1="- 색깔 별로 작성된 다이어리 확인"/>
                </div>
            </div>
        );
    }
}
export default EightRecord;