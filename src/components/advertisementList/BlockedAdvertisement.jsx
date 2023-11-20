import './advertisement.css';
import './../../styles/text.css';

function BlockedAdvertisement() {
    return (
        <div className="advertisement">
            <div className="row">
                <div className="ad__content">
                    <div className="heading__A2 salad">Заголовок объявления</div>
                    <div className="heading__D1 nunito">Дата блокировки: 02.02.2023</div>
                    <div className="heading__D1 nunito">Причина: Нецензурная лексика</div>
                    <div className="heading__D1 nunito">Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание </div>
                </div>
                <div className="ad__preview"/>
            </div>
        </div>
    )
}

export default BlockedAdvertisement;