import logoImg from './../../images/academ_ads_logo.svg';
import avatarImg from './../../images/admin_avatar.svg';
import './header.css';
import './../../styles/common.css'
import './../../styles/text.css'
import { useState } from 'react';

function Header () {
    const [isOpen, setIsOpen] = useState(false);

    const onProfileClick = () => {
        setIsOpen((prev) => !prev)

        {isOpen && <div className="header__dropdown">Выйти</div> }
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

                    <button className='profile_button' onClick = {onProfileClick}>
                        <div className="heading__C2 green">admin</div>
                        <img src={avatarImg} alt="Avatar"/>
                    </button>
        </header>
    );
}

export default Header;