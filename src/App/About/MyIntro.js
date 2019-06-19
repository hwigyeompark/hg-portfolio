import React, {Component} from 'react';

export default class MyIntro extends Component{
    render(){
        return(
          <div className="my-intro">
              <h2>박휘겸 Park Hwigyeom</h2><br/>
              <h3>"현재시각 6:00AM"</h3><br/><br/>
              <p>사람의 평균 나이를 80으로 가정하였을 때, 계산한 제 <span>인생시간</span>입니다.<br/>
                  적절한 시기라는 것은 정해져 있지 않습니다.<br/>
                  이른 새벽부터 <span>저만의 날개</span>를 펼치려 합니다.
              </p>
          </div>
        );
    }
}