import React, {Component} from 'react';
import ProjectItem from "./ProjectItem";

class Project extends Component{
    render(){
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
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        );
    }

}
export default Project;