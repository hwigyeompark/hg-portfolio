import React, {Component} from 'react';

class Title extends Component{
    render() {
        const commonStyle = {
          textAlign:"center",
          fontWeight:"lighter",
          fontSize:"3rem"
        };
        const emphasizeName = {
            fontSize: "1.2em"
        };
        return (
            <div id="title">
                <h1 style={commonStyle}>{this.props.title}<span style={emphasizeName}>'{this.props.name}'</span></h1>
            </div>
        );
    };
};
export default Title;