import { LeftArrowButton, RightArrowButton } from "./Buttons";
import './pagination.css';

export default Pagination;

function Pagination({activePage, paginate}) {
    const pageNumbers = [1,2,3,4,5,6,7,8,9,10];
    let totalPages = pageNumbers.length;

    return(
        <div className="pagination">
            <div className="pagination__row">
                {activePage === 1 ? <LeftArrowButton/> : <LeftArrowButton onClick={()=>paginate(activePage-1)}/>}
                {pageNumbers.map(number => (
                    number === activePage
                    ?   <div className="page__num active heading__D2 nunito">
                            <a onClick={() => paginate(number)} href="#" style={{ textDecoration: 'none', textEmphasisColor: 'white'}}>{number}</a>
                        </div>
                    :   <div className="page__num heading__D2 nunito">
                            <a onClick={() => paginate(number)} href="#" style={{ textDecoration: 'none' }}>{number}</a> 
                        </div>
                ))}
                {activePage === totalPages ? <RightArrowButton/> : <RightArrowButton onClick={()=>paginate(activePage+1)}/>}
            </div>
        </div>
    )
}