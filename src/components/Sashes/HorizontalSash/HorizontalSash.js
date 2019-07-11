import React from 'react'
import './HorizontalSash.scss'
import LeftSash from '../../../assets/images/sash.svg'

const HorizontalSash = props => {
    let reversed = props.props || false
    return (
        <div className='horizontal-sash'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1262.904'
                height='336.494'
                viewBox='0 0 1262.904 336.494'
            >
                <defs />
                <g
                    id='Group_52'
                    data-name='Group 52'
                    transform='translate(0 -172)'
                >
                    <path
                        id='bottom'
                        style={{ fill: props.backColor }}
                        d='M10629,1774.494h1262.9v-35.223l-30.365-31.579L10629,1711.336Z'
                        transform='translate(-10629 -1266)'
                    />
                    <path
                        id='top'
                        style={{ fill: props.backColor }}
                        d='M11891.9,1438v43.2l-61.651,145.9-51.745-43.84,71.868-135.831Z'
                        transform='translate(-10629 -1266)'
                    />
                    <path
                        id='front'
                        style={{ fill: props.bgColor }}
                        d='M-9367-966h-1262v-300h1262l-70,150,70,150v0h0v0Z'
                        transform='translate(10629 1438)'
                    />
                </g>
            </svg>
            <span>{props.children}</span>
        </div>
    )
}

export default HorizontalSash
