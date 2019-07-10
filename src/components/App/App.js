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
            <Page>about us</Page>
        </div>
    )
}

export default App
