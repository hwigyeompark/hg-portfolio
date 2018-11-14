import React, {Component} from 'react';

class ScreenShotExplanation extends Component{
    render() {
        return(
            <div className="screen-shot-explanation">
                <p>{this.props.explanation1}</p>
                <p>{this.props.explanation2}</p>
                <p>{this.props.explanation3}</p>
            </div>
        );
    }
}
export default ScreenShotExplanation;