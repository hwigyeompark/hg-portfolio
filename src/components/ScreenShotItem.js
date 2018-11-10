import React, {Component} from 'react';

class ScreenShotItem extends Component{
    render() {
        const style = {
           div : {
               width:"900px",
               height:"460px",
               margin:"1%",
               border:"1px solid #e0e0e0"
           },
            img:{
               width:"100%",
                height:"100%"
            },
        };

        return(
                <div style={style.div} className="screenshot-item" >
                    <img style={style.img} src={this.props.pic}/>
                </div>
        );
    }
}
export default ScreenShotItem;