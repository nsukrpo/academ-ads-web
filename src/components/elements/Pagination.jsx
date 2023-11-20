import { LeftArrowButton, RightArrowButton } from "./Buttons";
import './pagination.css';

export default Pagination;

function Pagination() {
    return(
        <div className="pagination">
            <div className="heading__D2 nunito light__grey">10 Total</div>
            <div className="pagination__row">
                <LeftArrowButton/>
                <div className="page__num active heading__D2 nunito">1</div>
                <div className="page__num heading__D2 nunito">2</div>
                <div className="page__num heading__D2 nunito">3</div>
                <div className="page__skip heading__D2 nunito">...</div>
                <div className="page__num heading__D2 nunito">10</div>
                <RightArrowButton/>
            </div>
        </div>
    )
}