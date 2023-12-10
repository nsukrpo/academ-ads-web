import userImg from './../../images/user_avatar.svg';
import { BackButton, NavigationButton } from '../elements/Buttons';
import ComponentList from '../component_list/ComponentList';
import './user_profile.css';
import './../../styles/common.css';
import './../../styles/text.css';
import { BlockUserWindow, useModal } from '../modal_window/BlockUserWindow';
import { useEffect, useState } from 'react';
import BlockedAdvertisement from '../component_list/BlockedAdvertisement';
import BanItem from '../component_list/BanItem';
import StrikeItem from '../component_list/StrikeItem';
import { useNavigate } from 'react-router-dom';

export default UserProfile;

function UserProfile() {
    const [ isBlockedAds, setIsBlockedAds] = useState(true);
    const [ isBlockings, setIsBlockings] = useState(false);
    const [ isStrikes, setIsStrikes] = useState(false);
    const [ title, setTitle ] = useState("")
    const [ component, setComponent ] = useState(null)
    const [ isShowingModal, toggleModal ] = useModal();

    useEffect(()=>{
        if (isBlockedAds) {
            setTitle("Заблокированные объявления")
            setComponent(BlockedAdvertisement)
        } else if (isBlockings) {
            setTitle("Блокировки")
            setComponent(BanItem)
        } else if (isStrikes){
            setTitle("Предупреждения")
            setComponent(StrikeItem)
        }
    }, [isBlockedAds, isBlockings, isStrikes])

    let navigate = useNavigate()

    const user = {
        name: "Ivan",
        blocked_ads_num: 1,
        ban_reason: "???",
        blocks_num: 0,
        ads_num: 3,
        status: "ACTIVE",
        action: "Заблокировать"
    }

    const onBlockedAdsClick = () => {
        setIsBlockedAds(true)
        setIsBlockings(false)
        setIsStrikes(false)
    }

    const onBlockingsClick = () => {
        setIsBlockedAds(false)
        setIsBlockings(true)
        setIsStrikes(false)
    }

    const onStrikesClick = () => {
        setIsBlockedAds(false)
        setIsBlockings(false)
        setIsStrikes(true)
    }

    const onBackClick = () => {
        navigate("/users")
    }

    return(
        <div>
            <div className="row">
                <BackButton onClick={onBackClick}/>
                <div className="column user">
                    <div className="heading__A2">ПОЛЬЗОВАТЕЛЬ IVAN</div>
                    <div className="row">
                        <img src={userImg} alt="Avatar"/>
                        <div className='column info'>
                            <div className="heading__D1 nunito">Ivan</div>
                            <div className="heading__D2 nunito">Дата регистрации: 01.01.2022</div>
                            <div className="heading__D2 nunito">Количество продаж: 5</div>
                            <div className="heading__D2 nunito">Количество покупок: 1</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='horizontal__line'/>
            
            <div className="column blocks">
                <div className='column menu'>
                    <div className='user__nav__menu'>
                        <div className={'user__nav__item ' + (isBlockedAds ? 'active' : '') + ' nav__text'}
                            onClick={onBlockedAdsClick}>
                            <div className="heading__C2">
                                Заблокированные объявления
                            </div>
                        </div>
                        <div className={'user__nav__item ' + (isBlockings ? 'active' : '') + ' nav__text'}
                            onClick={onBlockingsClick}>
                            <div className="heading__C2">
                                Блокировки
                            </div>
                        </div>
                        <div href="#" className={'user__nav__item ' + (isStrikes ? 'active' : '') + ' nav__text'}
                            onClick={onStrikesClick}>
                            <div className="heading__C2">
                                Предупреждения
                            </div>
                        </div>
                    </div>
                    <hr className='divider'/>
                </div>
                <ComponentList title={title} itemFunc={component}/>
            </div>

            <div className="tapbar">
                {user.status=="EXPIRED" &&
                    <button className="button action heading__C2">РАЗБЛОКИРОВАТЬ</button>
                }
                {user.status=="ACTIVE" &&
                    <button className="button action heading__C2" onClick={toggleModal}>ЗАБЛОКИРОВАТЬ</button>
                }
                <button className="button action heading__C2">СЛЕДУЮЩИЙ</button>
            </div>

            <BlockUserWindow
                show={isShowingModal}
                onCloseButtonClick={toggleModal}
                user={user}
            />
        </div>
    )
}