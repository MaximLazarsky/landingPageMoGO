const accordion = document.querySelector("#accordion")
const accordionItemsContent = document.querySelectorAll(".accordionItemsContent")
const accordionItems = document.querySelectorAll(".accordionItems")
const accordionArrows = document.querySelectorAll(".accordion-arrows")

let numAccElemetn = +window.localStorage.getItem("savedNumAccItem") || 0
let objTargetArreys = {
    activeItem: accordionItems,
    activeArrow: accordionArrows,
    activeItemContent: accordionItemsContent
}

function removeClass(targetObj, firstNumber, secondNumber) {
    for (let element in targetObj) {
        targetObj[element][firstNumber].classList.remove(element)
        targetObj[element][secondNumber].classList.remove(element)
    }
}

function addClass(targetObj, number) {
    for (let element in targetObj) {
        targetObj[element][number].classList.add(element)
    }
}

function showAccardionItem() {
    if (numAccElemetn === 0) {
        removeClass(objTargetArreys, 1, 2)
    } else if (numAccElemetn === 1) {
        removeClass(objTargetArreys, 0, 2)
    } else if (numAccElemetn === 2) {
        removeClass(objTargetArreys, 0, 1)
    }
    addClass(objTargetArreys, numAccElemetn)
}

accordion.addEventListener("click", event => {
    if (event.target.hasAttribute("data-number")) {
        numAccElemetn = +event.target.getAttribute("data-number")
    }

    showAccardionItem()
    window.localStorage.setItem("savedNumAccItem", numAccElemetn)
})

window.addEventListener("load", event => {
    showAccardionItem()
})