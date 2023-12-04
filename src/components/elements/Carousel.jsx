import { Children, cloneElement, useEffect, useState } from 'react';
import './carousel.css';
import { LeftArrowButton, RightArrowButton } from '../elements/Buttons';

const PAGE_WIDTH = 500

export default function Carousel ({children}) {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftClick = () => {
        console.log("left button")
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }
    const handleRightClick = () => {
        console.log("right button")

        setOffset((currentOffset) =>  {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length-1))
            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setOffset(0)
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: PAGE_WIDTH+"px",
                        maxWidth: PAGE_WIDTH+"px",
                    }
                })
            })
        )
    }, [])

    return (
        <div className="main__container">
            <LeftArrowButton onClick={handleLeftClick}/>
            <div className="window">
                <div className="all__pages__container"
                    style={{
                        transform: 'translateX(' + offset + 'px)'
                    }}
                >{pages}</div>
            </div>
            <RightArrowButton onClick={handleRightClick}/>
        </div>
    )
}