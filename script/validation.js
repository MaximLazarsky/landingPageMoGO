const formEmail = document.querySelector("#formEmail")
const inputEmail = document.querySelector("#inputEmail")
const buttonSubscribe = document.querySelector("#buttonSubscribe")
let userEmail

function validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}

formEmail.addEventListener("click", event => {
    if (event.target === buttonSubscribe) {
        userEmail = inputEmail.value
        if (!validateEmail(userEmail)) {
            inputEmail.value = "It's not email"
            if (inputEmail.value === "It's not email") {
                inputEmail.classList.add("wrong-email")
            }
        } else {
            inputEmail.classList.remove("wrong-email")
        }
    }
})