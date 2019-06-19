import React, {Component} from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';
import Button from "../Contact/Button";

export default class ContactComponent extends Component{
    render(){
        return(
            <div className="contact-box">
                <Button icon={faEnvelope} name="phg5590@gmail.com"/>
                <Button icon={faGithub} name="github.com/hwigyeompark"/>
            </div>
        );
    }
}