// ToTopButton.jsx - Zain Gova - 301018602 - September 22, 2024

import React from 'react';
const up = new URL('../assets/up.svg', import.meta.url).href
const upSmall = new URL('../assets/up-small.svg', import.meta.url).href

// resuable component that upon being clicked will scroll smoothly to the top of the page
const ToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
        <img src={upSmall} alt='up' className='back-to-top-small' onClick={scrollToTop}></img>
        </>
    );
};

export default ToTopButton;