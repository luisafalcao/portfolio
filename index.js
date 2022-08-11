// Nav button
const primaryNav = document.querySelector('#primary-nav')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

const projects = document.querySelectorAll('.item')
const panels = document.querySelectorAll('.panel')
const closeBtns = document.querySelectorAll('.close')

projects.forEach(project => project.addEventListener('click', event => {
    panels.forEach(panel => {
        if (panel.dataset.project === event.currentTarget.dataset.project) {
            panel.classList.add('show')
        }
    })
}))

closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', event => {
    event.currentTarget.closest('.panel').classList.remove('show')
}))
