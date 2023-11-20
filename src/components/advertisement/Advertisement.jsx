import './advertisement.css';
import './../../styles/text.css';
import AdTapbar from './AdTapbar';

function Advertisement() {
    return (
        <div className="advertisement">
            <div className="heading__A2">Новое объявление</div>
          
            <div className="ad__row">
                <div className="ad__photos">
                    <div className="right__arrow"/>
                    <div className="left__arrow"/>
                </div>

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

            <AdTapbar/>
        </div>
    )
}

export default Advertisement;