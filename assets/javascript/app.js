
var time = 10;
var intervalId;
var triviaQuestions =[ 
            {
              question: "In the Star Wars movie, The Empire Strikes Back, what did the Millennium Falcon fly into to escape the Imperial fighters?",
               answers: {
                          a: 'Black Hole',
                          b: 'Space Station',
                          c: 'Meteor',
                          d: 'Asteroid Field'
                        },
                correctAnswer: 'd'
            },
          {
              question: "In the original 1968 film Planet of the Apes,who plays the role of the chimpanzee archaeologist and historian Cornelius? ",
                answers: {
                  a: "James Daly",
                  b: "Roddy McDowall",
                  c: "Charlton Heston",
                  d: "David Watson"
                },
                    correctAnswer: 'b'
          },
              {
                question: "In the film Star Trek - The Motion Picture, what was the name of the mysterious entity that was threatening Earth? ",
                answers: {
                  a: "Tyranus",
                  b: "Cobalt",
                  c: "Cygnus",
                  d: "Vejur"
                },
            correctAnswer: 'd'
              },
            {
                question: "What is the not-so-classic film Night of the Lepus about? ",
                answers: {
                  a: "Giant grasshoppers attacking a town",
                  b: "Giant spiders attacking a town",
                  c: "Giant beetles attacking a town",
                  d: "Giant rabbits attacking a town"
                },
            correctAnswer: 'd'
            },
             {
                question: "In which 1990 sci-fi movie did we see Fred Ward and Kevin Bacon being terrorized by gigantic, hungry worms? ",
                answers: {
                  a: "Slither",
                  b: "Feast",
                  c: "What Waits Below",
                  d: "Tremors"
                },
            correctAnswer: 'd'
              }
       ];

var triviaquizContainer = $('#triviaquiz');
var resultsContainer =    $('#results');
var submitButton =        $('#submit');

$(document).ready(function(){
       $("#startButton").click(start)
    function start() {
              intervalId = setInterval(count, 1000); 
              
    }
    
    function count() {

   	time--;
     var converted = timeConverter(time);
    $("#timer").html(converted);
    console.log("Time2", time);
    if (time === 0){
      clearInterval(intervalId);
      console.log("stopping");
      $("#finishTag").text("Done!")
    }
  
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
      }
 
      

    function generateQuiz(questions, triviaquizContainer, resultsContainer,submitButton){

          function displayQuestions(questions, triviaquizContainer){
            var output = [];
            var answers;
            
      
            for(var i=0; i<questions.length; i++){
    
    // first reset the list of answers
                answers = [];

    // for each available answer to this question...
            for(letter in questions[i].answers){


                  answers.push(
                      '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                      + '</label>'
            );
   }
console.log("Answers1",letter);
    output.push(
      '<div class="question">' + questions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
    );
      // console.log("Question1",question);
      // console.log("Answers1",answers);
  }
    triviaquizContainer.innerHTML = output.join('');
}
      displayQuestions(questions, triviaquizContainer);
      console.log("Trivia Questions",questions);
      console.log("Question",questions);
      // console.log("Answers",answers);
function showResults(questions, triviaquizContainer, resultsContainer){
  
  // gather answer containers from our quiz
  var answerContainers = triviaquizContainer.querySelectorAll('.answers');
  // var answerContainers = triviaquizContainer.querySelectorAll('.answers');
  // keep track of user's answers
  var userAnswer = '';
  var numCorrect = 0;
  
  // for each question...
             for(var i=0; i<questions.length; i++){

    // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
    // if answer is correct
                    if(userAnswer===questions[i].correctAnswer){
                      // add to the number of correct answers
                      numCorrect++;
                      
                      // color the answers green
                      answerContainers[i].style.color = 'lightgreen';
                    }
                    // if answer is wrong or blank
                    else{
                      // color the answers red
                      answerContainers[i].style.color = 'red';
                    }
              }


  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
  showResults(questions, triviaquizContainer, resultsContainer);

// on submit, show results
  submitButton.onclick = function(){
  showResults(questions, triviaquizContainer, resultsContainer);

}
 // generateQuiz(triviaQuestions, triviaquizContainer, resultsContainer,submitButton);

 }
 generateQuiz(triviaQuestions, triviaquizContainer, resultsContainer,submitButton);
};
});


  