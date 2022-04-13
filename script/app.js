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
  

        