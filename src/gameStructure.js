import { loadScreen } from "./loadScreenStructure.js"

export function gameStructure(name, skinCount) {

    let main = document.querySelector('.mainForAll')

    let scoreTextH1El = document.createElement('h1')
    scoreTextH1El.setAttribute('class', 'scoreTextH1')
    scoreTextH1El.textContent = '0:0'

    let mainSection = document.createElement('section')
    mainSection.setAttribute('class', 'gameStructure')

    let h2WinOrLose = document.createElement('h2')
    h2WinOrLose.setAttribute('class', 'winOrLoseText')

    for (let i = 0; i < 2; i++) {

        let divEl = document.createElement('div')

        let h2El = document.createElement('h2')
        h2El.setAttribute('class', 'playerInfo')

        let h2ElOption = document.createElement('h2')
        h2ElOption.setAttribute('class', 'optionInfo')

        let imgEl = document.createElement('img')
        imgEl.setAttribute('class', 'handImage')

        if (i == 0) {
            h2El.textContent = name
            imgEl.setAttribute('src', '/images/avatar.png')
        } else if (i == 1) {
            h2El.textContent = 'Computer'
            imgEl.setAttribute('src', '/images/avatar2.png')
            imgEl.setAttribute('id', 'mainImage')
        }

        divEl.appendChild(h2El)
        divEl.appendChild(imgEl)
        divEl.appendChild(h2ElOption)

        mainSection.appendChild(divEl)

        if (i == 0) {
            mainSection.appendChild(h2WinOrLose)
        }
    }

    let divForBtns = document.createElement('div')
    divForBtns.setAttribute('class', 'optionBtns')

    for (let i = 0; i < 3; i++) {

        let button = document.createElement('button')

        if (i == 0) {
            button.textContent = 'Rock'

            button.addEventListener('click', (e) => buttonEngine(e.currentTarget, skinCount))
        } else if (i == 1) {
            button.textContent = 'Paper'

            button.addEventListener('click', (e) => buttonEngine(e.currentTarget, skinCount))
        } else {
            button.textContent = 'Scissors'

            button.addEventListener('click', (e) => buttonEngine(e.currentTarget, skinCount))
        }

        divForBtns.appendChild(button)
    }

    let divForHomeBtn = document.createElement('div')
    divForHomeBtn.setAttribute('class', 'optionForHomeBtn')

    let button = document.createElement('button')
    button.textContent = 'HOME'

    let resetButton = document.createElement('button')
    resetButton.textContent = 'RESET'

    button.addEventListener('click', (e) => loadScreen(skinCount, name))

    divForHomeBtn.appendChild(button)
    divForHomeBtn.appendChild(resetButton)

    main.replaceChildren(divForHomeBtn)
    main.appendChild(scoreTextH1El)
    main.appendChild(mainSection)
    main.appendChild(divForBtns)

    let resetBtn = document.querySelector('.optionForHomeBtn').childNodes[1]

    resetBtn.addEventListener('click', (e) => {
        let scoreText = document.querySelector('.scoreTextH1')
        let centerText = document.querySelector('.winOrLoseText')

        let score = scoreText.textContent.split(':')

        if (Number(score[0] != 0 || Number(score[1] != 0))) {
            scoreText.textContent = '0:0'
            centerText.textContent = 'RESET'
        }

    })

}

