import React, {Component} from 'react';

class ScreenShotItem extends Component{
    render() {
        const style = {
           div : {
               width:"800px",
               height:"400px",
               margin:"1%"
           },
            img:{
               width:"100%",
                height:"100%"
            },
        };

        return(
                <div style={style.div} className="screenshot-item" >
                    <img src={this.props.pic}/>
                </div>
        );
    }
}
export default ScreenShotItem;