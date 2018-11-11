import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ProjectHeader from "../ProjectHeader";
import Project_3 from '../../images/header_project_3.png';
import ThirdTitle from "../ThirdTitle";
import ProjectIntro from "../ProjectIntro";
import MyRole from "../MyRole";
import UsedTechnique from "../UsedTechnique";
import ScreenShot from "../ScreenShot";
import EightRecordBox from "../EightRecordBox";
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
                    <EightRecordBox pic={eightRecord_1} explanation1="- 메인페이지" explanation2="- 해커톤 리스트에서 각 정보 확인"/>
                    <EightRecordBox pic={eightRecord_2}/>
                    <EightRecordBox pic={eightRecord_3}/>
                    <EightRecordBox pic={eightRecord_4}/>
                    <EightRecordBox pic={eightRecord_5}/>
                    <EightRecordBox pic={eightRecord_6}/>
                </div>
            </div>
        );
    }
}
export default EightRecord;