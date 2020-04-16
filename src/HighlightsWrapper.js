import React, {Component} from 'react';
import Highlight from './Highlight.js';
import './HighlightsWrapper.scss';
import $ from 'jquery';
import Popup from "./HighlightPopup";

var highlightsArr = [
    {
        name : 'Koncerty',
        image : './img/koncerty.jpg',
        text : 'Przygotowujemy dla Was mnóstwo muzycznych wrażeń w trakcie wyjazdu. W ramach części festiwalowej wystpią dla Was na żywo wybrani artyści z Polski.',
        tagParty : true,
        tagActivities : false,
        tagSightseeing : false

    },
    {
        name : 'Windsurfing',
        image : './img/windsurfing.jpg',
        text : 'Kursy Wind',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Kitesurfing',
        image : './img/kitesurfing.jpg',
        text : 'Kursy Kite',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Diving',
        image : './img/diving.jpg',
        text : 'Diving',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'SUP',
        image : './img/sup.jpg',
        text : 'SUP',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Wakebaording',
        image : './img/wakeboarding.jpg',
        text : 'Wakeboarding',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Longboarding',
        image : './img/longboarding.jpg',
        text : 'Longboarding',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Beach Parties',
        image : './img/beachparty.jpg',
        text : 'Beach Parties',
        tagParty : true,
        tagActivities : false,
        tagSightseeing : false
    },
    {
        name : 'Club Parties',
        image : './img/clubparty.jpg',
        text : 'Club Parties',
        tagParty : true,
        tagActivities : false,
        tagSightseeing : false
    },
    {
        name : 'Cooking Workshops',
        image : './img/cookingworkshops.jpg',
        text : 'Cooking Workshops',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Korcula Trip',
        image : './img/splashofcolours.jpg',
        text : 'Wycieczka na słoneczną Korculę',
        tagParty : false,
        tagActivities : false,
        tagSightseeing : true
    },
    {
        name : 'Poker Night',
        image : './img/pokernight.jpg',
        text : 'Poker Night',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Sea Kayaks',
        image : './img/seakayak.jpg',
        text : 'Sea Kayaks',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Rowery Embassy',
        image : './img/roweryembassy.jpg',
        text : 'Rowery Embassy',
        tagParty : false,
        tagActivities : true,
        tagSightseeing : false
    },
    {
        name : 'Splash of Colours',
        image : './img/splashofcolours.jpg',
        text : 'Splash of Colours',
        tagParty : true,
        tagActivities : false,
        tagSightseeing : false
    },
    {
        name : 'Dubrovnik Trip',
        image : './img/splashofcolours.jpg',
        text : 'Wycieczka do cudownego Dubrovnika',
        tagParty : false,
        tagActivities : false,
        tagSightseeing : true
    },

];



class HighlightsWrapper extends Component {

    constructor(props){
        super(props);
        this.scroll = this.scroll.bind(this);
        // here is the popup state
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

                    <div className='blockLeft'></div>
                    <div className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</div>
                <div className="image-container">
                    {highlightsArr.map((el) =>
                     <Highlight name={el.name} image={el.image} info={el.text}/>

                     )}

                </div>
                    <div className="next" onClick={this.scroll.bind(null,1)}>&#10095;</div>
                    <div className='blockRight'></div>
                </div>

            </div>
        )
    }
}

export default HighlightsWrapper;


