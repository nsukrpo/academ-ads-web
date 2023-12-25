import './sidebar.css';
import './../../styles/text.css';
import { Link } from 'react-router-dom';

export {pages, Sidebar}

const pages = {
    moderation: "Модерация",
    users: "Пользователи",
    resolved_ads: "Рассмотренные объявления",
    strikes: "Предупреждения",
    blockings: "Блокировки"

}

export default function Sidebar({curPage}) {
    return (
            <div className="sidebar__column">
                <li className={"sidebar__element" + (curPage===pages.moderation ? " active" : "")}>
                    <Link to="/moderation" className = "heading__B1 nav__text">Модерация</Link>
                </li>
                <li className={"sidebar__element" + (curPage===pages.users ? " active" : "")}>
                    <Link to="/users" className = "heading__B1 nav__text">Пользователи</Link>
                </li>
                <li className={"sidebar__element" + (curPage===pages.resolved_ads ? " active" : "")}>
                    <Link to="/resolved-ads" className = "heading__B1 nav__text">Рассмотренные объявления</Link>
                </li>
                <li className={"sidebar__element" + (curPage===pages.strikes ? " active" : "")}>
                    <Link to="/strikes" className = "heading__B1 nav__text">Предупреждения</Link>
                </li>
                <li className={"sidebar__element" + (curPage===pages.blockings ? " active" : "")}>
                    <Link to="/blockings" className = "heading__B1 nav__text">Блокировки</Link>
                </li>
            </div>
    );
}