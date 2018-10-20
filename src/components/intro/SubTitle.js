import React, {Component} from 'react';
import "../../css/common.css";

class SubTitle extends Component{
    render() {
        const commonStyle = {
            textAlign:"center",
            fontWeight:"lighter"
        };
        return (
            <div>
                <h2 style={commonStyle}>{this.props.ename}'s Portfolio</h2>
            </div>
        );
    };
};
export default SubTitle;