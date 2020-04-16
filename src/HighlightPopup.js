import React from 'react';
import './HighlightPopup.scss';

class Popup extends React.Component {

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.name}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                    <p>{this.props.info}</p>
                </div>
            </div>
        );
    }
}

export default Popup;