import React, {Component} from 'react';
import ProjectItem from "./ProjectItem";
import project_1 from '../images/bg_project_1.png';
import project_2 from '../images/bg_project_2.png';
import project_3 from '../images/bg_project_3.png';
import project_4 from '../images/bg_project_4.png';
import project_5 from '../images/bg_project_5.png';

class Project extends Component{
    render(){
        const images = [
            {
                img : project_1
            },
            {
                img : project_2
            },
            {
                img : project_3
            },
            {
                img : project_4
            },
            {
                img : project_5
            }
        ];
        const projects = [
            {
                name : "HTMLHelper",
                content : "HTML 입문자들을 위한 쉽고 간편한 Drag&Drop 교육용 웹 사이트"
            },
            {
                name : "해커몬",
                content : "해커톤 팀빌딩을 게임 퀘스트 형식과 같이 재밌고 편하게 할 수 있게끔 하는 웹 사이트"
            },
            {
                name : "8Record",
                content : "'8가지의 색상' 중 그 날 기분에 맞게 원하는 색상을 선택하고 '기록'하는 컬러 다이어리 하이브리드 앱"
            },
            {
                name : "FashionAble",
                content : "기존에 있는 쇼핑몰 사이트의 기능들을 포함한 나만의 쇼핑몰 사이트"
            },
            {
                name : "MyTrello",
                content : "'Trello'라는 서비스를 나만의 Trello로 재탄생 시켜 만든 사이트"
            },
        ];
        const projectStyle = {
            display : "flex",
            flexWrap : "wrap",
            justifyContent : "center",
            width : "60%",
            height : "1000px",
            margin : "0 auto",
            marginTop : "2%",
        };
        return(
            <div style={projectStyle}>
                {
                    images.map(image => <ProjectItem pic={image.img} />)
                }
                {
                    projects.map(project => <ProjectItem name={project.name} content={project.content}/>)
                }
            </div>
        );
    }

}
export default Project;