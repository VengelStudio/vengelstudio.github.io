import React from 'react'
import Page from '../Page/Page'
import './App.scss'
import bartek from "../../images/bartek.svg"
import lukasz from "../../images/lukasz.svg"
import github from "../../images/icons/github.svg"
import linkedin from "../../images/icons/linkedin.svg"
import email from "../../images/icons/email.svg"

const App = () => {
    return (
        <div className='main'>
            <Page>
                <div className="welcome-content">
                    <div className="bar">
                        <p>VENGEL STUDIO</p>
                    </div>
                    <button className='learn-more-btn'>LEARN MORE</button>
                </div>
            </Page>
            <Page>projects</Page>
            <Page>
                <div className="us-content">
                    <div className="two-bars">
                        <div className="left-bar">
                            <img className='logo' src={bartek}></img>
                            <p className='name'>Bartosz Kępka</p>
                            <p>Automation and robotics student in Warsaw.</p>
                            <div className="icons">
                                <a href="mailto:bartoszkepka1999@gmail.com"><img src={email}></img></a>
                                <a href="https://www.linkedin.com/in/bartosz-k%C4%99pka-118325181/"><img src={linkedin}></img></a>
                                <a href="https://github.com/Dezann"><img src={github}></img></a>
                            </div>
                        </div>
                        <div className="right-bar">
                            <img className='logo' src={lukasz}></img>
                            <p className='name'>Łukasz Blachnicki</p>
                            <p>Applied computer science student in Wroclaw.</p>
                            <div className="icons">
                                <a href="mailto:lblachnicki@gmail.com"><img src={email}></img></a>
                                <a href="https://www.linkedin.com/in/%C5%82ukasz-blachnicki/"><img src={linkedin}></img></a>
                                <a href="https://github.com/Kartm"><img src={github}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer">© 2019 Vengel Studio. All rights reserved. Icons made by Freepik.</p>
            </Page>
        </div>
    )
}

export default App
