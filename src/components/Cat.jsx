import React from 'react';
import {useInView, useSpring, animated} from "@react-spring/web";

import CAT from '../images/cat.png'
import CAT_MIRRORED from '../images/cat_mirrored.png'

const Cat = (props) => {
        const [ref, isInView] = useInView()

        const styles = useSpring({
            scale: isInView ? 1 : 0,
            config: {
                tension: 300,
            },
        })

        return (
            <animated.div style={{
                ...styles,
                display: 'block',
                width: props.w,
                marginLeft: props.ml,
            }} ref={ref} className="cat">
                <img src={parseInt(props.ml) > 50? CAT : CAT_MIRRORED} alt=""/>
            </animated.div>
    );
}

export default Cat;