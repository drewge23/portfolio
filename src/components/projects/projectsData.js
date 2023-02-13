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
import M4FS_PIC from '../../images/screenshots/m4fs.png'
import SOCIAL_NETWORK_PIC from '../../images/screenshots/social_network.png'
import WEATHER_PIC from '../../images/screenshots/weather_app.png'
import BLACKJACK_PIC from '../../images/screenshots/blackjack.png'
import RACCOON_PIC from '../../images/screenshots/raccoon_lists.png'
import VOROBEI_PIC from '../../images/screenshots/ptiza_vorobei.png'
import CIPHER_PIC from '../../images/screenshots/cipher.png'
import PORTFILIO_PIC from '../../images/screenshots/portfolio.png'

import SPADES_PIC from '../../images/icons/spades.png'
import WEATHER_API_PIC from '../../images/icons/weather_api.png'
import REACT_SPRING_PIC from '../../images/icons/react_spring.png'
import PAINT_PIC from '../../images/icons/paint.png'

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

// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius facere iste necessitatibus praesentium quae, similique voluptates. Accusamus, autem dicta earum harum laborum laudantium obcaecati quasi ratione veniam voluptas voluptatibus?'

const projectsData = [
    {
        title: 'M4FS',
        description: [<p>A prototype of a math learning app. Functionality includes: answer validation,
            progress and test systems, bonus levels system, a simple shop.
            Built with <b>Firebase</b>, <b>React</b>, <b>Redux</b>, <b>Formik</b> and other React libraries.</p>,
            <p><b>Login:</b> potential_hirer</p>,
            <p><b>Password:</b> drewge23</p>,
            <p>Development is still in progress</p>],
        imageUrl: M4FS_PIC,
        stack: [REACT, TS, REDUX, FIREBASE, MUI],
        linkUrl: null,
        id: 'm4fs'
    }, {
        title: 'Social Network',
        description: [<p>A small social network with loginization, profile page editing functionality and ability
            to visit pages of other users. Global state is managed with <b>Redux</b>,
            fetch requests are handled using third party api.</p>,
            <p><b>Login:</b> potential_hirer</p>,
            <p><b>Password:</b> drewge23</p>],
        imageUrl: SOCIAL_NETWORK_PIC,
        stack: [REACT, REDUX, REACT_ROUTER, AXIOS],
        linkUrl: 'https://github.com/drewge23/social-network',
        id: 'social_network'
    }, {
        title: 'Raccoon Lists',
        description: [<p>A web-app able to handle creation of multiple to-do lists by different users.
            Authentication, hosting and database are of <b>Firebase</b> service.
            Lists are drag-and-droppable, d&d is achieved with the <b>react-beautiful-dnd</b> library.
            Error handling is done with an ErrorBoundary React component. Mobile friendly</p>,
            <p><b>Login:</b> potential_hirer@gmail.com</p>,
            <p><b>Password:</b> drewge23</p>],
        imageUrl: RACCOON_PIC,
        stack: [FIREBASE, REACT],
        linkUrl: 'https://raccoon-lists.web.app/',
        id: 'raccoon_lists'
    }, {
        title: 'Weather App',
        description: [<p>A simple weather application with access to the current weather info at the given city.
            The information is fetched via <b>OpenWeather API</b> with the help of <b>React Query</b> lib.
            Mobile friendly</p>],
        imageUrl: WEATHER_PIC,
        stack: [REACT, REACT_QUERY, WEATHER_API],
        linkUrl: 'https://drewge23.github.io/weather-app/',
        id: 'weather_app'
    }, {
        title: 'Cipher',
        description: [<p>A mobile application built with <b>React Native</b>. Goal of the game is to guess
            the hidden number, trying to use as few turns as possible. Each of your answers is evaluated
            and returns a set of hints to advance. Distributed via Google Play</p>],
        imageUrl: CIPHER_PIC,
        stack: [REACT_NATIVE, EXPO],
        linkUrl: 'https://play.google.com/store/apps/details?id=com.drewge.cipher',
        id: 'cipher'
    }, {
        title: 'Portfolio',
        description: [<p>An SPA built with <b>React</b>. Parallax effects are implemented via <b>React Spring</b>
            library. Basic animations are done with the help of <b>jQuery</b>.
            Designed by myself (as all the other apps, if not stated otherwise). Mobile friendly</p>],
        imageUrl: PORTFILIO_PIC,
        stack: [REACT, REACT_SPRING, PAINT],
        linkUrl: 'https://drewge23.github.io/portfolio/',
        id: 'portfolio'
    }, {
        title: 'Ptiza Vorobei',
        description: [<p>Ptiza Vorobei is an interactive book built on a zero-coding platform
            – <b>SAP</b>, formal AppGyver – for Android and iOS devices. All the basic reader-app functionality
            is included: page and chapter navigation, bookmarks system, etc. Designed using Canva.
            Distributed via Google Play</p>],
        imageUrl: VOROBEI_PIC,
        stack: [APP_GYVER, CANVA],
        linkUrl: 'https://play.google.com/store/apps/details?id=com.ptiza_vorobei.app',
        id: 'ptiza_votobei'
    }, {
        title: 'Blackjack',
        description: [<p>A minuscule web-app – the Blackjack game (1 player vs AI). Card deck manipulations
            are done by the meanings of <b>Card Deck API</b>. Asynchronous actions are handled with
            the fetch method and basic <b>React</b> hooks</p>],
        imageUrl: BLACKJACK_PIC,
        stack: [REACT, CARDS_API],
        linkUrl: 'https://drewge23.github.io/blackjack/',
        id: 'blackjack'
    },
]

export default projectsData