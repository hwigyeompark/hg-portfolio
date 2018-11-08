import React, {Component} from 'react';
import Title from "./Title";

class ProjectHeader extends Component{
    render(){
        const style = {
            div : {
                width: "100%",
                height: "700px",
                background: `url(${this.props.img})`
            },
        };
        return(
          <div style={style.div}>
             <Title title="HTMLHelper"/>
          </div>
        );
    }
}
export default ProjectHeader;