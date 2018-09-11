$(document).ready(function() {

var question1 = $("#question1").val();
var question2 = $("#question2").val();
var question3 = $("#question3").val();
var question4 = $("#question4").val();
var question5 = $("#question5").val();
var question6 = $("#question6").val();
var question7 = $("#question7").val();2
var question8 = $("#question8").val();
var question9 = $("#question9").val();
var win = 0;


if (question1 == "Sherlock Holmes") {
  win++;
}
if (question2 == "Australia") {
  win++;
}
if (question3 == "Central Perk") {
  win++;
}
if (question4 == "Nevermind") {
  win++;
}
if (question5 == "Rome") {
  win++;
}
if (question6 == "8") {
  win++;
}
if (question7 == "Jack Nicholso") {
  win++;
}
if (question8 == "Trees") {
  win++;
}
if (question9 == "14") {
  win++;
}

// $(".btn").on("click", function () { --> could not get it to work

$("#show-win").html("Your score is " + win);

// });

var number = 59
var intervalId

function run(){
  intervalId =setInterval(decrement, 1000);
}

function decrement() {

  number--;

  $("#show-number").html("<h2>" + number + "</h2>");

  if (number == 0) {

    stop();

    alert("Your time is up! The game has ended!");
  }
}

function stop() {

  clearInterval(intervalId);
}

run();

});