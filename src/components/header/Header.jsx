import logoImg from './../../images/academ_ads_logo.svg';
import './header.css';
import './../../styles/common.css'
import './../../styles/text.css'
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

function Header () {
    let navigate = useNavigate()

    const onProfileClick = () => {
        AuthService.logout()
        navigate("/auth")
    }

    return (
        <header className="header__row">
            <div className="logo">
                <img src={logoImg} alt="Logo"/>
            </div>
            <div className="header__title__column"> 
                <div className="header__title">Academ Ads</div>
                <div className="heading__C1">admin app</div>
            </div>
            <button className='button logout heading__C2 green' onClick = {onProfileClick}>Выйти</button>
        </header>
    );
}

export default Header;