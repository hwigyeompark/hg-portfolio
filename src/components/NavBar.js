import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        const navStyle={
            div : {
                width:"100%",
                height:"50px",
                backgroundColor:"#ffffff",
                opacity:".8",
                position:"fixed",
                boxShadow: "2px 2px #E0E0E0",
                zIndex:"1"
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
                lineHeight:"47px",
            },
            a:{
              color:"#333"
            }
        };
        return(
          <div style={navStyle.div}>
              <ul style={navStyle.ul}>
                  <li style={navStyle.li}><a style={navStyle.a} href="/#about">ABOUT</a></li>
                  <li style={navStyle.li}><a style={navStyle.a} href="/#projects">PROJECTS</a></li>
                  <li style={navStyle.li}><a style={navStyle.a} href="/#contact">CONTACT</a></li>
              </ul>
          </div>
        );
    }
}
export default NavBar;