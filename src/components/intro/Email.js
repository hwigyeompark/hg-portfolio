import React from 'react';

const Email = ({email}) => {
    const commonStyle = {
      width:"30%",
      float:"right",
      margin:"20px"
    };
    return(
        <div style={commonStyle}>
            {email}
        </div>
    );
};
export default Email;