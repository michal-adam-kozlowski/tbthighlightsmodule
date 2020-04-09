import React, {Component} from "react";
import './Highlight.scss';
import Popup from "./HighlightPopup";

class Highlight extends Component {


    render () {
        return (
        <div className='highlight'
             onClick={() => this.props.togglePopup(this.props.state)}
        >
            <img src={require(`${this.props.image}`)} className='image'/>
            <h3 className='highlightTitle'>{this.props.name}</h3>
            <p>{this.props.text}</p>
        </div>
        )
    }
}

export default Highlight;