import './modal_window.css';
import { CloseButton } from '../elements/Buttons';
import { useState } from 'react';
import Dropdown from '../elements/Dropdown';
import axios from 'axios';
import { URL_PATH } from '../../Constants';
import AuthService from '../../services/AuthService';
import ApiClient from '../../services/ApiClient';

export { useBlockModal, BlockUserWindow }

const user_reasons_options = [
    {value: "STRIKES_LIMIT", label: "Превышено количество предупреждений"},
    {value: "GROSS_VIOLATION", label: "Сильное нарушение"},
    {value: "NONE", label: "-"},
]

const duration_options = [
    {value: "DAY", label: "Сутки"},
    {value: "WEEK", label: "Неделя"},
    {value: "MONTH", label: "Месяц"},
    {value: "FOREVER", label: "Навсегда"},
]

const getMinutes = (duration) => {
    switch (duration){
        case "DAY": return 1440;
        case "WEEK": return 10080;
        case "MONTH": return 20000;
        case "FOREVER": return 30000;
    }
}

const useBlockModal = () => {
    const [isShowing, setIsShowing] = useState(false)
    
    function toggle() {
        setIsShowing(!isShowing);
    }

    return [ isShowing, toggle ];
}

const BlockUserWindow = ({ show, onCloseButtonClick, user }) => {
    const [selectedReason, setSelectedReason] = useState("")
    const [selectedDuration, setSelectedDuration] = useState("")

    if (!show){
        return null;
    }
    
    const getReasonValue = () => {
        return selectedReason ? user_reasons_options.find(opt => opt.value === selectedReason): '' 
    }
    const getDurationValue = () => {
        return selectedDuration ? duration_options.find(opt => opt.value === selectedDuration): '' 
    }
    const onReasonSelect = (newValue) => {
        setSelectedReason(newValue.value)
    }
    const onDurationSelect = (newValue) => {
        setSelectedDuration(newValue.value)
    }
   
    const onBlockButtonClick = async () => {
        ApiClient.addBlocking(
            {
                user_id: user.id,
                reason: selectedReason,
                time_minutes: getMinutes(selectedDuration)
            },
            onCloseButtonClick()
        )
    }

    return(
        <div className="shadow__window">
            <div className="modal__window">
                <div className="row">
                    <div className="heading__A2">Блокировка пользователя {user.name}</div>
                    <CloseButton onClick={onCloseButtonClick}/>
                </div>
                <hr className="divider"/>
                
                <div className="block_config_column">
                    <div className="heading__B1">Укажите причину блокировки:</div>
                    <Dropdown
                        placeholder={"Причина"} 
                        options={user_reasons_options} 
                        onChange={onReasonSelect} 
                        value={getReasonValue()}
                    />
                    <Dropdown 
                        placeholder={"Длительность блокировки"} 
                        options={duration_options}
                        onChange={onDurationSelect} 
                        value={getDurationValue()}
                    />
                </div>
                
                <hr className="divider"/>
                <div className="buttons__row">
                    <div className="button__modal cancel heading__B1 black" onClick={onCloseButtonClick}>ОТМЕНА</div>
                    <div className="button__modal block heading__B1" onClick={onBlockButtonClick}>ЗАБЛОКИРОВАТЬ</div>
                </div>
            </div>
        </div>
    )
}

