console.log("WORKING JS!")

$(document).ready(function(){

var player1win=0;
var player2win=0;
//keypress count
var player1count=0;
var player2count=0;
//player's button to move the car when pressing a key


$(document).on("keypress",function(z){
  if(z.keyCode===122){
    player1count += 1;
    $("#player1").css("margin-right",`${player1count}%`)
    //player 1 winning statement below
    if(player1count>=90){
      confirm("PLAYER ONE WINS")
      player1count=0;
      player2count=0;
      $(".players").css("margin-right","0")
      player1win += 1
      $(".p1score").text(null)
      $(".p1score").text(`${player1win}`)
    }
  }else if(z.keyCode===109){
    player2count += 1;
    $("#player2").css("margin-right",`${player2count}%`)
    //player 2 winning statement below
    if(player2count>=90){
      confirm("PLAYER TWO WINS")
      player1count=0;
      player2count=0;
      $(".players").css("margin-right","0")
      player2win += 1
      $(".p2score").text(null)
      $(".p2score").text(`${player2win}`)
    }}
})



});
