import React from 'react'
import './WelcomeContent.scss'
import MainSash from '../../Sashes/MainSash/MainSash'

const WelcomeContent = () => {
    return (
        <div className='welcome-content'>
            <MainSash>
                <span>VENGEL STUDIO</span>
            </MainSash>
            <button className='learn-more-btn'>LEARN MORE</button>
        </div>
    )
}

export default WelcomeContent
