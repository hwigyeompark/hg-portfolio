import React, {Component} from 'react';
import ProjectItem from "../Projects/ProjectItem";
import project_1 from '../../assets/images/home/bg_project_1.png';
import project_2 from '../../assets/images/home/bg_project_2.png';
import project_3 from '../../assets/images/home/bg_project_3.png';
import project_4 from '../../assets/images/home/bg_project_4.png';
import project_5 from '../../assets/images/home/bg_project_5.png';

export default class ProjectComponent extends Component{
    render(){
        const images = [
            {
                id : '0',
                img : project_1
            },
            {
                id : '1',
                img : project_2
            },
            {
                id : '2',
                img : project_3
            },
            {
                id : '3',
                img : project_4
            },
            {
                id : '4',
                img : project_5
            }
        ];
        return(
            <div className="project-box">
                {
                    images.map(image => <ProjectItem id={image.id} pic={image.img} key={image.id}/>)
                }
            </div>
        );
    }
}