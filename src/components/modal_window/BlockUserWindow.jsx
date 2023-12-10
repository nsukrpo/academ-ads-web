import './modal_window.css';
import { DropdownButton, CloseButton } from '../elements/Buttons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export { useModal, BlockUserWindow }

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
        action: ""
    })
    const [selectedReason, setSelectedReason] = useState("-")

    useEffect(()=>{
        setUserData(user)
    }, [user])

    if (!show){
        return null;
    }

    const reasons_list = [
        "Нецензурная лексика",
        "Порнографические материалы",
        "Насилие",
        "Обман и мошенничество"
    ]

    const duration_list = [
        "Сутки",
        "Неделя",
        "Месяц",
        "Навсегда"
    ]

    const onReasonClick = (event) => {
        setSelectedReason(event.target.title);
        console.log(selectedReason)
    }
    
    const onBlockButtonClick = () => {
        setUserData((prevData) => {
            let newData = {...prevData}
            newData.status = "EXPIRED"
            newData.ban_reason = selectedReason
            return {newData}
        })
        onCloseButtonClick()
    }

    return(
        <div className="shadow__window">
            <div className="modal__window">
                <div className="row">
                    <div className="heading__A2">Блокировка пользователя Ivan</div>
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
                        {/*dropdown for duations*/}
                        </div>
                    }

                    <div className="time__dropdown heading__D2 nunito black">
                        Длительность блокировки
                        <DropdownButton/>
                    </div>
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

