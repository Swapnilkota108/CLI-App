let readLineSync = require('readline-sync');
let userName = readLineSync.question('May i have your Name?')
let welcomeMessage = 'Welcome ' + userName + ' Lets see how well you know me';
let score = 0;
console.log(welcomeMessage);

let Questions = [
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
    question:'What is my favorite place to travel?',
    answer:'Dubai'
  },
  {
    question:'What is my age?',
    answer:'19'
  }
  
  
]

let play = (question,answer) => {
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
