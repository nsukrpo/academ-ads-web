import './component.css';

function ComponentList({title, itemFunc}) {
    return (
        <div className="content__list">
            <div className="heading__A2">{title}</div>
            {itemFunc}
            {itemFunc}
        </div>
    )
}

export default ComponentList;