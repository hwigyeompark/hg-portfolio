import React, {Component} from 'react';

export default class EightRecordItem extends Component{
    render() {
        return(
            <div className="eight-record-item">
                <img src={this.props.pic}/>
            </div>
        );
    }
}