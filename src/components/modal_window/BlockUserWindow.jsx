import './modal_window.css';
import { CloseButton } from '../elements/Buttons';
import { useEffect, useState } from 'react';
import Dropdown from '../elements/Dropdown';

export { useModal, BlockUserWindow }

const reasons_options = [
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

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false)
    
    function toggle() {
        setIsShowing(!isShowing);
    }

    return [ isShowing, toggle ];
}

const BlockUserWindow = ({ show, onCloseButtonClick, user }) => {
    const [userData, setUserData] = useState({
        name: "",
        blocked_ads_num: 0,
        ban_reason: "",
        blocks_num: 0,
        ads_num: 0,
        status: "",
        action: "",
        duration: ""
    })
    const [selectedReason, setSelectedReason] = useState("")
    const [selectedDuration, setSelectedDuration] = useState("")

    useEffect(()=>{
        setUserData(user)
    }, [user])

    useEffect(()=>{
        /*alert(
            "status: " + userData.status +
            "\nreason: " + userData.ban_reason + " " + selectedReason + 
            "\nduration: " + userData.duration + " " + selectedDuration
        )*/
    }, [userData])

    if (!show){
        return null;
    }
    
    const getReasonValue = () => {
        return selectedReason ? reasons_options.find(opt => opt.value === selectedReason): '' 
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

    const onBlockButtonClick = () => {
        setUserData(prevData => ({
            ...prevData,
            status: "EXPIRED",
            ban_reason: selectedReason,
            duration: selectedDuration
        }))
        onCloseButtonClick()
    }

    return(
        <div className="shadow__window">
            <div className="modal__window">
                <div className="row">
                    <div className="heading__A2">Блокировка пользователя {userData.name}</div>
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

