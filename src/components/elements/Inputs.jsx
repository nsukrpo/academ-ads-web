import './inputs.css';
import './../../styles/text.css'
import './../../styles/common.css'

export function TextInput({id, value, onChange, placeholder}) {
    return (
        <input
            id={id}
            type="text" 
            value={value} 
            onChange={onChange}
            className='input user__search heading__D1 nunito grey'
            placeholder={placeholder}
        />
    )
}

export function NumberInput({id, value, onChange, placeholder}) {
    return (
        <input
            id={id}
            type="number" 
            value={value} 
            onChange={onChange}
            className='input heading__D1 nunito grey'
            placeholder={placeholder}
            min={0}
        />
    )
}