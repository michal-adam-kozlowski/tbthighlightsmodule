import React, {Component} from 'react';
import Highlight from './Highlight.js';
import './HighlightsWrapper.scss';
import $ from 'jquery';
import Popup from "./HighlightPopup";

var highlightsArr = [
    {
        name : 'Koncerty',
        image : './img/koncerty.jpg',
        text : 'Przygotowujemy dla Was mnóstwo muzycznych wrażeń w trakcie wyjazdu. W ramach części festiwalowej wystpią dla Was na żywo wybrani artyści z Polski.'
    },
    {
        name : 'Windsurfing',
        image : './img/windsurfing.jpg',
        text : 'Kursy Wind'
    },
    {
        name : 'Kitesurfing',
        image : './img/kitesurfing.jpg',
        text : 'Kursy Kite'
    },
    {
        name : 'Diving',
        image : './img/diving.jpg',
        text : 'Diving'
    },
    {
        name : 'SUP',
        image : './img/sup.jpg',
        text : 'SUP'
    },
    {
        name : 'Wakebaording',
        image : './img/wakeboarding.jpg',
        text : 'Wakeboarding'
    },
    {
        name : 'Longboarding',
        image : './img/longboarding.jpg',
        text : 'Longboarding'
    },
    {
        name : 'Beach Parties',
        image : './img/beachparty.jpg',
        text : 'Beach Parties'
    },
    {
        name : 'Club Parties',
        image : './img/clubparty.jpg',
        text : 'Club Parties'
    },
    {
        name : 'Cooking Workshops',
        image : './img/cookingworkshops.jpg',
        text : 'Cooking Workshops'
    },
    {
        name : 'Poker Night',
        image : './img/pokernight.jpg',
        text : 'Poker Night'
    },
    {
        name : 'Sea Kayaks',
        image : './img/seakayak.jpg',
        text : 'Sea Kayaks'
    },
    {
        name : 'Rowery Embassy',
        image : './img/roweryembassy.jpg',
        text : 'Rowery Embassy'
    },
    {
        name : 'Splash of Colours',
        image : './img/splashofcolours.jpg',
        text : 'Splash of Colours'
    },

];



class HighlightsWrapper extends Component {

    constructor(props){
        super(props);
        this.scroll = this.scroll.bind(this);
        // here is the popup state
        this.state = { showPopup: false };
        this.togglePopup = this.togglePopup.bind(this);
    }
        // function to toggle popup
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    scroll(direction){
        let far = $( '.image-container' ).width()/1*direction;
        let pos = $('.image-container').scrollLeft() + far;
        $('.image-container').animate( { scrollLeft: pos }, 1000)
    }

    render () {
        return (
            <div className='main'>
                <div className='wrapper'>
                    <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
                <div className="image-container">
                    {highlightsArr.map((el) =>
                     <Highlight showPopupState ={this.state.showPopup} togglePopup={this.togglePopup} name={el.name} image={el.image} text={el.text}/>

                     )}

                </div>
                    <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
                </div>
                {this.state.showPopup ?
                    <Popup
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}

export default HighlightsWrapper;


