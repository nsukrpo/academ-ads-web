import userImg from './../../images/user_avatar.svg';
import { BackButton, NavigationButton } from '../elements/Buttons';
import ComponentList from '../component_list/ComponentList';
import BlockedAdvertisement from '../component_list/BlockedAdvertisement';
import UserProfileTapbar from './UserProfileTapbar';
import './user_profile.css';
import './../../styles/common.css';
import './../../styles/text.css';

export default UserProfile;

function UserProfile() {
    return(
        <div>
            <div className="row">
                <BackButton/>
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
                <NavMenu/>
                {ComponentList("Заблокированные объявления", BlockedAdvertisement)}
            </div>

            <div className="tapbar">
                <button className="button action heading__C2">РАЗБЛОКИРОВАТЬ</button>
                <button className="button action heading__C2" onClick={toggleModal}>ЗАБЛОКИРОВАТЬ</button>
                <button className="button action heading__C2">СЛЕДУЮЩИЙ</button>
            </div>
        </div>
    )
}

function NavMenu() {
    return(
        <div className='column menu'>
            <div className='user__nav__menu'>
                <a href='#' className='user__nav__item active nav__text'>
                    <div className="heading__C2">
                        Заблокированные объявления
                    </div>
                </a>
                <a href="#" className='user__nav__item nav__text'>
                    <div className="heading__C2">
                        Блокировки
                    </div>
                </a>
                <a href="#" className='user__nav__item nav__text'>
                    <div className="heading__C2">
                        Предупреждения
                    </div>
                </a>
            </div>
            <hr className='divider'/>
        </div>
    )
}