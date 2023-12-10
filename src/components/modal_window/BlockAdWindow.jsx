import './modal_window.css';
import { CloseButton } from '../elements/Buttons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export {BlockAdWindow, useModal};

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
    const [selectedReason, setSelectedReason] = useState("-")
    let navigate = useNavigate();

    useEffect(() => {
        console.log(adData)
    }, [adData])

    useEffect(() => {
        console.log(selectedReason)
    }, [selectedReason])

    if (!show){
        return null;
    }

    const reasons_list = [
        "Нецензурная лексика",
        "Порнографические материалы",
        "Насилие",
        "Обман и мошенничество"
    ]

    const onBlockButtonClick = () => {
        setAdData((prevData)=>{
            let newData = { ...prevData }
            newData.status = "ADVERTISEMENT_CONTENT_MODERATION_DECLINED"
            newData.reason = selectedReason
            return {newData}  
        })
        console.log(adData)
        navigate('/moderation')
    }

    const onReasonClick = (event) => {
        setSelectedReason(event.target.value);
        console.log(selectedReason)
    }

    console.log(adData)
    
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
                
                    {
                        <div className="reasons_list">
                        {
                            reasons_list.map((reason, index) => (
                                <div id='reasons-item' 
                                    key = {index}
                                    className='button reason__element heading__D1 nunito black' 
                                    onClick={onReasonClick}
                                    title={selectedReason}
                                >{reason}</div>
                            ))
                        }
                        </div>
                    }
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