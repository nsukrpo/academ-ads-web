import './modal_window.css';
import { CloseButton } from '../elements/Buttons';
import { useState } from 'react';
import Dropdown from '../elements/Dropdown';
import axios from 'axios';
import { URL_PATH } from '../../Constants';
import AuthService from '../../services/AuthService';
import ApiClient from '../../services/ApiClient';

export { useStrikeModal, StrikeUserWindow }

const user_reasons_options = [
    {value: "RUDE_WORDS", label: "Нецензурные выражения"},
    {value: "NUDITY", label: "Нагота"},
    {value: "VIOLENCE", label: "Насилие"},
    {value: "FRAUD", label: "Мошенничество"},
    {value: "NONE", label: "-"},
]

const useStrikeModal = () => {
    const [isShowing, setIsShowing] = useState(false)
    
    function toggle() {
        setIsShowing(!isShowing);
    }

    return [ isShowing, toggle ];
}

const StrikeUserWindow = ({ show, onCloseButtonClick, user }) => {
    const [selectedReason, setSelectedReason] = useState("")

    if (!show){
        return null;
    }
    
    const getReasonValue = () => {
        return selectedReason ? user_reasons_options.find(opt => opt.value === selectedReason): '' 
    }
    const onReasonSelect = (newValue) => {
        setSelectedReason(newValue.value)
    }
    const onStrikeButtonClick = async () => {
        ApiClient.addStrike(
            {
                user_id: user.id,
                reason: selectedReason
            },
            onCloseButtonClick()
        )
    }

    return(
        <div className="shadow__window">
            <div className="modal__window">
                <div className="row">
                    <div className="heading__A2">Предупреждение для {user.name}</div>
                    <CloseButton onClick={onCloseButtonClick}/>
                </div>
                <hr className="divider"/>
                
                <div className="block_config_column">
                    <div className="heading__B1">Укажите причину предупреждения:</div>
                    <Dropdown
                        placeholder={"Причина"} 
                        options={user_reasons_options} 
                        onChange={onReasonSelect} 
                        value={getReasonValue()}
                    />
                </div>
                
                <hr className="divider"/>
                <div className="buttons__row">
                    <div className="button__modal cancel heading__B1 black" onClick={onCloseButtonClick}>ОТМЕНА</div>
                    <div className="button__modal block heading__B1" onClick={onStrikeButtonClick}>ПОДТВЕРДИТЬ</div>
                </div>
            </div>
        </div>
    )
}

