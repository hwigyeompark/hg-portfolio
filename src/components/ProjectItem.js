import React, {Component} from 'react';

class ProjectItem extends Component{
    render(){
        const projectItemStyle = {
            backgroundImage:`url(${this.props.pic})`
        };
        const pStyle={
            wordBreak:"break-all"
        };
        return(
            <div style={projectItemStyle} className="project-item">
                <div className="project-item-box">
                    <h1>{this.props.name}</h1>
                    <p style={pStyle}>{this.props.content}</p>
                </div>
            </div>
        );
    }

}
export default ProjectItem;