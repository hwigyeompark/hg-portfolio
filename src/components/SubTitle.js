import React, {Component} from 'react';

class SubTitle extends Component{
    render() {
        const commonStyle = {
            textAlign:"center",
            fontWeight:"lighter",
            fontSize:"2rem"
        };
        return (
            <div>
                <h2 style={commonStyle}>{this.props.subTitle}</h2>
            </div>
        );
    };
};
export default SubTitle;