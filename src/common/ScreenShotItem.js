import React, {Component} from 'react';

export default class ScreenShotItem extends Component{
    render() {
        return(
                <div className="screen-shot-item">
                    <img src={this.props.pic}/>
                </div>
        );
    }
}