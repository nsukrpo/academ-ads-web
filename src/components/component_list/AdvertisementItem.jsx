import './component.css';
import './../../styles/text.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_PATH } from '../../Constants';

function AdvertisementItem({data}) {
    const [user, setUser] = useState({
            name: "",
            avatar: 0,
            regDate: "",
            sales: 0,
            purchaces: 0,
    })

    useEffect(()=>{
        loadUser(data.author)
    }, [])

    const loadUser = async(id)=>{
        
        const result = await axios.get(URL_PATH+'/user/'+id)
        setUser(result.data)
    }

    return (
        <div className="advertisement__item">
            <Link to={"/advertisement/"+data.id} style={{ textDecoration: 'none' }}>
                <div className="row ad__item">
                    <div className="component__content">
                        <div className="heading__A2 salad">{data.header}</div>
                        <div className="heading__D1 nunito">{user.name}</div>
                        <div className="heading__D1 nunito">{data.description}</div>
                    </div>
                    <div className="ad__preview"/>
                </div>
            </Link>
        </div>
    )
}

export default AdvertisementItem;