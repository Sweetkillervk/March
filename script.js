const quizData = [
  {
    question: "Which function is used to add values in Excel?",
    a: "ADD()",
    b: "TOTAL()",
    c: "SUM()",
    d: "PLUS()",
    correct: "c"
  },
  {
    question: "What does the MIN() function do?",
    a: "Finds average",
    b: "Finds smallest number",
    c: "Finds largest number",
    d: "Counts blank cells",
    correct: "b"
  },
  {
    question: "Which of the following gives the largest value?",
    a: "MIN()",
    b: "COUNT()",
    c: "MAX()",
    d: "SUM()",
    correct: "c"
  },
  {
    question: "COUNT() function is used to:",
    a: "Count text only",
    b: "Count numeric cells only",
    c: "Count blank cells",
    d: "Count all cells",
    correct: "b"
  },
  {
    question: "What is the correct formula to sum the values from cell A1 to A5?",
    a: "=ADD(A1:A5)",
    b: "=SUM(A1 TO A5)",
    c: "=SUM(A1:A5)",
    d: "=TOTAL(A1:A5)",
    correct: "c"
  },
  {
    question: "Which symbol is used before a formula in Excel?",
    a: "$",
    b: "=",
    c: "+",
    d: "#",
    correct: "b"
  },
  {
    question: "Which formula finds the highest number in range B1 to B10?",
    a: "=LARGE(B1:B10)",
    b: "=BIG(B1:B10)",
    c: "=MAX(B1:B10)",
    d: "=HIGH(B1:B10)",
    correct: "c"
  },
  {
    question: "Which of the following is not a function in Excel?",
    a: "SUM()",
    b: "MIN()",
    c: "TOTAL()",
    d: "MAX()",
    correct: "c"
  },
  {
    question: 'What will =COUNT(10, "text", 30) return?',
    a: "2",
    b: "3",
    c: "1",
    d: "0",
    correct: "a"
  },
  {
    question: "What does =SUM(A1:A3) return if A1=10, A2=5, A3=15?",
    a: "25",
    b: "30",
    c: "20",
    d: "15",
    correct: "b"
  },
  {
    question: "Which key is used to start a new line within a cell?",
    a: "Ctrl + Enter",
    b: "Alt + Enter",
    c: "Shift + Enter",
    d: "Enter",
    correct: "b"
  },
  {
    question: "Which of these is a valid cell reference?",
    a: "1A",
    b: "A1",
    c: "A$",
    d: "1#",
    correct: "b"
  },
  {
    question: "Which function counts only numbers in a range?",
    a: "COUNTA()",
    b: "COUNT()",
    c: "COUNTBLANK()",
    d: "COUNTIF()",
    correct: "b"
  },
  {
    question: "What does =MIN(3,6,9,1,8) return?",
    a: "9",
    b: "3",
    c: "1",
    d: "6",
    correct: "c"
  },
  {
    question: "What is the shortcut to insert a new worksheet?",
    a: "Ctrl + W",
    b: "Shift + F11",
    c: "Ctrl + N",
    d: "Alt + Insert",
    correct: "b"
  },

  // MS Word Questions (15)
  {
    question: "What is the default file extension of Word 2016?",
    a: ".txt",
    b: ".doc",
    c: ".docx",
    d: ".word",
    correct: "c"
  },
  {
    question: "Which shortcut is used to copy selected text?",
    a: "Ctrl + X",
    b: "Ctrl + C",
    c: "Ctrl + V",
    d: "Ctrl + P",
    correct: "b"
  },
  {
    question: "Which option is used to check spelling and grammar?",
    a: "F5",
    b: "Ctrl + G",
    c: "F7",
    d: "Alt + S",
    correct: "c"
  },
  {
    question: "Which tab contains the Font group?",
    a: "Insert",
    b: "Design",
    c: "Home",
    d: "View",
    correct: "c"
  },
  {
    question: "How can you make text bold?",
    a: "Ctrl + U",
    b: "Ctrl + B",
    c: "Ctrl + I",
    d: "Ctrl + D",
    correct: "b"
  },
  {
    question: "Which option is used to insert a table?",
    a: "Layout tab",
    b: "Home tab",
    c: "Insert tab",
    d: "Review tab",
    correct: "c"
  },
  {
    question: "Which shortcut is used to save a document?",
    a: "Ctrl + S",
    b: "Ctrl + P",
    c: "Ctrl + A",
    d: "Ctrl + D",
    correct: "a"
  },
  {
    question: "Which of the following is not a text alignment in Word?",
    a: "Left",
    b: "Right",
    c: "Center",
    d: "Diagonal",
    correct: "d"
  },
  {
    question: "To select the entire document, which shortcut is used?",
    a: "Ctrl + E",
    b: "Ctrl + A",
    c: "Ctrl + Shift",
    d: "Ctrl + Home",
    correct: "b"
  },
  {
    question: "What is the use of 'Header'?",
    a: "Shows page number",
    b: "Shows text on top of each page",
    c: "Shows table",
    d: "None of the above",
    correct: "b"
  },
  {
    question: "Which feature allows you to combine names and addresses with a document?",
    a: "Mail Merge",
    b: "Merge Field",
    c: "Data Link",
    d: "Page Setup",
    correct: "a"
  },
  {
    question: "Which shortcut is used for 'Print Preview'?",
    a: "Ctrl + V",
    b: "Ctrl + F2",
    c: "Ctrl + F1",
    d: "Ctrl + Alt + P",
    correct: "b"
  },
  {
    question: "Which feature automatically corrects common typing errors?",
    a: "Spell Check",
    b: "AutoCorrect",
    c: "AutoText",
    d: "AutoFormat",
    correct: "b"
  },
  {
    question: "What is the smallest font size in Word?",
    a: "8",
    b: "6",
    c: "1",
    d: "4",
    correct: "c"
  },
  {
    question: "Which menu contains 'Page Setup'?",
    a: "File",
    b: "Layout",
    c: "View",
    d: "Insert",
    correct: "b"
  }

  
    
  
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const quizSection = document.getElementById('quizSection');
const marksheet = document.getElementById('marksheet');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const studentName = document.getElementById('studentName');
const studentEmail = document.getElementById('studentEmail');
const learnerCode = document.getElementById('learnerCode');
const timerElement = document.getElementById('timer');
const resetButton = document.getElementById('resetButton');
const marksheetName = document.getElementById('marksheetName');
const marksheetEmail = document.getElementById('marksheetEmail');
const marksheetCode = document.getElementById('marksheetCode');
const marksheetScore = document.getElementById('marksheetScore');
const studentTableBody = document.getElementById('studentTableBody');

let currentQuiz = 0;
let score = 0;
let shuffledQuizData = [];
let timeLeft = 20;
let timerInterval;

// Shuffle function
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Handle Login and Store Data
function handleLogin() {
  const name = studentName.value.trim();
  const email = studentEmail.value.trim();
  const learnerCodeValue = learnerCode.value.trim();

  if (name && email && learnerCodeValue) {
    // Store user data in sessionStorage
    sessionStorage.setItem('studentName', name);
    sessionStorage.setItem('studentEmail', email);
    sessionStorage.setItem('learnerCode', learnerCodeValue);

    // Hide login and show quiz section
    loginForm.style.display = 'none';
    quizSection.style.display = 'block';

    // Set marksheet fields
    marksheetName.value = name;
    marksheetEmail.value = email;
    marksheetCode.value = learnerCodeValue;

    // Shuffle quiz data and load quiz
    shuffledQuizData = shuffle([...quizData]);
    loadQuiz();
  } else {
    alert("कृपया सभी फ़ील्ड्स भरें।");
  }
}

// Load Quiz Data
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = shuffledQuizData[currentQuiz];
  questionEl.innerText = `Q${currentQuiz + 1}: ${currentQuizData.question}`;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  timeLeft = 20;
  updateTimer();
  startTimer();
}

