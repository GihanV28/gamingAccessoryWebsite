


const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox =document.querySelector(".home-box");
const quizBox =document.querySelector(".quiz-box");
const resultBox =document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//transfer the questions into availableQuestion Array

function setAvailableQuestions(){
	const totalQuestion = quiz.length;
	for (let i=0; i<totalQuestion; i++){
		availableQuestions.push(quiz[i])
	}
}

//setting question number, question and options

function getNewQuestion(){
	//setting queston number
	questionNumber.innerHTML = "Question " + (questionCounter + 1);

	//setting question(random question setup)
	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
	currentQuestion = questionIndex;
	questionText.innerHTML = currentQuestion.q;

	//getting the position of 'questionIndex' from the availableQuestion Array;
	const index1 = availableQuestions.indexOf(questionIndex);
	//removing the 'questionIndex' from the availableQuestion Array to make the questions does not repeat;
	availableQuestions.splice(index1,1);
	
	//setting options(getting the length of options)
	const optionLen = currentQuestion.options.length
	//transfer the questions into availableOptions Array
	for(let i=0; i<optionLen; i++){
		availableOptions.push(i)
	}
	optionContainer.innerHTML = '';
	let animationDelay = 0.15;
	//create options in html
	for(let i=0; i<optionLen; i++){
		//randomizing options
		const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
		//get the position of "optonIndex" from availableOptions Array
		const index2 = availableOptions.indexOf(optonIndex);
		availableOptions.splice(index2,1);
		//remove the position of "optonIndex" from availableOptions Array to make the options does not repeat
		const option = document.createElement("div");
		option.innerHTML = currentQuestion.options[optonIndex];
		option.id = optonIndex;
		option.style.animationDelay = animationDelay + 's';
		animationDelay = animationDelay + 0.15;
		option.className = "option";
		optionContainer.appendChild(option)
		option.setAttribute("onclick","getResult(this)");
	}

	questionCounter++
}

//getting the result of currently attempted question
function getResult(element){
	const id = parseInt(element.id);
	//getting the answer by comparing the id of the selected option
	if(id === currentQuestion.answer){
		//set green color to the correct option
		element.classList.add("correct");
		//adding indicator to correct mark
		updateAnswerIndicator("correct");
		correctAnswers++;
	}
	else{
		//set red color to the incorrect option
		element.classList.add("wrong");
		//adding indicator to incorrect mark
		updateAnswerIndicator("wrong");
		//when selected incorrect options, showing the correct option
		const optionLen = optionContainer.children.length;
		for(let i=0; i<optionLen; i++){
			if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
				optionContainer.children[i].classList.add("correct");
			}
		}
	}

	attempt++;
	unclickableOptions();

}

//making the already selected options unclickable
function unclickableOptions(){
	const optionLen = optionContainer.children.length;
	for(let i=0; i<optionLen; i++){
		optionContainer.children[i].classList.add("already-answered");
	}

}

function answersIndicator(){
	answersIndicatorContainer.innerHTML = '';
	const totalQuestion = quiz.length;
	for(let i=0; i<totalQuestion; i++){
		const indicator = document.createElement("div");
		answersIndicatorContainer.appendChild(indicator);
	}
}

function updateAnswerIndicator(markType){
	answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}

function next(){
	if(questionCounter === quiz.length){
		quizOver();
	}
	else {
		getNewQuestion();
	}
}

function quizOver(){
	//hiding quizBox
	quizBox.classList.add("hide");
	//show resultBox
	resultBox.classList.remove("hide");
	quizResult();
}

function quizResult(){
	resultBox.querySelector(".total-questions").innerHTML = quiz.length;
	resultBox.querySelector(".total-attempt").innerHTML = attempt;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
	resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
	const percentage = correctAnswers/quiz.length*100;
	resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
	resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
	//resultBox.querySelector(".total-time").innerHTML = 
}

function resetQuiz(){
	questionCounter = 0;
	correctAnswers = 0;
	attempt = 0;
}	


function tryAgainQuiz(){
	//hide resultBox
	resultBox.classList.add("hide");
	//show the quizBox
	quizBox.classList.remove("hide");
	resetQuiz();
	start();
}

function goHome(){
	//hide resulBox
	resultBox.classList.add("hide");
	//show homeBox
	homeBox.classList.remove("hide");
	resetQuiz();
}

// ##### BEGINING #####

function start(){
	//hiding homeBox
	homeBox.classList.add("hide");
	//showing quizBox
	quizBox.classList.remove("hide");
	//setting all questions in availableQuestions Array
	setAvailableQuestions();
	//calling the getNewQuestion(); function
	getNewQuestion();
	//creating indicator of answers
	answersIndicator();
}

window.onload = function(){
	homeBox.querySelector(".total-questions").innerHTML = quiz.length;
}
