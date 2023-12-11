import './modal_window.css';
import { CloseButton } from '../elements/Buttons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../elements/Dropdown';

export {BlockAdWindow, useModal};

const reasons_options = [
    {value: "RUDE_WORDS", label: "Нецензурная лексика"},
    {value: "NUDITY", label: "Порнографические материалы"},
    {value: "VIOLENCE", label: "Насилие"},
    {value: "FRAUD", label: "Обман и мошенничество"},
    {value: "UNINFORMATIVE", label: "Неинформативно"},
]

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)
    
    function toggle() {
        setIsShowing(!isShowing);
    }

    return [ isShowing, toggle ];
}

const BlockAdWindow = ({ show, onCloseButtonClick, advertisementData }) => {
    const [adData, setAdData] = useState({
        name: advertisementData.name,
        reason: advertisementData.reason,
        status: advertisementData.status
    })
    const [selectedReason, setSelectedReason] = useState("")
    let navigate = useNavigate();

    useEffect(() => {
        // alert(
        //     "status: " + adData.status +
        //     "\nreason ban: " + adData.reason
        // )
    }, [adData])

    useEffect(() => {
        console.log(selectedReason)
    }, [selectedReason])

    if (!show){
        return null;
    }

    const getReasonValue = () => {
        return selectedReason ? reasons_options.find(opt => opt.value === selectedReason): '' 
    }
    const onReasonSelect = (newValue) => {
        setSelectedReason(newValue.value)
    }

    const onBlockButtonClick = () => {
        setAdData(prevData=>({
            ...prevData,
            status: "ADVERTISEMENT_CONTENT_MODERATION_DECLINED",
            reason: selectedReason,
        }))
        navigate('/moderation')
    }
    
    return(
        <div className="shadow__window">
            <div className="modal__window">
                <div className="row">
                    <div className="heading__A2">Блокировка объявления</div>
                    <CloseButton onClick={onCloseButtonClick}/>
                </div>
                <hr className="divider"/>
                
                <div className="block_config_column">
                    <div className="heading__B1">Укажите причину блокировки:</div>
                
                    <Dropdown
                        placeholder={"Причина"} 
                        options={reasons_options} 
                        onChange={onReasonSelect} 
                        value={getReasonValue()}
                    />
                </div>
                
                <hr className="divider"/>
                <div className="buttons__row">
                    <button className="button__modal cancel heading__B1 black" onClick={onCloseButtonClick}>
                        ОТМЕНА
                    </button>
                    <button className="button__modal block heading__B1" onClick={onBlockButtonClick}>ЗАБЛОКИРОВАТЬ</button>
                </div>
            </div>
        </div>
    )
}