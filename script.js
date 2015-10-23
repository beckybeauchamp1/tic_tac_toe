$(document).ready(function(){
  $(".message").hide();
  var player1;
  var player2;
  var clickID = 0;

  function makePlayer1(){
    player1 = prompt("You go First! Do you want to be X or O?");
    if (player1 !== "X" && player1 !== "O"){
      alert("Sorry, you must pick X OR O!");
      makePlayer1();
    }
    else{
      makePlayer2();
    }
  }
  function makePlayer2(){
    if (player1 === "X"){
      player2 = "O";
    }
    else {
      player2 = "X";
    }
  }
  $(".reset").on("click", function(){
    clickID = 0;
    $(".square").html(" ");
    $(".message").hide();
    player1 = undefined;
    player2 = undefined;
  });

  $(".start").on("click", makePlayer1);

  $(".square").on("click", function(){
    $(".message").show();
    if($(this).html() !== player1 && $(this).html()!== player2){
      if(player1 === undefined || player2 === undefined){
        alert("You must press start!");
      }
      else if (clickID % 2 === 0){
        $(this).html(player1);
        clickID++;
        $(".message").html(player2 + " pick any empty square");
      }
      else {
        $(this).html(player2);
        clickID++;
        $(".message").html(player1 + " pick any empty square");
      }
    }
    determineWinner();
  });

  function determineWinner(){
    var winner;
      if ($("#1").html() === player1 && $("#2").html() === player1 && $("#3").html() === player1){
        winner = player1;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#1").html() === player2 && $("#2").html() === player2 && $("#3").html() === player2){
        winner = player2;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#4").html() === player2 && $("#5").html() === player2 && $("#6").html() === player2){
        winner = player2;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#4").html() === player1 && $("#5").html() === player1 && $("#6").html() === player1){
          winner = player1;
          $(".message").html(winner + " you win the game!");
      }
      else if($("#7").html() === player1 && $("#8").html() === player1 && $("#9").html() === player1){
          winner = player1;
          $(".message").html(winner + " you win the game!");
      }
      else if($("#7").html() === player2 && $("#8").html() === player2 && $("#9").html() === player2){
          winner = player2;
          $(".message").html(winner + " you win the game!");
      }
      else if($("#1").html() === player2 && $("#4").html() === player2 && $("#7").html() === player2){
        winner = player2;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#1").html() === player1 && $("#4").html() === player1 && $("#7").html() === player1){
        winner = player1;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#2").html() === player2 && $("#5").html() === player2 && $("#8").html() === player2){
        winner = player2;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#2").html() === player1 && $("#5").html() === player1 && $("#8").html() === player1){
        winner = player1;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#3").html() === player1 && $("#6").html() === player1 && $("#9").html() === player1){
        winner = player1;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#3").html() === player2 && $("#6").html() === player2 && $("#9").html() === player2){
        winner = player2;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#1").html() === player1 && $("#5").html() === player1 && $("#9").html() === player1){
        winner = player1;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#1").html() === player2 && $("#5").html() === player2 && $("#9").html() === player2){
        winner = player2;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#3").html() === player2 && $("#5").html() === player2 && $("#7").html() === player2){
        winner = player2;
        $(".message").html(winner + " you win the game!");
      }
      else if($("#3").html() === player1 && $("#5").html() === player1 && $("#7").html() === player1){
        winner = player1;
        $(".message").html(winner + " you win the game!");
      }

      return winner;
  }
});
