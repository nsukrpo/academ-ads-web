import './modal_window.css';
import { DropdownButton } from '../elements/Buttons';
import closeImg from './../../images/close.svg';

export {BlockAdWindow, BlockUserWindow};

function BlockAdWindow() {
    const reasons_list = [
        "Нецензурная лексика",
        "Порнографические материалы",
        "Насилие",
        "Обман и мошенничество"
    ]

    return(
        <div className="modal__window">
            <div className="row">
                <div className="heading__A2">Блокировка объявления</div>
                <button className='small__button close'>
                    <img src={closeImg} alt="Close"/>
                </button>
            </div>
            <hr className="divider"/>
            
            <div className="block_config_column">
                <div className="heading__B1">Укажите причину блокировки:</div>
                
                <div className="reasons_list">
                    {
                        reasons_list.map((val) => (
                            <li className='reason__element heading__D1 nunito black'>
                                {val}
                            </li>
                        ))
                    }
                </div>
            </div>
            
            <hr className="divider"/>
            <div className="buttons__row">
                <div className="button cancel heading__B1 black">ОТМЕНА</div>
                <div className="button block heading__B1">ЗАБЛОКИРОВАТЬ</div>
            </div>
        </div>
    )
}

function BlockUserWindow() {
    return(
        <div className="modal__window">
            <div className="row">
                <div className="heading__A2">Блокировка пользователя Ivan</div>
                <button className='small__button close'>
                    <img src={closeImg} alt="Close"/>
                </button>
            </div>
            <hr className="divider"/>
            
            <div className="block_config_column">
                <div className="heading__B1">Укажите причину блокировки:</div>
                <div className="reason__input heading__D2 nunito black">...</div>
                <div className="time__dropdown heading__D2 nunito black">
                    Длительность блокировки
                    <DropdownButton/>
                </div>
            </div>
            
            <hr className="divider"/>
            <div className="buttons__row">
                <div className="button cancel heading__B1 black">ОТМЕНА</div>
                <div className="button block heading__B1">ЗАБЛОКИРОВАТЬ</div>
            </div>
        </div>
    )
}


