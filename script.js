// ===============================
// KiNG QUIZ - GAME ENGINE
// ===============================

let gameMode = "solo";

let players = [
  {
    name: "Player 1",
    score: 0
  },
  {
    name: "Player 2",
    score: 0
  }
];

let currentPlayer = 0;

let selectedCategory = "";

let questions = [];

let questionIndex = 0;

let answered = false;

let timerInterval;

let timeLeft = 15;


// ===============================
// QUESTIONS
// ===============================

const questionBank = {

  football: [

    {
      q: "Who won the 2022 FIFA World Cup?",
      answers: [
        "France",
        "Argentina",
        "Brazil",
        "Germany"
      ],
      correct: 1
    },

    {
      q: "Which club has won the most UEFA Champions League titles?",
      answers: [
        "Barcelona",
        "Liverpool",
        "Real Madrid",
        "Bayern Munich"
      ],
      correct: 2
    },

    {
      q: "How many players are on the field for one football team?",
      answers: [
        "9",
        "10",
        "11",
        "12"
      ],
      correct: 2
    },

    {
      q: "Which country won the 2018 FIFA World Cup?",
      answers: [
        "Germany",
        "France",
        "Brazil",
        "Spain"
      ],
      correct: 1
    },

    {
      q: "Who is known as the King of Football?",
      answers: [
        "Messi",
        "Maradona",
        "Pelé",
        "Ronaldo"
      ],
      correct: 2
    },

    {
      q: "Which player is famous for the number 7 shirt at Manchester United?",
      answers: [
        "Cristiano Ronaldo",
        "Sergio Ramos",
        "Xavi",
        "Kaká"
      ],
      correct: 0
    },

    {
      q: "Which country has won the most FIFA World Cups?",
      answers: [
        "Brazil",
        "Germany",
        "Italy",
        "Argentina"
      ],
      correct: 0
    },

    {
      q: "How long is a standard football match?",
      answers: [
        "60 minutes",
        "70 minutes",
        "80 minutes",
        "90 minutes"
      ],
      correct: 3
    },

    {
      q: "Which card means a player is sent off?",
      answers: [
        "Yellow",
        "Red",
        "Blue",
        "Green"
      ],
      correct: 1
    },

    {
      q: "Which country hosted the 2022 FIFA World Cup?",
      answers: [
        "Qatar",
        "Russia",
        "UAE",
        "Saudi Arabia"
      ],
      correct: 0
    }

  ],


  history: [

    {
      q: "Who built the Great Pyramid of Giza?",
      answers: [
        "Ramses II",
        "Khufu",
        "Tutankhamun",
        "Cleopatra"
      ],
      correct: 1
    },

    {
      q: "Who was the first president of the United States?",
      answers: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "John Adams"
      ],
      correct: 1
    },

    {
      q: "In which country did the ancient Olympic Games begin?",
      answers: [
        "Italy",
        "Egypt",
        "Greece",
        "Turkey"
      ],
      correct: 2
    },

    {
      q: "Who discovered the tomb of Tutankhamun?",
      answers: [
        "Howard Carter",
        "Napoleon",
        "Julius Caesar",
        "Herodotus"
      ],
      correct: 0
    },

    {
      q: "The Roman Empire was centered around which city?",
      answers: [
        "Athens",
        "Rome",
        "Paris",
        "London"
      ],
      correct: 1
    },

    {
      q: "Who was known as the Maid of Orléans?",
      answers: [
        "Joan of Arc",
        "Cleopatra",
        "Marie Curie",
        "Queen Victoria"
      ],
      correct: 0
    },

    {
      q: "The pyramids were mainly built as what?",
      answers: [
        "Schools",
        "Tombs",
        "Markets",
        "Fortresses"
      ],
      correct: 1
    },

    {
      q: "Who was the famous Egyptian queen associated with Julius Caesar?",
      answers: [
        "Nefertiti",
        "Cleopatra",
        "Hatshepsut",
        "Nefertari"
      ],
      correct: 1
    },

    {
      q: "Which civilization created democracy in ancient Athens?",
      answers: [
        "Greek",
        "Roman",
        "Persian",
        "Egyptian"
      ],
      correct: 0
    },

    {
      q: "Who was Napoleon Bonaparte?",
      answers: [
        "French military leader",
        "British king",
        "Roman emperor",
        "Egyptian pharaoh"
      ],
      correct: 0
    }

  ],


  geography: [

    {
      q: "What is the largest country in the world by area?",
      answers: [
        "Canada",
        "China",
        "Russia",
        "USA"
      ],
      correct: 2
    },

    {
      q: "What is the capital of Egypt?",
      answers: [
        "Giza",
        "Cairo",
        "Alexandria",
        "Luxor"
      ],
      correct: 1
    },

    {
      q: "Which is the largest ocean?",
      answers: [
        "Atlantic",
        "Indian",
        "Pacific",
        "Arctic"
      ],
      correct: 2
    },

    {
      q: "Which country is famous for the Eiffel Tower?",
      answers: [
        "Italy",
        "France",
        "Spain",
        "Germany"
      ],
      correct: 1
    },

    {
      q: "Which continent is Egypt in?",
      answers: [
        "Asia",
        "Europe",
        "Africa",
        "South America"
      ],
      correct: 2
    },

    {
      q: "What is the capital of Japan?",
      answers: [
        "Seoul",
        "Tokyo",
        "Beijing",
        "Bangkok"
      ],
      correct: 1
    },

    {
      q: "Which desert is the largest hot desert?",
      answers: [
        "Gobi",
        "Sahara",
        "Arabian",
        "Kalahari"
      ],
      correct: 1
    },

    {
      q: "Which country has the city of Barcelona?",
      answers: [
        "Portugal",
        "Spain",
        "Italy",
        "France"
      ],
      correct: 1
    },

    {
      q: "What is the capital of Italy?",
      answers: [
        "Rome",
        "Milan",
        "Venice",
        "Naples"
      ],
      correct: 0
    },

    {
      q: "Which river runs through Egypt?",
      answers: [
        "Amazon",
        "Nile",
        "Danube",
        "Thames"
      ],
      correct: 1
    }

  ],


  biology: [

    {
      q: "What is the basic unit of life?",
      answers: [
        "Atom",
        "Cell",
        "Organ",
        "Tissue"
      ],
      correct: 1
    },

    {
      q: "Which organ pumps blood around the body?",
      answers: [
        "Liver",
        "Brain",
        "Heart",
        "Lung"
      ],
      correct: 2
    },

    {
      q: "What gas do humans need to breathe?",
      answers: [
        "Carbon dioxide",
        "Oxygen",
        "Nitrogen",
        "Hydrogen"
      ],
      correct: 1
    },

    {
      q: "Which organ is mainly responsible for thinking?",
      answers: [
        "Heart",
        "Brain",
        "Liver",
        "Kidney"
      ],
      correct: 1
    },

    {
      q: "Plants use sunlight to make food through what process?",
      answers: [
        "Respiration",
        "Photosynthesis",
        "Digestion",
        "Fermentation"
      ],
      correct: 1
    },

    {
      q: "How many chromosomes do humans normally have?",
      answers: [
        "23",
        "46",
        "44",
        "48"
      ],
      correct: 1
    },

    {
      q: "Which blood cells help fight infections?",
      answers: [
        "Red blood cells",
        "White blood cells",
        "Platelets",
        "Plasma"
      ],
      correct: 1
    },

    {
      q: "DNA stands for what?",
      answers: [
        "Deoxyribonucleic acid",
        "Dynamic Nuclear Acid",
        "Deoxygenated Nucleic Atom",
        "None"
      ],
      correct: 0
    },

    {
      q: "Which organ filters waste from the blood?",
      answers: [
        "Heart",
        "Kidney",
        "Lung",
        "Stomach"
      ],
      correct: 1
    },

    {
      q: "What is the largest organ of the human body?",
      answers: [
        "Heart",
        "Liver",
        "Skin",
        "Brain"
      ],
      correct: 2
    }

  ],


  love: [

    {
      q: "What is usually important in a healthy relationship?",
      answers: [
        "Trust",
        "Lies",
        "Jealousy",
        "Ignoring"
      ],
      correct: 0
    },

    {
      q: "Which is a good way to solve an argument?",
      answers: [
        "Shouting",
        "Ignoring forever",
        "Calm communication",
        "Blocking"
      ],
      correct: 2
    },

    {
      q: "What helps build trust?",
      answers: [
        "Honesty",
        "Secrets",
        "Lies",
        "Manipulation"
      ],
      correct: 0
    },

    {
      q: "A healthy relationship should include:",
      answers: [
        "Respect",
        "Control",
        "Fear",
        "Pressure"
      ],
      correct: 0
    },

    {
      q: "What is an important part of communication?",
      answers: [
        "Listening",
        "Interrupting",
        "Ignoring",
        "Shouting"
      ],
      correct: 0
    },

    {
      q: "Which action can show appreciation?",
      answers: [
        "Thanking someone",
        "Ignoring them",
        "Insulting them",
        "Lying"
      ],
      correct: 0
    },

    {
      q: "What is a healthy boundary?",
      answers: [
        "Respecting personal limits",
        "Controlling someone",
        "Reading private messages",
        "Forcing decisions"
      ],
      correct: 0
    },

    {
      q: "When someone is upset, a helpful response is:",
      answers: [
        "Listen",
        "Mock them",
        "Ignore them",
        "Start another argument"
      ],
      correct: 0
    },

    {
      q: "What is usually stronger than jealousy?",
      answers: [
        "Trust",
        "Anger",
        "Fear",
        "Suspicion"
      ],
      correct: 0
    },

    {
      q: "A good relationship should make both people feel:",
      answers: [
        "Respected",
        "Controlled",
        "Afraid",
        "Trapped"
      ],
      correct: 0
    }

  ],


  english: [

    {
      q: "What is the opposite of 'easy'?",
      answers: [
        "Simple",
        "Hard",
        "Fast",
        "Small"
      ],
      correct: 1
    },

    {
      q: "Choose the correct sentence:",
      answers: [
        "She go to school.",
        "She goes to school.",
        "She going school.",
        "She gone school."
      ],
      correct: 1
    },

    {
      q: "What is the plural of 'child'?",
      answers: [
        "Childs",
        "Children",
        "Childes",
        "Childrens"
      ],
      correct: 1
    },

    {
      q: "What does 'beautiful' mean?",
      answers: [
        "Ugly",
        "Very attractive",
        "Angry",
        "Fast"
      ],
      correct: 1
    },

    {
      q: "Choose the correct past tense of 'go':",
      answers: [
        "Goed",
        "Gone",
        "Went",
        "Going"
      ],
      correct: 2
    },

    {
      q: "What is the opposite of 'expensive'?",
      answers: [
        "Cheap",
        "Rich",
        "Large",
        "Heavy"
      ],
      correct: 0
    },

    {
      q: "Which word is a noun?",
      answers: [
        "Run",
        "Beautiful",
        "Book",
        "Quickly"
      ],
      correct: 2
    },

    {
      q: "What does 'happy' mean?",
      answers: [
        "Sad",
        "Joyful",
        "Angry",
        "Tired"
      ],
      correct: 1
    },

    {
      q: "Choose the correct word: I ___ football every Friday.",
      answers: [
        "play",
        "plays",
        "playing",
        "played"
      ],
      correct: 0
    },

    {
      q: "What is the opposite of 'early'?",
      answers: [
        "Late",
        "Fast",
        "Quick",
        "Soon"
      ],
      correct: 0
    }

  ],


  friends: [

    {
      q: "Who is most likely to be late?",
      answers: [
        "The sleepy one",
        "The organized one",
        "The early one",
        "Nobody"
      ],
      correct: 0
    },

    {
      q: "Who usually knows the latest gossip?",
      answers: [
        "The quiet one",
        "The gossip expert",
        "The teacher",
        "Nobody"
      ],
      correct: 1
    },

    {
      q: "What usually makes a group hangout better?",
      answers: [
        "Good vibes",
        "Arguments",
        "Silence",
        "Complaining"
      ],
      correct: 0
    },

    {
      q: "Who is most likely to forget their phone?",
      answers: [
        "The distracted friend",
        "The organized friend",
        "The responsible friend",
        "Nobody"
      ],
      correct: 0
    },

    {
      q: "What's a classic thing friends do?",
      answers: [
        "Make jokes",
        "Never talk",
        "Avoid each other",
        "Study all night"
      ],
      correct: 0
    },

    {
      q: "Who is usually the first person to suggest food?",
      answers: [
        "The hungry friend",
        "The sleepy friend",
        "The quiet friend",
        "Nobody"
      ],
      correct: 0
    },

    {
      q: "What's essential for a good friends' night?",
      answers: [
        "Fun",
        "Arguments",
        "Boredom",
        "Silence"
      ],
      correct: 0
    },

    {
      q: "Who usually says 'I'm coming' but arrives late?",
      answers: [
        "The late friend",
        "The early friend",
        "The organized friend",
        "Nobody"
      ],
      correct: 0
    },

    {
      q: "What do friends often share?",
      answers: [
        "Memories",
        "Nothing",
        "Arguments only",
        "Secrets with everyone"
      ],
      correct: 0
    },

    {
      q: "What's the best thing about a good friend?",
      answers: [
        "Trust",
        "Competition",
        "Jealousy",
        "Drama"
      ],
      correct: 0
    }

  ],


  politics: [

    {
      q: "What is a democracy?",
      answers: [
        "Rule by the people",
        "Rule by one person only",
        "Rule by the army",
        "Rule without elections"
      ],
      correct: 0
    },

    {
      q: "What is a constitution?",
      answers: [
        "A country's fundamental legal framework",
        "A sports rule",
        "A map",
        "A tax receipt"
      ],
      correct: 0
    },

    {
      q: "What does UN stand for?",
      answers: [
        "United Nations",
        "Universal Network",
        "United Navy",
        "Union Nation"
      ],
      correct: 0
    },

    {
      q: "What is an election?",
      answers: [
        "A process of choosing representatives",
        "A court case",
        "A military exercise",
        "A trade agreement"
      ],
      correct: 0
    },

    {
      q: "What is a parliament?",
      answers: [
        "A legislative body",
        "A hospital",
        "A court",
        "A bank"
      ],
      correct: 0
    },

    {
      q: "What does a president usually lead?",
      answers: [
        "The executive branch or state, depending on the system",
        "A football team",
        "A school",
        "A company only"
      ],
      correct: 0
    },

    {
      q: "What is diplomacy?",
      answers: [
        "Managing relations between countries",
        "Playing sports",
        "Writing novels",
        "Running a business"
      ],
      correct: 0
    },

    {
      q: "What is a political party?",
      answers: [
        "An organized group sharing political goals",
        "A sports club",
        "A company",
        "A school"
      ],
      correct: 0
    },

    {
      q: "What is voting?",
      answers: [
        "Expressing a choice in an election or decision",
        "Signing a contract",
        "Paying taxes",
        "Going to court"
      ],
      correct: 0
    },

    {
      q: "What is a law?",
      answers: [
        "A rule enforced by a governing authority",
        "A suggestion",
        "A game",
        "A private message"
      ],
      correct: 0
    }

  ],


  general: [

    {
      q: "How many days are in a leap year?",
      answers: [
        "364",
        "365",
        "366",
        "367"
      ],
      correct: 2
    },

    {
      q: "What is the fastest land animal?",
      answers: [
        "Lion",
        "Cheetah",
        "Horse",
        "Tiger"
      ],
      correct: 1
    },

    {
      q: "How many planets are in our Solar System?",
      answers: [
        "7",
        "8",
        "9",
        "10"
      ],
      correct: 1
    },

    {
      q: "Which planet is known as the Red Planet?",
      answers: [
        "Venus",
        "Mars",
        "Jupiter",
        "Mercury"
      ],
      correct: 1
    },

    {
      q: "How many colors are traditionally in a rainbow?",
      answers: [
        "5",
        "6",
        "7",
        "8"
      ],
      correct: 2
    },

    {
      q: "What is the largest mammal?",
      answers: [
        "Elephant",
        "Blue whale",
        "Giraffe",
        "Shark"
      ],
      correct: 1
    },

    {
      q: "Which metal is liquid at room temperature?",
      answers: [
        "Iron",
        "Mercury",
        "Gold",
        "Silver"
      ],
      correct: 1
    },

    {
      q: "How many sides does a hexagon have?",
      answers: [
        "5",
        "6",
        "7",
        "8"
      ],
      correct: 1
    },

    {
      q: "Which animal is known as man's best friend?",
      answers: [
        "Cat",
        "Dog",
        "Horse",
        "Bird"
      ],
      correct: 1
    },

    {
      q: "What is H2O?",
      answers: [
        "Oxygen",
        "Water",
        "Hydrogen",
        "Salt"
      ],
      correct: 1
    }

  ],


  movies: [

    {
      q: "Which movie features the character Jack Sparrow?",
      answers: [
        "Titanic",
        "Pirates of the Caribbean",
        "Avatar",
        "The Matrix"
      ],
      correct: 1
    },

    {
      q: "Who directed Titanic?",
      answers: [
        "James Cameron",
        "Christopher Nolan",
        "Steven Spielberg",
        "Ridley Scott"
      ],
      correct: 0
    },

    {
      q: "Which movie features superheroes called Avengers?",
      answers: [
        "Marvel's The Avengers",
        "Titanic",
        "Gladiator",
        "Joker"
      ],
      correct: 0
    },

    {
      q: "Which character is known as Batman?",
      answers: [
        "Peter Parker",
        "Bruce Wayne",
        "Clark Kent",
        "Tony Stark"
      ],
      correct: 1
    },

    {
      q: "Which film features the character Harry Potter?",
      answers: [
        "Harry Potter",
        "Avatar",
        "Inception",
        "Rocky"
      ],
      correct: 0
    },

    {
      q: "Which superhero uses a shield?",
      answers: [
        "Iron Man",
        "Captain America",
        "Hulk",
        "Thor"
      ],
      correct: 1
    },

    {
      q: "Which movie is about a giant blue alien world called Pandora?",
      answers: [
        "Avatar",
        "Joker",
        "Titanic",
        "Rocky"
      ],
      correct: 0
    },

    {
      q: "Who is the superhero with the hammer Mjölnir?",
      answers: [
        "Thor",
        "Batman",
        "Spider-Man",
        "Hulk"
      ],
      correct: 0
    },

    {
      q: "Which character is Peter Parker?",
      answers: [
        "Superman",
        "Spider-Man",
        "Iron Man",
        "Batman"
      ],
      correct: 1
    },

    {
      q: "Which movie character is famous for saying 'May the Force be with you'?",
      answers: [
        "Star Wars characters",
        "Harry Potter",
        "Batman",
        "Rocky"
      ],
      correct: 0
    }

  ]

};


