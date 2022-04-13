const btnRed = document.querySelector("#btnRed");
const btnYellow = document.querySelector("#btnYellow");
const btnBlue = document.querySelector("#btnBlue");
const btnGreen = document.querySelector("#btnGreen");
const start = document.querySelector("#on");
const innerScreen = document.querySelector(".innerscreen");
const screen = document.querySelector(".screen");
const score = document.querySelector("#score");


const simon = ["red", "green", "blue", "yellow"];
let sequence = [];
let player = [];

let random = simon[parseInt(Math.random() * simon.length)];
let gamePlay = false;

let level = 1;
let winDM = "Well Done! Can You Do It Again?";
let loseDM = "You Lost! Try Again?";

start.addEventListener("click", () => {
  if (start.innerHTML === "Start") {
    clearArrays()
    console.log("I start");
    screen.innerHTML = "<h2>Simon Says...</h2>";
    start.innerHTML = "Reset";
    gamePlay = true;
    color();
    compareTwoArrays(player,sequence)
    

  } else if (start.innerHTML === "Reset") {
    start.innerHTML = "Start";
    gamePlay = false;
    clearInterval(interval);
    clearTimeout(turn);
    screen.style.backgroundColor = "grey";
    screen.innerHTML = "<h2>Simon Says...</h2>";
    clearArrays()
  }
});



function color() {
  let i = 0;
  let colorDisp = 1000;
  let colorCount = 4;
  let simonTime = colorDisp * colorCount;
  
  if (gamePlay === true) {
    interval = setInterval(() => {
      if (i < simon.length) {
        let random = simon[parseInt(Math.random() * simon.length)];
        sequence.push(random);
        screen.style.backgroundColor = random;
        screen.innerHTML = `<h1>${i + 1}.${random}</h1>`;
        i++;
        colorCount++;
        console.log(colorCount);
        console.log(sequence);
      }
    }, colorDisp);
   
    if (player.length === sequence.length){
      if (gamePlay === true) {
        turn = setTimeout(() => {
          screen.style.backgroundColor = "grey";
          if ( compareTwoArrays(player, sequence) === true && gamePlay === true){
            console.log(winDM);
            level++
            screen.innerHTML = `<h2>${winDM}</h2>`;
            start.innerHTML = "Start";
            score.innerHTML = `Level ${level}`
            if (level>1){
            simon.push(random)
            }
        } else if (player.length === 0) {
            screen.innerHTML = `<h2>No play made!</h2>`;
         
        } else if (compareTwoArrays(player, sequence) === false) {
            console.log(loseDM);
            screen.innerHTML = `<h2>${loseDM}</h2>`;
            screen.style.backgroundColor = "grey";
          }
        }, 10000 + simonTime);
      }
    }
  } else if (gamePlay === false) {
    clearInterval(interval);
    clearTimeout(turn);
    screen.style.backgroundColor = "grey";
  }
}






function compareTwoArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        continue;
      }
    }
  }
  return true 
}

compareTwoArrays(player, sequence);



function clearArrays(){
    player = []
    sequence = []
}




btnYellow.addEventListener("click", () => {
    if (gamePlay === true) {
      console.log("yellow is pressed");
      screen.classList.add("yellow");
      player.push("yellow");
      console.log(player);
      btnYellow.classList.add("bright");
      setTimeout(() => {
        screen.classList.remove("yellow");
        btnYellow.classList.remove("bright");
      }, 300);
    }
  });
  
  btnBlue.addEventListener("click", () => {
    if (gamePlay === true) {
      console.log("blue is pressed");
      screen.classList.add(simon[2]);
      innerScreen.innerHTML = "Blue";
      player.push("blue");
      console.log(player);
      btnBlue.classList.add("bright");
      setTimeout(() => {
        screen.classList.remove(simon[2]);
        innerScreen.innerHTML = "Color";
        btnBlue.classList.remove("bright");
      }, 300);
    }
  });
  btnGreen.addEventListener("click", () => {
    if (gamePlay === true) {
      console.log("green is pressed");
      screen.classList.add("green");
      innerScreen.innerHTML = "Green";
      player.push("green");
      console.log(player);
      btnGreen.classList.add("bright");
      setTimeout(() => {
        screen.classList.remove("green");
        innerScreen.innerHTML = "Color";
        btnGreen.classList.remove("bright");
      }, 300);
    }
  });
  btnRed.addEventListener("click", () => {
    if (gamePlay === true) {
      console.log("red is pressed");
      screen.classList.add("red");
      innerScreen.innerHTML = "Red";
      player.push("red");
      console.log(player);
      btnRed.classList.add("bright");
      setTimeout(() => {
        screen.classList.remove("red");
        innerScreen.innerHTML = "Color";
        btnRed.classList.remove("bright");
      }, 300);
    }
  });
  



/*
// 1. first, build a playground for the player and Simon.
//     a. create a div that holds all the elemnts to the game.
//     b. create/append elements to the browser to create the playground.

// 2. On the playground, we create a screen for simon to pass his order of colors. Simon will be calling out from 4 different colors.
//     a. create a function that connect with a color array and display it randomly on the output setup for the player to observe.
       b. simon will display the colors and wait for the play to play.

// 3. on the player's side of the playground, there are 4 buttons that are equivalent with the colors from Simon.
        a. create a div that hold the buttons for the player.
        b. the buttons will correspond with simon's values.

// 4. Simon will be assigned an array of colors and he will randomly print the colors within the setInterval.
        a. the function created on 2a will launch the colors on display and store the value displayed in a separate array.

// 5. the player's buttons are also assigned an array of colors that match Simon's colors array.
        a. The buttons will also pass and store a value in an array of its own.
        b. The buttons will be clickable when the player start the round.

// 6. if the player's clicked button match Simon's printed color, score will increment. else, score will decrement and player gets to lose a chance to fail again. If player fails twice, game will be over and score will show up on simon's screen.
        a. Create a function that compares two arrays and return a boolean.
        b. After comparison, identify the outcome either stay on the game or reset.

// 7. if player keeps on clicking the right pattern, speed/ time interval of simon printing the colors will increase, making it more difficult each round to follow along Simon. 
        a. each round will become more challenging than the previous. */
        