import React, {Component} from 'react';
import EightRecordItem from "./EightRecordItem";
import EightRecordExplanation from "./EightRecordExplanation";

class EightRecordBox extends Component{
    render(){
        return(
            <div className="eight-record-box">
                <EightRecordItem pic={this.props.pic}/>
                <EightRecordExplanation explanation1={this.props.explanation1} explanation2={this.props.explanation2} explanation3={this.props.explanation3}/>
            </div>
        );
    }
}
export default EightRecordBox;