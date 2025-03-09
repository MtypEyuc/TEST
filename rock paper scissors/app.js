let playerScore = 0;
let computerScore = 0;
let roundsLeft = 5;

function playGame(playerChoice) {
  if (roundsLeft <= 0) return;

  const choices = ["가위", "바위", "보"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = "";
  if (playerChoice === computerChoice) {
    resultText = "무승부";
  } else if (
    (playerChoice === "가위" && computerChoice === "보") ||
    (playerChoice === "바위" && computerChoice === "가위") ||
    (playerChoice === "보" && computerChoice === "바위")
  ) {
    resultText = "플레이어 승리!";
    playerScore++;
  } else {
    resultText = "컴퓨터 승리!";
    computerScore++;
  }

  roundsLeft--;

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = resultText;
  document.getElementById("rounds").textContent = roundsLeft;

  if (roundsLeft === 0) {
    endGame();
  }
}

function endGame() {
  let finalMessage = "";
  if (playerScore > computerScore) {
    finalMessage = "게임에서 이겼습니다!";
  } else if (playerScore < computerScore) {
    finalMessage = "게임에서 졌습니다.";
  } else {
    finalMessage = "무승부입니다.";
  }

  document.getElementById("final-result").textContent = finalMessage;
  document.getElementById("game-over").classList.remove("hidden");
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundsLeft = 5;

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("rounds").textContent = roundsLeft;
  document.getElementById("result").textContent = "선택하기";

  document.getElementById("game-over").classList.add("hidden");
}
