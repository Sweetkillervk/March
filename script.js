const quizData = 
[
  {
    question: "कंप्यूटर क्या है?",
    a: "एक इनपुट डिवाइस",
    b: "एक आउटपुट डिवाइस",
    c: "एक ऑपरेटिंग सिस्टम",
    d: "एक इलेक्ट्रॉनिक डिवाइस जो डेटा प्रोसेस करता है",
    correct: "d"
  },
  {
    question: "RAM और ROM में क्या अंतर है?",
    a: "दोनों अस्थायी मेमोरी हैं",
    b: "दोनों स्थायी मेमोरी हैं",
    c: "RAM अस्थायी और ROM स्थायी मेमोरी है",
    d: "RAM स्थायी और ROM अस्थायी मेमोरी है",
    correct: "c"
  },
  {
    question: "Windows और Linux में क्या अंतर है?",
    a: "दोनों ओपन-सोर्स हैं",
    b: "दोनों कम सुरक्षित हैं",
    c: "Windows यूजर-फ्रेंडली है, Linux ओपन-सोर्स है",
    d: "Linux केवल मोबाइल में चलता है",
    correct: "c"
  },
  {
    question: "Notepad किस प्रकार का सॉफ्टवेयर है?",
    a: "ब्राउज़र",
    b: "टेक्स्ट एडिटर",
    c: "गेमिंग सॉफ्टवेयर",
    d: "एंटीवायरस",
    correct: "b"
  },
  {
    question: "Ctrl + C किसके लिए उपयोग किया जाता है?",
    a: "कट करने के लिए",
    b: "पेस्ट करने के लिए",
    c: "कॉपी करने के लिए",
    d: "सेव करने के लिए",
    correct: "c"
  },
  {
    question: "Ctrl + V का क्या कार्य है?",
    a: "कट",
    b: "कॉपी",
    c: "सेव",
    d: "पेस्ट",
    correct: "d"
  },
  {
    question: "कंप्यूटर वायरस क्या होता है?",
    a: "एंटीवायरस प्रोग्राम",
    b: "एक हानिकारक प्रोग्राम",
    c: "एक नेटवर्क डिवाइस",
    d: "एक ड्राइवर",
    correct: "b"
  },
  {
    question: "HTTP और HTTPS में क्या अंतर है?",
    a: "कोई अंतर नहीं",
    b: "HTTP सुरक्षित है",
    c: "HTTPS असुरक्षित है",
    d: "HTTPS में डेटा एन्क्रिप्ट होता है",
    correct: "d"
  },
  {
    question: "IP Address के प्रकार कितने होते हैं?",
    a: "1",
    b: "2 – Ipv4 और IPv6",
    c: "3",
    d: "कोई नहीं",
    correct: "b"
  },
  {
    question: "HTML का पूरा नाम क्या है?",
    a: "HyperText Making Language",
    b: "HighText Markup Language",
    c: "HyperText Markup Language",
    d: "High Transfer Markup Language",
    correct: "c"
  },
  {
    question: "Which tab contains the ‘Font’ group in MS Word?",
    a: "Insert",
    b: "Home",
    c: "View",
    d: "Review",
    correct: "b"
  },
  {
    question: "Which view is best for reading the document without editing?",
    a: "Print Layout",
    b: "Draft",
    c: "Outline",
    d: "Read Mode",
    correct: "d"
  },
  {
    question: "Which key is used to open the ‘Help’ window in MS Word?",
    a: "F5",
    b: "F7",
    c: "F1",
    d: "F12",
    correct: "c"
  },
  {
    question: "Which option is used to create a duplicate of a selected text in another location?",
    a: "Cut and Paste",
    b: "Copy and Paste",
    c: "Save As",
    d: "Insert",
    correct: "b"
  },
  {
    question: "Which feature checks spelling errors in a document?",
    a: "WordArt",
    b: "Mail Merge",
    c: "Spelling and Grammar",
    d: "Track Changes",
    correct: "c"
  },
  {
    question: "Which tab allows you to set margins in MS Word?",
    a: "Review",
    b: "Layout",
    c: "Insert",
    d: "Home",
    correct: "b"
  },
  {
    question: "What is the function of the Format Painter?",
    a: "Change font style",
    b: "Apply formatting from one text to another",
    c: "Insert images",
    d: "Draw tables",
    correct: "b"
  },
  {
    question: "Which option is used to add a watermark?",
    a: "Design",
    b: "Insert",
    c: "Review",
    d: "Layout",
    correct: "a"
  },
  {
    question: "What is the maximum zoom percentage in MS Word?",
    a: "200%",
    b: "400%",
    c: "500%",
    d: "1000%",
    correct: "c"
  },
  {
    question: "What is the shortcut to open the Save As dialog box?",
    a: "F12",
    b: "F5",
    c: "Ctrl + S",
    d: "Ctrl + Shift + S",
    correct: "a"
  },
  {
    question: "Which of the following is NOT a valid view in MS Word?",
    a: "Print Layout",
    b: "Web Layout",
    c: "Document Map",
    d: "Slide Show",
    correct: "d"
  },
  {
    question: "What is the default paper size in MS Word?",
    a: "A3",
    b: "A4",
    c: "Legal",
    d: "Letter",
    correct: "b"
  },
  {
    question: "What is used to insert pre-designed visual text?",
    a: "WordArt",
    b: "SmartArt",
    c: "ClipArt",
    d: "Shapes",
    correct: "a"
  },
  {
    question: "Which key is used to insert a page break?",
    a: "Ctrl + Enter",
    b: "Shift + Enter",
    c: "Alt + Enter",
    d: "Ctrl + Shift + Enter",
    correct: "a"
  },
  {
    question: "What is the use of the ‘Find’ feature in MS Word?",
    a: "Finds spelling mistakes",
    b: "Finds formatting",
    c: "Finds text in the document",
    d: "Finds footnotes",
    correct: "c"
  },
  {
    question: "PowerPoint क्या है?",
    a: "एक ऑपरेटिंग सिस्टम",
    b: "एक गेम",
    c: "एक प्रेजेंटेशन सॉफ्टवेयर",
    d: "एक ब्राउज़र",
    correct: "c"
  },
  {
    question: "PowerPoint में स्लाइड शो शुरू करने की शॉर्टकट की क्या है?",
    a: "F2",
    b: "F5",
    c: "F4",
    d: "F1",
    correct: "b"
  },
  {
    question: "PowerPoint में स्लाइड शो रोकने के लिए किस कुंजी का प्रयोग होता है?",
    a: "Ctrl",
    b: "Esc",
    c: "Tab",
    d: "Alt",
    correct: "b"
  },
  {
    question: "स्लाइड में बैकग्राउंड बदलने के लिए कौन-सा विकल्प होता है?",
    a: "Insert",
    b: "File",
    c: "Design",
    d: "View",
    correct: "c"
  },
  {
    question: "PowerPoint में ट्रांज़िशन का उपयोग किसके लिए होता है?",
    a: "टेक्स्ट को रंगने के लिए",
    b: "स्लाइड में मूवी चलाने के लिए",
    c: "स्लाइड बदलने के प्रभाव के लिए",
    d: "प्रिंट करने के लिए",
    correct: "c"
  },
  {
    question: "PowerPoint में Notes Pane का उपयोग किस लिए होता है?",
    a: "ऑडियो जोड़ने के लिए",
    b: "स्लाइड बनाने के लिए",
    c: "प्रेजेंटर के लिए नोट्स लिखने के लिए",
    d: "स्लाइड डिलीट करने के लिए",
    correct: "c"
  },
  {
    question: "प्रेजेंटेशन में ऑडियो जोड़ने के लिए किस टैब का उपयोग किया जाता है?",
    a: "Insert",
    b: "File",
    c: "Design",
    d: "Review",
    correct: "a"
  },
  {
    question: "PowerPoint में SmartArt का प्रयोग किस लिए होता है?",
    a: "इमेज जोड़ने के लिए",
    b: "वीडियो बनाने के लिए",
    c: "ग्राफिक रूप में जानकारी दिखाने के लिए",
    d: "बैकग्राउंड बदलने के लिए",
    correct: "c"
  },
  {
    question: "टेम्पलेट क्या होता है?",
    a: "एक चित्र",
    b: "प्रेजेंटेशन की सजावट",
    c: "पहले से डिजाइन की गई स्लाइड",
    d: "एक स्लाइड शो",
    correct: "c"
  },
  {
    question: "Slide Sorter View में आप क्या कर सकते हैं?",
    a: "स्लाइड चला सकते हैं",
    b: "स्लाइड की ऑडियो सुन सकते हैं",
    c: "स्लाइड का क्रम बदल सकते हैं",
    d: "स्लाइड डिलीट नहीं कर सकते",
    correct: "c"
  },
  {
    question: "Custom Slide Show किसके लिए प्रयोग होता है?",
    a: "सभी स्लाइड दिखाने के लिए",
    b: "चयनित स्लाइड दिखाने के लिए",
    c: "ऑडियो रिकॉर्ड करने के लिए",
    d: "वीडियो जोड़ने के लिए",
    correct: "b"
  },
  {
    question: "PowerPoint फाइल का डिफॉल्ट एक्सटेंशन क्या है?",
    a: ".docx",
    b: ".xlsx",
    c: ".pptx",
    d: ".pdf",
    correct: "c"
  },
  {
    question: "Rehearse Timings का उपयोग कब किया जाता है?",
    a: "स्लाइड्स में वीडियो जोड़ने के लिए",
    b: "प्रेजेंटेशन की टाइमिंग तय करने के लिए",
    c: "स्लाइड नंबर बदलने के लिए",
    d: "इमेज जोड़ने के लिए",
    correct: "b"
  },
  {
    question: "Action Button किसके लिए उपयोग होता है?",
    a: "स्लाइड हटाने के लिए",
    b: "स्लाइड पर ऑडियो जोड़ने के लिए",
    c: "इंटरएक्टिव लिंक देने के लिए",
    d: "टेक्स्ट जोड़ने के लिए",
    correct: "c"
  },
  {
    question: "PowerPoint में Zoom फीचर किसके लिए होता है?",
    a: "टेक्स्ट की स्पेलिंग जांचने के लिए",
    b: "स्लाइड का आकार बदलने के लिए",
    c: "स्लाइड में नेविगेशन को बेहतर बनाने के लिए",
    d: "प्रेजेंटेशन सेव करने के लिए",
    correct: "c"
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