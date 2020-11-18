function main() {
    var player1;
    var player2;
  diceRoller();
  bannerChange();
}
main();

function randNumGen() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function diceRoller(){
    player1 = randNumGen();
    player2 = randNumGen();
    console.log(player1);
    console.log(player2);
    document.querySelector(".img1").setAttribute("src", "images/dice" + player1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + player2 + ".png");
}

function bannerChange(){
    if(player1 > player2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if(player2 > player1){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "It's a Draw!";    
    }
}