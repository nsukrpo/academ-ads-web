import './users_list.css';
import './../../styles/text.css'
import './../../styles/common.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { reasons_options } from '../modal_window/BlockAdWindow';
import ApiClient from '../../services/ApiClient';
import Pagination from '../elements/Pagination';

export default UsersList;

function UsersList() {
    
    return(
        <div className="column users">
            <div className="users__list__header">
                <div className="heading__A2">СПИСОК ПОЛЬЗОВАТЕЛЕЙ</div>
            </div>
            <UsersTable/>
        </div>
    )
}

function UsersTable() {
    const [users, setUsers] = useState([])
    const [blockings, setBlockings] = useState([])
    const [ads, setAds] = useState([])
    const [blockAds, setBlockAds] = useState([])
    const [activePage, setActivePage] = useState(1);

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
        ApiClient.findAllUsers(data =>
            setUsers(data)
        )
    }
    
    const loadBlockings = async()=>{
        users.forEach(async user => {
            ApiClient.findUserBlocking(user.id, (data) => {
                let arr = data.filter(ad => ad.user===user.id)
                setBlockings(prevState => ({
                    ...prevState,
                    [user.id]: arr.length
                }));
            })
        });
    }

    const loadAds = async()=>{
        users.forEach(async user => {
            ApiClient.findAllAds(null, data =>{
                let arrAds = data.filter(ad => ad.author===user.id)
                setAds(prevState => ({
                    ...prevState,
                    [user.id]: arrAds.length
                }))

                let arrBlockedAds = arrAds.filter((ad) => reasons_options.findIndex(item => item.value===ad.status)>=0)
                setBlockAds(prevState => ({
                    ...prevState,
                    [user.id]: arrBlockedAds.length
                }));
            })
        });
    }

    const paginate = (pageNumber) => setActivePage(pageNumber);

    let usersPerPage = 6; 

    let sliceLeftBound = (activePage - 1) * usersPerPage;
    let sliceRightBound = Math.min(activePage * usersPerPage, users.length);

    return(
        <div>
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
                        users.slice(sliceLeftBound, sliceRightBound).map((user) => (
                            <tr>
                                <td>
                                    <Link className='heading__C1' to={"/users/"+user.id}>{user.name}</Link>
                                </td>
                                <td className='heading__C1'>{blockAds[user.id]}</td>
                                <td className='heading__C1'>{blockings[user.id]}</td>
                                <td className='heading__C1'>{ads[user.id]}</td>
                                <td className='heading__C1'>
                                    {
                                        (blockings[user.id]===0 && "Не заблокирован") || "Заблокирован"
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                activePage={activePage}
                paginate={paginate}
            />
        </div>
    )
}