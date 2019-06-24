const scrollTo = targetY => {
    let { scrollY } = window
    let isScrollingDown = scrollY - targetY < 0
    let delta = Math.round(Math.sqrt(Math.abs(scrollY - targetY)))
    if (scrollY !== targetY) {
        let newScroll = isScrollingDown ? scrollY + delta : scrollY - delta
        window.scrollTo(0, newScroll)
        window.requestAnimationFrame(() => {
            scrollTo(targetY)
        })
    } else {
        isProgress = false
    }
}

let lastScroll = window.scrollY

const getDirection = e => {
    let newScroll = window.scrollY
    let result = 0
    if (newScroll > lastScroll) {
        //down
        result = 1
    } else if (newScroll < lastScroll) {
        //up
        result = -1
    }
    lastScroll = newScroll
    return result
}

let targetY = 0
const height = window.innerHeight
const getNewTargetY = e => {}

let inProgress = false
let currentScroll = 0

const onScroll = e => {
    if (inProgress === true) {
        //window.scrollTo(0, currentScroll)
        e.preventDefault()
        inProgress = false
    } else {
        inProgress = true
        //targetY = getNewTargetY(e)
        console.log(getDirection(e))
        scrollTo(currentScroll)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    //scrollTo(currentScroll)
    //window.addEventListener('scroll', onScroll)
})
