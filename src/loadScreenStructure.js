import { gameStructure } from "./gameStructure.js"
import { settingsStructure } from "./settingsStructure.js"
import { skinsStructure } from "./skinsStructure.js"

export function loadScreen(skinCount, saveUsername) {

    let main = document.querySelector('.mainForAll')

    let mainH1TextEl = document.createElement('h1')
    mainH1TextEl.setAttribute('class', 'mainTextH1')
    mainH1TextEl.textContent = 'Rock, Paper & Scissors'

    let inputName = document.createElement('input')
    inputName.setAttribute('type', 'text')
    inputName.setAttribute('placeholder', 'Username')
    inputName.setAttribute('id', 'usernameInput')

    let divForBtns = document.createElement('div')
    divForBtns.setAttribute('class', 'optionBtns')

    for (let i = 0; i < 3; i++) {

        let button = document.createElement('button')

        if (i == 0) {
            button.textContent = 'Start'
        } else if (i == 1) {
            button.textContent = 'Settings'
        } else if (i == 2) {
            button.textContent = 'Skins'
        }

        divForBtns.appendChild(button)
    }

    main.replaceChildren(mainH1TextEl)
    main.appendChild(inputName)
    main.appendChild(divForBtns)

    setTimeout(() => {
        document.body.style.animation = 'moveIt 100s linear infinite'
    }, 1500);

    let startBtn = document.querySelector('.optionBtns').childNodes[0]
    let settingsBtn = document.querySelector('.optionBtns').childNodes[1]
    let skinsBtn = document.querySelector('.optionBtns').childNodes[2]

    let username = document.querySelector('#usernameInput')

    if (saveUsername != undefined) {
        username.value = saveUsername
    }

    startBtn.addEventListener('click', (e) => {
        let username = document.querySelector('#usernameInput')

        if (skinCount != 0 && skinCount != 1) {
            skinCount = 0
        }

        if (username.value != '' && username.value.length >= 3) {
            gameStructure(username.value, skinCount)
        }
    })

    settingsBtn.addEventListener('click', (e) => {
        let username = document.querySelector('#usernameInput')

        if (skinCount != 0 && skinCount != 1) {
            skinCount = 0
        }

        settingsStructure(username.value, skinCount)
    })

    skinsBtn.addEventListener('click', (e) => {
        let username = document.querySelector('#usernameInput')

        if (skinCount != 0 && skinCount != 1) {
            skinCount = 0
        }

        skinsStructure(username.value, skinCount)
    })
}