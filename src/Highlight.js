import React, {Component} from "react";
import './Highlight.scss';
import Popup from "./HighlightPopup";

class Highlight extends Component {

    constructor(props){
        super(props);
        // here is the popup state
        this.state = {
            showPopup: false,
        };
        this.togglePopup = this.togglePopup.bind(this);
    }
    // function to toggle popup
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    render () {

        return (
        <div className='highlight'
             onClick={() => this.togglePopup()}
        >
            <img src={require(`${this.props.image}`)} className='image'/>
            <p className='highlightTitle'>{this.props.name}</p>
            {this.state.showPopup ?
                <Popup
                    text='Click "Close Button" to hide popup'
                    closePopup={this.togglePopup}
                    name={this.props.name}
                    info={this.props.info}
                />
                : null
            }
        </div>
        )
    }
}

export default Highlight;