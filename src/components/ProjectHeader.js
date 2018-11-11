import React, {Component} from 'react';

class ProjectHeader extends Component{
    render(){
        const style = {
            div : {
                width: "100%",
                height: "600px",
                background: `url(${this.props.pic})`,
                backgroundPosition:"top",
                backgroundSize:"cover",
            },
        };
        return(
          <div style={style.div}>
          </div>
        );
    }
}
export default ProjectHeader;