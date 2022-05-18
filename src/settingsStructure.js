import { loadScreen } from "./loadScreenStructure.js"

export function settingsStructure(username, skinCount) {

    let main = document.querySelector('.mainForAll')

    let div = document.createElement('div')
    div.setAttribute('class', 'settingsSructure')

    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'settingsMainText')
    h2.textContent = 'Settings'

    let h3 = document.createElement('h3')
    h3.setAttribute('class', 'settingsText')
    h3.textContent = 'A classic two-person game. Players start each round by saying, “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist for rock, flat hand for paper, or their index and middle finger for scissors. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round!'

    div.appendChild(h2)
    div.appendChild(h3)

    let divForBtns = document.createElement('div')
    divForBtns.setAttribute('class', 'optionBtns')

    let button = document.createElement('button')
    button.textContent = 'BACK'

    button.addEventListener('click', (e) => loadScreen(skinCount, username))

    divForBtns.appendChild(button)

    main.replaceChildren(div)
    main.appendChild(divForBtns)

}