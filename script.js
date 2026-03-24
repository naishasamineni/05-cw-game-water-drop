let gameRunning = false;
let dropMaker;
let countdown;
let score = 0;
let timeLeft = 30;

const winningMessages = [
  "Amazing job! You helped collect clean water!",
  "You win! Every drop counts!",
  "Great work! You made a big impact!",
  "Awesome! You collected enough water to make a difference!"
];

const losingMessages = [
  "Nice try! Play again and collect more drops!",
  "Keep going! Clean water needs every drop!",
  "Almost there! Try again and beat 15 points!",
  "Good effort! Reset and try for a higher score!"
];

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("reset-btn").addEventListener("click", resetGame);

function startGame() {
  if (gameRunning) return;

  gameRunning = true;
  score = 0;
  timeLeft = 30;

  updateScore();
  updateTimer();
  clearMessage();
  clearDrops();
  clearConfetti();

  document.getElementById("start-btn").textContent = "Game Running...";

  dropMaker = setInterval(createDrop, 700);

  countdown = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function resetGame() {
  clearInterval(dropMaker);
  clearInterval(countdown);

  gameRunning = false;
  score = 0;
  timeLeft = 30;

  updateScore();
  updateTimer();
  clearMessage();
  clearDrops();
  clearConfetti();

  document.getElementById("start-btn").textContent = "Start Game";
}

function createDrop() {
  if (!gameRunning) return;

  const drop = document.createElement("div");

  const isBad = Math.random() < 0.2;

  drop.className = isBad ? "water-drop bad-drop" : "water-drop";
  drop.dataset.bad = isBad;

  const initialSize = 60;
  const sizeMultiplier = Math.random() * 0.8 + 0.5;
  const size = initialSize * sizeMultiplier;

  drop.style.width = `${size}px`;
  drop.style.height = `${size}px`;

  const gameContainer = document.getElementById("game-container");
  const gameWidth = gameContainer.offsetWidth;
  const xPosition = Math.random() * (gameWidth - size);
  drop.style.left = `${xPosition}px`;

  const duration = Math.random() * 1.5 + 3;
  drop.style.animationDuration = `${duration}s`;

  drop.addEventListener("click", () => {
    if (!gameRunning) return;

    if (drop.dataset.bad === "true") {
      score--;
    } else {
      score++;
    }

    updateScore();
    drop.remove();
  });

  drop.addEventListener("animationend", () => {
    drop.remove();
  });

  gameContainer.appendChild(drop);
}

function updateScore() {
  document.getElementById("score").textContent = score;
}

function updateTimer() {
  document.getElementById("time").textContent = timeLeft;
}

function clearMessage() {
  document.getElementById("message").textContent = "";
}

function clearDrops() {
  const drops = document.querySelectorAll(".water-drop");
  drops.forEach(drop => drop.remove());
}

function endGame() {
  gameRunning = false;

  clearInterval(dropMaker);
  clearInterval(countdown);

  document.getElementById("start-btn").textContent = "Play Again";

  clearDrops();

  const messageBox = document.getElementById("message");

  if (score > 15) {
    const randomWin =
      winningMessages[Math.floor(Math.random() * winningMessages.length)];
    messageBox.textContent = `Final Score: ${score} — ${randomWin}`;
    launchConfetti();
  } else {
    const randomLose =
      losingMessages[Math.floor(Math.random() * losingMessages.length)];
    messageBox.textContent = `Final Score: ${score} — ${randomLose}`;
  }
}

function launchConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  clearConfetti();

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");

    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
    confetti.style.animationDelay = `${Math.random() * 0.5}s`;

    const colors = ["#FFC907", "#2E9DF7", "#F5402C", "#4FCB53", "#FF902A"];
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(confetti);
  }

  setTimeout(clearConfetti, 4000);
}

function clearConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = "";
}