// Nav button
const primaryNav = document.querySelector('#primary-nav')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', (event) => {
    const visibility = primaryNav.getAttribute('data-visible')
    event.stopPropagation()
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

window.addEventListener('click', event => {
    if (event.currentTarget !== primaryNav && event.currentTarget !== navToggle) {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

const projects = document.querySelectorAll('.item')
const panels = document.querySelectorAll('.panel')
const closeBtns = document.querySelectorAll('.close')
const header = document.querySelector('header')

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

header.addEventListener('click', event => {
    console.log('clicked')
    panels.forEach(panel => {
        if (panel.classList.contains('show')) {
            panel.classList.remove('show')
        }
    })
})