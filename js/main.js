const userRanking = [
    {
        username: "Fede",
        points: 2,
    },
    {
        username: "Víctor",
        points: 12,
    },
    {
        username: "Miriam",
        points: 6,
    }
    ,
    {
        username: "Alba",
        points: 7,
    }

]

const playButton = document.querySelector('.play-button')
const gameBox = document.querySelector('.game-box')
const question = document.querySelector('.question')
const userAnswer = document.querySelector('.user-answer')
const letterBox = document.querySelectorAll('.letter')
const correctAnswersCounter = document.querySelector('.correct-answers-counter')
const incorrectAnswersCounter = document.querySelector('.incorrect-answers-counter')
const popUpWindow = document.querySelector('.pop-up-window')
const askBox = document.querySelector('.ask-box')
const resultBox = document.querySelector('.result-box')
const resultText = document.querySelector('.result-text')
const resultTitle = document.querySelector('.result-title')
const username = document.querySelector('.username')
const playingUser = document.querySelector('.playing-user')
const audioPlayer = document.querySelector('.audio-player')
const switchAudioPlayerStatus = document.querySelector('.switch-audio-player-status')
const answersSoundEffects = document.querySelector('.answers-sound-effects')
const resultSoundEffects = document.querySelector('.result-sound-effects')


let unanswerQuestion = 0;
let questionPack = Math.floor(Math.random() * 3);
let correctAnswers = 0;
let incorrectAnswers = 0;
let pasapalabraListAnswers = [];

playButton.addEventListener('click', () => {
    username.value = username.value.replace(/\s/g, '');
    playingUser.textContent = username.value;
    if (username.value <= 0) {
        username.placeholder = "El nombre no es correcto";
        return;
    }
    if (username.value.length > 3) {
        popUpWindow.style.display = "none";
        gameBox.style.display = "flex";
        gameBox.classList.add("fadeIn");
        askBox.classList.add("slide-in-elliptic-top-fwd");
        audioPlayer.setAttribute('src', './audio/rosco.mp3');
        audioPlayer.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        userAnswer.focus();
        showNextUnanswerQuestion();
    } else {
        username.placeholder = "Escribe tu nombre";
    }

});

letterBox[unanswerQuestion].classList.add("blink-2");

switchAudioPlayerStatus.addEventListener('click', () => {
    if (switchAudioPlayerStatus.textContent === "No") {
        switchAudioPlayerStatus.textContent = "Si";
        audioPlayer.play();
    } else {
        switchAudioPlayerStatus.textContent = "No";
        audioPlayer.pause();
    }
});

const sendAnswerButton = document.querySelector('.send-answer-button')

sendAnswerButton.addEventListener('click', () => {
    letterBox[unanswerQuestion].classList.remove("blink-2");
    if (questions[unanswerQuestion].answer[questionPack] === (userAnswer.value).toLowerCase()) {
        letterBox[unanswerQuestion].style.backgroundColor = "#81a063";
        answersSoundEffects.setAttribute('src', './audio/correct.mp3');
        answersSoundEffects.play();
        questions[unanswerQuestion].status = 1;
        correctAnswers++;
        correctAnswersCounter.textContent = correctAnswers
        userAnswer.value = "";
        showNextUnanswerQuestion()
        return;
    } else {
        letterBox[unanswerQuestion].style.backgroundColor = "#b75d5d";
        answersSoundEffects.setAttribute('src', './audio/fail.mp3');
        answersSoundEffects.play();
        questions[unanswerQuestion].status = 2;
        userAnswer.value = "";
        incorrectAnswers++;
        incorrectAnswersCounter.textContent = incorrectAnswers
        showNextUnanswerQuestion()
        return;
    }
});

const pasapalabraButton = document.querySelector('.pasapalabra-button')

pasapalabraButton.addEventListener('click', () => {
    letterBox[unanswerQuestion].classList.remove("blink-2");
    letterBox[unanswerQuestion].style.backgroundColor = "#e0a838";
    answersSoundEffects.setAttribute('src', './audio/pasapalabra.mp3');
    answersSoundEffects.play();
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
        letterBox[unanswerQuestion].classList.remove("blink-2");
        return;
    }
    if (correctAnswers + incorrectAnswers + pasapalabraListAnswers.length !== questions.length) {
        unanswerQuestion = questions.findIndex((element) => element.status === 0);
        if (unanswerQuestion === -1) {
            letterBox[unanswerQuestion].classList.add("blink-2");
            return;
        }
        question.textContent = questions[unanswerQuestion].question[questionPack]
        letterBox[unanswerQuestion].classList.add("blink-2");
        return unanswerQuestion;
    }
    if (correctAnswers + incorrectAnswers + pasapalabraListAnswers.length === questions.length) {
        for (let i = 0; i < pasapalabraListAnswers.length; i++) {
            questions[pasapalabraListAnswers[i]].status = 0;
        }
        pasapalabraListAnswers = [];
        letterBox[unanswerQuestion].classList.remove("blink-2");
        showNextUnanswerQuestion();
    }
}

const endGame = () => {
    askBox.style.display = "none";
    audioPlayer.pause();
    resultSoundEffects.setAttribute('src', './audio/end.mp3');
    resultSoundEffects.play();
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

const playAgainButton = document.querySelector('.play-again-button')

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
    gameBox.style.display = "none";
    audioPlayer.setAttribute('src', './audio/intro.mp3');
    audioPlayer.pause();
    showRanking()
    return;
});

const addUserRanking = () => {
    const addUserToRanking = {
        username: username.value,
        points: correctAnswers,
    }
    userRanking.push(addUserToRanking);
}

const showRanking = () => {
    userRanking.sort((a, b) => b.points - a.points);
    let rankingString = "";
    userRanking.forEach(user => {
        rankingString += `${user.username} - ${user.points} puntos <br>`;
    });
    const rankingNames = document.querySelector(".ranking-names");
    rankingNames.innerHTML = rankingString;
}

showRanking()