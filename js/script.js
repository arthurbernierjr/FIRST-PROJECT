// global varialbles
const questionContainer = document.querySelector('.question');
const numberOfScore = document.querySelector('.score');
const triviaBox = document.querySelectorAll('.trivia-box');
const lossResult = document.querySelector('#player-loss')

// question objects. reference to HTML

const triviaBox = document.getElementById('trivia-box');
const showGameResults =document.getElementById('results');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', showGameResults);

function buildTrivia(){}
function showGameResults(){}


class Question {
  constructor(question, correct, a, b, c, d ){
    this.choices = {
      a: this.correctChoice
    }
    this.correctChoice = correct

  }
  // if chioce if correct give 1 point
}
let question1 = new Question(
  'Before basketballs were invented in 1929, what kind of ball did peole use to play basketball with?'
  a: 'Footballs'
  b:'Tennis balls'
  c:'Rugby balls'
  d:'Snooker balls'
);
correct: 'a'

let question2 = new Question(
  'this guy scored the most playoff points ever, and is one of the all-time greatest players. What is his name?'
  'Jordan Michael'
  'Michael Jordan'
  'Mike Geordie'
  'Michelle McJordan'
);
correctChoice: 'Michael Jordan'

let question3 = new Question(
  'How many people are on a basketball team?'
  '5'
  '7'
  '8'
  '12'
);
correctChoice: '5'

let question4 = new Question(
  'Which of these is a slang for playing basketball?'
  'Shoot some hoops'
  'Blast some rings'
  'Chuck some balls'
  'Sink some oranges'
);
correctChoice: 'shoot some hoops'

let question5 = new Question(
  'What is the name of Chicagos NBA team?'
  'Demons'
  'Stags'
  'Bison'
  'Bulls'
);
correctChoice: 'Bulls'

let question6 = new Question(
  'What team won the very first NBA game?',
  'Philadelphia warrior',
  'Toronto Huskies',
  'Chicago Stags',
  'New York Knicks',
);
correctChoice: 'New York Knicks'

let question7 = new Question(
  'Who was the youngest player to score 10,000 points in the NBA?'
  'Lebron James'
  'Kobe Bryant'
  'Wilt Chamberlain'
  'Michael Jordan'
);
correctChoice:'a'

 let question8 = new Question(
   'Which NBA player was nicknamed after a rifle?'
   'Andrei Kirilenko'
   'Dirk Nowitzki'
   'Dikembe Mutombo'
   'Giannis Antetokounmpo'
 );
 correctChoice:'a'

 let question9 = new Question (
   'Who was the oldest player to score 50+ points in a game?'
   'Michael Jordan'
   'Jamal Crawford'
   'Grant Hill'
   'Steve Nash'
 );
 correctChoice: 'b'

 let question10 = new Question(
   'Which NBA player is featured in a Super Nintendo game called Combat Basketball?'
   'Bill Laimbeer'
   'Shaquille ONeal'
   'Ron Artest'
   'Dennis Rodman'
 );
 correctChoice:''

let question11 = new Question(
  'Who was the first player in NBA history to make 400 three-pointers in a season?'
  'Dennis Scott'
  'Stephen Curry'
  'Ray Allen'
  'James Harden'
);
correctChoice:'b'

let question12 = new Question(
  'Who is the famouse Russian NBA player?'
  'Andrey Arshavin'
  'Andrey Kirilenko'
  'Roman Abramovich'
  'Aleksandr Ovechkin'
);
correctChoice:'b'

let question13 = new Question(
  'What NBA player has won the most league MVPs?'
  'Lebron James'
  'Stephen Curry'
  'Michael Jordan'
  'Kareem Abdul-Jabbar'
);
correctChoice:'d'

let question14 = new Question(
  'How many points did LeBron James score in his first NBA game?'
  '25'
  '41'
  '61'
  '19'
);
correctChoice:''

let question15 = new Question(
  'Which NBA team plays at Madison Square Garden?'
  'Golden State Warriors'
  'Brooklyn Nets'
  'Miami Heat'
  'New York Knicks'
);
correctChoice:'d'

let question16 = new Question(
  'How many NBA championships did the Lakers win during the 1960s?'
  '0'
  '2'
  '4'
  '6'
);
correctChoice:''

let question17 = new Question(
  'What unfortunate NBA record do the Brooklyn Nets hold?'
  'fewest rebounds in a game'
  'fewest steals in a game'
  'fewest field goals in a game'
  'fewest assists in a game'
);
correctChoice:''

