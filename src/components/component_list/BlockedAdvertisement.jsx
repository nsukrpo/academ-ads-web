import './component.css';
import './../../styles/text.css';
import { getDate } from '../../Constants';

function BlockedAdvertisement({data}) {
    return (
        <div className="advertisement__item">
            <div className="row ad__item">
                <div className="component__content">
                    <div className="heading__A2 salad">{data.header}</div>
                    <div className="heading__D1 nunito">{getDate(data.publicationDate)}</div>
                    <div className="heading__D1 nunito">{data.status}</div>
                    <div className="heading__D1 nunito">{data.description}</div>
                </div>
                <div className="ad__preview"/>
            </div>
        </div>
    )
}

export default BlockedAdvertisement;