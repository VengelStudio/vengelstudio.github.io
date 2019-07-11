import React from 'react'
import './ProjectsContent.scss'
import HorizontalSash from '../../Sashes/HorizontalSash/HorizontalSash'
import BookmarkPurifierLogo from '../../../images/logos/bookmark-purifier.svg'
import CardmanLogo from '../../../images/logos/cardman-multiplayer.svg'
import PoznajmySieLogo from '../../../images/logos/poznajmy-sie.svg'

const ProjectsContent = () => {
    return (
        <div className='projects-content'>
            <HorizontalSash bgColor={'#3F3F3F'} backColor={'#0F0F0F'}>
                <img src={CardmanLogo} />
                <span>Cardman Multiplayer</span>
            </HorizontalSash>
            <HorizontalSash bgColor={'#457D52'} backColor={'#174D24'}>
                <span>Bookmark Checker</span>
                <img src={BookmarkPurifierLogo} />
            </HorizontalSash>
            <HorizontalSash bgColor={'#8D3A63'} backColor={'#551E39'}>
                <img src={PoznajmySieLogo} />
                <span>Poznajmy się</span>
            </HorizontalSash>
        </div>
    )
}

export default ProjectsContent
