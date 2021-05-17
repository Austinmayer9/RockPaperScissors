let values = ["Rock", "Paper", "Scissors"];

      function computerPlay() {
        computerSelection = values[Math.floor(Math.random() * values.length)];
        console.log(computerSelection);
      }

      function playerPlay() {
        let rockPaperScissors = window.prompt("Rock, Paper, or Scissors?");

        playerSelection = rockPaperScissors;
        console.log(playerSelection);
      }

      function playRound() {
        computerPlay();
        playerPlay();

        //Rules

        if (computerSelection == playerSelection) {
          console.log("It was a draw");
        } else if (computerSelection == "Paper" && playerSelection == "Rock") {
          console.log("You Lose! Paper beats Rock");
        } else if (
          computerSelection == "Paper" &&
          playerSelection == "Scissors"
        ) {
          console.log("You won! Scissors beats Paper");
        } else if (
          computerSelection == "Rock" &&
          playerSelection == "Scissors"
        ) {
          console.log("You Lose! Rock beats Scissors");
        } else if (computerSelection == "Rock" && playerSelection == "Paper") {
          console.log("You won! Paper beats Rock");
        } else if (
          computerSelection == "Scissors" &&
          playerSelection == "Paper"
        ) {
          console.log("You Lose! Paper beats Scissors");
        } else if (
          computerSelection == "Scissors" &&
          playerSelection == "Rock"
        ) {
          console.log("You won! Rock beats Scissors");
        }
      }

      function game() {
        var times = 5;
        for (var i = 0; i < times; i++) {
          playRound();
        }
      }

      //Plays a game of 5

      game();
      