import './modal_window.css';
import { CloseButton } from '../elements/Buttons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../elements/Dropdown';
import { URL_PATH } from '../../Constants';
import axios from 'axios';

export {BlockAdWindow, useModal};

export const reasons_options = [
    {value: "DECLINE_RUDE_WORDS", label: "Нецензурная лексика"},
    {value: "DECLINE_NUDITY", label: "Порнографические материалы"},
    {value: "DECLINE_VIOLENCE", label: "Насилие"},
    {value: "DECLINE_FRAUD", label: "Обман и мошенничество"},
    {value: "DECLINE_UNINFORMATIVE", label: "Неинформативно"},
]

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)
    
    function toggle() {
        setIsShowing(!isShowing);
    }

    return [ isShowing, toggle ];
}

const BlockAdWindow = ({ show, onCloseButtonClick, advertisementData }) => {
    let navigate = useNavigate()
    const [adData, setAdData] = useState({
        id: 0,
        header: "",
        description: "",
        price: 0,
        category: 0,
        status: "",
    })
    const [selectedReason, setSelectedReason] = useState("")

    useEffect(() => {
        setAdData({
            ...adData,
            id: advertisementData.id,
            header: advertisementData.header,
            description: advertisementData.description,
            price: advertisementData.price,
            category: advertisementData.category,
            status: advertisementData.status,
        })
    }, [advertisementData])

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
        setAdData(prevData=>({
            ...prevData,
            status: newValue.value,
        }))
    }

    const onBlockButtonClick = async() => {
        await axios.put(URL_PATH+'/advertisement/'+adData.id, adData);
        navigate("/moderation")
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