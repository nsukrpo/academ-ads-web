import './component.css';
import './../../styles/text.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_PATH, getDate } from '../../Constants';

function BanItem({data}) {
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
        await axios.get(URL_PATH+'/user/'+id)
          .then((response)=>{
            setUser(response.data)
          })
          .catch(function(error) {
              if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              } else if (error.request) {
                  console.log(error.request);
              } else {
                  console.log('Error', error.message);
              }
          })
    }
    
    return (
        <div className="ban">
            <div className="row">
                <div className="component__content">
                    <div className="heading__A2 salad">Блокировка от {getDate(data.blockDate)}</div>
                    <div className="ban_strike__content_container">
                        <div className="ban_strike__content_item_label">
                            <div className="heading__D1 nunito">Пользователь</div>
                        </div>
                        <div className="ban_strike__content_item_value">
                            <div className="heading__D1 nunito">{user.name}</div>
                        </div>
                        <div className="ban_strike__content_item_label">
                            <div className="heading__D1 nunito">Длительность</div>
                        </div>
                        <div className="ban_strike__content_item_value">
                            <div className="heading__D1 nunito">{data.time} мин.</div>
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

export default BanItem;