import './sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__column">
                <li className="sidebar__element active">
                    <a href="/" className = "element__text">Модерация</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "element__text">Пользователи</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "element__text">Чат</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "element__text">Рассмотренные объявления</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "element__text">Предупреждения</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "element__text">Блокировки</a>
                </li>
            </div>
        </div>
    );
}

export default Sidebar;