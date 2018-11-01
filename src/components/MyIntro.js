import React, {Component} from 'react';

class MyIntro extends Component{
    render(){
        const introContainer = {
          width:"40%",
          height:"auto"
        };
        return(
          <div style={introContainer}>
              <p>사람의 평균 나이를 80으로 가정하고 시간으로 계산하여보면 나오는<br/>
                  저의 인생 시간 입니다.<br/>
                  적절한 시기라는 것은 정해져 있지 않습니다.<br/>
                  이른 새벽부터 저만의 날개를 펼치려 합니다.
              </p>
          </div>
        );
    }
}
export default MyIntro;