// ===============================
// SCREEN SYSTEM
// ===============================

function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.add("hidden");

    });

  document
    .getElementById(id)
    .classList.remove("hidden");

}


// ===============================
// HOME
// ===============================

function startGame(mode) {

  gameMode = mode;

  players = [
    {
      name: "Player 1",
      score: 0
    },
    {
      name: "Player 2",
      score: 0
    }
  ];

  currentPlayer = 0;

  if (mode === "solo") {

    players[0].name = "Player";

    showScreen("categoryScreen");

  }

}


// ===============================
// TWO PLAYERS
// ===============================

function showTwoPlayers() {

  showScreen("playersScreen");

}


function startTwoPlayers() {

  const p1 =
    document
      .getElementById("player1")
      .value
      .trim();

  const p2 =
    document
      .getElementById("player2")
      .value
      .trim();

  players[0].name =
    p1 || "Player 1";

  players[1].name =
    p2 || "Player 2";

  players[0].score = 0;

  players[1].score = 0;

  currentPlayer = 0;

  gameMode = "two";

  showScreen("categoryScreen");

}


function backHome() {

  showScreen("startScreen");

}


// ===============================
// CATEGORY
// ===============================

function selectCategory(category) {

  selectedCategory = category;

  questions =
    [...questionBank[category]];

  shuffle(questions);

  questions =
    questions.slice(0, 10);

  questionIndex = 0;

  players.forEach(player => {

    player.score = 0;

  });

  showScreen("quizScreen");

  loadQuestion();

}


