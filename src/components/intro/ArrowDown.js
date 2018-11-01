import React, {Component} from 'react';
import arrowDown from '../../images/icon_arrow_down.png';

class ArrowDown extends Component{
    render(){
        const commonStyle = {
          textAlign : "center"
        };
        return(
            <div style={{height:"5%"}}>
                <h1 style={commonStyle}><img src={arrowDown}/></h1>
            </div>
        );
    }
}
export default ArrowDown;