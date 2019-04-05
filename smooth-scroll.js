let isProgress = false
let oldScroll = 0
let targetY = 0
const scrollTo = y => {
    let { scrollY } = window
    scrollY = Math.ceil(scrollY)
    let isScrollingDown = (scrollY - targetY) < 0
    if (scrollY !== y) {
        let newScroll = isScrollingDown ? scrollY + 1 : scrollY - 1
        window.scrollTo(0, newScroll)
        window.requestAnimationFrame(() => {
            scrollTo(newScroll)
        })
    }
    else {
        isProgress = false
    }
}
const getNewY = e => {
    isProgress = true
    let height = window.innerHeight
    let currentScroll = e.target.scrollingElement.scrollTop // Y axis value of scroll
    if (oldScroll <= currentScroll) {
        targetY = (targetY <= height) ? targetY + height : targetY
        console.log('down')
    } else if (oldScroll > currentScroll) {
        console.log('up')
        targetY = (targetY >= height) ? targetY - height : targetY
    }
    console.log(targetY)
    oldScroll = e.target.scrollingElement.scrollTop
    return targetY
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', e => {
        if (isProgress === false) {
            let newY = getNewY(e)
            scrollTo(newY)
        }
    })
})
