// ToTopButton.jsx - Zain Gova - 301018602 - September 22, 2024

import React from 'react';
import scroll from '../utils/scroll';
const up = new URL('../assets/up.svg', import.meta.url).href
const upSmall = new URL('../assets/up-small.svg', import.meta.url).href

const ToTopButton = () => {
    return (
        <img src={upSmall} alt='up' className='back-to-top-small' onClick={scroll}></img>
    );
};

export default ToTopButton;