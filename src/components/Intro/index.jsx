import React from 'react';
import IntroItem from './IntroItem';
import Calculation from '../../assests/img/Calculation.svg';
import Click from '../../assests/img/Click.svg';
import Payment from '../../assests/img/Payment.svg'
import Intersect from '../../assests/img/Intersect.png';

import './Intro.scss';

function Intro() {
    return (
        <section className='intro'>
            <div className="intro__container">
                <h2 className='section__title'>What we do</h2>
                <p className="intro__text">Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</p>
                <div className='intro__items'>
                    <IntroItem
                        title={'Online '}
                        icon={Calculation}
                        text={'Instant calculation of the cost in the order form, the price is updated in the process of filling out the form'}
                        span={'calculation'}
                    />
                    <IntroItem
                        title={'Minimum paperwork'}
                        icon={Click}
                        text={'You can place an order for courier or freight delivery without registration and contract.'}
                    />
                    <IntroItem
                        title={'Convenient payment'}
                        icon={Payment}
                        text={'You can pay for delivery by card on in cash at any of the order addresses. For legal entities non-cash is available.'}
                    />
                </div>
                <button className="intro__button">Get started!</button>
            </div>
            <img className='intro__decor' src={Intersect}></img>
        </section>
    )
}

export default Intro