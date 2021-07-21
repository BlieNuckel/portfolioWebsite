// document.getElementById("projects-link").addEventListener("click", function () {})

// document.getElementById("about-link").addEventListener("click", function () {})

// document.getElementById("contact-link").addEventListener("click", function () {})

window.addEventListener('scroll', (event) => {
    hashUpdater()
})

function hashUpdater() {
    let newHash = ''

    if (document.documentElement.scrollTop < 578) {
        newHash = 'about'
    } else if (document.documentElement.scrollTop > 578 && document.documentElement.scrollTop < 1813) {
        newHash = 'projects'
    } else if (document.documentElement.scrollTop > 1813) {
        newHash = 'contact'
    }

    changeActive(newHash + '-link')
}

function changeActive(id) {
    console.log(id)
    let elementList = ["projects-link", "about-link", "contact-link"]

    elementList.forEach(element => {
        document.getElementById(element).style.setProperty("--after-height", "0px")
    });

    document.getElementById(id).style.setProperty('--after-height', '4px')
}