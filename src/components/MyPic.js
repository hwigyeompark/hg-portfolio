import React, {Component} from 'react';
import lifeClock from '../images/img_life_clock.png';

class MyPic extends Component{
    render(){
        const picContainer = {
            width:"20%",
            height:"auto"
        };
        return(
          <div style={picContainer}>
              <img src={lifeClock}/>
          </div>
        );
    }
}
export default MyPic;