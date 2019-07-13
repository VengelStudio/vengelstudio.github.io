import React from 'react'
import './Button.scss'

const Button = props => {
    return (
        <button onClick={props.onClick} className='vengel-button'>
            <div className='back'>
                <div className='bottom-left' />
                <div className='top-right' />
            </div>
            <span>{props.children}</span>
        </button>
    )
}

export default Button
