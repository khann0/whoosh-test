import React from 'react';
import classNames from 'classnames';

function InfoItem({ title, icon, text, decorated }) {
    return (
        <div className='info__item'>
            <h3 className='card__title'>{title}</h3>
            <div className={classNames("info__icon", { 'info__icon_decorated': decorated })}>
                <img src={icon} alt='icon'></img>
            </div>
            <p className='card__text'>{text}</p>
        </div >
    )
}

export default InfoItem;