function buttonEngine(option, skinCount) {

    let img = document.querySelector('.handImage')
    let comptuerImg = document.querySelector('#mainImage')
    let nameOption = document.querySelectorAll('.optionInfo')
    let winOrLoseText = document.querySelector('.winOrLoseText')

    let imgTest = document.createElement('img')
    imgTest.setAttribute('src', '/images/loading.gif')

    winOrLoseText.replaceChildren(imgTest)

    imageZoom(img, comptuerImg)

    let rock
    let paper
    let scissors

    let rockComp
    let paperComp
    let scissorsComp

    if (skinCount == undefined) {
        skinCount = 0
    }

    if (skinCount == 0) {
        rock = '/images/rock.png'
        paper = '/images/paper.png'
        scissors = '/images/scissors.png'
        rockComp = '/images/rockComp.png'
        paperComp = '/images/paperComp.png'
        scissorsComp = '/images/scissorsComp.png'
    } else {
        rock = '/images/rock2.png'
        paper = '/images/paper2.png'
        scissors = '/images/scissors2.png'
        rockComp = '/images/rockComp2.png'
        paperComp = '/images/paperComp2.png'
        scissorsComp = '/images/scissorsComp2.png'
    }

    if (option.textContent == 'Rock') {
        img.setAttribute('src', rock)
        img.setAttribute('data-Number', 'rock')
        nameOption[0].textContent = 'Rock'
    } else if (option.textContent == 'Paper') {
        img.setAttribute('src', paper)
        img.setAttribute('data-Number', 'paper')
        nameOption[0].textContent = 'Paper'
    } else if (option.textContent == 'Scissors') {
        img.setAttribute('src', scissors)
        img.setAttribute('data-Number', 'scissors')
        nameOption[0].textContent = 'Scissors'
    }

    let timer = setInterval(() => {
        let randomNum = Math.floor(Math.random() * 9) + 1

        if (randomNum == 1) {
            comptuerImg.setAttribute('src', rockComp)
            comptuerImg.setAttribute('data-Number', 'rock')
            nameOption[1].textContent = 'Rock'
        } else if (randomNum == 2) {
            comptuerImg.setAttribute('src', paperComp)
            comptuerImg.setAttribute('data-Number', 'paper')
            nameOption[1].textContent = 'Paper'
        } else if (randomNum == 3) {
            comptuerImg.setAttribute('src', scissorsComp)
            comptuerImg.setAttribute('data-Number', 'scissors')
            nameOption[1].textContent = 'Scissors'
        } else if (randomNum == 4) {
            comptuerImg.setAttribute('src', rockComp)
            comptuerImg.setAttribute('data-Number', 'rock')
            nameOption[1].textContent = 'Rock'
        } else if (randomNum == 5) {
            comptuerImg.setAttribute('src', paperComp)
            comptuerImg.setAttribute('data-Number', 'paper')
            nameOption[1].textContent = 'Paper'
        } else if (randomNum == 6) {
            comptuerImg.setAttribute('src', scissorsComp)
            comptuerImg.setAttribute('data-Number', 'scissors')
            nameOption[1].textContent = 'Scissors'
        } else if (randomNum == 7) {
            comptuerImg.setAttribute('src', rockComp)
            comptuerImg.setAttribute('data-Number', 'rock')
            nameOption[1].textContent = 'Rock'
        } else if (randomNum == 8) {
            comptuerImg.setAttribute('src', paperComp)
            comptuerImg.setAttribute('data-Number', 'paper')
            nameOption[1].textContent = 'Paper'
        } else if (randomNum == 9) {
            comptuerImg.setAttribute('src', scissorsComp)
            comptuerImg.setAttribute('data-Number', 'scissors')
            nameOption[1].textContent = 'Scissors'
        }

    }, 75);

    let allBtns = document.querySelectorAll('button')

    allBtns.forEach(x => {
        x.disabled = true
        x.style.backgroundColor = '#342a2a'
        x.style.transform = 'scale(0)'
    })

    setTimeout(() => {
        clearInterval(timer)
        allBtns.forEach(x => {
            x.disabled = false
            x.style.backgroundColor = '#058946'
            x.style.transform = 'scale(1.0)'
        })

        let img = document.querySelector('.handImage').getAttribute('data-Number')
        let comptuerImg = document.querySelector('#mainImage').getAttribute('data-Number')
        let winOrLoseText = document.querySelector('.winOrLoseText')

        let score = document.querySelector('.scoreTextH1').textContent.split(':')

        if (img == comptuerImg) {
            winOrLoseText.textContent = 'DRAW'
        } else if (img == 'rock' && comptuerImg == 'paper') {
            Number(score[1]++)
            winOrLoseText.textContent = 'YOU LOSE'
        } else if (img == 'rock' && comptuerImg == 'scissors') {
            Number(score[0]++)
            winOrLoseText.textContent = 'YOU WIN'
        } else if (img == 'paper' && comptuerImg == 'rock') {
            Number(score[0]++)
            winOrLoseText.textContent = 'YOU WIN'
        } else if (img == 'paper' && comptuerImg == 'scissors') {
            Number(score[1]++)
            winOrLoseText.textContent = 'YOU LOSE'
        } else if (img == 'scissors' && comptuerImg == 'rock') {
            Number(score[1]++)
            winOrLoseText.textContent = 'YOU LOSE'
        } else if (img == 'scissors' && comptuerImg == 'paper') {
            Number(score[0]++)
            winOrLoseText.textContent = 'YOU WIN'
        }

        document.querySelector('.scoreTextH1').textContent = score[0] + ':' + score[1]
    }, 3000);
}

