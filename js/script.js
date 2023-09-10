const quizData = [
  {
      question: "What does this abbreviation BME mean :",
      a: "Biomedical enhance",
      b: "Biological engineering",
      c: "Biomaterial engineering",
      d: "Biomedical engineering",
      correct: "d",
  },
  {
    question: "Where is the patient monitoring device located in the hospital :",
    a: "RO",
    b: "ICU",
    c: "BBU",
    d: "None of them",
    correct: "b",
},
{
    question: "Important programming languages ​​for the medical engineer are :",
    a: "Matlab",
    b: "Java",
    c: "C++",
    d: "a and c",
    correct: "d",
},
{
    question: "The Fresinius Medical Care device is a special device for :",
    a: "Kidney",
    b: "The brain",
    c: "The heart",
    d: "Nerves",
    correct: "b",
},
    {
        question: "A device used in electrocardiography :",
        a: "eug",
        b: "eeg",
        c: "ecg",
        d: "egg",
        correct: "c",
    },
    {
        question: "What does medical device engineer study :",
        a: "Mechanical Engineering",
        b: "All of the them",
        c: "Computer science",
        d: "Electrical Engineering",
        correct: "b",
    },
    {
        question: "When did studying medical engineering started :",
        a: "1996",
        b: "1976",
        c: "1994",
        d: "None of them",
        correct: "b",
    },
    {
        question: "When did the first medical engineering class graduated :",
        a: "1990",
        b: "1980",
        c: "2000",
        d: "None of them",
        correct: "b",
    },
    {
        question: "Who is the first inventor in the field of medical engineering :",
        a: "Hala zureikat",
        b: "Jhon mildon",
        c: "Ader walas",
        d: "Steve Jhonson",
        correct: "a",
    },
    {
        question: "what is the fields of work for medical engineering :",
        a: "Marketting",
        b: "Medical devices repair",
        c: "Hospital Design",
        d: "All of the above",
        correct: "d",
    },


];
// const quizData = [
//     {
//         question: "Which language runs in a web browser?",
//         a: "Java",
//         b: "C",
//         c: "Python",
//         d: "javascript",
//         correct: "d",
//     },
//     {
//         question: "What does CSS stand for?",
//         a: "Central Style Sheets",
//         b: "Cascading Style Sheets",
//         c: "Cascading Simple Sheets",
//         d: "Cars SUVs Sailboats",
//         correct: "b",
//     },
//     {
//         question: "What does HTML stand for?",
//         a: "Hypertext Markup Language",
//         b: "Hypertext Markdown Language",
//         c: "Hyperloop Machine Language",
//         d: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "a",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         a: "1996",
//         b: "1995",
//         c: "1994",
//         d: "none of the above",
//         correct: "b",
//     },
//
//
// ];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
