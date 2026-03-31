const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const messageDisplay = document.getElementById("message");
const milestoneDisplay = document.getElementById("milestone-message");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const difficultySelect = document.getElementById("difficulty");
const confettiContainer = document.getElementById("confetti-container");

let score = 0;
let timeLeft = 30;
let gameInterval;
let countdown;
let gameRunning = false;
let spawnSpeed = 1000;
let winScore = 15;

const milestoneMessages = [
  { score: 5, text: "Nice start!" },
  { score: 10, text: "Halfway there!" },
  { score: 15, text: "Amazing job!" }
];

function setDifficulty() {
  const difficulty = difficultySelect.value;

  if (difficulty === "easy") {
    timeLeft = 35;
    spawnSpeed = 1200;
    winScore = 10;
  } else if (difficulty === "normal") {
    timeLeft = 30;
    spawnSpeed = 900;
    winScore = 15;
  } else if (difficulty === "hard") {
    timeLeft = 20;
    spawnSpeed = 700;
    winScore = 20;
  }

  timeDisplay.textContent = timeLeft;
}

function createDrop() {
  if (!gameRunning) return;

  const drop = document.createElement("div");
  const isBadDrop = Math.random() < 0.25;

  drop.classList.add("drop");
  if (isBadDrop) {
    drop.classList.add("bad-drop");
    drop.textContent = "☠";
  } else {
    drop.textContent = "💧";
  }

  drop.style.left = Math.random() * (gameContainer.clientWidth - 40) + "px";
  gameContainer.appendChild(drop);

  let dropTop = 0;

  const fall = setInterval(() => {
    dropTop += 5;
    drop.style.top = dropTop + "px";

    if (dropTop > gameContainer.clientHeight - 40) {
      clearInterval(fall);
      drop.remove();
    }
  }, 30);

  drop.addEventListener("click", () => {
    if (!gameRunning) return;

    clearInterval(fall);

    if (isBadDrop) {
      score--;
      messageDisplay.textContent = "Oops! That was a bad drop.";
    } else {
      score++;
      messageDisplay.textContent = "Great catch!";
      checkMilestones();
    }

    scoreDisplay.textContent = score;
    drop.remove();
    checkGameStatus();
  });
}

function checkMilestones() {
  for (let i = 0; i < milestoneMessages.length; i++) {
    if (score === milestoneMessages[i].score) {
      milestoneDisplay.textContent = milestoneMessages[i].text;
    }
  }
}

function checkGameStatus() {
  if (score >= winScore) {
    endGame(true);
  }
}

function startGame() {
  if (gameRunning) return;

  resetGame();
  setDifficulty();

  gameRunning = true;
  messageDisplay.textContent = "Game started!";
  milestoneDisplay.textContent = "";

  gameInterval = setInterval(createDrop, spawnSpeed);

  countdown = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame(false);
    }
  }, 1000);
}

function endGame(won) {
  gameRunning = false;
  clearInterval(gameInterval);
  clearInterval(countdown);

  if (won) {
    messageDisplay.textContent = "You win! You helped bring clean water to communities!";
    launchConfetti();
  } else {
    messageDisplay.textContent = "Time's up! Try again.";
  }
}

function resetGame() {
  score = 0;
  gameRunning = false;
  clearInterval(gameInterval);
  clearInterval(countdown);

  document.querySelectorAll(".drop").forEach(drop => drop.remove());
  document.querySelectorAll(".confetti").forEach(piece => piece.remove());

  scoreDisplay.textContent = score;
  messageDisplay.textContent = "";
  milestoneDisplay.textContent = "";

  setDifficulty();
}

function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDelay = Math.random() + "s";
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
difficultySelect.addEventListener("change", resetGame);

setDifficulty();
