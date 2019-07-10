import React from 'react'
import Page from '../Page/Page'
import './App.scss'


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
                        <div className="left-bar"></div>
                        <div className="right-bar"></div>
                    </div>
                </div>
                <p className="footer">© 2019 Vengel Studio. All rights reserved. Icons made by Freepik.</p>
            </Page>
        </div>
    )
}

export default App
