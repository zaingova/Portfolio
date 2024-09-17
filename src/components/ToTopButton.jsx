import React from 'react';
const up = new URL('../assets/up.svg', import.meta.url).href

const ToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <img src={up} alt='up' className='back-to-top' onClick={scrollToTop}></img>
    );
};

export default ToTopButton;