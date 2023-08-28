const score = JSON.parse(localStorage.getItem("score"));
const scoreText= document.querySelector(".score");
const result = document.querySelector(".result");
const moves = document.querySelector(".moves");


function playRockPaperScissors(userChoice) {
  let score; // Declare the variable outside the blocks

  if (localStorage.getItem("score")) {
    score = JSON.parse(localStorage.getItem("score"));
  } else {
    score = {
      "wins": 0,
      "losses": 0,
      "ties": 0
    };
  }
  
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (userChoice === computerChoice) {
    score.ties += 1;
    result.innerHTML = "Tie.";

    document.querySelector('.player-move').setAttribute("src", `images/${userChoice}.png`);
    document.querySelector('.computer-move').setAttribute("src", `images/${computerChoice}.png`);

    scoreText.innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    localStorage.setItem("score", JSON.stringify(score));

  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
      score.wins += 1;
      result.innerHTML = "You win.";
      document.querySelector('.player-move').setAttribute("src", `images/${userChoice}.png`);
      document.querySelector('.computer-move').setAttribute("src", `images/${computerChoice}.png`);
    
      scoreText.innerHTML = 
      `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      localStorage.setItem("score", JSON.stringify(score));

    } else {
      score.losses += 1;
      result.innerHTML = "You lose.";
      document.querySelector('.player-move').setAttribute("src", `images/${userChoice}.png`);
      document.querySelector('.computer-move').setAttribute("src", `images/${computerChoice}.png`);
    
      scoreText.innerHTML =
      `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      localStorage.setItem("score", JSON.stringify(score));
    }
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  document.querySelector(".score").innerHTML =
  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  
}



// Storing an if statement in a avriable using ternary expressions
// const variableName = condition ? valueIfTrue : valueIfFalse;