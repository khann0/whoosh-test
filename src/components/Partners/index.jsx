import React, { useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Media from 'react-media';

import Alva from '../../assests/img/Alva.svg';
import Tendo from '../../assests/img/Tendo.svg';
import Fagor from '../../assests/img/Fagor.svg';
import RadioShack from '../../assests/img/RadioShack.svg';
import GuitarCenter from '../../assests/img/GuitarCenter.svg';

import './Partners.scss';
import '@splidejs/react-splide/css/core';

function Partners() {
    const [slidesPerPage, setPerPage] = useState(5);
    const [move, setMove] = useState(3);

    return (
        <section className='partners'>
            <div className="partners__container">
                <h2 className='section__title'>Our Partners</h2>

                <Media query="(max-width: 776.98px)">
                    {(matches) => {
                        if (matches) {
                            setPerPage(1);
                            setMove(1);
                        } else {
                            setPerPage(5);
                            setMove(3);
                        }
                    }}
                </Media>

                <Splide
                    hasTrack={false}
                    options={{
                        rewind: true,
                        perPage: slidesPerPage,
                        perMove: move,
                        arrows: false,
                        autoplay: true,
                        interval: 5000,
                        pauseOnHover: true
                    }}
                    aria-label="My Favorite Images">
                    <SplideTrack>
                        <SplideSlide><img src={Alva} /></SplideSlide>
                        <SplideSlide><img src={Tendo} /></SplideSlide>
                        <SplideSlide><img src={Fagor} /></SplideSlide>
                        <SplideSlide><img src={RadioShack} /></SplideSlide>
                        <SplideSlide><img src={GuitarCenter} /></SplideSlide>
                        <SplideSlide><img src={Alva} /></SplideSlide>
                        <SplideSlide><img src={Fagor} /></SplideSlide>
                        <SplideSlide><img src={Alva} /></SplideSlide>
                        <SplideSlide><img src={RadioShack} /></SplideSlide>
                        <SplideSlide><img src={GuitarCenter} /></SplideSlide>
                    </SplideTrack>
                </Splide>

                <a className="partners__button" href="#">Let's collaborate</a>
            </div>
        </section>
    )
}

export default Partners;