let question18 = new Question(
  'Which player was nicknamed Black Mamba?'
  'Ron Artest'
  'Kobe Bryant'
  'Allen Iverson'
  'Shawn Marion'
);
correctChoice:'Kobe Bryant'

// players
// class Player{
//   constructor(name, points)
// }
//
// BrooklynNets extends class Player
//
//
// AtlantaHawks extends class Player
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
player1.addEventListener('click', function(){
  player1.classList.add('hidden')
  console.log('clicked player1, start game' )
  //// here logic to start game
})

player2.addEventListener('click', function(){
  player2.classList.add('hidden')
  console.log('clicked player2, start game' )
  /// here logic to start game
})


// create an order of questions
Questions.forEach(
  (currentQuestion, questionNumber) =>{
const choice = [];
 }
)
const answers = [ a, c, d, c, a, b, a, ....];

// let questionArray = [
//   question1,
//   question2,
//   question3,
//   question4,
//   question5,
//   question6,
//   question7,
//   question8,
//   question9,
//   question10,
//   question11,
//   question12,
//   question13,
//   question14,
//   question15,
//   question16,
//   question17,
//   question18
// ];
//

//

//if random question number has been used before the same then rerun random question again
 generateTriviaQuestions: function(){
const previousQuestions = [];
let randomQuestionNumber = math.floor(Math.random() * question.Array.length);
while (previousQuestions.includes(randomQuestionNumber)){
  let randomQuestionNumber = math.floor(Math.random() * question.Array.length);
}

let currentQuestionNumber =randomQuestionNumber;
previousQuestions.push(currentQuestionNumber);


// if you finish player 1 start player 2

// questionField.innerHTML = questionArray[currentQuestionNumber].question;
// questionTracker.push(questionArray[currentQuestionNumber]);
// questionArray.splice(currentQuestionNumber, 1);
//
//  }


// assign points to the questions (2 points each correct question)
const answers = triviaBox.querySelectorAll('.answers');

//keep track of players answers
let playerAnswer = '';
let numCorrect = 0;

//
for (var i=0; i<questions.length; i++)

// find selected answer
const answer = answer[questionNumber];
const selector = 'input[name=question${questionNumber}]: checked';
const playerAnswer = (answer.querySelector(selector) || {}).value;


// if one of the players gets 21 points first => win conditions and finish the game

// if answer is correct
if(playerAnswer === currentQuestion.currentAnswer){
  numCorrect+++;
}
// color the answer green
answer[questionNumber].style.color = 'green';

// if answer is wrong
else{
  answer[questionNumber].style.color = 'red';

}
});

//show number of correct answers and total scored
showGameResults.innerHTML = '${numCorrect} out of ${Questions.length}';



// function correctChoice (){
//   if (questionNumber == 1){
//     current = current +1;
//     console.log ('current =' +current);
//     question1();
//   }
// if (questionNumber == 2){
//   current = current +1;
//   console.log ('current =' +current);
//   question2();
// }
gameOver();
}
function takeTrivia(){
  pickQuestion();
  checkCorrect();
}

// if answer is incorrect// gameOver
function gameOver(){
  if (currentScore =< 21) {
    console.log('currentScore');
    alert('gameOver');
  }
}


// clock timer
var count = 20;
var interval = setInterval(myTimer, 1000);

  function myTimer(){
    document.getElementById('count').innerHTML= sec + 'sec left';
    count--;
    if (count === -1){
      stopInterval(interval);
    alert('You are out of time!');
  }
}


// show score button for player2

//results button
let showGameResults(player[] players){
  console.log('Game over!');
  console.log('Player 1 's: + player[0].points');
  console.log('Player 2 ' s: + player[1].points );
}

// restart game
function restartGame(){

}


// start game button
function startGame(){
onEvent('BrooklynNetsImage', "click", function()){
  setScreen('Welcome');
  music.play();
  music.volume = 0.1;
  resetTimer();
  startTimer();

}
onEvent('AtlantaHawksImage', "click", function()){
  setScreen('Welcome');
  music.play();
  music.volume = 0.1;
  resetTimer();
  startTimer();
}
}
//play background music
function playMusic(LineEvent event){
  LineEvent.Type type = event.getType();
  if (type == LineEvent.Type.Start){
    system.out.printIn('playback started');
  } else if (type == LineEvent.Type.Stop){
    playCompleted = true;
    System.out.printIn('Playback completed');
  }
}

// finish game button

function endGame(){
  gameStop();
}
