import StackItem from "./StackItem";
import {
    Axios,
    Canva,
    Expo,
    Firebase, Mui,
    ReactJs,
    Reactquery,
    Reactrouter,
    Redux,
    Sap, Typescript
} from "@icons-pack/react-simple-icons";
import React from "react";

//IMAGES
import M4FS_PIC from '../../images/m4fs.png'
import SOCIAL_NETWORK_PIC from '../../images/social_network.png'
import WEATHER_PIC from '../../images/weather_app.png'
import BLACKJACK_PIC from '../../images/blackjack.png'
import RACCOON_PIC from '../../images/raccoon_lists.png'
import VOROBEI_PIC from '../../images/ptiza_vorobei.png'
import CIPHER_PIC from '../../images/cipher.png'
import PORTFILIO_PIC from '../../images/portfolio.png'

import SPADES_PIC from '../../images/spades.png'
import WEATHER_API_PIC from '../../images/weather_api.png'
import REACT_SPRING_PIC from '../../images/react_spring.png'
import PAINT_PIC from '../../images/paint.png'

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
const REACT_SPRING = <StackItem logoUrl={REACT_SPRING_PIC}
                               link='https://www.react-spring.dev/'
                               key={'react_spring'}> React Spring </StackItem>
const REACT_ROUTER = <StackItem icon={<Reactrouter color='#CA4245' size={ICON_SIZE}/>}
                               link='https://reactrouter.com/en/main/'
                               key={'react_router'}> React Router </StackItem>
const TS = <StackItem icon={<Typescript color='#3178C6' size={ICON_SIZE}/>}
                               link='https://www.typescriptlang.org/'
                               key={'ts'}> TypeScript </StackItem>
const MUI = <StackItem icon={<Mui color='#007FFF' size={ICON_SIZE}/>}
                               link='https://mui.com/'
                               key={'mui'}> Material UI </StackItem>
const AXIOS = <StackItem icon={<Axios color='#5A29E4' size={ICON_SIZE}/>}
                               link='https://axios-http.com/'
                               key={'axios'}> Axios </StackItem>
const REACT_NATIVE = <StackItem icon={<ReactJs color='#61DAFB' size={ICON_SIZE}/>}
                                link='https://reactjs.org/'
                                key={'react_native'}> React Native </StackItem>
const EXPO = <StackItem icon={<Expo color='#000020' size={ICON_SIZE}/>}
                                link='https://expo.dev/'
                                key={'expo'}> Expo </StackItem>
const FIREBASE = <StackItem icon={<Firebase color='#FFCA28' size={ICON_SIZE}/>}
                            link='https://firebase.google.com/'
                            key={'firebase'}> Firebase </StackItem>
const APP_GYVER = <StackItem icon={<Sap color='#0FAAFF' size={ICON_SIZE}/>}
                            link='https://www.appgyver.com/'
                            key={'app_gyver'}> App Gyver </StackItem>
const CANVA = <StackItem icon={<Canva color='#00C4CC' size={ICON_SIZE}/>}
                            link='https://www.canva.com/'
                            key={'canva'}> Canva </StackItem>
const PAINT = <StackItem logoUrl={PAINT_PIC}
                            key={'paint'}> Paint </StackItem>
const CARDS_API = <StackItem logoUrl={SPADES_PIC}
                            link='https://www.deckofcardsapi.com/'
                            key={'deck_of_cards'}> Deck of Cards API </StackItem>
const WEATHER_API = <StackItem logoUrl={WEATHER_API_PIC}
                            link='https://openweathermap.org/api/'
                            key={'weather_api'}> Open Weather API </StackItem>

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius facere iste necessitatibus praesentium quae, similique voluptates. Accusamus, autem dicta earum harum laborum laudantium obcaecati quasi ratione veniam voluptas voluptatibus?'

const projectsData = [
    {
        title: 'M4FS',
        description: lorem,
        imageUrl: M4FS_PIC,
        stack: [REACT, TS, REDUX, FIREBASE, MUI],
        linkUrl: null,
        id: 'm4fs'
    }, {
        title: 'Social Network',
        description: lorem,
        imageUrl: SOCIAL_NETWORK_PIC,
        stack: [REACT, REDUX, REACT_ROUTER, AXIOS],
        linkUrl: 'https://github.com/drewge23/social-network',
        id: 'social_network'
    }, {
        title: 'Raccoon Lists',
        description: lorem,
        imageUrl: RACCOON_PIC,
        stack: [FIREBASE, REACT],
        linkUrl: 'https://raccoon-lists.web.app/',
        id: 'raccoon_lists'
    }, {
        title: 'Weather App',
        description: lorem,
        imageUrl: WEATHER_PIC,
        stack: [REACT, REACT_QUERY, WEATHER_API],
        linkUrl: 'https://drewge23.github.io/weather-app/',
        id: 'weather_app'
    }, {
        title: 'Cipher',
        description: lorem,
        imageUrl: CIPHER_PIC,
        stack: [REACT_NATIVE, EXPO],
        linkUrl: 'https://play.google.com/store/apps/details?id=com.drewge.cipher',
        id: 'cipher'
    }, {
        title: 'Portfolio',
        description: lorem,
        imageUrl: PORTFILIO_PIC,
        stack: [REACT, REACT_SPRING, PAINT],
        linkUrl: 'https://drewge23.github.io/portfolio/',
        id: 'portfolio'
    }, {
        title: 'Ptiza Vorobei',
        description: lorem,
        imageUrl: VOROBEI_PIC,
        stack: [APP_GYVER, CANVA],
        linkUrl: 'https://play.google.com/store/apps/details?id=com.ptiza_vorobei.app',
        id: 'ptiza_votobei'
    }, {
        title: 'Blackjack',
        description: lorem,
        imageUrl: BLACKJACK_PIC,
        stack: [REACT, CARDS_API],
        linkUrl: 'https://drewge23.github.io/blackjack/',
        id: 'blackjack'
    },
]

export default projectsData