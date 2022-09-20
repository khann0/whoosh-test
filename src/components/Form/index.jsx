import React, { useState } from 'react';
import classNames from 'classnames';

import Car from '../../assests/img/Car.svg';
import Truck from '../../assests/img/Truck.svg';
import OnFoot from '../../assests/img/OnFoot.svg';

import './Form.scss';

function Form() {
    const [location, setLocation] = useState('');
    const [locationDrop, setLocationDrop] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <form className="main-form">
            <h3>Send a Parcel <span
                onMouseOver={() => setShowTooltip(true)}
                onMouseOut={() => setShowTooltip(false)}
                className='tooltip'>
                i</span>
            </h3>

            {showTooltip &&
                < div className={classNames("tooltip__block", { 'tooltip__block_shown': showTooltip })}>
                    A commission is a piece of work that someone is asked to do and is paid for.
                </div>
            }

            <div className="main-form__radios">
                <input id='radio1' type="radio" name="type"></input>
                <label htmlFor='radio1'>
                    <img src={OnFoot}></img>
                    <p>up to 10lb</p>
                </label>
                <input id='radio2' type="radio" name="type"></input>
                <label htmlFor='radio2'>
                    <img src={Car}></img>
                    <p>up to 10lb</p>
                </label>
                <input id='radio3' type="radio" name="type"></input>
                <label htmlFor='radio3'>
                    <img src={Truck}></img>
                    <p>up to 10lb</p>
                </label>
            </div>

            <div className="main-form__location">
                <label className='main-form__label main-form__label_one' htmlFor='location1'>Pickup Location</label>
                <input
                    id="location1"
                    type="text"
                    autoComplete='off'
                    placeholder='location'
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                />
                <label className='main-form__label main-form__label_two' htmlFor='location2'>Drop location</label>

                <input
                    id="location2"
                    type="text"
                    autoComplete='off'
                    placeholder='drop-location'
                    value={locationDrop}
                    onChange={event => setLocationDrop(event.target.value)}></input>
            </div>

            <div className="main-form__buttons">
                <input className='button' type="submit" value="Order"></input>
                <button type="button" onClick={() => {
                    setLocation('');
                    setLocationDrop('');
                }}>x Clear All</button>
            </div>
        </form >
    )
}

export default Form;