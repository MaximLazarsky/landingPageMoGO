const slider = document.querySelector("#slider")
const rightBtn = document.querySelector("#rightNavigation")
const leftBtn = document.querySelector("#leftNavigation")
const sliderElements = document.querySelectorAll(".elementSlider")
let numSlide = +window.localStorage.getItem("savedNumSlide") || 1

function showSlide(num) {
    if (num < 1) {
        numSlide = sliderElements.length
    } else if (num > sliderElements.length) {
        numSlide = 1
    }

    for (let i = 0; i < sliderElements.length; i++) {
        sliderElements[i].classList.remove("activeSlide")
    }
    sliderElements[numSlide - 1].classList.add("activeSlide")
}

slider.addEventListener("click", event => {
    if (event.target === rightBtn) {
        numSlide = numSlide + 1
    } else if (event.target === leftBtn) {
        numSlide = numSlide - 1
    }
    showSlide(numSlide)
    window.localStorage.setItem("savedNumSlide", numSlide)
})

window.addEventListener("load", event => {
    showSlide(numSlide)
})