import React from 'react'
import './Button.scss'

const Button = props => {
    return (
        <button onClick={props.onClick} class='vengel-button'>
            <div className='back' />
            <span>{props.children}</span>
        </button>
    )
}

export default Button
