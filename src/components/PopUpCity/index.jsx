import React, { useState } from 'react';
import classNames from 'classnames';

import './PopUpCity.scss';

function PopUpCity({ cities }) {
    const [active, setActive] = useState(false);
    const [activeOption, setActiveOption] = useState(3);

    const handleClick = (id) => {
        setActiveOption(id);
        setActive(!active);
    }

    return (
        <div className="select">
            <button
                onClick={() => setActive(!active)}
                type="button"
                className='select__display'
            >
                {cities[activeOption].name}
            </button>

            <ul onMouseLeave={() => setActive(false)}
                className={classNames("select__list", { 'select__list_active': active })} >
                {
                    cities.map((city) =>
                    (
                        <li
                            key={city.id}
                            className={classNames('select__option', { 'select__option_selected': (city.id === activeOption) })}
                            onClick={() => handleClick(city.id)}
                        >
                            {city.name}
                        </li>
                    ))
                }
            </ul>
        </div >

    )
}

export default PopUpCity;