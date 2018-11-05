import React, {Component} from 'react';
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
               <Button name="github.com/hwigyeompark"/>
            </div>
        );
    }
}
export default Contact;