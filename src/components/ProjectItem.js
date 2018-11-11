import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ProjectItem extends Component{
    detailProject = () =>{
        switch (parseInt(this.props.id)) {
            case 0:
                this.props.history.push("/projects/htmlHelper");
                break;
            case 1:
                this.props.history.push("/projects/hackerMon");
                break;
            case 2:
                this.props.history.push("/projects/eightRecord");
                break;
            case 3:
                this.props.history.push("/projects/fashionAble");
                break;
            case 4:
                this.props.history.push("/projects/myTrello");
                break;
        }
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