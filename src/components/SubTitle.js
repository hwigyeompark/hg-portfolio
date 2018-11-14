import React, {Component} from 'react';

class SubTitle extends Component{
    render() {
        return (
            <div>
                <h2 className="sub-title">{this.props.subTitle}</h2>
            </div>
        );
    };
};
export default SubTitle;