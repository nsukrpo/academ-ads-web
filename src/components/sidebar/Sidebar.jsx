import './sidebar.css';
import './../../styles/text.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
            <div className="sidebar__column">
                <li className="sidebar__element active">
                    <Link to="/moderation" className = "heading__B1 nav__text">Модерация</Link>
                </li>
                <li className="sidebar__element">
                    <Link to="/users" className = "heading__B1 nav__text">Пользователи</Link>
                </li>
                <li className="sidebar__element">
                    <Link to="resolved-ads" className = "heading__B1 nav__text">Рассмотренные объявления</Link>
                </li>
                <li className="sidebar__element">
                    <Link to="/strikes" className = "heading__B1 nav__text">Предупреждения</Link>
                </li>
                <li className="sidebar__element">
                    <Link to="/blockings" className = "heading__B1 nav__text">Блокировки</Link>
                </li>
            </div>
    );
}

export default Sidebar;