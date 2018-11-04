import React, {Component} from 'react';

class ProjectItem extends Component{
    render(){
        const projectItemStyle = {
            width:"550px",
            height:"350px",
            backgroundColor:"#000000",
            backgroundImage:`url(${this.props.pic})`,
            backgroundSize:"150%",
            backgroundPosition:"center",
            margin:"1.3%"
        };
        return(
          <div style={projectItemStyle}>
          </div>
        );
    }

}
export default ProjectItem;