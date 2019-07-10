import React from 'react'
import './MainSash.scss'

const MainSash = props => {
    return (
        <div className='main-sash'>
            <div className='main-sash-back' />
            {props.children}
        </div>
    )
}

export default MainSash
