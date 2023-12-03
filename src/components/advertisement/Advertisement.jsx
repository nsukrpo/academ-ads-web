import './advertisement.css';
import './../../styles/text.css';
import './../../styles/common.css';
import { BlockAdWindow, useModal } from '../modal_window/BlockWindow';
import Carousel from '../elements/Carousel';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Advertisement() {
    const [adData, setAdData] = useState({
        name: "Заголовок",
        status: "status1",
        reason: "-",
    })
    const [ isShowingModal, toggleModal ] = useModal();
    let navigate = useNavigate();

    useEffect(()=>{
        console.log(adData)
    }, [adData])

    const onPostButtonClick = (e) => {
        setAdData(prevAdData => {
            let newAdData = { ...prevAdData }
            newAdData.status = "ADVERTISEMENT_CONTENT_MODERATION_PASSED"
            return {newAdData}
        })
        navigate("/moderation")
    };

    return (
        <div className="advertisement">
            <div className="heading__A2">Новое объявление</div>
          
            <div className="ad__row">
                <Carousel>
                    <div className="ad__photo photo1">photo1</div>
                    <div className="ad__photo photo2">photo2</div>
                    <div className="ad__photo photo3">photo3</div>
                    <div className="ad__photo photo4">photo4</div>
                </Carousel>

                <div className="ad__info__column">
                    <div className="heading__A2">Заголовок объявления</div>
                    <div className="ad__info__label heading__D1 nunito black">Иван</div>
                    <div className="ad__info__label heading__D1 nunito black">02.02.2023</div>
                    <div className="ad__price roboto__48">844 руб.</div>
                    <div className="ad__category heading__D1 nunito platinum">category 1</div>
                </div>
            </div>
          
            <div className="heading__A2">Описание</div>
            <div className="ad__description heading__D1 nunito">Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание</div>

            <div className="tapbar">
                <button className="button action heading__C2" onClick={(e)=>onPostButtonClick(e)}>ОПУБЛИКОВАТЬ</button>
                <button className="button action heading__C2" onClick={toggleModal}>ЗАБЛОКИРОВАТЬ</button>
            </div>
            <BlockAdWindow
                show={isShowingModal}
                onCloseButtonClick={toggleModal}
                advertisementData={adData}
            />
        </div>
    )
}

