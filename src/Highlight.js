import React, {Component} from "react";
import './Highlight.scss';
import Popup from "./HighlightPopup";

class Highlight extends Component {

    state = {
        info : this.props.text
    };

    render () {
        console.log(this.state.info);

        return (
        <div className='highlight'
             onClick={() => this.props.togglePopup(this.props.state)}
        >
            <img src={require(`${this.props.image}`)} className='image'/>
            <h3 className='highlightTitle'>{this.props.name}</h3>
            {this.props.showPopupState ?
                <Popup
                    text='Click "Close Button" to hide popup'
                    closePopup={this.togglePopup}
                    name={this.props.name}
                    info={this.state.info}
                />
                : null
            }
        </div>
        )
    }
}

export default Highlight;