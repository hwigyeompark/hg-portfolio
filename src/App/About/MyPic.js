import React, {Component} from 'react';
import lifeClock from '../../assets/images/home/img_life_clock.png';

export default class MyPic extends Component{
    render(){
        return(
          <div className="my-pic">
              <img id="my-pic-img" src={lifeClock}/>
          </div>
        );
    }
}