var userScore = 0;
var computerScore = 0;
const userScores = document.getElementById("userScore");
const computerScores = document.getElementById("computerScore");
const score = document.querySelector(".score");
const results = document.querySelector(".results > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
  const randomNumero = Math.floor(Math.random() * 3);
    return choices[randomNumero];
}

console.log(getComputerChoice());

function convert(word) {
    if (word === "rock") return "pedra";
    if (word === "scissors") return "tesoura";
    if (word === "paper") return "papel";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScores.innerHTML = userScore;
    computerScores.innerHTML = computerScore;
    results.innerHTML = convert(userChoice) + " vence " + convert(computerChoice) + ". Você ganhou ! ";
    userChoice . classList . add ( 'green-glow' ) ;
	setTimeout ( function ( ) { userChoice . classList . remove ( 'green-glow' ) ; } , 500 ) ;
}

function lost(userChoice, computerChoice) {
    computerScore++;
    userScores.innerHTML = userScore;
    computerScores.innerHTML = computerScore;
    results.innerHTML = convert(userChoice) + " perde " + convert(computerChoice) + ". Você perdeu ! ";
    userChoice . classList . add ( 'red-glow' ) ;
    setTimeout(function(){userChoice.classList.remove('red-glow');},500);
}

function tie(userChoice, computerChoice) {
    userScore++;
    computerScore++;
    userScores.innerHTML = userScore;
    computerScores.innerHTML = computerScore;
    results.innerHTML = convert(userChoice) + " é igual " + convert(computerChoice) + ". Houve um empate ! ";
    userChoice . classList . add ( 'gray-glow ') ;
	setTimeout ( function ( ) { userChoice . classList . remove ( 'gray-glow' ) ; } , 500 ) ;
}

function game(user_choice) {
    const computerChoice = getComputerChoice();

    if (user_choice == "paper" && computerChoice == "paper" ||
        user_choice == "rock" && computerChoice == "rock" ||
        user_choice == "scissors" && computerChoice == "scissors") {
    tie(user_choice, computerChoice);
    userScores.innerHTML = userScore;
    computerScores.innerHTML = computerScore;
    } else if (user_choice == "paper" && computerChoice == "rock") {
    win(user_choice, computerChoice);
    } else if (user_choice == "rock" && computerChoice == "scissors") {
    win(user_choice, computerChoice);
    } else if (user_choice == "scissors" && computerChoice == "paper") {
    win(user_choice, computerChoice);
    } else {
    lost(user_choice, computerChoice);
    }
}
    
    // switch (userChoise + computerChoice) {
    //     case "scissors paper":
    //     case "paper rock ":
    //     case "rock scissors":

    //         win(userChoise,computerChoice);
    //         // console.log ("você venceu")
    //         break;
    //     case "paper scissors":
    //     case "rock paper":
    //     case "scissors rock":

    //         lost(userChoise,computerChoice);
    //         break;
    //     case "scissors scissors":
    //     case "paper paper":
    //     case "rock rock":

    //         tie(userChoise,computerChoice);
    //         break;
    // }



function main() {

    rock.addEventListener ("click",function() {
        game("rock");
        console.log ("rock..");
    })
    
    paper.addEventListener ("click",function() {
        game("paper");
    })
    
    scissors.addEventListener ("click",function() {
        game("scissors");
    })
}
main()