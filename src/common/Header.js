import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
          <div className="nav-bar-wrap">
              <ul className="nav-bar">
                  <li><a href={process.env.PUBLIC_URL + "/#intro"}>HOME</a></li>
                  <li><a href={process.env.PUBLIC_URL + "/#about"}>ABOUT</a></li>
                  <li><a href={process.env.PUBLIC_URL + "/#projects"}>PROJECTS</a></li>
                  <li><a href={process.env.PUBLIC_URL + "/#contact"}>CONTACT</a></li>
              </ul>
          </div>
        );
    }
}