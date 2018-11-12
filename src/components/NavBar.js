import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        const navStyle={
            div : {
                width:"100%",
                height:"50px",
                backgroundColor:"#ffffff",
                opacity:".7",
                position:"fixed"
            },
            ul:{
                margin:"0 auto",
                width:"60%",
                height:"100%",
                textAlign:"center"
            },
            li:{
                width:"33%",
                height:"100%",
                float:"left",
                textAlign:"center",
                lineHeight:"47px"
            }
        };
        return(
          <div style={navStyle.div}>
              <ul style={navStyle.ul}>
                  <li style={navStyle.li}><a href="#about">ABOUT</a></li>
                  <li style={navStyle.li}><a href="#projects">PROJECTS</a></li>
                  <li style={navStyle.li}><a href="#contact">CONTACT</a></li>
              </ul>
          </div>
        );
    }
}
export default NavBar;