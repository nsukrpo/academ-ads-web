import './advertisement.css';
import './../../styles/text.css';
import './../../styles/common.css';
import { BlockAdWindow, useModal } from '../modal_window/BlockAdWindow';
import Carousel from '../elements/Carousel';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AD_STATUS_ON_ADS_BOARD, AD_STATUS_SENT_MODERATION, URL_PATH, isAdBlocked } from '../../Constants';
import axios from 'axios';

const categories = [
    {value: "EDUCATIONAL_STUFF", label: "Учебные принадлежности"},
    {value: "HOUSEHOLD_APPLIANCE", label: "Бытовая техника"},
    {value: "DEVICES", label: "Электроника"},
    {value: "STUDY_SERVICE", label: "Учебная услуга"},
    {value: "OTHER", label: "Разное"},
]

export default function Advertisement() {
    const {id}=useParams(); 
    const [ isShowingModal, toggleModal ] = useModal();

    const [ad, setAd]=useState({
        id: 0,
        header: "",
        description: "",
        price: 0,
        category: 0,
        author: 0,
        publicationDate: "",
        countWatch: 0,
        status: "",
        editDate: ""
    })
    const [author, setAuthor] = useState({
        id: 0,
        name: "",
        avatar: 0,
        regDate: "",
        sales: 0,
        purchaces: 0,
    })
    const [category, setCategory] = useState({
        id: 0,
        name: "",
    })

    useEffect(()=>{
        loadAd()
    }, []);

    useEffect(()=>{
        if(ad.author == 0 || ad.category == 0)
            return
        loadUser(ad.author)
        loadCategory()
    }, [ad])

    const loadAd= async()=>{
        const result = await axios.get(URL_PATH+'/advertisement/'+id)
        setAd(result.data)
    }
    
    const loadUser = async(id)=>{
        const result = await axios.get(URL_PATH+'/user/'+id)
        setAuthor(result.data)
    }
    const loadCategory = async()=>{
        const result = await axios.get(URL_PATH+'/category')
        setCategory(result.data.find(el => el.id==ad.category))
    }
    
    const onPostButtonClick = async(e) => {
        await axios.put(URL_PATH+'/advertisement/'+ad.id, {
            id: ad.id,
            header: ad.header,
            description: ad.description,
            price: ad.price,
            category: ad.category,
            status: AD_STATUS_ON_ADS_BOARD,
        });
        loadAd()
    };

    const onUnblockClick = async(e) => {
        await axios.put(URL_PATH+'/advertisement/'+ad.id, {
            id: ad.id,
            header: ad.header,
            description: ad.description,
            price: ad.price,
            category: ad.category,
            status: AD_STATUS_SENT_MODERATION,
        });
        loadAd()
    };

    return (
        <div className="advertisement">
            <div className="heading__A2">{
                (ad.status == AD_STATUS_SENT_MODERATION && "Новое объявление") ||
                "Рассмотренное объявление"
            }</div>
          
            <div className="ad__row">
                <Carousel>
                    <div className="ad__photo photo1">photo1</div>
                    <div className="ad__photo photo2">photo2</div>
                    <div className="ad__photo photo3">photo3</div>
                    <div className="ad__photo photo4">photo4</div>
                </Carousel>

                <div className="ad__info__column">
                    <div className="heading__A2">{ad.header}</div>
                    <div className="ad__info__label heading__D1 nunito black">{author.name}</div>
                    <div className="ad__info__label heading__D1 nunito black">{ad.publicationDate}</div>
                    <div className="ad__price roboto__48">{ad.price} руб.</div>
                    <div className="ad__category heading__D1 nunito platinum">{category.name}</div>
                    <div className="ad__category heading__D1 nunito platinum">Статус: {ad.status}</div>
                </div>
            </div>
          
            <div className="heading__A2">Описание</div>
            <div className="ad__description heading__D1 nunito">{ad.description}</div>

            <div className="tapbar">
                {(
                    ad.status == AD_STATUS_SENT_MODERATION &&
                    <button className="button action heading__C2" onClick={(e)=>onPostButtonClick(e)}>ОПУБЛИКОВАТЬ</button>
                )}
                {
                    (isAdBlocked(ad.status) &&
                    <button className="button action heading__C2" onClick={onUnblockClick}>РАЗБЛОКИРОВАТЬ</button>) ||
                    <button className="button action heading__C2" onClick={toggleModal}>ЗАБЛОКИРОВАТЬ</button>
                }
            </div>
            <BlockAdWindow
                show={isShowingModal}
                onCloseButtonClick={toggleModal}
                advertisementData={ad}
            />
        </div>
    )
}

