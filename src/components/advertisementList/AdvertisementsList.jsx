import AdvertisementItem from './AdvertisementItem';
import './advertisement.css';

function AdvertisementsList() {
    let num = 5
    return (
        <div className="advertisement__list">
            <div className="heading__A2">Объявления, ожидающие рассмотрения</div>
            <AdvertisementItem/>
            <AdvertisementItem/>
            <AdvertisementItem/>
            <AdvertisementItem/>
            <AdvertisementItem/>
            <AdvertisementItem/>
        </div>
    )
}

export default AdvertisementsList;