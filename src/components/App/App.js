import React from 'react'
import Page from '../Page/Page'
import './App.scss'

const App = () => {
    return (
        <div className='main'>
            <Page>main page</Page>
            <Page>projects</Page>
            <Page>about us</Page>
        </div>
    )
}

export default App
