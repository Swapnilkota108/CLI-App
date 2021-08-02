var readLineSync = require('readline-sync');
var userName = readLineSync.question('May i have your Name?')
var welcomeMessage = 'Welcome ' + userName + ' Lets see if you are a Naruto fan or not';
let score = 0;
console.log(welcomeMessage);

var narutoQuestions = [
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

for(let i = 0;i<narutoQuestions.length;i++){
  let currentQuestion = narutoQuestions[i];
  play(currentQuestion.question,currentQuestion.answer);
}


console.log('Total score:'+ score);