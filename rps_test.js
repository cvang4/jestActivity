const hands = ['rock', 'paper', 'scissors'];
let Player1 = {Name: "Player 1", Hand: getHand};
let Player2 = {Name: "Player 2", Hand: getHand};

function getHand() {
    return hands[parseInt(Math.random()*10)%3]
}

//Play Round
function playRound(Player1, Player2) {
    var a = Player1.Hand();
    var b = Player2.Hand();
    if (a == 'rock' && b == 'scissors') {
        
        return true;
        
    }
    else if (a == 'paper' && b == 'rock') {
        
        return Player1;
    }
    else if (a == 'scissors' && b == 'paper') {
        
        return Player1;
    }
    else if (a == 'scissors' && b == 'rock') {
        
        return Player2;
    }
    else if (a == 'rock' && b == 'paper') {
        
        return Player2;
    }
    else if (a == 'paper' && b == 'scissors') {
        
        return Player2;
    }
    else {
        
        return null
    }
}

//Play Game
function playGame(Player1, Player2, playUntil) {

    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil){
        let roundWinner = playRound(Player1, Player2);
        if (roundWinner == Player1)
            player1Wins++
        else if (roundWinner == Player2)
            player2Wins++



    }

    if(player1Wins === playUntil) {
        return Player1.Name + " wins the game!";
    } else {
        return Player2.Name + " wins the game!";
}
}

playGame(Player1,Player2,5);



// individual exports
module.exports.playRound = playRound;
module.exports.getHand = getHand;
module.exports.hands = hands;
module.exports.Player1 = Player1;
module.exports.playGame = playGame;

// //exporting all functions in one
// module.exports = {playRound, getHand, hands, Player1}