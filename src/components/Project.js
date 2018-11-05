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
            </div>
        );
    }

}
export default Project;