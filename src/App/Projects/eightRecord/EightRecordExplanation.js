import React, {Component} from 'react';

export default class EightRecordExplanation extends Component{
    render() {
        return(
            <div className="eight-record-explanation">
                <p>{this.props.explanation1}</p>
                <p>{this.props.explanation2}</p>
                <p>{this.props.explanation3}</p>
            </div>
        );
    }
}