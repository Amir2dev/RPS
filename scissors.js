let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoared_div = document.querySelector(".score-boared");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const scoreBorder = document.getElementById("score-boared")
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

function convertToWorld(letter) {
    if (letter === "r")return "ROCK";
    if (letter === "p")return "PAPER";
    return "SCISSORS"


}

function win(userChoice ,ComputerChoice) {
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup(); 
    const smallCompWord = "comp".fontsize(3).sup(); 
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWord} beats ${convertToWorld(ComputerChoice)}${smallCompWord}. You WON!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 1000)
}

function lose(userChoice ,ComputerChoice) {
    const smallUserWord = "user".fontsize(3).sup(); 
    const smallCompWord = "comp".fontsize(3).sup(); 
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWord} loses to ${convertToWorld(ComputerChoice)}${smallCompWord}. You LOST!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 1000)
}

function draw(userChoice ,ComputerChoice) {
    const smallUserWord = "user".fontsize(3).sup(); 
    const smallCompWord = "comp".fontsize(3).sup(); 
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWord} equals to${convertToWorld(ComputerChoice)}${smallCompWord}. DRAW!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 1000)
}


function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice){
        case  "rs":
        case  "pr":
        case  "sp":
             win(userChoice ,ComputerChoice);
             break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice ,ComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice ,ComputerChoice);
            break;




    }
}


function main() {
    rock_div.addEventListener('click',function() {
        game("r");

    })
    paper_div.addEventListener('click',function() {
        game("p");

    })
    scissors_div.addEventListener('click',function() {
        game("s");

    })
}

main();