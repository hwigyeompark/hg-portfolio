import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Button extends Component{
    render(){
        return(
            <div>
                <button>
                    <FontAwesomeIcon icon={this.props.icon}/>
                        {this.props.name}
                </button>
            </div>
        );
    }
}
export default Button;