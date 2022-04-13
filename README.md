# Project-1-Simon-Mubarek

! [Simon Wireframe image] (https://user-images.githubusercontent.com/102003916/162020344-c31f5087-87b2-4b51-8605-57bc2e1ace48.png)

## Simon The Game
1. first, build a playground for the player and Simon.
   - a. create a div that holds all the elemnts to the game.
    - b. create/append elements to the browser to create the playground.

2. On the playground, we create a screen for simon to pass his order of colors. Simon will be calling out from 4 different colors.
   - a. create a function that connect with a color array and display it randomly on the output setup for the player to observe.
   - b. simon will display the colors and wait for the play to play.

3. on the player's side of the playground, there are 4 buttons that are equivalent with the colors from Simon.
   - a. create a div that hold the buttons for the player.
   - b. the buttons will correspond with simon's values.

4. Simon will be assigned an array of colors and he will randomly print the colors within the setInterval.
   - a. the function created on 2a will launch the colors on display and store the value displayed in a separate array.

5. the player's buttons are also assigned an array of colors that match Simon's colors array.
   - a. The buttons will also pass and store a value in an array of its own.
   - b. The buttons will be clickable when the player start the round.

6. if the player's clicked button match Simon's printed color, score will increment. else, score will decrement and player gets to lose a chance to fail again. If player fails twice, game will be over and score will show up on simon's screen.
   - a. Create a function that compares two arrays and return a boolean.
   - b. After comparison, identify the outcome either stay on the game or reset.

7. if player keeps on clicking the right pattern, speed/ time interval of simon printing the colors will increase, making it more difficult each round to follow along Simon.
   - a. each round will become more challenging than the previous.