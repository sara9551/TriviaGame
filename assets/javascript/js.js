
var questions = [{
  trivia: "The Hound of the Baskervilles is a crime novel featuring which fictional detective?",
  answers: ["Hercule Poirot", "Inspector Clouseau", "Sherlock Holmes", "Veronica Mars"],
  correctAnswer: "Sherlock Holmes",
}, {
  trivia: "Which continent is also a country?",
  answers: ["Brazil", "Africa", "USA", "Australia"],
  correctAnswer: "Australia",
}, {
  trivia: "What was the name of the coffee shop in the hit sitcom friends?",
  answers: ["Central Park", "Central Perks", "Starbucks", "Central Perk"],
  correctAnswer: "Central Perk",
}, {
  trivia: "The Roman Catholic church La Sagrada Familia, located in Barcelona Spain, was designed by which Catalan architect?",
  answers: ["Frank Lloyd Wright", "Eero Saarinen", "Antoni Gaudí", "Renzo Piano"],
  correctAnswer: "Antoni Gaudí",
}, {
  trivia: "Who was the last queen of France prior to the French revolution?",
  answers: ["Catherine de' Medici", "Marie Antoinette", "Marie Louise of Austria", "Margaret of Valois"],
  correctAnswer: "Marie Antoinette",
}, {
  trivia: "Come as You Are, a song by the grunge band Nirvana was released on which album?",
  answers: ["Smells Like Teen Spirit", "Come as You Are", "The Man Who Sold the World", "Nevermind"],
  correctAnswer: "Nevermind",
}, {
  trivia: "According to legend, Romulus and Remus founded what city?",
  answers: ["Paris", "Rome", "Prague", "Berlin"],
  correctAnswer: "Rome",
}, {
  trivia: "In the game of chess, how many pawns does each player start with?",
  answers: ["12", "6", "8", "10"],
  correctAnswer: "8",
}, {
  trivia: "With twelve Oscar nominations and three wins, who is the most nominated male actor in Academy Awards history?",
  answers: ["Jack Nicholson", "Leonardo DiCaprio", "Jeff Bridges", "Sean Penn"],
  correctAnswer: "Jack Nicholson",
}, {
  trivia: "What is the tallest mountain in South America?",
  answers: ["Aconcagua", "Ojos del Salado", "Huascarán", "Cotopaxi"],
  correctAnswer: "Aconcagua",
}, {
  trivia: "Dendrophobia is the fear of what?",
  answers: ["Flying", "Trees", "Blushing", "Vomiting"],
  correctAnswer: "Trees",
}, {
  trivia: "A Shakespearean sonnet consists of how many lines?",
  answers: ["16", "15", "14", "17"],
  correctAnswer: "14",
}];


var score = 0;

var questionIndex = 0;



  
    function renderQuestion() {
      
      if (questionIndex <= (questions.length - 1)) {
        document.querySelector("#question").innerHTML = questions[questionIndex].q;
      }
    
      else {
        document.querySelector("#question").innerHTML = "Game Over!";
        document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
      }
    }

   
    function updateScore() {
      document.querySelector("#score").innerHTML = "Score: " + score;
    }


    renderQuestion();
    updateScore();




var number = 50;

var intervalId;

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  number--;

  $("#show-number").html("<h2>" + number + "</h2>");

  if (number === 0) {

    stop();

    alert("Your time is up! The game has ended!");
  }
}

function stop() {

  clearInterval(intervalId);
}

run();