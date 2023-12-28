import React from 'react';
import Select from 'react-select';
import './dropdown.css';

const Dropdown = ({ options, placeholder, onChange, value }) => {
   
    return (
            <Select
                options={options} placeholder={placeholder}
                className='heading__D1 nunito grey'
                onChange={onChange}
                value={value}
                styles= {{
                    control: (provided) => ({
                      ...provided,
                      borderRadius: '15px',
                      padding: '4px',
                      flexShrink: 0,
                      width: 'auto',
                      minWidth: '150px',
                      maxWidth: '200px',
                      border: '0.5px #262626',
                      background: '#E6E6E6'
                    }),
                    menu: (provided) => ({
                        ...provided,
                        borderRadius: '15px',

                    }),
                    menuList: (provided) => ({
                        ...provided,
                        borderRadius: '15px',
                        border: '1px #262626',
                        background: '#E6E6E6',
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        background: state.isFocused ? '#7203FF' : '#E6E6E6', 
                        color: state.isFocused ? '#FFF' : '#5E5E5E'
                    })
                }}
            />
    );
};

export default Dropdown;