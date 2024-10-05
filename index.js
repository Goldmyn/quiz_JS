const SUBMIT_BTN = document.getElementById("submit_btn");

// make options clear when refreshed

window.addEventListener("beforeunload", function () {
  this.document.getElementById("quizForm").reset();
});

// add event to button

SUBMIT_BTN.addEventListener("click", checkAnswer);

// array of answers

correctAnswers = [1, 1, 1, 1, 2];

function checkAnswer(event) {
  event.preventDefault();

  // initial value of score

  score = 0;

  // loop through options for the correct answer

  correctAnswers.forEach((correctAnswer, index) => {
    // check selected value of each question

    const selectedAnswer = document.querySelector(
      `input[name="q${index + 1}"]:checked`
    );

    // if answer is correct

    if (selectedAnswer && parseInt(selectedAnswer.value) === correctAnswer) {
      score++;
    }
  });

  document.getElementById(
    "result"
  ).textContent = `Your score is ${score} out of ${correctAnswers.length}`;
}
