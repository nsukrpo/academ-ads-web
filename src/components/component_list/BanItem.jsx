import './component.css';
import './../../styles/text.css';

function BanItem() {
    return (
        <div className="ban">
            <div className="row">
                <div className="component__content">
                    <div className="heading__A2 salad">Блокировка от 01.01.1970</div>
                    <div className="ban_strike__content_container">
                        <div className="ban_strike__content_item_label">
                            <div className="heading__D1 nunito">Пользователь</div>
                        </div>
                        <div className="ban_strike__content_item_value">
                            <div className="heading__D1 nunito">Petr</div>
                        </div>
                        <div className="ban_strike__content_item_label">
                            <div className="heading__D1 nunito">Длительность</div>
                        </div>
                        <div className="ban_strike__content_item_value">
                            <div className="heading__D1 nunito">5 дней</div>
                        </div>
                        <div className="ban_strike__content_item_label">
                            <div className="heading__D1 nunito">Причина</div>
                        </div>
                        <div className="ban_strike__content_item_value">
                            <div className="heading__D1 nunito">Нагота в объявлениях</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BanItem;