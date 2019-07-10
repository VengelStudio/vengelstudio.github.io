import React from 'react'
import Page from '../Page/Page'
import './App.scss'
import ProjectsContent from '../Content/ProjectsContent/ProjectsContent'
import UsContent from '../Content/UsContent/UsContent'
import WelcomeContent from '../Content/WelcomeContent/WelcomeContent'

const App = () => {
    return (
        <div className='main'>
            <Page>
                <WelcomeContent />
            </Page>
            <Page>
                <ProjectsContent />
            </Page>
            <Page>
                <UsContent />
            </Page>
        </div>
    )
}

export default App
