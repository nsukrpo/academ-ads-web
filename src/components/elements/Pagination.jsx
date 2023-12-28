import { LeftArrowButton, RightArrowButton } from "./Buttons";
import './pagination.css';

export default Pagination;

function Pagination({usersPerPage, totalUsers, activePage, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    let totalPages = pageNumbers.length;
    return(
        <div className="pagination">
            <div className="heading__D2 nunito light__grey">{totalPages} Total</div>
            <div className="pagination__row">
                {activePage === 1 ? <LeftArrowButton/> : <LeftArrowButton onClick={()=>paginate(activePage-1)}/>}
                {pageNumbers.map(number => (
                    number === activePage
                    ?   <div className="page__num active heading__D2 nunito">
                            <a onClick={() => paginate(number)} href="#">{number}</a>
                        </div>
                    :   <div className="page__num heading__D2 nunito">
                            <a onClick={() => paginate(number)} href="#">{number}</a> 
                        </div>
                ))}
                {activePage === totalPages ? <RightArrowButton/> : <RightArrowButton onClick={()=>paginate(activePage+1)}/>}
            </div>
        </div>
    )
}