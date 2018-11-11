import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Button extends Component{
    goToLink = () => {
        if (this.props.name === "phg5590@gmail.com"){
            window.open("https://www.google.com/gmail", "_blank");
        }
        else {
            window.open("https://github.com/hwigyeompark", "_blank");
        }
    };
    render(){
        const btnStyle = {
                border : "1px solid #B4B3B3",
                fontSize : "1.5rem",
                padding: "15px",
                margin : "1%",
                borderRadius : "15px",
                backgroundColor : "transparent",
        };
        return(
            <div>
                <button style={btnStyle} className="contact-btn" onClick={this.goToLink}><FontAwesomeIcon icon={this.props.icon}/> {this.props.name}</button>
            </div>
        );
    }
}
export default Button;