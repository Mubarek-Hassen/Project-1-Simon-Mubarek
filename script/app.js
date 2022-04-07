const btnRed = document.querySelector('#btnRed')
const btnYellow = document.querySelector('#btnYellow')
const btnBlue = document.querySelector('#btnBlue')
const btnGreen = document.querySelector('#btnGreen')

const start = document.querySelector('#on')

const innerScreen = document.querySelector('.innerscreen')
const screen = document.querySelector('.screen')
const score = document.querySelector('#score')

// const colors = ['Red','Green','Blue', 'Yellow']
const simon = ['red','green','blue','yellow'];
const player = ['red','green','blue','yellow'];



// Test
btnYellow.addEventListener('click',()=>{
    console.log('yellow is pressed')
    screen.classList.add('yellow')
    setTimeout(()=>{
        screen.classList.remove('yellow')
    },500)
})

btnBlue.addEventListener('click', ()=>{
    console.log('blue is pressed')
    screen.classList.add('blue')
    setTimeout(()=>{
        screen.classList.remove('blue')
    },500)
})
btnGreen.addEventListener('click', ()=>{
    console.log('green is pressed')
    screen.classList.add('green')
    setTimeout(()=>{
        screen.classList.remove('green')
    },500)
})
btnRed.addEventListener('click', ()=>{
    console.log('red is pressed')
    screen.classList.add('red')
    setTimeout(()=>{
        screen.classList.remove('red')
    },500)
})



start.addEventListener('click', ()=>{
    console.log('I start')
    screen.innerHTML ='<h2>Play</h2>'
    start.innerHTML = 'Reset'
    
})
