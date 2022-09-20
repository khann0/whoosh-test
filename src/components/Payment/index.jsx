import React, { useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Media from 'react-media';

import Gpay from '../../assests/img/payment/gpay.svg';
import Sofort from '../../assests/img/payment/sofort.svg';
import UnionPay from '../../assests/img/payment/unionpay.svg';
import Visa from '../../assests/img/payment/visa.svg';
import MasterCard from '../../assests/img/payment/mastercard.svg';
import Amex from '../../assests/img/payment/gpay.svg';
import ArrowLeft from '../../assests/img/slider/Left.svg';
import ArrowRight from '../../assests/img/slider/Right.svg';

import './Payment.scss';
import '@splidejs/react-splide/css/core';

function Payment() {
    const [slidesPerPage, setPerPage] = useState(6);
    const [hasArrows, setArrows] = useState(true);

    return (
        <section className='payment'>
            <div className="payment__container">
                <h2 className="section__title">Payment methods</h2>

                <Media query="(max-width: 776.98px)">
                    {(matches) => {
                        if (matches) {
                            setArrows(false);
                            setPerPage(3)
                        } else {
                            setArrows(true);
                            setPerPage(6)
                        }
                    }}
                </Media>

                <Splide
                    hasTrack={false}
                    options={{
                        rewind: false,
                        perPage: slidesPerPage,
                        perMove: 3,
                        arrows: hasArrows,
                    }}
                    aria-label="My Favorite Images">
                    <SplideTrack>
                        <SplideSlide><img src={Gpay} /></SplideSlide>
                        <SplideSlide><img src={Sofort} /></SplideSlide>
                        <SplideSlide><img src={UnionPay} /></SplideSlide>
                        <SplideSlide><img src={Visa} /></SplideSlide>
                        <SplideSlide><img src={MasterCard} /></SplideSlide>
                        <SplideSlide><img src={Amex} /></SplideSlide>
                        <SplideSlide><img src={UnionPay} /></SplideSlide>
                        <SplideSlide><img src={Visa} /></SplideSlide>
                        <SplideSlide><img src={MasterCard} /></SplideSlide>
                        <SplideSlide><img src={Amex} /></SplideSlide>
                        <SplideSlide><img src={UnionPay} /></SplideSlide>
                        <SplideSlide><img src={Visa} /></SplideSlide>
                        <SplideSlide><img src={MasterCard} /></SplideSlide>
                        <SplideSlide><img src={Amex} /></SplideSlide>
                    </SplideTrack>
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">
                            <img src={ArrowLeft} />
                        </button>
                        <button className="splide__arrow splide__arrow--next">
                            <img src={ArrowRight} />
                        </button>
                    </div>
                </Splide>
            </div>
        </section>
    )
}

export default Payment;