import './users_list.css';
import './../../styles/text.css'
import './../../styles/common.css'
import { DropdownButton, ActionButton} from '../elements/Buttons';
import Pagination from '../elements/Pagination';
import { Link } from 'react-router-dom';
import { BlockUserWindow, useModal } from '../modal_window/BlockUserWindow';
import { useEffect, useState } from 'react';
import Dropdown from '../elements/Dropdown';
import { NumberInput, TextInput } from '../elements/Inputs';
import { URL_PATH } from '../../Constants';


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

                <div className="filter__zone">
                    <TextInput value={username} onChange={handleUsernameChange} placeholder="имя пользователя"/>
                    
                    <Dropdown options={ban_reason_options} placeholder={"Причина бана"}/>
                    <Dropdown options={status_options} placeholder={"Статус"}/>
                    
                    <NumberInput value={blockAdsNum} onChange={handleBlockAdsChange} placeholder="число отклоненных объявлений"/>
                    <NumberInput value={blockingsNum} onChange={handleBlockingsChange} placeholder="число блокировок"/>
                    <NumberInput value={postAdsNum} onChange={handlePostAdsChange} placeholder="число опубликованных объявлений"/>
                    <button className="button action heading__C2" onClick={onFilterButtonClick}>Применить фильтры</button>
                </div>
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

    const [user, setUser] = useState({
        name: "Anna",
        blocked_ads_num: 1,
        ban_reason: "???",
        blocks_num: 0,
        ads_num: 3,
        status: "EXPIRED",
        action: "Заблокировать"
    })

    useEffect(()=>{
        loadUsers()
        users.forEach(element => {
            loadBlockings(element.id)
        });
    }, [])

    const loadUsers=async()=>{
        const result=await axios.get(URL_PATH+'/user')
        setUsers(result.data)
    }
    const loadBlockings = async(id)=>{
        const result = await axios.get(URL_PATH+'/blocking?user_id='+id)
        setBlockings(result.data)
    }
    const loadAds = async(id)=>{}

    return(
        <table className='users__table'>
            <thead>
                <tr>
                    <th className='nunito__12'>НИКНЕЙМ</th>
                    <th className='nunito__12'>КОЛИЧЕСТВО ОТКЛОНЕННЫХ ОБЪЯВЛЕНИЙ</th>
                    <th className='nunito__12'>КОЛИЧЕСТВО БЛОКИРОВОК</th>
                    <th className='nunito__12'>КОЛИЧЕСТВО ОБЪЯВЛЕНИЙ</th>
                    {/*<th className='nunito__12'>СТАТУС</th>*/}
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr>
                            <td>
                                <Link className='heading__C1' to={"/users/"+consumer.id}>{user.name}</Link>
                            </td>
                            <td className='heading__C1'>{blockAds.length}</td>
                            <td className='heading__C1'>{blockings.length}</td>
                            <td className='heading__C1'>{ads.length}</td>
                            {/*<td className='heading__C1'>{user.status}</td>*/}
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