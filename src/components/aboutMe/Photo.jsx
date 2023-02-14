import React, {useState} from 'react';
import photo1 from '../../images/me/me1.jpeg'
import photo2 from '../../images/me/me2.jpeg'
import photo3 from '../../images/me/me3.jpeg'
import photo from '../../images/me/me.jpeg'
import s from './aboutMe.module.css'
import $ from 'jquery'

function Photo(props) {
    const photos = [photo1, photo2, photo3, photo]
    const [currentPhoto, setCurrentPhoto] = useState(0)
    // const [currentPhoto, setCurrentPhoto] = useState(Math.floor(Math.random() * photos.length - 1))

    const animationTime = 100
    const onCLick = () => {
        $('#photo').fadeOut(animationTime)
        setTimeout(() => {
            setCurrentPhoto(currentPhoto === photos.length - 1 ? 0 : currentPhoto + 1)
        }, animationTime)
        $('#photo').fadeIn(animationTime)
    }

    return (
        <div className={s.frameContainer}>
            <div className={s.frame}>
                <img src={photos[currentPhoto]} alt=""
                     className={s.photo} id={'photo'}
                onClick={onCLick}/>
            </div>
        </div>
    );
}

export default Photo;