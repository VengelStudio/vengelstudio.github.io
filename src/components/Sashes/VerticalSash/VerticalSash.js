import React from 'react'
import './VerticalSash.scss'

const VerticalSash = props => {
    return (
        <div className='vertical-sash'>
            <div className='vertical-sash-back'>
                <div className='middle' />
                <div className='left'>
                    <div className='back' />
                </div>
                <div className='right'>
                    <div className='back' />
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default VerticalSash
