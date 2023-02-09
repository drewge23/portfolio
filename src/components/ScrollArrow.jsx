import React from 'react';

function ScrollArrow({scrollTo, page, text}) {
    return (
        <div className='arrow' onClick={() => scrollTo(page)}>
            {text}
        </div>
    );
}

export default ScrollArrow;