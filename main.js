window.onload = () => {

    var userScore = 0;
    var compScore = 0;
    var userScore_span = document.querySelector("#user-score");
    var compScore_span = document.querySelector("#comp-score");
    var scoreBoard_div = document.querySelector(".score-board");
    var result_p = document.querySelector(".result > p");
    var rock_div = document.querySelector("#rock");
    var paper_div = document.querySelector("#paper");
    var scissors_div = document.querySelector("#scissors");


    function getComputerChoice() {
        var choices = ["rock", "paper", "scissors"];
        var randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    function convertWord(word) {
        switch (word) {
            case "rock":
                return "Rock";
            case "paper":
                return "Paper";
            case "scissors":
                return "Scissors";
        }
    }

    function win(user, comp) {
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        var userChoice_div = document.getElementById(user);
        result_p.innerHTML = `${convertWord(user)} beats ${comp}. You win`;
        userChoice_div.classList.add("green-glow");
        setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
    }

    function lose(user, comp) {
        compScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        var userChoice_div = document.getElementById(user);
        result_p.innerHTML = `${convertWord(user)} loses to ${comp}. You lost`;
        userChoice_div.classList.add("red-glow");
        setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
    }

    function draw(user, comp) {

        result_p.innerHTML = "It's a Draw";
        userChoice_div.classList.add("gray-glow");
        setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
    }

    function game(userChoice) {
        var compChoice = getComputerChoice();
        switch (userChoice + compChoice) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                win(userChoice, compChoice);
                break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                lose(userChoice, compChoice);
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                draw(userChoice, compChoice);
                break;
        }
    }



    function main() {
        rock_div.addEventListener("click", () => game("rock"));

        paper_div.addEventListener("click", () => game("paper"));

        scissors_div.addEventListener("click", () => game("scissors"));
    }

    main();

};