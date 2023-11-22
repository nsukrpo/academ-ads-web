import './sidebar.css';
import './../../styles/text.css';

function Sidebar() {
    return (
            <div className="sidebar__column">
                <li className="sidebar__element active">
                    <a href="/" className = "heading__B1 nav__text">Модерация</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "heading__B1 nav__text">Пользователи</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "heading__B1 nav__text">Чат</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "heading__B1 nav__text">Рассмотренные объявления</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "heading__B1 nav__text">Предупреждения</a>
                </li>
                <li className="sidebar__element">
                    <a href="/" className = "heading__B1 nav__text">Блокировки</a>
                </li>
            </div>
    );
}

export default Sidebar;