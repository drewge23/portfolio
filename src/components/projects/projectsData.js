import StackItem from "./StackItem";
import {Firebase, ReactJs, Reactquery, Redux} from "@icons-pack/react-simple-icons";
import React from "react";

//IMAGES
import M4FS_PIC from '../../images/bg.jpg'

const ICON_SIZE = 24

const REACT = <StackItem icon={<ReactJs color='#61DAFB' size={ICON_SIZE}/>}
                         link='https://reactjs.org/'> React </StackItem>
const REDUX = <StackItem icon={<Redux color='#764ABC' size={ICON_SIZE}/>}
                         link='https://redux.js.org/'> Redux </StackItem>
const REACT_QUERY = <StackItem icon={<Reactquery color='#FF4154' size={ICON_SIZE}/>}
                               link='https://reactjs.org/'> React </StackItem>
const REACT_NATIVE = <StackItem icon={<ReactJs color='#61DAFB' size={ICON_SIZE}/>}
                                link='https://reactjs.org/'> React Native </StackItem>
const FIREBASE = <StackItem icon={<Firebase color='#FFCA28' size={ICON_SIZE}/>}
                            link='https://firebase.google.com/'> Firebase </StackItem>

const projectsData = [
    {
        title: 'M4FS',
        description: 'Learn to math app',
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: '#'
    }, {
        title: 'Social Network',
        description: 'Social network web app',
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: '#'
    }, {
        title: 'Raccoon Lists',
        description: 'Social network web app',
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://raccoon-lists.web.app/'
    }, {
        title: 'Cipher',
        description: 'Social network web app',
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://play.google.com/store/apps/details?id=com.drewge.cipher'
    }, {
        title: 'Ptiza Vorobei',
        description: 'Social network web app',
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://play.google.com/store/apps/details?id=com.ptiza_vorobei.app'
    }, {
        title: 'Blackjack',
        description: 'Social network web app',
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://drewge23.github.io/blackjack/'
    }, {
        title: 'Portfolio',
        description: 'Social network web app',
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: '#'
    }, {
        title: 'Weather App',
        description: 'Social network web app',
        imageUrl: M4FS_PIC,
        stack: [REACT, REDUX, FIREBASE],
        linkUrl: 'https://drewge23.github.io/weather-app/'
    },

]

export default projectsData