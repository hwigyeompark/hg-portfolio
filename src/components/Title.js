import React, {Component} from 'react';

class Title extends Component{
    render() {
        const commonStyle = {
          textAlign:"center",
          fontWeight:"lighter",
          fontSize:"2.5rem",
        };
        return (
            <div>
                <h1 style={commonStyle}>{this.props.title}</h1>
            </div>
        );
    };
};
export default Title;