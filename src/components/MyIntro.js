import React, {Component} from 'react';

class MyIntro extends Component{
    render(){
        const introStyle = {
            div : {
                width:"60%",
                height:"auto",
                paddingTop:"10%",
                marginLeft:"2%"
            },
            h2 : {
                fontSize:"2rem",
                fontWeight:"lighter"
            },
            h3 : {
                fontSize:"1.7rem",
                fontWeight:"lighter"
            },
            p : {
                fontSize:"1.5rem"
            }
        };
        return(
          <div style={introStyle.div}>
              <h2 style={introStyle.h2}>박휘겸 Park Hwigyeom</h2><br/>
              <h3 style={introStyle.h3}>"현재시각 5:42AM"</h3><br/><br/>
              <p style={introStyle.p}>사람의 평균 나이를 80으로 가정하고 시간으로 계산하여보면<br/>
                  나오는 저의 인생 시간 입니다.<br/>
                  적절한 시기라는 것은 정해져 있지 않습니다.<br/>
                  이른 새벽부터 저만의 날개를 펼치려 합니다.
              </p>
          </div>
        );
    }
}
export default MyIntro;