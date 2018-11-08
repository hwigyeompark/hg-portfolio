import React, {Component} from 'react';
import SubTitle from "../SubTitle";
import ProjectHeader from "../ProjectHeader";

class HtmlHelper extends Component{
    render(){
        return(
            <div>
                <ProjectHeader/>
                <SubTitle subTitle="프로젝트 소개"/>
            </div>
        );
    }
}
export default HtmlHelper;