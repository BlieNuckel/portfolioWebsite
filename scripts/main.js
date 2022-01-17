// document.getElementById("projects-link").addEventListener("click", function () {})

// document.getElementById("about-link").addEventListener("click", function () {})

// document.getElementById("contact-link").addEventListener("click", function () {})

window.addEventListener('scroll', (event) => {
    activeSectionUpdater()
})

document.getElementById("submit-button").addEventListener('click', (event) => {
    console.log('Clicked')
    submitCall()
})

async function submitCall() {

    let fullName = document.getElementById('fullname').value
    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('messagetxt').value

    let json = { fullName, email, subject, message }

    let response = null;

    if (fullName != '' && email != '' && subject != '' && message != '') {
        console.log('check passed')
        response = await fetch('https://portfolio-hook-handler.herokuapp.com/emailsubmit', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json)
        })
    }

}

function activeSectionUpdater() {

    let newActive = ''
    let elems = []

    elems.push(document.getElementById("about"))
    elems.push(document.getElementById("projects"))
    elems.push(document.getElementById("contact"))

    elems.forEach(element => {
        const rect = element.getBoundingClientRect()

        if (element.id === "contact") {
            if (rect['y'] <= window.innerHeight / 2) {
                newActive = element.id
            }
        } else {
            if (rect['y'] <= 30) {
                newActive = element.id
            }
        }


    });

    changeActive(newActive + '-link')
}

function changeActive(id) {
    let elementList = ["projects-link", "about-link", "contact-link"]

    elementList.forEach(element => {
        document.getElementById(element).style.setProperty("--after-height", "0px")
    });

    document.getElementById(id).style.setProperty('--after-height', '4px')
}