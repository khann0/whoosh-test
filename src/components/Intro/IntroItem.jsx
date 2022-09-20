import React from 'react';

function IntroItem({ icon, title, text, span }) {
    return (
        <div className='intro__item'>
            <div className="intro__icon">
                <img src={icon} alt='icon'></img>
            </div>
            <h3 className='card__title'>{title} {span && <span>{span}</span>}</h3>
            <p className='card__text'>{text}</p>
        </div>
    )
}

export default IntroItem;