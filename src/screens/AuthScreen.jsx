import logoImg from './../images/academ_ads_logo.svg'
import './../styles/common.css';
import './../styles/text.css';
import './../styles/auth_screen.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { isAdmin } from '../Constants';

export function AuthScreen() {
    let navigate=useNavigate();

    useEffect(()=>{
        AuthService.logout()
    },[])
    
    const [error, setError] = useState("")
    const [user, setUser] = useState({
        login:"",
        password:"",
    });

    const {
        register, handleSubmit,
        formState: {errors, isValid},
    } = useForm({ mode: "onBlur" });

    const onChange=(e) =>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const handleLogin = (e) => {
        AuthService.login(user.login, user.password)
            .then(()=>{
                const curRole = AuthService.getCurrentRole()
                if(isAdmin(curRole)){
                    navigate('/moderation')
                    window.location.reload()
                } else {
                    setError("У вас недостаточно прав для входа")
                }
            },
            error => {
                console.log(error.toString())
            })
    }
    
    return (
        <div className="container">
            <div className="logo auth">
                <img src={logoImg} alt="Logo"/>
            </div>

            <div className="auth">
                <div className="auth__title__column"> 
                    <div className="auth__title">Academ Ads</div>
                    <div className="heading__C1">admin app</div>
                </div>

                <div className="auth__heading">Вход</div>
                <hr className="auth__line"/>
                <div className="heading__B1 platinum">Войдите в свою учетную запись</div>
                
                <div className="heading__C1 red">{error}</div>
                <form onSubmit={handleSubmit(handleLogin)} className='auth__form'>
                    <input 
                        type="text" 
                        className="auth__input  heading__A1" 
                        placeholder='Логин'
                        name = "login" 
                        {...register("login", {
                            onBlur: (e) => {onChange(e)},
                            required: "Поле обязательно к заполнению",
                        })}
                    />
                    <div className="text-danger" style={{height:40}}>
                        {errors?.firstname && <p>{errors?.firstname?.message || "Error!"}</p>}
                    </div>

                    <input 
                        type="password" 
                        className="auth__input heading__A1"
                        placeholder='Пароль'
                        name = "password"
                        {...register("password", {
                            onBlur: (e) => {onChange(e)},
                            required: "Поле обязательно к заполнению",
                        })}
                    />
                    <div className="text-danger" style={{height:40}}>
                        {errors?.lastname && <p>{errors?.login?.message || "Error!"}</p>}
                    </div>

                    <div className="text-danger" style={{height:40}}>
                        {errors?.phoneNum && <p>{errors?.password?.message || "Error!"}</p>}
                    </div>
                    <button className='button auth heading__A3'>Войти</button>
                </form>
            </div>
        </div>
    )
}

export function TextInput({id, value, onChange, placeholder}) {
    return (
        <input
            id={id}
            type="text" 
            value={value} 
            onChange={onChange}
            className='input user__search heading__D1 nunito grey'
            placeholder={placeholder}
        />
    )
}