var readLineSync = require('readline-sync');
var userName = readLineSync.question('May i have your Name?')
var welcomeMessage = 'Welcome ' + userName + ' Lets see how well you know me';
let score = 0;
console.log(welcomeMessage);

var Questions = [
  {
    question:'What is my name?',
    answer:'Swapnil'
  },
  {
    question:'Where do i live?',
    answer:'Mumbai'
  },
  {
    question:'What is my favorite color?',
    answer:'Blue'
  },
  {
    question:'What is my favorite food?',
    answer:'Icecream'
  },
   {
    question:'What is my zodiac sign?',
    answer:'Cancer'
  },
  
  
]

function play(question,answer){
  let userAnswer = readLineSync.question(question);
  if(answer===userAnswer){
    console.log('Corrrect!');
    score+=1;
  }
  else{
    console.log('Incorrect!');
  }
}

for(let i = 0;i<Questions.length;i++){
  let currentQuestion = Questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}


console.log('Total score:'+ score);
