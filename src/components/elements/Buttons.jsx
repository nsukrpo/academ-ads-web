import './../../styles/common.css';
import './../../styles/buttons.css';
import backArrowImg from './../../images/back_arrow.svg'
import navigationImg from './../../images/navigation.svg'
import searchImg from './../../images/search.svg'
import rightArrowImg from './../../images/right_arrow.svg'
import leftArrowImg from './../../images/left_arrow.svg'
import optionButtonImg from './../../images/option_button.svg'
import closeImg from './../../images/close.svg';

export function SearchButton() {
    return(
        <img src={searchImg} alt="Search"/>
    )
}

export function DropdownButton() {
    return(
        <button className='button small '>
            <img src={optionButtonImg} alt="Option"/>
        </button>
    )
}

export function ActionButton() {
    const options = ["ЗАБЛОКИРОВАТЬ", "РАЗБЛОКИРОВАТЬ"]

    return(
        <div className="button action">{options[0]}</div>
    )
}

export function LeftArrowButton({className, onClick}) {
    return(
        <button className={'button small '+className} onClick={onClick}>
            <img src={leftArrowImg} alt="Left"/>
        </button>
    )
}

export function RightArrowButton({className, onClick}) {
    return(
        <button className={'button small '+className} onClick={onClick}>
            <img src={rightArrowImg} alt="Right"/>
        </button>
    )
}

export function BackButton() {
    return (
        <button className='button small '>
            <img src={backArrowImg} alt="Back"/>
        </button>
    )
}

export function NavigationButton() {
    return (
        <button className='button small nav__button'>
            <img src={navigationImg} alt="Navigation"/>
        </button>
    )
}

export function CloseButton({onClick}) {
    return (
        <button className='button small close' onClick={onClick}>
            <img src={closeImg} alt="Close"/>
        </button>
    )
}
