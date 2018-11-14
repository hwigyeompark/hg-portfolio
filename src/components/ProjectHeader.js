import React, {Component} from 'react';

class ProjectHeader extends Component{
    render(){
        const projectHeaderStyle = {
            background: `url(${this.props.pic})`
        };
        return(
          <div style={projectHeaderStyle} className="project-header">
          </div>
        );
    }
}
export default ProjectHeader;