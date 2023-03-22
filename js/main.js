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
        points: 16,
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
const wrongAnswerMessage = document.querySelector('.wrong-answer-box');

let unanswerQuestion = 0;
let questionPack = Math.floor(Math.random() * 3);
let correctAnswers = 0;
let incorrectAnswers = 0;
let pasapalabraListAnswers = [];

playButton.addEventListener('click', () => {
    setTimeout(countdown, 1000);
    username.value = username.value.replace(/\s/g, '');
    playingUser.textContent = username.value;
    if (username.value <= 0) {
        username.placeholder = "El nombre no es correcto";
        return;
    }
    if (username.value.length > 3) {
        popUpWindow.classList.add("pop-up-window-hide");
        gameBox.classList.add("game-box-show");
        gameBox.classList.add("fadeIn");
        askBox.classList.add("slide-in-elliptic-top-fwd");
        audioPlayer.setAttribute('src', './audio/rosco.mp3');
        switchAudioPlayerStatus.textContent = "Si";
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

sendAnswerButton.addEventListener('click', (event) => {
    event.preventDefault();
    letterBox[unanswerQuestion].classList.remove("blink-2");
    let failedWord = questions[unanswerQuestion].answer[questionPack];
    if (questions[unanswerQuestion].answer[questionPack] === (userAnswer.value).toLowerCase()) {
        letterBox[unanswerQuestion].classList.add("correct-answer-color");
        answersSoundEffects.setAttribute('src', './audio/correct.mp3');
        answersSoundEffects.play();
        questions[unanswerQuestion].status = 1;
        correctAnswers++;
        correctAnswersCounter.textContent = correctAnswers
        userAnswer.value = "";
        userAnswer.focus();
        showNextUnanswerQuestion()
        return;
    } else {
        letterBox[unanswerQuestion].classList.add("incorrect-answer-color");
        answersSoundEffects.setAttribute('src', './audio/fail.mp3');
        answersSoundEffects.play();
        questions[unanswerQuestion].status = 2;
        userAnswer.value = "";
        userAnswer.focus();
        incorrectAnswers++;
        incorrectAnswersCounter.textContent = incorrectAnswers
        showWrongAnswerMessage(failedWord);
        showNextUnanswerQuestion()
        return;
    }
});

const pasapalabraButton = document.querySelector('.pasapalabra-button')

pasapalabraButton.addEventListener('click', (event) => {
    event.preventDefault();
    letterBox[unanswerQuestion].classList.remove("blink-2");
    letterBox[unanswerQuestion].classList.add("pasapalabra-answer-color");
    answersSoundEffects.setAttribute('src', './audio/pasapalabra.mp3');
    answersSoundEffects.play();
    questions[unanswerQuestion].status = 3;
    userAnswer.value = "";
    userAnswer.focus();
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
    askBox.classList.add("ask-box-hidden");
    audioPlayer.pause();
    switchAudioPlayerStatus.textContent = "No";
    resultSoundEffects.setAttribute('src', './audio/end.mp3');
    resultSoundEffects.play();
    resultBox.classList.add("result-box-shown");
    resultBox.classList.add("slide-in-elliptic-top-fwd");

    if (correctAnswers > 0) {
        clearTimeout(countdownTimeout);
        resultTitle.textContent = `¡Felicidades ${username.value}, has acabado el Rosco!`;
        resultText.textContent = `Has acertado ${correctAnswers} respuestas y has fallado ${incorrectAnswers}. ¡Entras en el Ranking!`;
        addUserRanking();
    } else {
        clearTimeout(countdownTimeout);
        resultTitle.textContent = `Ups!`;
        resultText.textContent = `${username.value} has fallado todas las preguntas y no entras al Ranking. ¡Seguro que la próxima saldra mejor!`
    }
    return;
}

const playAgainButton = document.querySelector('.play-again-button')

playAgainButton.addEventListener('click', () => {
    timeLeft = 300
    unanswerQuestion = 0;
    questionPack = Math.floor(Math.random() * 3);
    correctAnswers = 0;
    incorrectAnswers = 0;
    incorrectAnswersCounter.textContent = incorrectAnswers
    correctAnswersCounter.textContent = correctAnswers
    pasapalabraListAnswers = [];
    for (let i = 0; i < questions.length; i++) {
        questions[i].status = 0;
    }
    const elements = document.querySelectorAll('.letter');
    elements.forEach((element) => {
      element.classList.remove('correct-answer-color');
      element.classList.remove('incorrect-answer-color');
      element.classList.remove('pasapalabra-answer-color');
    });
    popUpWindow.classList.remove("pop-up-window-hide");
    username.value = "";
    askBox.classList.remove("ask-box-hidden");
    resultBox.classList.remove("result-box-shown");
    gameBox.classList.remove("game-box-show");
    audioPlayer.setAttribute('src', './audio/intro.mp3');
    audioPlayer.pause();
    switchAudioPlayerStatus.textContent = "No";
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

const showWrongAnswerMessage = (failedWord) => {
    wrongAnswerMessage.classList.add("wrong-answer-box-failed");
    wrongAnswerMessage.textContent = `La respuesta correcta es ${failedWord.toUpperCase()}`;
    setTimeout(() => {
        wrongAnswerMessage.classList.add("wrong-answer-box-timer");
    }, 3000);
    return;
};

let timeLeft = 300;
let countdownTimeout;

const countdown = () => {
	timeLeft--;
	document.querySelector(".seconds").innerHTML = String(timeLeft);
	if (timeLeft > 0) {
		countdownTimeout = setTimeout(countdown, 1000);
	} else {
		endGame();
	}
}

showRanking()