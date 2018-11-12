import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ProjectHeader from "../ProjectHeader";
import Project_4 from '../../images/header_project_4.png';
import ThirdTitle from "../ThirdTitle";
import ProjectIntro from "../ProjectIntro";
import MyRole from "../MyRole";
import UsedTechnique from "../UsedTechnique";
import ScreenShot from "../ScreenShot";
import ScreenShotBox from "../ScreenShotBox";
import fashionAble_1 from '../../images/fashion_able_1.png';
import fashionAble_2 from '../../images/fashion_able_2.png';
import fashionAble_3 from '../../images/fashion_able_3.png';

class FashionAble extends Component{
    render(){
        return(
            <div id="fashion-able">
                <ProjectHeader pic={Project_4}/>
                <div className="project-detail-name">
                    <SubTitle subTitle="FashionAble"/><br/>
                    <ThirdTitle thirdTitle="2018.3.~6."/>
                </div>
                <ProjectIntro introMent="기존에 있는 쇼핑몰 사이트의 기능들을 포함한 나만의 쇼핑몰 사이트"/>
                <MyRole introTitle="개인 프로젝트"
                        introMent1="- 기획 및 UI/UX/ 디자인"
                        introMent2="- 퍼블리싱 및 프론트엔드 구현"/>
                <UsedTechnique introTitle1="Front-End" introMent1="- React.js, react-strap..."/>
                <ScreenShot />
                <ScreenShotBox pic={fashionAble_1} explanation1="- 메인페이지" explanation2="- 네비게이션바를 통해 카테고리 이동" explanation3="- 비주얼 슬라이드"/>
                <ScreenShotBox pic={fashionAble_2} explanation1="- 카테고리 별 아이템 리스트"/>
                <ScreenShotBox pic={fashionAble_3} explanation1="- 각 아이템 불러오기"/>
            </div>
        );
    }
}
export default FashionAble;