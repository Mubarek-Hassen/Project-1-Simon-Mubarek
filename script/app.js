const btnRed = document.querySelector('#btnRed')
const btnYellow = document.querySelector('#btnYellow')
const btnBlue = document.querySelector('#btnBlue')
const btnGreen = document.querySelector('#btnGreen')
const start = document.querySelector('#on')
const innerScreen = document.querySelector('.innerscreen')
const screen = document.querySelector('.screen')
const score = document.querySelector('#score')

const simon = ['red','green','blue','yellow'];
const player = [];
let say = screen.style.backgroundColor

let gamePlay = false;
const random = Math.floor(Math.random() * simon.length)



start.addEventListener('click', ()=>{
    if (start.innerHTML === 'Start'){
    console.log('I start')
    screen.innerHTML ='<h2>Simon Says...</h2>'
    innerScreen.innerHTML = 'Color'
    start.innerHTML = 'Reset'
    gamePlay = true;
} else if (start.innerHTML === 'Reset'){
    start.innerHTML = 'Start'
    gamePlay = false

}
}
)




// Test
btnYellow.addEventListener('click',()=>{
    if(gamePlay === true){
    console.log('yellow is pressed')
    screen.classList.add('yellow')
    // innerScreen.innerHTML = '<h2>Yellow</h2>'
    setTimeout(()=>{
        screen.classList.remove('yellow')
    },500)
}})

btnBlue.addEventListener('click', ()=>{
    if(gamePlay === true){
    console.log('blue is pressed')
    screen.classList.add(simon[2])
    innerScreen.innerHTML = 'Blue'
    setTimeout(()=>{
        screen.classList.remove(simon[2])
        innerScreen.innerHTML = 'Color'
    },500)
}})
btnGreen.addEventListener('click', ()=>{
    if(gamePlay === true){
    console.log('green is pressed')
    screen.classList.add('green')
    innerScreen.innerHTML = 'Green'
    setTimeout(()=>{
        screen.classList.remove('green')
        innerScreen.innerHTML = 'Color'
    },500)
}})
btnRed.addEventListener('click', ()=>{
    if(gamePlay === true){
    console.log('red is pressed')
    screen.classList.add('red')
    innerScreen.innerHTML = 'Red'
    setTimeout(()=>{
        screen.classList.remove('red')
        innerScreen.innerHTML = 'Color'
    },500)
}})







// function times(func,numTimes){
//     for (let i=0; i<numTimes; i++){
//         func();
//     }
// }
// times();











/*
// 1. first, build a playground for the player and Simon.
//     a. create a div that holds all the elemnts to the game.
//     b. create/append elements to the browser to create the playground

// 2. On the playground, we create a screen for simon to pass his order of colors. Simon will be calling out from 4 different colors.
//     a. 

// 3. on the player's side of the playground, there are 4 buttons that are equivalent with the colors from Simon.
// 4. Simon will be assigned an array of colors and he will randomly print the colors within the setInterval.
// 5. the player's buttons are also assigned an array of colors that match Simon's colors array.
// 6. if the player's clicked button match Simon's printed color, score will increment. else, score will decrement and player gets to lose a chance to fail again. If player fails twice, game will be over and score will show up on simon's screen.
// 7. if player keeps on clicking the right pattern, speed/ time interval of simon printing the colors will increase, making it more difficult each round to follow along Simon */