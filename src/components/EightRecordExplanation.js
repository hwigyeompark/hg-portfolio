import React, {Component} from 'react';

class EightRecordExplanation extends Component{
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
export default EightRecordExplanation;