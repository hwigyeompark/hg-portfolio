import React, {Component} from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
import Button from "./Button";

class Contact extends Component{
    render(){
        const boxStyle = {
            width:"60%",
            margin: "0 auto",
            marginTop:"2%",
            display:"flex",
            flexDirection : "column",
            textAlign : "center",
        };
        return(
            <div style={boxStyle}>
                <Button icon={faEnvelope} name="phg5590@gmail.com"/>
                <Button icon={faGithub} name="github.com/hwigyeompark"/>
            </div>
        );
    }
}
export default Contact;