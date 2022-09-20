import React from 'react';

import InfoItem from './InfoItem';
import Courier from '../../assests/img/Courier.svg';
import Support from '../../assests/img/Support.svg';
import Case from '../../assests/img/Case.svg';

import './Info.scss';

function Info() {
    return (
        <section className='info'>
            <div className="info__container">
                <h2 className='section__title'>Express delivery market revolution</h2>
                <p className='info__text'>Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</p>
                <div className='info__row'>
                    <InfoItem
                        title={'Become a Courier'}
                        icon={Courier}
                        text={'You choose a schedule. You decide how much and when to earn. Earnings from day one.'}
                        decorated
                    />
                    <InfoItem
                        title={'Help & Support'}
                        icon={Support}
                        text={'Door-to-door delivery in 90 minutes or ar your convenience.'}
                    />
                    <InfoItem
                        title={'Affiliate Program'}
                        icon={Case}
                        text={'Use our service and feel new quality of this traditional service!'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Info;