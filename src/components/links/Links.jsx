import React, {useEffect} from 'react';
import s from './links.module.css'

import {Linkedin, Git, Telegram, Whatsapp, Gmail} from '@icons-pack/react-simple-icons';

function Links() {
    const ICON_SIZE = 150
    const ICON_COLOR = '#994299'

    useEffect(() => {
        const links = document.querySelector('#links').children
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = links[i].dataset.color
            links[i].addEventListener('mouseover', () => {
                links[i].style.color = links[i].dataset.color
            })
            links[i].addEventListener('mouseout', () => {
                links[i].style.color = ICON_COLOR
            })
        }
    }, [])

    return (
        <div className={s.links} id='links'>
            <a href="#" data-color='#0A66C2'><Linkedin size={ICON_SIZE}/></a>
            <a href="#" data-color='#F05032'><Git size={ICON_SIZE}/></a>
            <a href="#" data-color='#26A5E4'><Telegram size={ICON_SIZE}/></a>
            <a href="#" data-color='#25D366'><Whatsapp size={ICON_SIZE}/></a>
            <a href="#" data-color='#EA4335'><Gmail size={ICON_SIZE}/></a>
        </div>
    );
}

export default Links;