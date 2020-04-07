import React, {Component} from "react";
import './Highlight.scss';

class Highlight extends Component {
    render () {
        return (
        <div className='highlight'>
            <img src={require(`${this.props.image}`)} className='image'/>
            <h3 className='highlightTitle'>{this.props.name}</h3>
            <p>{this.props.text}</p>
        </div>
        )
    }
}

export default Highlight;