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
    question: "Which tab contains the 'Data Validation' option in Excel?",
    a: "Formulas",
    b: "Review",
    c: "Data",
    d: "Insert",
    correct: "c"
  },
  {
    question: "What is the shortcut for saving a workbook?",
    a: "Ctrl + Z",
    b: "Ctrl + S",
    c: "Ctrl + X",
    d: "Ctrl + C",
    correct: "b"
  },
  {
    question: "Which function returns the number of characters in a text string?",
    a: "LEN()",
    b: "TEXTLEN()",
    c: "CHAR()",
    d: "COUNT()",
    correct: "a"
  },
  {
    question: "What does the IF function do in Excel?",
    a: "It adds two values",
    b: "It filters data",
    c: "It performs logical tests",
    d: "It highlights text",
    correct: "c"
  },
  {
    question: "Where is the 'Conditional Formatting' option located?",
    a: "Insert tab",
    b: "Page Layout tab",
    c: "Home tab",
    d: "Formulas tab",
    correct: "c"
  },
  {
    question: "Which function is used to count numeric values in a range?",
    a: "COUNTA()",
    b: "COUNT()",
    c: "COUNTIF()",
    d: "SUM()",
    correct: "b"
  },
  {
    question: "What is the default file extension for an Excel workbook?",
    a: ".xlsm",
    b: ".docx",
    c: ".xlsx",
    d: ".pptx",
    correct: "c"
  },
  {
    question: "Shortcut key to insert a new worksheet is:",
    a: "Ctrl + N",
    b: "Shift + F11",
    c: "Ctrl + F10",
    d: "Alt + W",
    correct: "b"
  },
  {
    question: "Which formula checks whether a condition is true or false?",
    a: "IF()",
    b: "CHECK()",
    c: "TEST()",
    d: "VERIFY()",
    correct: "a"
  },
  {
    question: "Which function is used to find the largest number?",
    a: "MAX()",
    b: "LARGE()",
    c: "BIGGEST()",
    d: "TOP()",
    correct: "a"
  },
  {
    question: "What does 'Wrap Text' do?",
    a: "Wraps the worksheet",
    b: "Wraps text to fit in a cell",
    c: "Wraps formulas",
    d: "Wraps data in columns",
    correct: "b"
  },
  {
    question: "Where can you freeze panes?",
    a: "View tab",
    b: "Home tab",
    c: "Insert tab",
    d: "Data tab",
    correct: "a"
  },
  {
    question: "Which tab is used to insert charts?",
    a: "Review",
    b: "Data",
    c: "Insert",
    d: "Home",
    correct: "c"
  },
  {
    question: "The formula to calculate average is:",
    a: "TOTAL()",
    b: "AVG()",
    c: "AVERAGE()",
    d: "MEAN()",
    correct: "c"
  },
  {
    question: "Which function counts blank cells?",
    a: "COUNT()",
    b: "ISBLANK()",
    c: "COUNTA()",
    d: "COUNTBLANK()",
    correct: "d"
  },
  {
    question: "How do you start a formula in Excel?",
    a: "With + sign",
    b: "With # sign",
    c: "With = sign",
    d: "With @ sign",
    correct: "c"
  },
  {
    question: "Which shortcut cuts selected cells?",
    a: "Ctrl + X",
    b: "Ctrl + C",
    c: "Ctrl + V",
    d: "Ctrl + Z",
    correct: "a"
  },
  {
    question: "What does the VLOOKUP function do?",
    a: "Looks up a value vertically",
    b: "Counts rows",
    c: "Validates data",
    d: "Sorts values",
    correct: "a"
  },
  {
    question: "Which tab includes the 'Protect Sheet' option?",
    a: "Formulas",
    b: "Review",
    c: "Home",
    d: "View",
    correct: "b"
  },
  {
    question: "Which function rounds a number to the nearest integer?",
    a: "ROUNDUP()",
    b: "ROUNDDOWN()",
    c: "INT()",
    d: "ROUND()",
    correct: "d"
  },
  {
    question: "What does 'Merge & Center' do?",
    a: "Joins multiple worksheets",
    b: "Merges cells and centers content",
    c: "Inserts a table",
    d: "Splits a cell",
    correct: "b"
  },
  {
    question: "Which symbol is used for absolute cell reference?",
    a: "$",
    b: "@",
    c: "#",
    d: "&",
    correct: "a"
  },
  {
    question: "How can you filter data in Excel?",
    a: "Using Sort tool",
    b: "Using Cut option",
    c: "Using Filter option",
    d: "Using Wrap Text",
    correct: "c"
  },
  {
    question: "Which tab is used to insert a PivotTable?",
    a: "Insert",
    b: "Data",
    c: "Formulas",
    d: "Review",
    correct: "a"
  },
  {
    question: "What is the shortcut for Undo?",
    a: "Ctrl + R",
    b: "Ctrl + S",
    c: "Ctrl + Z",
    d: "Ctrl + U",
    correct: "c"
  },
  {
    question: "Which of the following is a text function?",
    a: "CONCATENATE()",
    b: "MAX()",
    c: "SUM()",
    d: "ROUND()",
    correct: "a"
  },
  {
    question: "Which Excel feature suggests values based on previous entries?",
    a: "AutoFill",
    b: "Data Validation",
    c: "Flash Fill",
    d: "Smart Fill",
    correct: "c"
  },
  {
    question: "Which tab contains the 'Sort & Filter' option?",
    a: "Insert",
    b: "Review",
    c: "Data",
    d: "Page Layout",
    correct: "c"
  }



  
    
  
];
// Allowed Learner Codes
const validLearnerCodes = ["5566", "7656", "1545"]; // Yahan apne learner codes add karo

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

    // ✅ Learner code validation
    if (!validLearnerCodes.includes(learnerCodeValue)) {
      alert("गलत Learner Code. कृपया सही कोड दर्ज करें।");
      return;
    }

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