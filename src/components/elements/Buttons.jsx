import './../../styles/common.css';
import './../../styles/buttons.css';
import backArrowImg from './../../images/back_arrow.svg'
import navigationImg from './../../images/navigation.svg'
import searchImg from './../../images/search.svg'
import rightArrowImg from './../../images/right_arrow.svg'
import leftArrowImg from './../../images/left_arrow.svg'


export function SearchButton() {
    return(
        <img src={searchImg} alt="Back"/>
    )
}

export function DropdownButton() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59422 8.23106C9.42193 8.40334 9.18852 8.5 8.94499 8.5C8.70145 8.5 8.46804 8.40318 8.29575 8.23106C6.63806 6.57336 2.28622 2.22152 0.956376 0.89168C0.890689 0.825993 0.871127 0.727379 0.906662 0.641643C0.942195 0.555906 1.02581 0.5 1.11856 0.5H4.1754C4.31884 0.5 4.45689 0.553953 4.56235 0.651261C5.30889 1.33926 8.37174 4.16222 8.87443 4.6256C8.9142 4.66211 8.97483 4.66211 9.01461 4.6256C9.51746 4.16222 12.5801 1.33926 13.3267 0.651261C13.4321 0.554116 13.5702 0.5 13.7136 0.5H16.7705C16.8632 0.5 16.9468 0.555906 16.9824 0.641643C17.0179 0.727379 16.9982 0.825993 16.9327 0.89168L9.59328 8.23106H9.59422Z" fill="#5E5E5E"/>
        </svg>
    )
}

export function ArrowsButton() {
    return(
        <div className="arrows">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.58907 5.49999C9.75901 5.49848 9.91089 5.39333 9.9721 5.23474C10.0334 5.07626 9.99165 4.89637 9.86683 4.78094L5.30722 0.608968C5.14874 0.463677 4.90536 0.463677 4.74687 0.608968L0.187253 4.78094C0.0623188 4.89639 0.0206747 5.0765 0.082099 5.23521C0.143524 5.39381 0.295642 5.49884 0.465804 5.5L9.58907 5.49999Z" fill="#5E5E5E"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.465124 0.500012C0.295192 0.501516 0.143313 0.606668 0.0821018 0.765261C0.0207926 0.923742 0.0625516 1.10363 0.187369 1.21906L4.74698 5.39103C4.90546 5.53632 5.14884 5.53632 5.30733 5.39103L9.86695 1.21906C9.99188 1.10361 10.0335 0.923502 9.9721 0.764787C9.91068 0.606191 9.75856 0.501158 9.5884 0.5L0.465124 0.500012Z" fill="#5E5E5E"/>
            </svg>
        </div>
    )
}

export function ActionButton() {
    const options = ["ЗАБЛОКИРОВАТЬ", "РАЗБЛОКИРОВАТЬ"]

    return(
        <div className="action__button">{options[0]}</div>
    )
}

export function LeftArrowButton() {
    return(
        <button className='small__button'>
            <img src={leftArrowImg} alt="Back"/>
        </button>
    )
}

export function RightArrowButton() {
    return(
        <button className='small__button'>
            <img src={rightArrowImg} alt="Back"/>
        </button>
    )
}

export function BackButton() {
    return (
        <button className='small__button'>
            <img src={backArrowImg} alt="Back"/>
        </button>
    )
}

export function NavigationButton() {
    return (
        <button className='small__button nav__button'>
            <img src={navigationImg} alt="Navigation"/>
        </button>
    )
}
