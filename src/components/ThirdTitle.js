import React from 'react';

const ThirdTitle = ({thirdTitle}) => {
    const commonStyle = {
          width:"30%",
          float:"right",
          fontSize:"1.5rem",
    };
    return(
        <div style={commonStyle}>
            {thirdTitle}
        </div>
    );
};
export default ThirdTitle;