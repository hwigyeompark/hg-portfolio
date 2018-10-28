import React from 'react';

const Email = ({email}) => {
    const commonStyle = {
      width:"30%",
      float:"right",
      marginTop:"5%",
      fontSize:"1.3rem"
    };
    return(
        <div style={commonStyle}>
            {email}
        </div>
    );
};
export default Email;