// ===============================
// SHUFFLE
// ===============================

function shuffle(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      array[i],
      array[j]
    ] =
    [
      array[j],
      array[i]
    ];

  }

}


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

  clearInterval(timerInterval);

  answered = false;

  timeLeft = 15;

  document
    .getElementById("timer")
    .textContent = timeLeft;

  document
    .getElementById("nextBtn")
    .classList.add("hidden");

  const player =
    players[currentPlayer];

  document
    .getElementById("currentPlayer")
    .textContent =
      player.name;

  document
    .getElementById("score")
    .textContent =
      player.score;

  document
    .getElementById("questionNumber")
    .textContent =
      questionIndex + 1;

  document
    .getElementById("progressBar")
    .style.width =
      ((questionIndex + 1) / questions.length * 100) + "%";


  const question =
    questions[questionIndex];

  document
    .getElementById("question")
    .textContent =
      question.q;


  const answers =
    document.getElementById("answers");

  answers.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.className =
        "answer-btn";

      button.textContent =
        `${String.fromCharCode(65 + index)}. ${answer}`;

      button.onclick = () => {

        checkAnswer(
          index,
          button
        );

      };

      answers.appendChild(button);

    }
  );


  startTimer();

}


// ===============================
// TIMER
// ===============================

function startTimer() {

  clearInterval(timerInterval);

  timerInterval =
    setInterval(() => {

      timeLeft--;

      const timer =
        document.getElementById("timer");

      timer.textContent =
        timeLeft;

      if (timeLeft <= 5) {

        timer.style.borderColor =
          "#ff4d5d";

        timer.style.color =
          "#ff4d5d";

      }

      if (timeLeft <= 0) {

        clearInterval(timerInterval);

        timeOut();

      }

    }, 1000);

}


