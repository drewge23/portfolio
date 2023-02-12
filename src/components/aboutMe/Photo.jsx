import React, {useState} from 'react';
import photo1 from '../../images/me1.jpeg'
import photo2 from '../../images/me2.jpeg'
import photo2_cropped from '../../images/me2_cropped.jpeg'
import photo3 from '../../images/me3.jpeg'
import photo4 from '../../images/me4.jpeg'
import photo4_cropped from '../../images/me4_cropped.jpeg'
import photo5 from '../../images/me5.jpeg'
import photo from '../../images/me.jpeg'
import s from './aboutMe.module.css'
import $ from 'jquery'

function Photo(props) {
    const photos = [photo1, photo2, photo2_cropped, photo3, photo4, photo4_cropped, photo5, photo]
    const [currentPhoto, setCurrentPhoto] = useState(Math.floor(Math.random() * photos.length))

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