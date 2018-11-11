import React, {Component} from 'react';

class EightRecordExplanation extends Component{
    render() {
        const style = {
            div : {
                width:"20%",
                height:"auto",
                margin:"1%"
            },
            p:{
                wordBreak:"break-all",
                fontSize:"1.1rem"
            }
        };

        return(
            <div style={style.div} >
                <p>{this.props.explanation1}</p>
                <p>{this.props.explanation2}</p>
                <p>{this.props.explanation3}</p>
            </div>
        );
    }
}
export default EightRecordExplanation;