document.getElementById("projects-link").addEventListener("click", function () {})

document.getElementById("about-link").addEventListener("click", function () {})

document.getElementById("contact-link").addEventListener("click", function () {})

window.addEventListener('scroll', (event) => {
    hashUpdater()
})

function hashUpdater() {
    let oldHash = window.location.hash

    if (document.documentElement.scrollTop < 578) {
        window.location.hash = 'about'
    } else if (document.documentElement.scrollTop > 578 && document.documentElement.scrollTop < 1813) {
        window.location.hash = 'projects'
    } else if (document.documentElement.scrollTop > 1813) {
        window.location.hash = 'contact'
    }

    if (oldHash != window.location.hash) {
        changeActive(window.location.hash.slice(1) + '-link')
    }
}

function changeActive(id) {
    console.log(id)
    let elementList = ["projects-link", "about-link", "contact-link"]

    elementList.forEach(element => {
        document.getElementById(element).style.setProperty("--after-height", "0px")
    });

    document.getElementById(id).style.setProperty('--after-height', '4px')
}