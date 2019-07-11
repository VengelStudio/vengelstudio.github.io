import React from 'react'
import bartek from '../../../images/bartek.svg'
import lukasz from '../../../images/lukasz.svg'
import github from '../../../images/icons/github.svg'
import linkedin from '../../../images/icons/linkedin.svg'
import email from '../../../images/icons/email.svg'
import './UsContent.scss'
import VerticalSash from '../../Sashes/VerticalSash/VerticalSash'

const UsContent = () => {
    return (
        <React.Fragment>
            <div className='us-content'>
                <div className='two-bars'>
                    <VerticalSash>
                        <img className='logo' src={bartek} alt='' />
                        <p className='name'>Bartosz Kępka</p>
                        <p>Automation and robotics student in Warsaw.</p>
                        <div className='icons'>
                            <a href='mailto:bartoszkepka1999@gmail.com'>
                                <img src={email} alt='' />
                            </a>
                            <a href='https://www.linkedin.com/in/bartosz-k%C4%99pka-118325181/'>
                                <img src={linkedin} alt='' />
                            </a>
                            <a href='https://github.com/Dezann'>
                                <img src={github} alt='' />
                            </a>
                        </div>
                    </VerticalSash>
                    <VerticalSash>
                        <img className='logo' src={lukasz} alt='' />
                        <p className='name'>Łukasz Blachnicki</p>
                        <p>Applied computer science student in Wroclaw.</p>
                        <div className='icons'>
                            <a href='mailto:lblachnicki@gmail.com'>
                                <img src={email} alt='' />
                            </a>
                            <a href='https://www.linkedin.com/in/%C5%82ukasz-blachnicki/'>
                                <img src={linkedin} alt='' />
                            </a>
                            <a href='https://github.com/Kartm'>
                                <img src={github} alt='' />
                            </a>
                        </div>
                    </VerticalSash>
                </div>
            </div>
            <div className='footer'>
                © 2019 Vengel Studio. All rights reserved. Icons made by
                Freepik.
            </div>
        </React.Fragment>
    )
}

export default UsContent