function timeOut() {

  if (answered)
    return;

  answered = true;

  const question =
    questions[questionIndex];

  const buttons =
    document.querySelectorAll(
      ".answer-btn"
    );

  buttons.forEach(
    (button, index) => {

      button.disabled = true;

      if (
        index === question.correct
      ) {

        button.classList.add(
          "correct"
        );

      }

    }
  );

  document
    .getElementById("nextBtn")
    .classList.remove("hidden");

}


// ===============================
// ANSWER
// ===============================

function checkAnswer(
  selected,
  selectedButton
) {

  if (answered)
    return;

  answered = true;

  clearInterval(timerInterval);

  const question =
    questions[questionIndex];

  const buttons =
    document.querySelectorAll(
      ".answer-btn"
    );


  buttons.forEach(
    button => {

      button.disabled = true;

    }
  );


  if (
    selected === question.correct
  ) {

    selectedButton.classList.add(
      "correct"
    );

    players[currentPlayer].score +=
      100;

    // Speed bonus
    if (timeLeft >= 10) {

      players[currentPlayer].score +=
        50;

    }

  }

  else {

    selectedButton.classList.add(
      "wrong"
    );

    buttons[
      question.correct
    ].classList.add(
      "correct"
    );

  }


  document
    .getElementById("score")
    .textContent =
      players[currentPlayer].score;

  document
    .getElementById("nextBtn")
    .classList.remove("hidden");

}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

  questionIndex++;

  if (
    questionIndex >= questions.length
  ) {

    if (
      gameMode === "two" &&
      currentPlayer === 0
    ) {

      currentPlayer = 1;

      questionIndex = 0;

      showPassScreen();

      return;

    }

    finishGame();

    return;

  }

  loadQuestion();

}


