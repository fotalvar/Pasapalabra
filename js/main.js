const userRanking = [
    {
        userName: "Fede",
        points: 2,
    },
    {
        userName: "Víctor",
        points: 12,
    },
    {
        userName: "Miriam",
        points: 6,
    }
    ,
    {
        userName: "Alba",
        points: 7,
    }

]

const playButton = document.querySelector('.playButton')
const gameBox = document.querySelector('.gameBox')
const question = document.querySelector('.question')
const userAnswer = document.querySelector('.userAnswer')
const letterBox = document.querySelectorAll('.letter')
const correctAnswersCounter = document.querySelector('.correctAnswersCounter')
const incorrectAnswersCounter = document.querySelector('.incorrectAnswersCounter')
const popUpWindow = document.querySelector('.popUpWindow')
const askBox = document.querySelector('.askBox')
const resultBox = document.querySelector('.resultBox')
const resultText = document.querySelector('.resultText')
const resultTitle = document.querySelector('.resultTitle')
const username = document.querySelector('.username')

let unanswerQuestion = 0;
let questionPack = Math.floor(Math.random() * 3);
let correctAnswers = 0;
let incorrectAnswers = 0;
let pasapalabraListAnswers = [];

playButton.addEventListener('click', () => {
    username.value = username.value.replace(/\s/g, '');
    if (username.value <= 0){
        username.placeholder = "El nombre no es correcto";
        return;
    }
    if (username.value.length > 3) {
        popUpWindow.style.display = "none";
        gameBox.style.display = "flex";
        gameBox.classList.add("fadeIn");
        askBox.classList.add("slide-in-elliptic-top-fwd");
        userAnswer.focus();
        showNextUnanswerQuestion();
    } else {
        username.placeholder = "Escribe tu nombre";
    }

});

const sendAnswerButton = document.querySelector('.sendAnswerButton')

sendAnswerButton.addEventListener('click', () => {
    if (questions[unanswerQuestion].answer[questionPack] === (userAnswer.value).toLowerCase()) {
        letterBox[unanswerQuestion].style.backgroundColor = "#81a063";
        questions[unanswerQuestion].status = 1;
        correctAnswers++;
        correctAnswersCounter.textContent = correctAnswers
        userAnswer.value = "";
        showNextUnanswerQuestion()
        return;
    } else {
        letterBox[unanswerQuestion].style.backgroundColor = "#b75d5d";
        questions[unanswerQuestion].status = 2;
        userAnswer.value = "";
        incorrectAnswers++;
        incorrectAnswersCounter.textContent = incorrectAnswers
        showNextUnanswerQuestion()
        return;
    }
});

const pasapalabraButton = document.querySelector('.pasapalabraButton')

pasapalabraButton.addEventListener('click', () => {
    letterBox[unanswerQuestion].style.backgroundColor = "#e0a838";
    questions[unanswerQuestion].status = 3;
    userAnswer.value = "";
    addToPasapalabraListAnswers()
    showNextUnanswerQuestion()
    return;
});

const addToPasapalabraListAnswers = () => {
    if (pasapalabraListAnswers.includes(unanswerQuestion)) {
        return;
    } else {
        pasapalabraListAnswers.push(unanswerQuestion);
    };
}

const showNextUnanswerQuestion = () => {
    if (correctAnswers + incorrectAnswers === questions.length) {
        endGame();
        return;
    }
    if (correctAnswers + incorrectAnswers + pasapalabraListAnswers.length !== questions.length) {
        unanswerQuestion = questions.findIndex((element) => element.status === 0);
        if (unanswerQuestion === -1) {
            return;
        }
        question.textContent = questions[unanswerQuestion].question[questionPack]
        return unanswerQuestion;
    }
    if (correctAnswers + incorrectAnswers + pasapalabraListAnswers.length === questions.length) {
        for (let i = 0; i < pasapalabraListAnswers.length; i++) {
            questions[pasapalabraListAnswers[i]].status = 0;
        }
        pasapalabraListAnswers = [];
        showNextUnanswerQuestion();
    }
}

const endGame = () => {
    askBox.style.display = "none";
    resultBox.style.display = "flex";
    resultBox.classList.add("slide-in-elliptic-top-fwd");

    if (correctAnswers > 0) {
        resultTitle.textContent = `¡Felicidades ${username.value}, has acabado el Rosco!`;
        resultText.textContent = `Has acertado ${correctAnswers} respuestas y has fallado ${incorrectAnswers}. ¡Entras en el Ranking!`;
        addUserRanking();
    } else {
        resultTitle.textContent = `Ups!`;
        resultText.textContent = `${username.value} has fallado todas las preguntas y no entras al Ranking. ¡Seguro que la próxima saldra mejor!`
    }
    return;
}

const playAgainButton = document.querySelector('.playAgainButton')

playAgainButton.addEventListener('click', () => {
    unanswerQuestion = 0;
    questionPack = Math.floor(Math.random() * 3);
    correctAnswers = 0;
    incorrectAnswers = 0;
    incorrectAnswersCounter.textContent = incorrectAnswers
    correctAnswersCounter.textContent = correctAnswers
    pasapalabraListAnswers = [];
    for (let i = 0; i < letterBox.length; i++) {
        letterBox[i].style.backgroundColor = "#6895cf";
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].status = 0;
    }
    popUpWindow.style.display = "block"
    username.value = "";
    askBox.style.display = "flex";
    resultBox.style.display = "none";
    showRanking()
    return;
});

const addUserRanking = (userName, points) => {
    userName = username.value;
    points = correctAnswers;
    userRanking.push({ userName, points });
}

const showRanking = () => {
    userRanking.sort((a, b) => b.points - a.points); 
    let rankingString = ""; 
    userRanking.forEach(user => {
        rankingString += `${user.userName} - ${user.points} puntos <br>`; 
    });
    const rankingNames = document.querySelector(".rankingNames"); 
    rankingNames.innerHTML = rankingString;  
}

showRanking()