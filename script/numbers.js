const numbers = document.querySelectorAll(".number")
const numbersSection = document.querySelector("#numbers")
let defaultNumber = 0
let numbersArr = []

function createArr(domElement, targetArr) {
    for (let element of domElement) {
        targetArr.push(+element.innerText)
    }
}

function growUpNumbers(targetArr, domElement) {
    for (let i = 0; i < targetArr.length; i++) {
        if (defaultNumber < targetArr[i]) {
            defaultNumber++
            domElement[i].innerText = defaultNumber
        }
    }
}

function changeNumbers() {
    let pointStartEvent = true

    window.addEventListener("scroll", event => {
        if (pointStartEvent === true) {
            let windowScrollPoint = document.documentElement.scrollTop
            if (windowScrollPoint >= 1000) {
                pointStartEvent = false
                setInterval(() => {
                    growUpNumbers(numbersArr, numbers)
                }, 100)
            }
        }
    })
}

function taskManeger() {
    createArr(numbers, numbersArr)
    changeNumbers()
}

taskManeger()