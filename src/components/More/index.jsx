import React, { useState } from 'react';
import ETC from '../../assests/img/ETC.svg';

import './More.scss';

function More() {
    const [visibility, setVisibility] = useState(false);
    const [spoilerVisibility, setSpoilerVisibility] = useState(true);

    return (
        <section className='more'>
            <div className="more__container">
                <div className="more__block">
                    <p>Since 2019, LibertyWalk has successfully provided
                        express courier delivery services in the city for both individuals and legal
                        entities, and is also a reliable logistics partner for delivery services for
                        online stores and restaurants!
                        Express delivery of documents and parcels for organizations, express delivery
                        of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the
                        most frequent orders in our company.</p>
                    <p>But at the same time, we do not limit the range of courier
                        services and without problems we can buy and bring goods and products from the online
                        store, arrange delivery for the online store, cafe, supermarket, restaurant or any
                        other business. Around the clock on our website you can call a courier in just a
                        minute and arrange an express courier delivery without unnecessary bureaucracy,
                        negotiations and calls to the call center.
                        {spoilerVisibility &&
                            <img onClick={() => {
                                setVisibility(!visibility);
                                setSpoilerVisibility(false);
                            }}
                                className="more__spoiler"
                                src={ETC}
                                alt="spoiler open" />}
                    </p>
                </div>

                {visibility && <div className='more__block'>
                    <p>Since 2019, LibertyWalk has successfully provided
                        express courier delivery services in the city for both individuals and legal
                        entities, and is also a reliable logistics partner for delivery services for
                        online stores and restaurants!
                        Express delivery of documents and parcels for organizations, express delivery
                        of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the
                        most frequent orders in our company.</p>
                    <p>Since 2019, LibertyWalk has successfully provided
                        express courier delivery services in the city for both individuals and legal
                        entities, and is also a reliable logistics partner for delivery services for
                        online stores and restaurants!
                        Express delivery of documents and parcels for organizations, express delivery
                        of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the
                        most frequent orders in our company. <img onClick={() => {
                            setVisibility(!visibility);
                            setSpoilerVisibility(true);
                        }}
                            className="more__spoiler"
                            src={ETC}
                            alt="spoiler close" /></p>
                </div>
                }
            </div>
        </section>
    )
}

export default More;