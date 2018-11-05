import React, {Component} from 'react';

class Button extends Component{
    render(){
        return(
            <div>
                <button>
                    <i className="fab fa-github">
                        {this.props.name}
                    </i>
                </button>
            </div>
        );
    }
}
export default Button;