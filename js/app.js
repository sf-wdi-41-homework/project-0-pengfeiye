console.log("WORKING JS!")

$(document).ready(function() {

    //Customize player name
    var player1Name = window.prompt("Player One Please Enter Your Name")
    var player2Name = window.prompt("Player Two Please Enter Your Name")

    if (player1Name === null) {
        player1Name = "Player 1"
    }
    if (player2Name === null) {
        player2Name = "Player 2"
    }

    $(".player1Name").append(`${player1Name}`);
    $(".player2Name").append(`${player2Name}`);



    //win round counter

    var player1win = 0;
    var player2win = 0;

    //keypress count

    var player1count = 0;
    var player2count = 0;

    //counter
    var countStart = 6;

    $("#start").on('click', function() {
        countStart = 6;
        var timer = setInterval(function() {
            countStart--;
            if (countStart > 0) {
                $(".countDown").text(null);
                $(".countDown").append(countStart);
            } else if (countStart === 0) {
                $(".countDown").text(null);
                $(".countDown").append(`GO!`).css("color", "green");
                console.log(countStart);
                clearInterval(timer);
            }
        }, 1000);
    })

    //reset and restart

    function reset() {
        player1count = 0;
        player2count = 0;
        countStart = 6;
        $(".p1score").text("0");
        $(".p2score").text("0");
        $(".countDown").text(null);
        $(".players").css("right", "0");
    }

    $("#restart").on('click', function() {
        player1win = 0;
        player2win = 0;
        reset();
    })


    //car selector

    var x = 7;
    for (var i = 1; i < 7; i++) {
        $("#player1selector").append(`<image class="player1 col-md-4 players pull-right img-responsive" id="${i}" src="style/images/car${i}.png">`);
        $("#player2selector").append(`<image class="player2 col-md-4 players pull-right img-responsive" id="${x++}" src="style/images/car${i}.png">`)
    }


    $(".player1").on('click', function(event) {
        $("#player1").attr(`src`, $(this).attr("src"))
    })
    $(".player2").on('click', function(event) {
        $("#player2").attr(`src`, $(this).attr("src"));
    })

    //player's button to move the car when pressing a key



    $(document).on("keypress", function(z) {
        if (countStart === 0) {
            if (z.key === 'z') {
                player1count += 2;
                $("#player1").css("right", `${player1count}%`)
                //player 1 winning statement below
                if (player1count >= 90) {
                    confirm("PLAYER ONE WINS THIS ROUND!");
                    reset();
                    player1win += 1;
                    //if the player 2 wins 3 times they win the game
                    if (player1win === 3) {
                        alert("Player One Wins FIA Touring Car World Cup!")
                        player1win = 0;
                        player2win = 0;
                    }
                    $(".p1score").text(null);
                    $(".p1score").text(`${player1win}`);
                }
            } else if (z.key === 'm') {
                player2count += 2;
                $("#player2").css("right", `${player2count}%`);
                //player 2 winning statement below
                if (player2count >= 90) {
                    confirm("PLAYER TWO WINS THIS ROUND!");
                    reset();
                    player2win += 1;
                    //if the player 2 wins 3 times they win the game
                    if (player2win === 3) {
                        alert("Player Two Wins FIA Touring Car World Cup!")
                        player1win = 0
                        player2win = 0
                    };
                    $(".p2score").text(null)
                    $(".p2score").text(`${player2win}`)
                }
            }
        }
    })
});
