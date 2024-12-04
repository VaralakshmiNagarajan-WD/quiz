  // Variables
    const questions = [
      { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: 0 },
      { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
      { question: "What is the color of the sky?", options: ["Blue", "Green", "Red", "Yellow"], answer: 0 },
      { question: "Which is the largest planet?", options: ["Mars", "Earth", "Jupiter", "Saturn"], answer: 2 },
      { question: "What is the boiling point of water?", options: ["50°C", "100°C", "150°C", "200°C"], answer: 1 },
      { question: "What is the national animal of India?", options: ["Elephant", "Peacock", "Tiger", "Lion"], answer: 2 },
      { question: "What is 10 x 10?", options: ["50", "100", "150", "200"], answer: 1 },
      { question: "What is the smallest continent?", options: ["Asia", "Australia", "Europe", "Antarctica"], answer: 1 },
      { question: "Which is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Deer"], answer: 0 },
      { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Silver"], answer: 2 }
    ];
    let currentQuestion = 0;
    let score = 0;
    let participantName = "";
    let participantEmail = "";

    // Functions
    function startQuiz() {
      participantName = document.getElementById("name").value.trim();
      participantEmail = document.getElementById("email").value.trim();
      if (participantName === "" || participantEmail === "") {
        alert("Please enter your name and email");
        return;
      }
      document.getElementById("login-page").classList.add("hidden");
      document.getElementById("intro-page").classList.remove("hidden");
      document.getElementById("participant-name").textContent = participantName;
    }

    function beginQuiz() {
      document.getElementById("intro-page").classList.add("hidden");
      document.getElementById("quiz-page").classList.remove("hidden");
      loadQuestion();
    }

    function loadQuestion() {
      const questionObj = questions[currentQuestion];
      document.getElementById("question-text").textContent = questionObj.question;
      const optionsDiv = document.getElementById("options");
      optionsDiv.innerHTML = ""; // Clear previous options
      questionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
      });
    }

    function checkAnswer(selectedIndex) {
      if (selectedIndex === questions[currentQuestion].answer) {
        score++;
      }
      nextQuestion();
    }

    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        endQuiz();
      }
    }

    function endQuiz() {
      document.getElementById("quiz-page").classList.add("hidden");
      document.getElementById("score-page").classList.remove("hidden");
      document.getElementById("score").textContent = score;
      showCorrectAnswers();
    }

    function showCorrectAnswers() {
      const answersDiv = document.getElementById("correct-answers");
      answersDiv.innerHTML = ""; // Clear previous answers
      questions.forEach((q, index) => {
        const answer = document.createElement("p");
        answer.textContent = `${index + 1}. ${q.question} - Correct Answer: ${q.options[q.answer]}`;
        answersDiv.appendChild(answer);
      });
    }
 