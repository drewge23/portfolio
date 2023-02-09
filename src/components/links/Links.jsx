import React, {useEffect} from 'react';
import s from './links.module.css'

import {Linkedin, Github, Telegram, Whatsapp, Gmail} from '@icons-pack/react-simple-icons';

function Links() {
    const ICON_SIZE = 150
    const ICON_COLOR = '#994299'

    useEffect(() => {
        const links = document.querySelector('#links').children
        for (let i = 0; i < links.length; i++) {
            links[i].target = '_black'
            links[i].rel = 'noreferrer'
            links[i].style.color = links[i].dataset.color
            links[i].addEventListener('mouseover', () => {
                links[i].style.color = links[i].dataset.color
            })
            links[i].addEventListener('mouseout', () => {
                links[i].style.color = ICON_COLOR
            })
        }
    }, [])

    //LINKS
    const LINKEDIN = 'https://www.linkedin.com/in/drewge/'
    const GITHUB = 'https://github.com/drewge23'
    const TELEGRAM = 'https://t.me/ptiza_vorobei'
    const WHATSAPP = 'https://wa.me/qr/ILVBYOO54YLNA1'
    const GMAIL = 'mailto:screwnut152@gmail.com'

    return (
        <div className={s.links} id='links'>
            <a href={LINKEDIN} data-color='#0A66C2'><Linkedin size={ICON_SIZE}/></a>
            <a href={GITHUB} data-color='#181717'><Github size={ICON_SIZE}/></a>
            <a href={TELEGRAM} data-color='#26A5E4'><Telegram size={ICON_SIZE}/></a>
            <a href={WHATSAPP} data-color='#25D366'><Whatsapp size={ICON_SIZE}/></a>
            <a href={GMAIL} data-color='#EA4335'><Gmail size={ICON_SIZE}/></a>
        </div>
    );
}

export default Links;