function imageZoom(img, comptuerImg) {

    let scale

    setTimeout(() => {
        if (img.getAttribute('src').includes('2')) {
            scale = 'scale(1.20)'
        } else {
            scale = 'scale(1.25)'
        }
    }, 200);

    setTimeout(() => {
        img.style.transform = 'scale(1.010)'
        comptuerImg.style.transform = 'scale(1.010)'
    }, 50);

    setTimeout(() => {
        img.style.transform = 'scale(1.012)'
        comptuerImg.style.transform = 'scale(1.012)'
    }, 100);

    setTimeout(() => {
        img.style.transform = 'scale(1.013)'
        comptuerImg.style.transform = 'scale(1.013)'

    }, 150);

    setTimeout(() => {
        img.style.transform = 'scale(1.014)'
        comptuerImg.style.transform = 'scale(1.014)'

    }, 200);

    setTimeout(() => {
        img.style.transform = 'scale(1.015)'
        comptuerImg.style.transform = 'scale(1.015)'

    }, 250);

    setTimeout(() => {
        img.style.transform = 'scale(1.016)'
        comptuerImg.style.transform = 'scale(1.016)'
    }, 300);

    setTimeout(() => {
        img.style.transform = 'scale(1.017)'
        comptuerImg.style.transform = 'scale(1.017)'
    }, 350);

    setTimeout(() => {
        img.style.transform = 'scale(1.018)'
        comptuerImg.style.transform = 'scale(1.018)'
    }, 400);

    setTimeout(() => {
        img.style.transform = 'scale(1.019)'
        comptuerImg.style.transform = 'scale(1.019)'
    }, 450);

    setTimeout(() => {
        img.style.transform = 'scale(1.020)'
        comptuerImg.style.transform = 'scale(1.020)'
    }, 500);

    setTimeout(() => {
        img.style.transform = 'scale(1.021)'
        comptuerImg.style.transform = 'scale(1.021)'
    }, 550);

    setTimeout(() => {
        img.style.transform = 'scale(1.022)'
        comptuerImg.style.transform = 'scale(1.022)'
    }, 600);

    setTimeout(() => {
        img.style.transform = 'scale(1.023)'
        comptuerImg.style.transform = 'scale(1.023)'
    }, 650);

    setTimeout(() => {
        img.style.transform = 'scale(1.024)'
        comptuerImg.style.transform = 'scale(1.024)'
    }, 700);

    setTimeout(() => {
        img.style.transform = 'scale(1.025)'
        comptuerImg.style.transform = 'scale(1.025)'
    }, 750);

    setTimeout(() => {
        img.style.transform = 'scale(1.026)'
        comptuerImg.style.transform = 'scale(1.026)'
    }, 800);

    setTimeout(() => {
        img.style.transform = 'scale(1.027)'
        comptuerImg.style.transform = 'scale(1.027)'
    }, 850);

    setTimeout(() => {
        img.style.transform = 'scale(1.028)'
        comptuerImg.style.transform = 'scale(1.028)'
    }, 900);

    setTimeout(() => {
        img.style.transform = 'scale(1.029)'
        comptuerImg.style.transform = 'scale(1.029)'
    }, 950);

    setTimeout(() => {
        img.style.transform = 'scale(1.030)'
        comptuerImg.style.transform = 'scale(1.030)'
    }, 1000);

    setTimeout(() => {
        img.style.transform = 'scale(1.031)'
        comptuerImg.style.transform = 'scale(1.031)'
    }, 1050);

    setTimeout(() => {
        img.style.transform = 'scale(1.032)'
        comptuerImg.style.transform = 'scale(1.032)'
    }, 1100);

    setTimeout(() => {
        img.style.transform = 'scale(1.033)'
        comptuerImg.style.transform = 'scale(1.033)'
    }, 1150);

    setTimeout(() => {
        img.style.transform = 'scale(1.034)'
        comptuerImg.style.transform = 'scale(1.034)'
    }, 1200);

    setTimeout(() => {
        img.style.transform = 'scale(1.035)'
        comptuerImg.style.transform = 'scale(1.035)'
    }, 1250);

    setTimeout(() => {
        img.style.transform = 'scale(1.036)'
        comptuerImg.style.transform = 'scale(1.036)'
    }, 1300);

    setTimeout(() => {
        img.style.transform = 'scale(1.037)'
        comptuerImg.style.transform = 'scale(1.037)'
    }, 1350);

    setTimeout(() => {
        img.style.transform = 'scale(1.038)'
        comptuerImg.style.transform = 'scale(1.038)'
    }, 1400);

    setTimeout(() => {
        img.style.transform = 'scale(1.039)'
        comptuerImg.style.transform = 'scale(1.039)'
    }, 1450);

    setTimeout(() => {
        img.style.transform = 'scale(1.040)'
        comptuerImg.style.transform = 'scale(1.040)'
    }, 1500);

    setTimeout(() => {
        img.style.transform = 'scale(1.041)'
        comptuerImg.style.transform = 'scale(1.041)'
    }, 1550);

    setTimeout(() => {
        img.style.transform = 'scale(1.042)'
        comptuerImg.style.transform = 'scale(1.042)'
    }, 1600);

    setTimeout(() => {
        img.style.transform = 'scale(1.043)'
        comptuerImg.style.transform = 'scale(1.043)'
    }, 1650);

    setTimeout(() => {
        img.style.transform = 'scale(1.044)'
        comptuerImg.style.transform = 'scale(1.044)'
    }, 1700);

    setTimeout(() => {
        img.style.transform = 'scale(1.045)'
        comptuerImg.style.transform = 'scale(1.045)'
    }, 1750);
    setTimeout(() => {
        img.style.transform = 'scale(1.046)'
        comptuerImg.style.transform = 'scale(1.046)'
    }, 1800);

    setTimeout(() => {
        img.style.transform = 'scale(1.047)'
        comptuerImg.style.transform = 'scale(1.047)'
    }, 1850);

    setTimeout(() => {
        img.style.transform = 'scale(1.048)'
        comptuerImg.style.transform = 'scale(1.048)'
    }, 1900);

    setTimeout(() => {
        img.style.transform = 'scale(1.049)'
        comptuerImg.style.transform = 'scale(1.049)'
    }, 1950);

    setTimeout(() => {
        img.style.transform = 'scale(1.050)'
        comptuerImg.style.transform = 'scale(1.050)'
    }, 2000);

    setTimeout(() => {
        img.style.transform = 'scale(1.051)'
        comptuerImg.style.transform = 'scale(1.051)'
    }, 2050);

    setTimeout(() => {
        img.style.transform = 'scale(1.052)'
        comptuerImg.style.transform = 'scale(1.052)'
    }, 2100);

    setTimeout(() => {
        img.style.transform = 'scale(1.053)'
        comptuerImg.style.transform = 'scale(1.053)'
    }, 2150);

    setTimeout(() => {
        img.style.transform = 'scale(1.054)'
        comptuerImg.style.transform = 'scale(1.054)'
    }, 2200);

    setTimeout(() => {
        img.style.transform = 'scale(1.055)'
        comptuerImg.style.transform = 'scale(1.055)'
    }, 2250);

    setTimeout(() => {
        img.style.transform = 'scale(1.056)'
        comptuerImg.style.transform = 'scale(1.056)'
    }, 2300);

    setTimeout(() => {
        img.style.transform = 'scale(1.057)'
        comptuerImg.style.transform = 'scale(1.057)'
    }, 2350);

    setTimeout(() => {
        img.style.transform = 'scale(1.058)'
        comptuerImg.style.transform = 'scale(1.058)'
    }, 2400);

    setTimeout(() => {
        img.style.transform = 'scale(1.059)'
        comptuerImg.style.transform = 'scale(1.059)'
    }, 2450);

    setTimeout(() => {
        img.style.transform = 'scale(1.060)'
        comptuerImg.style.transform = 'scale(1.060)'
    }, 2500);

    setTimeout(() => {
        img.style.transform = 'scale(1.065)'
        comptuerImg.style.transform = 'scale(1.065)'
    }, 2550);

    setTimeout(() => {
        img.style.transform = 'scale(1.070)'
        comptuerImg.style.transform = 'scale(1.070)'
    }, 2600);

    setTimeout(() => {
        img.style.transform = 'scale(1.075)'
        comptuerImg.style.transform = 'scale(1.075)'
    }, 2650);

    setTimeout(() => {
        img.style.transform = 'scale(1.080)'
        comptuerImg.style.transform = 'scale(1.080)'
    }, 2700);

    setTimeout(() => {
        img.style.transform = 'scale(1.085)'
        comptuerImg.style.transform = 'scale(1.085)'
    }, 2750);

    setTimeout(() => {
        img.style.transform = 'scale(1.090)'
        comptuerImg.style.transform = 'scale(1.090)'
    }, 2800);
    setTimeout(() => {
        img.style.transform = 'scale(1.1)'
        comptuerImg.style.transform = 'scale(1.1)'
    }, 2850);

    setTimeout(() => {
        img.style.transform = 'scale(0.5)'
        comptuerImg.style.transform = 'scale(0.5)'
    }, 2900);

    setTimeout(() => {
        img.style.transform = scale
        comptuerImg.style.transform = scale
    }, 3000);
}