// ===============================
// PASS PHONE
// ===============================

function showPassScreen() {

  clearInterval(timerInterval);

  document
    .getElementById("nextPlayer")
    .textContent =
      players[currentPlayer].name;

  showScreen("passScreen");

}


function continueTurn() {

  showScreen("quizScreen");

  loadQuestion();

}


// ===============================
// FINISH GAME
// ===============================

function finishGame() {

  clearInterval(timerInterval);

  showScreen("resultScreen");

  const resultTitle =
    document.getElementById(
      "resultTitle"
    );

  const resultText =
    document.getElementById(
      "resultText"
    );


  if (gameMode === "solo") {

    resultTitle.textContent =
      "🏆 GREAT JOB!";

    resultText.innerHTML = `
      <strong>
        ${players[0].score}
      </strong>
      points
      <br><br>
      You completed the quiz!
    `;

    return;

  }


  const p1 =
    players[0];

  const p2 =
    players[1];


  if (p1.score > p2.score) {

    resultTitle.textContent =
      "👑 " +
      p1.name +
      " WINS!";

  }

  else if (p2.score > p1.score) {

    resultTitle.textContent =
      "👑 " +
      p2.name +
      " WINS!";

  }

  else {

    resultTitle.textContent =
      "🤝 DRAW!";

  }


  resultText.innerHTML = `

    <div>
      👑 ${p1.name}
      <br>
      <strong>
        ${p1.score}
      </strong>
      points
    </div>

    <hr style="
      border:0;
      border-top:1px solid #333;
      margin:15px 0;
    ">

    <div>
      👑 ${p2.name}
      <br>
      <strong>
        ${p2.score}
      </strong>
      points
    </div>

  `;

}


// ===============================
// START
// ===============================

showScreen("startScreen");
