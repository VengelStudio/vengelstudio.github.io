import React from 'react'
import './WelcomeContent.scss'
import MainSash from '../../Sashes/MainSash/MainSash'
import Button from '../../Reusable/Button/Button'

const WelcomeContent = () => {
    return (
        <div className='welcome-content'>
            <MainSash>
                <span>VENGEL STUDIO</span>
            </MainSash>
            <Button>LEARN MORE</Button>
        </div>
    )
}

export default WelcomeContent
