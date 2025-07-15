let currentIndex = 0;
let score = 0;
let answered = 0;
let shuffledQuestions = [];
let userAnswers = [];

window.onload = () => {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  userAnswers = new Array(questions.length).fill(null); 
  showQuestion();
};

function showQuestion() {
  const container = document.getElementById("quiz-container");
  const currentQuestion = shuffledQuestions[currentIndex];

  document.getElementById("score").innerText = `You scored ${score}/${shuffledQuestions.length}`;

  if (!currentQuestion) {
    showFinalScore();
    return;
  }

  let html = `
    <div class="question">${currentQuestion.question}</div>
    <div class="options">
      ${currentQuestion.options.map((option, i) => `
        <button onclick="selectAnswer(${i}, this)">${option}</button>
      `).join('')}
    </div>
  `;
  container.innerHTML = html;
}

function selectAnswer(selectedIndex, btn) {
  const correctIndex = shuffledQuestions[currentIndex].answer;

  const buttons = document.querySelectorAll(".options button");
  buttons.forEach(b => b.disabled = true);

  if (selectedIndex === correctIndex) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }

  answered++;
  currentIndex++;
  setTimeout(showQuestion, 1000);
}

document.getElementById("show-answer").addEventListener("click", () => {
  const correctIndex = shuffledQuestions[currentIndex].answer;
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correctIndex) btn.classList.add("correct");
  });
  currentIndex++;
  setTimeout(showQuestion, 1500);
});

function showFinalScore() {
  const container = document.getElementById("quiz-container");
  const percent = (score / shuffledQuestions.length) * 100;
  let grade = "";

  if (percent >= 90) grade = "🏅 Excellent";
  else if (percent >= 75) grade = "🎉 Good Job";
  else if (percent >= 45) grade = "👍 Fair";
  else grade = "😢 Needs Improvement";

  container.innerHTML = `
    <h2>🎓 Quiz Complete!</h2>
    <p>You scored ${score}/${shuffledQuestions.length}</p>
    <p>Grade: <strong>${grade}</strong></p>
    <button onclick="location.reload()">Restart Quiz</button>
  `;

  document.getElementById("show-answer").style.display = "none";
}
