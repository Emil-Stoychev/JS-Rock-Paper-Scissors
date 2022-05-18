import { loadScreen } from "./loadScreenStructure.js"

export function skinsStructure(username, skinCount) {

    let main = document.querySelector('.mainForAll')

    let div = document.createElement('div')
    div.setAttribute('class', 'skinsSructure')

    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'settingsMainText')
    h2.textContent = 'Skins'

    main.appendChild(h2)

    let img = document.createElement('img')
    img.setAttribute('src', '/images/hands.png')
    img.setAttribute('class', 'skinsImages')

    let buttonLeft = document.createElement('button')
    buttonLeft.setAttribute('class', 'leftAndRight')
    buttonLeft.textContent = '<'

    buttonLeft.addEventListener('click', (e) => changeImg(e.currentTarget, username))

    let buttonRight = document.createElement('button')
    buttonRight.setAttribute('class', 'leftAndRight')
    buttonRight.textContent = '>'

    buttonRight.addEventListener('click', (e) => changeImg(e.currentTarget, username))

    div.appendChild(buttonLeft)
    div.appendChild(img)
    div.appendChild(buttonRight)

    let divForBtns = document.createElement('div')
    divForBtns.setAttribute('class', 'optionBtns')

    let button = document.createElement('button')
    button.textContent = 'SELECT'

    button.addEventListener('click', (e) => loadScreen(0, username))

    divForBtns.appendChild(button)

    main.replaceChildren(div)
    main.appendChild(divForBtns)

}

function changeImg(side, username) {

    let img = document.querySelector('.skinsImages')

    let count = 0

    let imagesArr = ['/images/hands.png', '/images/hands2.png']

    let button = document.querySelector('.optionBtns button')

    if (side.textContent == '>') {
        count++
        if (count > imagesArr.length) {
            count = imagesArr.length
        }
        img.setAttribute('src', imagesArr[count])
        button.addEventListener('click', (e) => loadScreen(count, username))
    } else {
        count--
        if (count < 0) {
            count = 0
        }
        img.setAttribute('src', imagesArr[count])
        button.addEventListener('click', (e) => loadScreen(count, username))
    }
}