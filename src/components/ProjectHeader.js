import React, {Component} from 'react';
import Title from "./Title";

class ProjectHeader extends Component{
    render(){
        const style = {
            div : {
                width: "100%",
                height: "700px",
                background: `url(${this.props.pic})`,
                backgroundPosition:"center",
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