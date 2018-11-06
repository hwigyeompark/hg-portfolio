import React, {Component} from 'react';
import lifeClock from '../images/img_life_clock.png';

class MyPic extends Component{
    render(){
        const picStyle = {
            div : {
                width : "40%",
                height : "40%"
            },
            img : {
                width:"100%",
                height:"100%"
            }
        };
        return(
          <div style={picStyle.div}>
              <img style={picStyle.img} src={lifeClock}/>
          </div>
        );
    }
}
export default MyPic;