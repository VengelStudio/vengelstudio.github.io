// let panels = ['main', 'projects', 'us']
// let scrollTargetPanelIndex = 0

// let oldScroll = 0
// let isScrollingInProgress = false

// let currentScroll = 0
// let targetScroll = 0

// const setScrollTarget = e => {
//     let { scrollTop } = e.target.scrollingElement
//     if (oldScroll <= scrollTop) {
//         scrollTargetPanelIndex =
//             scrollTargetPanelIndex === 2 ? 2 : scrollTargetPanelIndex + 1
//     } else if (oldScroll > scrollTop) {
//         scrollTargetPanelIndex =
//             scrollTargetPanelIndex === 0 ? 0 : scrollTargetPanelIndex - 1
//     }
//     console.log(scrollTargetPanelIndex)
//     oldScroll = scrollTop
// }

// const scrollTo = targetY => {
//     let { scrollY } = window
//     let diff = Math.round(Math.sqrt(Math.abs(scrollY - targetY)))

//     isScrollingInProgress = true

//     if (scrollY > targetY) {
//         scrollY = scrollY - diff
//     } else if (scrollY < targetY) {
//         scrollY = scrollY + diff
//     }
//     window.scrollTo(0, scrollY)

//     if (scrollY !== targetY) {
//         console.log(scrollY, targetY)
//         window.requestAnimationFrame(() => {
//             scrollTo(targetY)
//         })
//     } else {
//         isScrollingInProgress = false
//     }
// }
const panels = ['main', 'projects', 'us']
let scrollData = {
    inProgress: false,
    currentScroll: 0,
    panelTargetIndex: 0
}

// const scrollTo = targetY => {
//     if() {
//         //todo needs scrolling, recursion
//         scrollData.currentScroll = newScroll
//     } else {
//         scrollData.inProgress = false
//     }
// }

const getNewPanelIndex = () => {
    scrollData.currentScroll = e.target.scrollingElement.scrollTop
    if (oldScroll <= scrollData.currentScroll) {
        console.log('down')
    } else if (oldScroll > scrollData.currentScroll) {
        console.log('up')
    }
    console.log(scrollTargetPanelIndex)
}

const scrollToPanel = index => {
    scrollData.inProgress = true
    const panel = panels[index]
    const targetY = document.querySelector(`.section.${panel}`).offsetTop
    //scrollTo(targetY)
}

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, scrollData.currentScroll)
    window.addEventListener(
        'scroll',
        e => {
            if (scrollData.inProgress) {
                window.scrollTo(0, scrollData.currentScroll)
            } else {
                scrollData.panelTargetIndex = getNewPanelIndex(e)
                scrollToPanel(scrollData.panelTargetIndex)
            }
            e.preventDefault()
            return false
        },
        true
    )
})
