import React, {Component} from 'react';
import arrowDown from '../images/arr_down.png';

class ArrowDown extends Component{
    render(){
        const commonStyle = {
          textAlign : "center"
        };
        return(
            <div style={{position:"absolute", marginLeft:"auto", marginRight:"auto"}}>
                <h1 style={commonStyle}><img src={arrowDown}/></h1>
            </div>
        );
    }
}
export default ArrowDown;