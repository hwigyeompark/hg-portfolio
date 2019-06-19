import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Button extends Component{
    goToLink = () => {
        if (this.props.name === "phg5590@gmail.com"){
            window.open("https://www.google.com/gmail", "_blank");
        }
        else {
            window.open("https://github.com/hwigyeompark", "_blank");
        }
    };
    render(){
        return(
            <div>
                <button className="contact-btn" onClick={this.goToLink}><FontAwesomeIcon icon={this.props.icon}/> {this.props.name}</button>
            </div>
        );
    }
}