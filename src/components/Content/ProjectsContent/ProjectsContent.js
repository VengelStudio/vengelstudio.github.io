import React from 'react'
import './ProjectsContent.scss'
import HorizontalSash from '../../Sashes/HorizontalSash/HorizontalSash'
import BookmarkPurifierLogo from '../../../images/logos/bookmark-purifier.svg'
import CardmanLogo from '../../../images/logos/cardman-multiplayer.svg'
import PoznajmySieLogo from '../../../images/logos/poznajmy-sie.svg'

const ProjectsContent = () => {
    return (
        <div className='projects-content'>
            <HorizontalSash
                bgColor={'#3F3F3F'}
                backColor={'#0F0F0F'}
                githubLink={'github.com/VengelStudio/CardmanMultiplayer'}
                website={{
                    title: 'Live game',
                    link: 'cardman-multiplayer.herokuapp.com'
                }}
            >
                <img src={CardmanLogo} alt='' />
                <span>Cardman Multiplayer</span>
            </HorizontalSash>
            <HorizontalSash
                bgColor={'#457D52'}
                backColor={'#174D24'}
                githubLink={'github.com/VengelStudio/BookmarkChecker'}
                website={{
                    title: 'Chrome Web Store',
                    link: 'tinyurl.com/y2kxnva3'
                }}
            >
                <span>Bookmark Checker</span>
                <img src={BookmarkPurifierLogo} alt='' />
            </HorizontalSash>
            <HorizontalSash
                bgColor={'#8D3A63'}
                backColor={'#551E39'}
                githubLink={'github.com/VengelStudio/PoznajmySie'}
                website={{ title: 'Play Store', link: 'tinyurl.com/y1s3a3' }}
            >
                <img src={PoznajmySieLogo} alt='' />
                <span>Poznajmy się</span>
            </HorizontalSash>
        </div>
    )
}

export default ProjectsContent
