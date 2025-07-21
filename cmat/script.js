let currentIndex = 0;
let score = 0;
let answered = 0;
let shuffledQuestions = [];
let userAnswers = [];

window.onload = () => {
  shuffledQuestions = [...Questions].sort(() => Math.random() - 0.5);
  userAnswers = new Array(Questions.length).fill(null); 
  showQuestion();
};
function showQuestion() {
  document.getElementById("question-number").innerText = `Question ${currentIndex + 1} of ${shuffledQuestions.length}`;

  const container = document.getElementById("quiz-container");
    container.classList.remove("fade-in"); // remove previous animation
  void container.offsetWidth; // trigger reflow
  container.classList.add("fade-in"); // apply animation again
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

  // Mark selected/correct/wrong
  if (selectedIndex === correctIndex) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }

  // Show explanation popup
  showPopup(selectedIndex === correctIndex, correctIndex);

  answered++;
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
  <div class="quiz-complete">
    <h2>🎓 Quiz Complete!</h2>
    <p>You scored ${score}/${shuffledQuestions.length}</p>
    <p>Grade: <strong>${grade}</strong></p>
    <button onclick="location.reload()">Restart Quiz</button>
    </div>
  `;

  document.getElementById("show-answer").style.display = "none";
}

function showPopup(isCorrect, correctIndex) {
  const popup = document.createElement("div");
  popup.className = "popup-box";

  const questionData = shuffledQuestions[currentIndex];

  popup.innerHTML = `
    <div class="popup-content">
      <h2 class="popup-title">${isCorrect ? "✅ Correct!" : "❌ Wrong Answer"}</h2>
      ${!isCorrect ? `<p><strong>Correct Answer:</strong> ${questionData.options[correctIndex]}</p>` : ""}
      <p>${questionData.explanation || "No explanation available."}</p>
      <div class="pop-btn">
      <a href="${questionData.blogLink || '#'}" target="_blank" id="itemblog">Read full explanation 📖</a>
      <button id="next-btn">Next</button>
      </div>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  document.getElementById("next-btn").onclick = () => {
    popup.remove();
    currentIndex++;
    showQuestion();
  };
}

