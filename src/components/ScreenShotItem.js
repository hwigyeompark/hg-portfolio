import React, {Component} from 'react';

class ScreenShotItem extends Component{
    render() {
        return(
                <div className="screen-shot-item">
                    <img src={this.props.pic}/>
                </div>
        );
    }
}
export default ScreenShotItem;