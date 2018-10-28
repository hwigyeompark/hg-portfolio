import React, {Component} from 'react';

class Title extends Component{
    render() {
        const commonStyle = {
          textAlign:"center",
          fontWeight:"lighter",
          fontSize:"2.5rem"
        };
        const emphasizeName = {
            fontSize: "1.2em"
        };
        return (
            <div>
                <h1 style={commonStyle}>"삶은 여행, 여행하는 개발자 <span style={emphasizeName}>'{this.props.name}'</span> 입니다."</h1>
            </div>
        );
    };
};
export default Title;