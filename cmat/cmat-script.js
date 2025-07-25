let currentIndex = 0;
let score = 0;
let answered = 0;
let shuffledQuestions = [];
let userAnswers = [];

// pre loader
 document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
      const preloader = document.getElementById("preloader");
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); // Let the opacity fade out
    });
  });
  
window.onload = () => {
  shuffledQuestions = [...Questions].sort(() => Math.random() - 0.5);
  userAnswers = new Array(Questions.length).fill(null);
  showQuestion();
};

function showQuestion() {
  document.getElementById("question-number").innerText = `Question ${currentIndex + 1} of ${shuffledQuestions.length}`;

  const container = document.getElementById("quiz-container");
  container.classList.remove("fade-in");
  void container.offsetWidth;
  container.classList.add("fade-in");

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

  // Reset the "Show Answer" button
  const showBtn = document.getElementById("show-answer");
  showBtn.innerText = "Show Answer";
  showBtn.onclick = handleShowAnswerClick;
  showBtn.disabled = false;
}

function selectAnswer(selectedIndex, btn) {
  const correctIndex = shuffledQuestions[currentIndex].answer;
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach(b => b.disabled = true);

  if (selectedIndex === correctIndex) {
    btn.classList.add("correct");
    score++;
    //vibrate control
     if (navigator.vibrate) navigator.vibrate(10);
  } else {
    btn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
     // Medium vibration for wrong answer (e.g., 150ms)
    if (navigator.vibrate) navigator.vibrate([50, 25, 100]);
  }

  showPopup(selectedIndex === correctIndex, correctIndex);
  answered++;

  // Convert "Show Answer" to "Next"
  const showBtn = document.getElementById("show-answer");
  showBtn.innerText = "Next";
  showBtn.onclick = () => {
    const popup = document.querySelector(".popup-box");
    if (popup) popup.remove();
    currentIndex++;
    showQuestion();
  };
}

function handleShowAnswerClick() {
  const correctIndex = shuffledQuestions[currentIndex].answer;
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correctIndex) btn.classList.add("correct");
  });

  showPopup(true, correctIndex); // Always show correct explanation

  // Convert "Show Answer" to "Next"
  const showBtn = document.getElementById("show-answer");
  showBtn.innerText = "Next";
  showBtn.onclick = () => {
    const popup = document.querySelector(".popup-box");
    if (popup) popup.remove();
    currentIndex++;
    showQuestion();
  };
}

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
      </div>
    </div>
  `;

  document.body.appendChild(popup);
}
