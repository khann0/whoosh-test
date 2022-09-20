import React from 'react';

import './Main.scss';
import Form from '../Form';

import Play from '../../assests/img/Play.svg';
import Track from '../../assests/img/Track.svg';


function Main() {
    return (
        <section className='main'>
            <div className="main__container">
                <div className='main__col'>
                    <h2 className='section__title'>Our service started work in New York</h2>
                    <p>We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour.</p>
                    <a href="#">Read more &gt;</a>
                    <h3>How it works</h3>
                    <div className='video'>
                        <video></video>
                        <div className="video__overlay">
                            <button className='video__play' type="button">
                                <img src={Play} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='main__forms'>
                    <Form />
                    <div className='main__tracker'>
                        <h3>Track a package</h3>
                        <input type="text" placeholder='Enter code'></input>
                        <img src={Track}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;