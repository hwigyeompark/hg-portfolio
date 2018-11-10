import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ProjectItem extends Component{
    detailProject = () =>{
        this.props.history.push("/projects/htmlHelper");
        /*if (this.props.key === 0) {
            this.props.history.push("/projects/htmlHelper");
        }else if(this.props.id === 1){
                this.props.history.push("/projects/hackerMon");
        }*/
    };
    render() {
        const projectItemStyle = {
            backgroundImage: `url(${this.props.pic})`
        };

        return(
            <div style={projectItemStyle} className="project-item" onClick={this.detailProject} key={this.props.key} >
                <div className="project-item-box">
                </div>
            </div>
        );
    }
}
export default withRouter(ProjectItem);