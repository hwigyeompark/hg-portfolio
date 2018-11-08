import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ProjectItem extends Component{
    detailProject = () =>{
      this.props.history.push("/projects/htmlHelper");
    };
    render() {
        const projectItemStyle = {
            backgroundImage: `url(${this.props.pic})`
        };

        return(
            <div style={projectItemStyle} className="project-item" onClick={this.detailProject}>
                <div className="project-item-box">
                </div>
            </div>
        );
    }
}
export default withRouter(ProjectItem);