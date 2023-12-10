import './component.css';
import './../../styles/text.css';
import { Link } from 'react-router-dom';

function AdvertisementItem() {
    return (
        <Link className="advertisement__item" to="/advertisement/id" style={{ textDecoration: 'none' }}>
            <div className="row">
                <div className="component__content">
                    <div className="heading__A2 salad">Заголовок объявления</div>
                    <div className="heading__D1 nunito">Ivan</div>
                    <div className="heading__D1 nunito"
                        
                    >Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание</div>
                </div>
                <div className="ad__preview"/>
            </div>
        </Link>
    )
}

export default AdvertisementItem;