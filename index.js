let p1Score = 0;
let p2Score = 0;
let tie = 0;
let turn = 1;
let turnCounter = 0;
let winCombo = 0;

$(".box").click(function(){
    if ($(this).hasClass("X") || $(this).hasClass("O")){
        alert("no cheating");
    }
    else if (turn === 1){
        $(this).text("X");
        $(this).addClass("X");
        turn = 2;
        $("#turn").text("P2");
        turnCounter++;
        console.log(turnCounter);
        // checkWin();
        counter();
    }
    else{
        $(this).text("O");
        $(this).addClass("O");
        turn = 1;
        $("#turn").text("P1");
        turnCounter++;
        console.log(turnCounter);
        // checkWin2();
        counter();
    }
});

function counter(){
    checkWin();
    checkWin2();
    if (turnCounter === 9){
        // checkWin();
        // checkWin2();
        if (winCombo === 0){
            tie++;
            $("#tie").text(`${tie}`);
            console.log("Tie")
            alert("Tie game!!")
        }
    } 
};

function checkWin(){
    if ($(".row-1 .box.X").length === 3 
    || $(".row-2 .box.X").length === 3 
    || $(".row-3 .box.X").length === 3
    || $(".col-1.X").length === 3 
    || $(".col-2.X").length === 3 
    || $(".col-3.X").length === 3
    || $("#1").hasClass("X")
    && $("#5").hasClass("X")
    && $("#9").hasClass("X")
    || $("#3").hasClass("X")
    && $("#5").hasClass("X")
    && $("#7").hasClass("X")){
        console.log("player 1 win");
        p1Score++;
        console.log("player 1 score " + p1Score);
        winCombo = 1;
        $("#p1-score").text(`${p1Score}`);
        alert("Player 1 wins!");
    };
};

function checkWin2(){
    if ($(".row-1 .box.O").length === 3 
    || $(".row-2 .box.O").length === 3 
    || $(".row-3 .box.O").length === 3
    || $(".col-1.O").length === 3 
    || $(".col-2.O").length === 3 
    || $(".col-3.O").length === 3
    || $("#1").hasClass("O")
    && $("#5").hasClass("O")
    && $("#9").hasClass("O")
    || $("#3").hasClass("O")
    && $("#5").hasClass("O")
    && $("#7").hasClass("O")){
        console.log("player 2 win");
        p2Score++;
        console.log("player 2 score " + p2Score);
        winCombo = 1;
        $("#p2-score").text(`${p2Score}`);
        alert("Player 2 wins!");
    };
};

function clearGame(){
    console.log("board cleared")
    $(".X").empty();
    $(".O").empty();
    $(".X").removeClass("X");
    $(".O").removeClass("O");
    turnCounter = 0;
    winCombo = 0;
    turn = 1;
    $("#turn").text("P1");
};

function clearScore(){
    p1Score = 0;
    p2Score = 0;
    $("#p1-score").text(`${p1Score}`);
    $("#p2-score").text(`${p2Score}`);
    turn = 1;
    console.log("Scores reset");
    turn = 1;
    $("#turn").text("P1");
  }
};
