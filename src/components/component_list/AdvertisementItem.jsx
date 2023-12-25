import './component.css';
import './../../styles/text.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_PATH, getDate } from '../../Constants';

function AdvertisementItem({data}) {
    const [user, setUser] = useState({
            name: "",
            avatar: 0,
            regDate: "",
            sales: 0,
            purchaces: 0,
    })
    const [photoSrc, setPhotoSrc] = useState("")

    useEffect(()=>{
        loadUser(data.author)
        loadPhoto(data.id)
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
    const loadPhoto = async(id)=>{
        await axios.get(URL_PATH+'/media/photos/'+id)
            .then((response) => setPhotoSrc(`data:image/jpeg;base64,${response.data}`))
            .catch(function(error){
                if (error.response){
                    setPhotoSrc("./../../images/default_photo.svg")
                }
            })
    }

    return (
        <div className="advertisement__item">
            <Link to={"/advertisement/"+data.id} style={{ textDecoration: 'none' }}>
                <div className="row ad__item">
                    <div className="component__content">
                        <div className="heading__A2 salad">{data.header}</div>
                        <div className="heading__D1 nunito">{user.name}</div>
                        <div className="heading__D1 nunito">{getDate(data.publicationDate)}</div>
                        <div className="heading__D1 nunito">{data.status}</div>
                        <div className="heading__D1 nunito">{data.description}</div>
                    </div>
                    <div className="ad__preview">
                        <img src={photoSrc} alt="Advertisement Photo"/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default AdvertisementItem;