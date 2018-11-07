import React, {Component} from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from "./Button";

class Contact extends Component{
    render(){
        const boxStyle = {
            width:"60%",
            margin:"0 auto",
            marginTop:"2%",
            display:"flex"
        };
        return(
            <div style={boxStyle}>
                <Button icon={faGithub} name="github.com/hwigyeompark"/>
            </div>
        );
    }
}
export default Contact;