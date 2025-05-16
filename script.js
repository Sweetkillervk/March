const quizData = 
[
 
  {
    question: "What does the SUM function do in MS Excel?",
    a: "Divides numbers",
    b: "Finds minimum",
    c: "Adds numbers",
    d: "Subtracts values",
    correct: "c"
  },
  {
    question: "Which function is used to find the average of numbers?",
    a: "AVERAGE",
    b: "COUNT",
    c: "MAX",
    d: "MIN",
    correct: "a"
  },
  {
    question: "What does the MIN function return?",
    a: "Maximum value",
    b: "Minimum value",
    c: "Average value",
    d: "Sum of values",
    correct: "b"
  },
  {
    question: "The MAX function is used to find:",
    a: "Average value",
    b: "Median value",
    c: "Maximum value",
    d: "Minimum value",
    correct: "c"
  },
  {
    question: "Which symbol is used for multiplication in Excel formulas?",
    a: "+",
    b: "/",
    c: "-",
    d: "*",
    correct: "d"
  },
  {
    question: "Which symbol represents division in Excel formulas?",
    a: "+",
    b: "-",
    c: "/",
    d: "*",
    correct: "c"
  },
  {
    question: "What does the AutoSum button do?",
    a: "Filters data",
    b: "Sorts data",
    c: "Quickly adds a range of cells",
    d: "Finds average",
    correct: "c"
  },
  {
    question: "Which shortcut key opens a new workbook?",
    a: "Ctrl + P",
    b: "Ctrl + S",
    c: "Ctrl + O",
    d: "Ctrl + N",
    correct: "d"
  },
  {
    question: "What is the shortcut key to save a workbook?",
    a: "Ctrl + S",
    b: "Ctrl + P",
    c: "Ctrl + Z",
    d: "Ctrl + X",
    correct: "a"
  },
  {
    question: "What does the IF function do?",
    a: "Adds numbers",
    b: "Counts cells",
    c: "Performs conditional tests",
    d: "Sorts data",
    correct: "c"
  },
  {
    question: "Which function counts cells containing numbers?",
    a: "COUNTBLANK",
    b: "COUNTA",
    c: "COUNT",
    d: "SUM",
    correct: "c"
  },
  {
    question: "What does COUNTA function count?",
    a: "All non-empty cells",
    b: "Only numbers",
    c: "Only blank cells",
    d: "Errors",
    correct: "a"
  },
  {
    question: "Which shortcut is used to undo an action?",
    a: "Ctrl + C",
    b: "Ctrl + V",
    c: "Ctrl + Z",
    d: "Ctrl + Y",
    correct: "c"
  },
  {
    question: "What does the CONCATENATE function do?",
    a: "Splits text into columns",
    b: "Finds text",
    c: "Counts characters",
    d: "Joins two or more text strings",
    correct: "d"
  },
  {
    question: "Which of these is NOT a valid Excel formula?",
    a: "=SUM(A1:A10)",
    b: "=MIN(C1:C5)",
    c: "=MULTIPLY(A1,A2)",
    d: "=AVERAGE(B1:B5)",
    correct: "c"
  },
  {
    question: "What does the Freeze Panes option do?",
    a: "Filters data",
    b: "Adds borders",
    c: "Locks rows/columns while scrolling",
    d: "Sorts data",
    correct: "c"
  },
  {
    question: "Which function returns the largest number in a range?",
    a: "MAX",
    b: "COUNT",
    c: "MIN",
    d: "AVERAGE",
    correct: "a"
  },
  {
    question: "Which shortcut key opens the Print Preview window?",
    a: "Ctrl + P",
    b: "Ctrl + S",
    c: "Ctrl + N",
    d: "Ctrl + Z",
    correct: "a"
  },
  {
    question: "What is the use of VLOOKUP function?",
    a: "Sum a column",
    b: "Count blank cells",
    c: "Lookup value vertically in a table",
    d: "Lookup value horizontally",
    correct: "c"
  },
  {
    question: "What does the COUNTIF function do?",
    a: "Counts cells that meet a condition",
    b: "Counts all cells",
    c: "Counts blank cells",
    d: "Counts cells with numbers only",
    correct: "a"
  },
  {
    question: "What does the AVERAGE function ignore?",
    a: "Numbers",
    b: "All data",
    c: "Errors",
    d: "Text and blank cells",
    correct: "d"
  },
  {
    question: "What is the use of Data Validation?",
    a: "To apply filters",
    b: "To restrict data entry based on rules",
    c: "To sort data",
    d: "To merge cells",
    correct: "b"
  },
  {
    question: "Which function removes extra spaces from text?",
    a: "TRIM",
    b: "CLEAN",
    c: "LEFT",
    d: "MID",
    correct: "a"
  },
  {
    question: "Which shortcut key is used to redo an action?",
    a: "Ctrl + X",
    b: "Ctrl + C",
    c: "Ctrl + Y",
    d: "Ctrl + Z",
    correct: "c"
  },
  {
    question: "What does the Paste Special option allow?",
    a: "Paste formulas only",
    b: "Paste formats only",
    c: "Paste values only",
    d: "All of the above",
    correct: "d"
  },
  {
    question: "What is the main function of the 'Insert' tab?",
    a: "Formatting",
    b: "Adding Formulas",
    c: "Inserting Charts or Tables",
    d: "Printing",
    correct: "c"
  },
  {
    question: "Which option is NOT available in the 'Page Layout' tab?",
    a: "Margins",
    b: "Orientation",
    c: "Themes",
    d: "Spell Check",
    correct: "d"
  },
  {
    question: "What is available in the 'Formulas' tab?",
    a: "Pivot Table",
    b: "Data Validation",
    c: "Function Library",
    d: "Freeze Panes",
    correct: "c"
  },
  {
    question: "Which task cannot be done from the 'View' tab?",
    a: "Zooming",
    b: "Freeze Panes",
    c: "Showing Gridlines",
    d: "Creating Charts",
    correct: "d"
  },
  {
    question: "Which option is available in the 'Home' tab?",
    a: "Conditional Formatting",
    b: "Insert Function",
    c: "Chart",
    d: "Page Break",
    correct: "a"
  },
  {
    question: "What is the 'Review' tab used for?",
    a: "Page Setup",
    b: "Adding Comments",
    c: "Data Sorting",
    d: "Recording Macros",
    correct: "b"
  },
  {
    question: "Which feature is in the 'Data' tab?",
    a: "Insert Table",
    b: "Goal Seek",
    c: "Flash Fill",
    d: "Spelling",
    correct: "c"
  },
  {
    question: "The 'Developer' tab is related to:",
    a: "Creating Charts",
    b: "Macros and Code",
    c: "Styles",
    d: "Header/Footer",
    correct: "b"
  },
  {
    question: "What is the 'File' tab called in Excel?",
    a: "Home Menu",
    b: "Backstage View",
    c: "Quick Access",
    d: "Save As Dialog",
    correct: "b"
  },
  {
    question: "What is the purpose of SmartArt in the 'Insert' tab?",
    a: "For Tables",
    b: "Adding Functions",
    c: "Creating Diagrams",
    d: "Formatting",
    correct: "c"
  },
  {
    question: "Which part of the 'Formulas' tab performs Error Checking?",
    a: "Formula Auditing",
    b: "Calculation Options",
    c: "Name Manager",
    d: "Define Name",
    correct: "a"
  },
  {
    question: "How do you set page orientation in the 'Page Layout' tab?",
    a: "Themes",
    b: "Orientation",
    c: "Breaks",
    d: "Background",
    correct: "b"
  },
  {
    question: "What is the function of 'Sort & Filter' in the 'Data' tab?",
    a: "Formatting Cells",
    b: "Organizing Data",
    c: "Creating Tables",
    d: "Adding Charts",
    correct: "b"
  },
  {
    question: "Which option is NOT available in the 'View' tab?",
    a: "Gridlines",
    b: "Freeze Panes",
    c: "Outline",
    d: "Zoom",
    correct: "c"
  },
  {
    question: "What do each Ribbon Tab in Excel contain?",
    a: "Menus",
    b: "Groups and Commands",
    c: "Dialog Boxes",
    d: "Files",
    correct: "b"
  },
  {
    question: "What is the function of the SUM function?",
    a: "Add cells",
    b: "Sort data",
    c: "Calculate average",
    d: "Delete cells",
    correct: "a"
  },
  {
    question: "What does =AVERAGE(A1:A5) mean?",
    a: "Add the range",
    b: "Give highest value",
    c: "Calculate average",
    d: "Count",
    correct: "c"
  },
  {
    question: "What does =MAX(A1:A10) represent?",
    a: "Smallest value",
    b: "Largest value",
    c: "Average",
    d: "Sum",
    correct: "b"
  },
  {
    question: "What does =IF(A1>50, \"Pass\", \"Fail\") mean?",
    a: "Always Pass",
    b: "Logical test",
    c: "Only Count",
    d: "Date format",
    correct: "b"
  },
  {
    question: "What is the use of the COUNT function?",
    a: "Count characters",
    b: "Count number of cells",
    c: "Formatting",
    d: "Calculate time",
    correct: "b"
  },
  {
    question: "What is the function of the CONCATENATE function?",
    a: "Add",
    b: "Subtract",
    c: "Join text",
    d: "Calculate average",
    correct: "c"
  },
  {
    question: "What does the =TODAY() function return?",
    a: "Time",
    b: "Date",
    c: "Hour",
    d: "Day name",
    correct: "b"
  },
  {
    question: "What is returned by the =NOW() function?",
    a: "Only Date",
    b: "Only Time",
    c: "Both Date and Time",
    d: "None",
    correct: "c"
  },
  {
    question: "What is the shortcut key to insert a Hyperlink?",
    a: "Ctrl + K",
    b: "Ctrl + H",
    c: "Ctrl + L",
    d: "Ctrl + J",
    correct: "a"
  },
  {
    question: "What is the shortcut key to clear the contents of a cell?",
    a: "Delete",
    b: "Backspace",
    c: "Ctrl + Delete",
    d: "Shift + Delete",
    correct: "a"
  }
];


// Allowed Learner Codes
const validLearnerCodes = ["9853","9852", "6092", "9411", "2155", "4295", "7266", "5738", "8968", "8492", "4202", "7982", "9622", "2976", "7108", "2394", "4382", "3670", "1214", "5809", "8193", "4186", "5887", "1078", "4105", "1346", "2085", "6289", "8593", "3027", "5006", "2738", "1194", "7398", "6908", "5582", "3641", "5841", "6476", "9499", "5426", "1049", "4417", "8938", "1866", "3432", "8662", "6146", "3404", "1463", "5779", "7427", "5431", "9354", "1724", "9096", "5318", "4762", "9291", "2651", "6619", "7480", "5802", "7029", "6261", "5218", "9370", "9156", "5294", "5645", "8897", "9018", "4700", "5449", "3234", "4292", "8865", "6587", "1668", "9585", "9106", "5211", "3900", "1183", "2556", "3456", "5216"
]; // Yahan apne learner codes add karo

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
let timeLeft = 30;
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

  timeLeft = 30;
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
  timerElement.innerText = 'Time: 30s';
}

// Event Listeners
document.getElementById('loginButton').addEventListener('click', handleLogin);
resetButton.addEventListener('click', resetQuiz);