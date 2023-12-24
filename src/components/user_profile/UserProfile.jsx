import userImg from './../../images/user_avatar.svg';
import { BackButton } from '../elements/Buttons';
import './user_profile.css';
import './../../styles/common.css';
import './../../styles/text.css';
import { BlockUserWindow, useModal } from '../modal_window/BlockUserWindow';
import { useEffect, useState } from 'react';
import BlockedAdvertisement from '../component_list/BlockedAdvertisement';
import BanItem from '../component_list/BanItem';
import StrikeItem from '../component_list/StrikeItem';
import { useNavigate, useParams } from 'react-router-dom';
import { URL_PATH, isAdBlocked } from '../../Constants';
import axios from 'axios';

export default UserProfile;

function UserProfile() {
    let navigate = useNavigate()
    const {id}=useParams()

    const [ isShowingModal, toggleModal ] = useModal();
    const [title, setTitle] = useState("Заблокированные объявления")
    const [blockedAds, setBlockedAds] = useState([])
    const [blockings, setBlockings] = useState([])
    const [strikes, setStrikes] = useState([])
    const[user, setUser] = useState({
        id: 0,
        name: "",
        regDate: "",
        sales: 0,
        purchaces: 0,
    })

    useEffect(()=>{
        loadUser(id)
        loadBlockedAds(id)
        loadBlockings(id)
        loadStrikes(id)
    }, [])

    const loadUser = async(id)=>{
        const result = await axios.get(URL_PATH+'/user/'+id)
        setUser(result.data)
    }
    const loadBlockedAds = async(id)=>{
        const result = await axios.get(URL_PATH+"/advertisement", {params: {}})
        setBlockedAds(result.data.filter((ad)=> ad.author==id && isAdBlocked(ad.status)))
    }
    const loadBlockings = async(id)=>{
        const result = await axios.get(URL_PATH+'/blocking?user_id='+id)
        setBlockings(result.data)
    }
    const loadStrikes = async(id)=>{
        const result = await axios.get(URL_PATH+'/strike?user_id='+id)
        setStrikes(result.data)
    }

    const onBlockedAdsClick = () => {
        setTitle("Заблокированные объявления")
    }
    const onBlockingsClick = () => {
        setTitle("Блокировки")
    }
    const onStrikesClick = () => {
        setTitle("Предупреждения")
    }
    const onUnblockClick=async() => {
        await axios.delete(URL_PATH+'/blocking/'+blockings[0].id, { params: { id: blockings[0].id } })
        loadUser(id)
        loadBlockings(id)
    }
    const onBackClick = () => {
        navigate("/users")
    }

    return(
        <div>
            <div className="row">
                <BackButton onClick={onBackClick}/>
                <div className="column user">
                    <div className="heading__A2">ПОЛЬЗОВАТЕЛЬ {user.name}</div>
                    <div className="row">
                        <img src={userImg} alt="Avatar"/>
                        <div className='column info'>
                            <div className="heading__D1 nunito">{user.name}</div>
                            <div className="heading__D2 nunito">Дата регистрации: {user.regDate}</div>
                            <div className="heading__D2 nunito">Количество продаж: {user.sales}</div>
                            <div className="heading__D2 nunito">Количество покупок: {user.purchaces}</div>
                            <div className="heading__D2 nunito">Статус: 
                                {
                                    (blockings.length==0 && " Не заблокирован") || " Заблокирован"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='horizontal__line'/>
            
            <div className="column blocks">
                <div className='column menu'>
                    <div className='user__nav__menu'>
                        <div className={'user__nav__item ' + (title === "Заблокированные объявления" ? 'active' : '') + ' nav__text'}
                            onClick={onBlockedAdsClick}>
                            <div className="heading__C2">
                                Заблокированные объявления
                            </div>
                        </div>
                        <div className={'user__nav__item ' + (title === "Блокировки" ? 'active' : '') + ' nav__text'}
                            onClick={onBlockingsClick}>
                            <div className="heading__C2">
                                Блокировки
                            </div>
                        </div>
                        <div href="#" className={'user__nav__item ' + (title === "Предупреждения" ? 'active' : '') + ' nav__text'}
                            onClick={onStrikesClick}>
                            <div className="heading__C2">
                                Предупреждения
                            </div>
                        </div>
                    </div>
                    <hr className='divider'/>
                </div>
                <div className="content__list">
                    <div className="heading__A2">{title}</div>
                    {   
                        (title === "Заблокированные объявления" &&
                            blockedAds.map((item) => (<BlockedAdvertisement data={item}/>))) ||
                        (title === "Блокировки" &&
                            blockings.map((item) => (<BanItem data={item}/>))) ||
                        (title === "Предупреждения" &&
                            strikes.map((item) => (<StrikeItem data={item}/>)))
                    }
                </div>
            </div>

            <div className="tapbar">
                {
                    (blockings.length === 0 && 
                    <button className="button action heading__C2" onClick={toggleModal}>ЗАБЛОКИРОВАТЬ</button>) ||
                    <button className="button action heading__C2" onClick={onUnblockClick}>РАЗБЛОКИРОВАТЬ</button>
                }
            </div>

            <BlockUserWindow
                show={isShowingModal}
                onCloseButtonClick={toggleModal}
                user={user}
            />
        </div>
    )
}