import './component.css';

function ComponentList(title, advertisemetFunc) {
    return (
        <div className="content__list">
            <div className="heading__A2">{title}</div>
            {advertisemetFunc()}
            {advertisemetFunc()}
        </div>
    )
}

export default ComponentList;