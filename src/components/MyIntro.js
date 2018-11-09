import React, {Component} from 'react';

class MyIntro extends Component{
    render(){
        const introStyle = {
            div : {
                width:"39%",
                height:"auto",
                paddingTop:"10%",
                marginLeft:"2%"
            },
            h2 : {
                fontSize:"1.8rem",
                fontWeight:"lighter"
            },
            h3 : {
                fontSize:"1.5rem",
                fontWeight:"lighter"
            },
            p : {
                fontSize:"1.2rem",
                wordBreak:"break-all"
            }
        };
        return(
          <div style={introStyle.div}>
              <h2 style={introStyle.h2}>박휘겸 Park Hwigyeom</h2><br/>
              <h3 style={introStyle.h3}>"현재시각 5:42AM"</h3><br/><br/>
              <p style={introStyle.p}>{this.props.introMent}</p>
          </div>
        );
    }
}
export default MyIntro;