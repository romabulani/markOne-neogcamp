var readlinesync = require("readline-sync");
var userName = readlinesync.question("What is your name? ");
console.log("Welcome "+userName+"! Lets see how well do you know me!");

var score=0;

var questionAnswerList = [{
  question : "How old am I? ",
  answer : "22"
},
{
  question : "Which company do I work in? ",
  answer : "ACCENTURE"
},
{
  question : "Where do I live? ",
  answer : "MUMBAI"
},
{
  question : "Which is my favorite color? ",
  answer : "BLACK"
},
{
  question : "Which is my favorite animal? ",
  answer : "CAT"
}]

for(var i=0; i<questionAnswerList.length; i++){
  var userAnswer = readlinesync.question(questionAnswerList[i].question);
  if(userAnswer.toUpperCase() === questionAnswerList[i].answer){
    score+=1;
    console.log("Correct!\nCurrent Score : " + score);
    console.log("-------------------------");
  }
  else{
    console.log("Inorrect!\nCurrent Score : " + score);
    console.log("-------------------------");
  }
}
var highestScorers = [{
  name : "Charles",
  score : "5"
},
{
  name : "Matt",
  score : "4"
}];
console.log("Your Total Score : " + score);
console.log("See the Highest Scorers : ");
for(i=0; i<highestScorers.length; i++)
  console.log(highestScorers[i].name + ":" + highestScorers[i].score );
console.log("If you have scored higher score than these, send screenshot I will update");


