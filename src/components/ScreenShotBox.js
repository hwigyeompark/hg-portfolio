import React, {Component} from 'react';

class ScreenShotBox extends Component{
    render(){
        const style={
            screenShotBox : {
                display:"flex",
                margin:"0 auto",
                flexWrap:"wrap",
                width:"60%",
            }
        };
        return(
            <div style={style.screenShotBox}>
            </div>
        );
    }
}
export default ScreenShotBox;