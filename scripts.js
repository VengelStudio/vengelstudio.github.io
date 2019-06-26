document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div.project').forEach((project, i) => {
        project
            .querySelector('.project-title')
            .addEventListener('click', () => {
                project.querySelector('.project-logo').style.display = 'none'
                project.querySelector('.project-title').style.display = 'none'
                project.querySelector('.project-description').style.display =
                    'flex'
            })
        project
            .querySelector('.project-description button:last-child')
            .addEventListener('click', () => {
                project.querySelector('.project-logo').style.display = 'flex'
                project.querySelector('.project-title').style.display = 'flex'
                project.querySelector('.project-description').style.display =
                    'none'
            })
    })
})
