import './users_list.css';
import './../../styles/text.css'
import './../../styles/common.css'
import { DropdownButton } from '../elements/Buttons';
import Pagination from '../elements/Pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dropdown from '../elements/Dropdown';
import { NumberInput, TextInput } from '../elements/Inputs';
import { URL_PATH } from '../../Constants';
import axios from 'axios';
import { reasons_options } from '../modal_window/BlockAdWindow';

export default UsersList;

const ban_reason_options = [
    {value: "STRIKES_LIMIT", label: "Превышено количество предупреждений"},
    {value: "GROSS_VIOLATION", label: "Сильное нарушение"},
    {value: "NONE", label: "-"},
]

const status_options = [
    {value: "ACTIVE", label: "Не заблокирован"},
    {value: "EXPIRED", label: "Заблокирован"},
    {value: "NONE", label: "-"},
]

function UsersList() {
    const [username, setUsername] = useState('');
    const [blockAdsNum, setBlockAdsNum] = useState(0);
    const [blockingsNum, setBlockingsNum] = useState(0);
    const [postAdsNum, setPostAdsNum] = useState(0);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleBlockAdsChange = (e) => {
        setBlockAdsNum(e.target.value);
    };
    const handleBlockingsChange = (e) => {
        setBlockingsNum(e.target.value);
    };
    const handlePostAdsChange = (e) => {
        setPostAdsNum(e.target.value);
    };

    const onFilterButtonClick = () => {
        alert(
            "[фильтр] имя пользователя: " + username + 
            "\n[фильтр] причина бана: " + username +
            "\n[фильтр] статус: " + username +
            "\n[фильтр] число отклоненных объявлений: " + blockAdsNum + 
            "\n[фильтр] число блокировок: " + blockingsNum +
            "\n[фильтр] число опубликованных объявлений: " + postAdsNum
        )
    }
    
    return(
        <div className="column users">
            <div className="users__list__header">
                <div className="heading__A2">СПИСОК ПОЛЬЗОВАТЕЛЕЙ</div>

               {/* <div className="filter__zone">
                    <TextInput value={username} onChange={handleUsernameChange} placeholder="имя пользователя"/>
                    
                    <Dropdown options={ban_reason_options} placeholder={"Причина бана"}/>
                    <Dropdown options={status_options} placeholder={"Статус"}/>
                    
                    <NumberInput value={blockAdsNum} onChange={handleBlockAdsChange} placeholder="число отклоненных объявлений"/>
                    <NumberInput value={blockingsNum} onChange={handleBlockingsChange} placeholder="число блокировок"/>
                    <NumberInput value={postAdsNum} onChange={handlePostAdsChange} placeholder="число опубликованных объявлений"/>
                    <button className="button action heading__C2" onClick={onFilterButtonClick}>Применить фильтры</button>
    </div>*/}
            </div>
            <UsersTable/>
            <Pagination/>
        </div>
    )
}


function UsersTable() {
    const [users, setUsers] = useState([])
    const [blockings, setBlockings] = useState([])
    const [ads, setAds] = useState([])
    const [blockAds, setBlockAds] = useState([])

    useEffect(()=>{
        loadUsers()
    }, [])
    useEffect(()=>{
        if (users.length > 0) {
           loadBlockings()
           loadAds()
        }
    }, [users])

    const loadUsers=async()=>{
        const result=await axios.get(URL_PATH + '/user')
        setUsers(result.data)
    }

    const loadBlockings = async()=>{
        users.forEach(async user => {
            const result = await axios.get(URL_PATH+"/blocking?user_id=" + user.id)
            let arr = result.data.filter((ad)=>ad.user===user.id)
            setBlockings(prevState => ({
                ...prevState,
                [user.id]: arr.length
            }));
        });
    }

    const loadAds = async()=>{
        users.forEach(async user => {
            const result = await axios.get(URL_PATH+"/advertisement", {params: {}})
            let arrAds = result.data.filter((ad)=>ad.author===user.id)
            setAds(prevState => ({
                ...prevState,
                [user.id]: arrAds.length
            }));

            let arrBlockedAds = arrAds.filter((ad) => reasons_options.findIndex(item => item.value==ad.status)>=0)
            setBlockAds(prevState => ({
                ...prevState,
                [user.id]: arrBlockedAds.length
            }));
        });
    }

    return(
        <table className='users__table'>
            <thead>
                <tr>
                    <th className='nunito__12'>НИКНЕЙМ</th>
                    <th className='nunito__12'>КОЛИЧЕСТВО ОТКЛОНЕННЫХ ОБЪЯВЛЕНИЙ</th>
                    <th className='nunito__12'>КОЛИЧЕСТВО БЛОКИРОВОК</th>
                    <th className='nunito__12'>КОЛИЧЕСТВО ОПУБЛИКОВАННЫХ ОБЪЯВЛЕНИЙ</th>
                    <th className='nunito__12'>СТАТУС</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr>
                            <td>
                                <Link className='heading__C1' to={"/users/"+user.id}>{user.name}</Link>
                            </td>
                            <td className='heading__C1'>{blockAds[user.id]}</td>
                            <td className='heading__C1'>{blockings[user.id]}</td>
                            <td className='heading__C1'>{ads[user.id]}</td>
                            <td className='heading__C1'>
                                {
                                    (blockings[user.id]==0 && "Не заблокирован") || "Заблокирован"
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

function InputFilters() {
    const filter_inputs_options = [
        "число отклоненных объявлений",
        "число блокировок",
        "число опубликованных объявлений"
    ]

    return filter_inputs_options.map((val) => (
        <div className="filter">
            <div className="heading__D1 nunito grey">{val}</div>
            <DropdownButton/>
        </div>
    )) 
}