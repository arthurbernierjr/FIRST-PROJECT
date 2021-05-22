// global varialbles
const questionField = document.querySelector('.question');
const correctField = document.querySelector('.correct');
const wrongField1 = document.querySelector('.wrong1');
const wrongField2 = document.querySelector('.wrong2');
const wrongField3 = document.querySelector('.wrong3');

const triviaBox = document.querySelectorAll('.trivia-box');
const lossResult = document.querySelector('#player-loss')

// question objects
//

class Question {
  constructor(question, correct, wrong1, wrong2,wrong3){
    this.question = question;
    this.correct = correct;
    this.wrong1 = wrong1;
    this.wrong2 = wrong2;
    this.wrong3 = wrong3;
  }
}
let question1 = new Question(
  'Before basketballs were invented in 1929, what kind of ball did peole use to play basketball with?'
  'Footballs'
  'Tennis balls'
  'Rugby balls'
  'Snooker balls'
);
let question2 = new Question(
  'this guy scored the most playoff points ever, and is one of the all-time greatest players. What is his name?'
  'Jordan Michael'
  'Michael Jordan'
  'Mike Geordie'
  'Michelle McJordan'
);
let question3 = new Question(
  'How many people are on a basketball team?'
  '5'
  '7'
  '8'
  'as many as the referee wants'
);
let question4 = new Question(
  'Which of these is a slang for playing basketball?'
  'Shoot some hoops'
  'Blast some rings'
  'Chuck some balls'
  'Sink some oranges'
);
let question5 = new Question(
  'What is the name of Chicagos NBA team?'
  'Demons'
  'Stags'
  'Bison'
  'Bulls'
);
let question6 = new Question(
  'What team won the very first NBA game?',
  'Philadelphia warrior',
  'Toronto Huskies',
  'Chicago Stags',
  'New York Knicks',
);

let question7 = new Question(
  'Who was the youngest player to score 10,000 points in the NBA?'
  'Lebron James'
  'Kobe Bryant'
  'Wilt Chamberlain'
  'Michael Jordan'
);
 let question8 = new Question(
   'Which NBA player was nicknamed after a rifle?'
   'Andrei Kirilenko'
   'Dirk Nowitzki'
   'Dikembe Mutombo'
   'Giannis Antetokounmpo'
 );
 let question9 = new Question (
   'Who was the oldest player to score 50+ points in a game?'
   'Michael Jordan'
   'Jamal Crawford'
   'Grant Hill'
   'Steve Nash'
 );
 let question10 = new Question(
   'Which NBA player is featured in a Super Nintendo game called Combat Basketball?'
   'Bill Laimbeer'
   'Shaquille ONeal'
   'Ron Artest'
   'Dennis Rodman'
 );
let question11 = new Question(
  'Who was the first player in NBA history to make 400 three-pointers in a season?'
  'Dennis Scott'
  'Stephen Curry'
  'Ray Allen'
  'James Harden'
);
let question12 = new Question(
  'Who is the famouse Russian NBA player?'
  'Andrey Arshavin'
  'Andrey Kirilenko'
  'Roman Abramovich'
  'Aleksandr Ovechkin'
);
let question13 = new Question(
  'What NBA player has won the most league MVPs?'
  'Lebron James'
  'Stephen Curry'
  'Michael Jordan'
  'Kareem Abdul-Jabbar'
);
let question14 = new Question(
  'How many points did LeBron James score in his first NBA game?'
  '25'
  '41'
  '61'
  '19'
);
let question15 = new Question(
  'Which NBA team plays at Madison Square Garden?'
  'Golden State Warriors'
  'Brooklyn Nets'
  'Miami Heat'
  'New York Knicks'
);
let question16 = new Question(
  'How many NBA championships did the Lakers win during the 1960s?'
  '0'
  '2'
  '4'
  '6'
);
let question17 = new Question(
  'What unfortunate NBA record do the Brooklyn Nets hold?'
  'fewest rebounds ina game'
  'fewest steals in a game'
  'fewest field goals in a game'
  'fewest assists in a game'
);
let question18 = new Question(
  'Which player was nicknamed Black Mamba?'
  'Ron Artest'
  'Kobe Bryant'
  'Allen Iverson'
  'Shawn Marion'
);

// players
class Player{
  constructor(name, points)
}
player 1
player 2


// event listeners


// create an order of questions
let questionArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18
];

let questionTracker = [];

//
 generateTriviaQuestions: function(){
let randomQuestionNumber = math.floor(Math.random() * question.Array.length);
let currentQuestionNumber =randomQuestionNumber;
questionField.innerHTML = questionArray[currentQuestionNumber].question;
correctField.innerHTML = questionArray[currentQuestionNumber].correct;
wrongField1.innerHTML = questionArray[currentQuestionNumber].wrong1;
wrongField2.innerHTML = questionArray[currentQuestionNumber].wrong2;
wrongField3.innerHTML = questionArray[currentQuestionNumber].wrong3;
 }


// assign points to the questions (easy -1; int- 2; diff- 3)

// if one of the players gets 21 points first => win conditions and finish the game

// reset original question on replay

// clock timer
var startTimeInt = 20;
var currentTimeInt = s


// if answer is correct

// if answer is incorrect

// random choice for player2

// if answer is correct

// if answer is incorrect

// show score button for player2

//results button
let showGameResults(player[] players){
  console.log('Game over!');
  console.log('Player 1 's: + player[0].points');
  console.log('Player 2 ' s: + player[1].points );
}

// restart game

// start game button

//play background music

// finish game button
