import React from 'react';
import ScrollArrow from "./ScrollArrow";

function Links({scrollTo}) {
    return (
        <div>

            <ScrollArrow scrollTo={scrollTo} page={0} text={'Go up'}/>
        </div>
    );
}

export default Links;