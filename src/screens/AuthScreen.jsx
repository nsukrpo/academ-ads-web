import logoImg from './../../images/academ_ads_logo.svg'
import './../../styles/common.css';
import './../../styles/text.css';
import './../styles/auth_screen.css';

function AuthScreen() {

    return (
        <div className="container">
            <div className="logo auth">
                <img src={logoImg} alt="Logo"/>
            </div>

            <div className="auth__form">
                <div className="auth__title__column"> 
                    <div className="auth__title">Academ Ads</div>
                    <div className="heading__C1">admin app</div>
                </div>

                <div className="auth__heading">Вход</div>
                <hr className="auth__line"/>
                <div className="heading__B1 platinum">Войдите в свою учетную запись</div>
                
                

                <button className='auth__button'>
                    <div className="heading__A3">Войти</div>
                </button>
            </div>

        </div>
    )
}

export default AuthScreen;