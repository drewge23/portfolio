import StackItem from "./StackItem";
import {Firebase, ReactJs, Reactquery, Redux} from "@icons-pack/react-simple-icons";
import React from "react";

//IMAGES
import M4FS_PIC from '../../images/bg.jpg'
import WEATHER_PIC from '../../images/weather_app.png'
import BLACKJACK_PIC from '../../images/blackjack.png'
import RACCOON_PIC from '../../images/raccoon_lists.png'
import VOROBEI_PIC from '../../images/ptiza_vorobei.png'
import CIPHER_PIC from '../../images/cipher.png'
import PORTFILIO_PIC from '../../images/portfolio.png'

const ICON_SIZE = 24

const REACT = <StackItem icon={<ReactJs color='#61DAFB' size={ICON_SIZE}/>}
                         link='https://reactjs.org/'
                         key={'react'}> React </StackItem>
const REDUX = <StackItem icon={<Redux color='#764ABC' size={ICON_SIZE}/>}
                         link='https://redux.js.org/'
                         key={'redux'}> Redux </StackItem>
const REACT_QUERY = <StackItem icon={<Reactquery color='#FF4154' size={ICON_SIZE}/>}
                               link='https://reactjs.org/'
                               key={'react_query'}> React Query </StackItem>
const REACT_NATIVE = <StackItem icon={<ReactJs color='#61DAFB' size={ICON_SIZE}/>}
                                link='https://reactjs.org/'
                                key={'react_native'}> React Native </StackItem>
const FIREBASE = <StackItem icon={<Firebase color='#FFCA28' size={ICON_SIZE}/>}
                            link='https://firebase.google.com/'
                            key={'firebase'}> Firebase </StackItem>

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius facere iste necessitatibus praesentium quae, similique voluptates. Accusamus, autem dicta earum harum laborum laudantium obcaecati quasi ratione veniam voluptas voluptatibus?'

const projectsData = [
    {
        title: 'M4FS',
        description: lorem,
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: '#',
        id: 'm4fs'
    }, {
        title: 'Social Network',
        description: lorem,
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: '#',
        id: 'social_network'
    }, {
        title: 'Raccoon Lists',
        description: lorem,
        imageUrl: RACCOON_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://raccoon-lists.web.app/',
        id: 'raccoon_lists'
    }, {
        title: 'Cipher',
        description: lorem,
        imageUrl: CIPHER_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://play.google.com/store/apps/details?id=com.drewge.cipher',
        id: 'cipher'
    }, {
        title: 'Ptiza Vorobei',
        description: lorem,
        imageUrl: VOROBEI_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://play.google.com/store/apps/details?id=com.ptiza_vorobei.app',
        id: 'ptiza_votobei'
    }, {
        title: 'Blackjack',
        description: lorem,
        imageUrl: BLACKJACK_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://drewge23.github.io/blackjack/',
        id: 'blackjack'
    }, {
        title: 'Portfolio',
        description: lorem,
        imageUrl: PORTFILIO_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: '#',
        id: 'portfolio'
    }, {
        title: 'Weather App',
        description: lorem,
        imageUrl: WEATHER_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://drewge23.github.io/weather-app/',
        id: 'weather_app'
    },

]

export default projectsData