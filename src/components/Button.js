import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Button extends Component{
    render(){
        const btnStyle = {
                border : "1px solid #B4B3B3",
                fontSize : "1.5rem",
                padding: "15px",
                margin : "1%",
                borderRadius : "15px",
                backgroundColor : "transparent"
        };
        return(
            <div>
                <button style={btnStyle}><FontAwesomeIcon icon={this.props.icon}/> {this.props.name}</button>
            </div>
        );
    }
}
export default Button;