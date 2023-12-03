import React, { useState } from 'react';
import { DropdownButton } from './Buttons';

const Dropdown = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSelect(value);
    };

    return (
        <div className="dropdwn">
            <DropdownButton/>
            <div className="dropdown__content">
                {
                    reasons_list.map((reason, index) => (
                        <div className='button reason__element heading__D1 nunito black' 
                            >{reason}</div>
                    ))
                }
            </div>
        </div>
    );
            };

export default Dropdown;