// Deselect Answers
function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

// Get Selected Answer
function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Start Timer
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      currentQuiz++;
      if (currentQuiz < shuffledQuizData.length) {
        loadQuiz();
      } else {
        showMarksheet();
      }
    }
  }, 1000);
}

// Update Timer
function updateTimer() {
  timerElement.innerText = `Time: ${timeLeft}s`;
  if (timeLeft <= 5) {
    timerElement.classList.add('warning');
  } else {
    timerElement.classList.remove('warning');
  }
}

// Submit Answer
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === shuffledQuizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < shuffledQuizData.length) {
      loadQuiz();
    } else {
      showMarksheet();
    }
  } else {
    alert("कृपया उत्तर चुनें।");
  }
});

// Show Marksheet
function showMarksheet() {
  clearInterval(timerInterval);
  quizSection.style.display = 'none';
  marksheet.style.display = 'block';

  // Set score in marksheet
  marksheetScore.value = `आपने ${score}/${shuffledQuizData.length} प्रश्न सही उत्तर दिए।`;

  // Add record to student records table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${sessionStorage.getItem('studentName')}</td>
    <td>${sessionStorage.getItem('studentEmail')}</td>
    <td>${sessionStorage.getItem('learnerCode')}</td>
    <td>${score}</td>
  `;
  studentTableBody.appendChild(row);
}

// Reset Quiz
function resetQuiz() {
  loginForm.style.display = 'block';
  marksheet.style.display = 'none';
  studentName.value = '';
  studentEmail.value = '';
  learnerCode.value = '';
  score = 0;
  currentQuiz = 0;
  clearInterval(timerInterval);
  timerElement.innerText = 'Time: 20s';
}

// Event Listeners
document.getElementById('loginButton').addEventListener('click', handleLogin);
resetButton.addEventListener('click', resetQuiz);