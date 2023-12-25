import logoImg from './../images/academ_ads_logo.svg'
import { Link } from 'react-router-dom'
import './../styles/common.css'
import './../styles/text.css'
import './../styles/auth_screen.css'

const Main = () => {
    return(
        <div className="container">
            <div className="logo auth">
                <img src={logoImg} alt="Logo"/>
            </div>
            <div className="auth">
                <div className="auth__title__column"> 
                    <div className="auth__title">Academ Ads</div>
                    <div className="heading__C1">admin app</div>
                </div>
                <Link to="/auth/" style={{ textDecoration: 'none' }} className='button auth heading__A3'>
                    Вход
                </Link>
                
            </div>
        </div>
)}

export default Main