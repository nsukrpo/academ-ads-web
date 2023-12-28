import './component.css';
import './../../styles/text.css';
import { useState, useEffect } from 'react';
import ApiClient from '../../services/ApiClient';

function StrikeItem({data}) {
    const [user, setUser] = useState({
            name: "",
            regDate: "",
            sales: 0,
            purchaces: 0,
    })
    useEffect(()=>{
        loadUser(data.user)
    }, [])

    const loadUser = async(id)=>{
        ApiClient.findUser(id, data => setUser(data))
    }

    return (
        <div className="strike">
            <div className="row">
                <div className="component__content">
                    <div className="heading__A2 salad">Предупреждение {data.id}</div>
                    <div className="ban_strike__content_container">
                        <div className="ban_strike__content_item_label">
                            <div className="heading__D1 nunito">Пользователь</div>
                        </div>
                        <div className="ban_strike__content_item_value">
                            <div className="heading__D1 nunito">{user.name}</div>
                        </div>
                        <div className="ban_strike__content_item_label">
                            <div className="heading__D1 nunito">Причина</div>
                        </div>
                        <div className="ban_strike__content_item_value">
                            <div className="heading__D1 nunito">{data.reason}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StrikeItem;