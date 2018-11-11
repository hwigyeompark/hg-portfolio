import React, {Component} from 'react';

class EightRecordItem extends Component{
    render() {
        const style = {
            div : {
                width:"300px",
                height:"520px",
                border:"1px solid #C4C3C3"
            },
            img:{
                width:"100%",
                height:"100%"
            },
        };

        return(
            <div style={style.div} className="eight-record-item" >
                <img style={style.img} src={this.props.pic}/>
            </div>
        );
    }
}
export default EightRecordItem;