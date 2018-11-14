import React, {Component} from 'react';
import lifeClock from '../images/img_life_clock.png';

class MyPic extends Component{
    render(){
        return(
          <div className="my-pic">
              <img id="my-pic-img" src={lifeClock}/>
          </div>
        );
    }
}
export default MyPic;