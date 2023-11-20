import './user_info.css';
import './../../styles/common.css';
import './../../styles/text.css';
import userImg from './../../images/user_avatar.svg';
import navigationImg from './../../images/navigation.svg';
import { BackButton, NavigationButton } from '../elements/Buttons';
export default UserInfo;

function UserInfo() {
    return(
        <div className="user">
            <div className="row">
                <BackButton/>

                <div className="user__info">
                    <div className="heading__A2">ПОЛЬЗОВАТЕЛЬ IVAN</div>
                    <div className="row">
                        <img src={userImg} alt="Avatar"/>
                        <div>
                            <div className="heading__D1 nunito">Ivan</div>
                            <div className="heading__D2 nunito">Дата регистрации: 01.01.2022</div>
                            <div className="heading__D2 nunito">Количество продаж: 5</div>
                            <div className="heading__D2 nunito">Количество покупок: 1</div>
                        </div>
                    </div>
                </div>

                <NavigationButton className="nav_button"/>
            </div>
        </div>
    )
}