import './users_list.css';
import './../../styles/text.css'
import './../../styles/common.css'
import {SearchButton, DropdownButton, LeftArrowButton, RightArrowButton, ActionButton} from '../elements/Buttons';
import Pagination from '../elements/Pagination';
import { Link } from 'react-router-dom';
import { BlockUserWindow, useModal } from '../modal_window/BlockUserWindow';
import { useEffect, useState } from 'react';

export default UsersList;

function UsersList() {
    return(
        <div className="column users">
            <div className="users__list__header">
                <div className="heading__A2">СПИСОК ПОЛЬЗОВАТЕЛЕЙ</div>

                <div className="filter__zone">
                    <div className="filter user__search">
                        <div className="heading__D1 nunito grey">имя пользователя</div>
                        <SearchButton/>
                    </div>
                    <DropdownFilters/>
                    <InputFilters/>
                </div>
            </div>
            <UsersTable/>
            <Pagination/>
        </div>
    )
}


function UsersTable() {
    const [ isShowingModal, toggleModal ] = useModal();
    const [ action, setAction ] = useState(()=>{});

    const thead_names = [
        "НИКНЕЙМ",
        "КОЛИЧЕСТВО ОТКЛОНЕННЫХ ОБЪЯВЛЕНИЙ",
        "ПРИЧИНА БАНА",
        "КОЛИЧЕСТВО БЛОКИРОВОК",
        "КОЛИЧЕСТВО ОБЪЯВЛЕНИЙ", 
        "СТАТУС",
        "ДЕЙСТВИЯ"
    ]

    const user = {
        name: "Ivan",
        blocked_ads_num: 1,
        ban_reason: "???",
        blocks_num: 0,
        ads_num: 3,
        status: "ACTIVE",
        action: "Заблокировать"
    }

    const arr = [user, user, user, user, user, user, user]

    const onUnblockAction = () => {
    }

    useEffect(()=>{
        if (user.status == "ACTIVE") {
            setAction(()=>{
                return toggleModal
            })
        } else if (user.status == "EXPIRED") {
            setAction(onUnblockAction)
        }
    }, [user.status])  

    return(
        <table className='users__table'>
            <thead>
                <tr>
                    {
                        thead_names.map((val) => (
                            <th className='nunito__12'>{val}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((user) => (
                        <tr>
                            <td>
                                <Link className='heading__C1' to="/users/id">{user.name}</Link>
                            </td>
                            <td className='heading__C1'>{user.blocked_ads_num}</td>
                            <td className='heading__C1'>{user.ban_reason}</td>
                            <td className='heading__C1'>{user.blocks_num}</td>
                            <td className='heading__C1'>{user.ads_num}</td>
                            <td className='heading__C1'>{user.status}</td>
                            <td className='heading__C1'><ActionButton onClick={action} option={user.action}/></td>
                        </tr>
                    ))
                }
            </tbody>
            <BlockUserWindow
                show={isShowingModal}
                onCloseButtonClick={toggleModal}
                user={user}
            />
        </table>
    )
}
 
export function DropdownFilters() {
    const filter_dropdown_options = [
        "причина бана",
        "статус"
    ]

    return filter_dropdown_options.map((val) => (
        <div className="filter">
            <div className="heading__D1 nunito grey">{val}</div>
        </div>
    ))
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