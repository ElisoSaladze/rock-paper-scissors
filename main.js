const compChoice = document.querySelector(".comp-choice");
const userChoice = document.querySelector(".user-choice");
const resultDiv = document.querySelector(".result");
const starter = document.querySelector(".play");
const result = document.querySelector(".who")

const getRandom = () => {
    const words = ["rock", "paper", "scissors"];
    const word = words[Math.floor(Math.random() * words.length)];
    return word;  
}

const findWinner = (user, comp) => {
    let winner;
    if (user === comp) {
        winner = "IT’S A DRAW &#129325;";
    } else if (
        (user === "rock" && comp === "scissors") ||
        (user === "paper" && comp === "rock") ||
        (user === "scissors" && comp === "paper")
    ) {
        winner = "YOU WIN! 	&#128537;";
    } else {
        winner = "YOU LOSE &#128520;";
    }
    setTimeout(() => {
        result.innerHTML = winner;
    }, 1000);
};


const showResult = (id) => {
    resultDiv.style.display = "block";
    setTimeout(() => {
        resultDiv.classList.add("show");
      }, 100);

    const user = id;
    const comp = getRandom();

    const pictureArr = [
        {src: "./assets/Rock.png", alt: "rock"}, 
        {src: "./assets/Paper.png", alt: "paper"}, 
        {src: "./assets/Scissors.png", alt: "scissors"}
    ];

    pictureArr.forEach(pic => {
        if (pic.alt === user) {
            const userImage = document.createElement("img");
            userImage.src = pic.src;
            userImage.alt = pic.alt;
            userChoice.appendChild(userImage);
        }
        if (pic.alt === comp) { 
            const compImage = document.createElement("img"); 
            compImage.src = pic.src;
            compImage.alt = pic.alt;
            compChoice.appendChild(compImage);
        }
    })
    setTimeout(() => {
        compChoice.classList.add('shake');
    }, 500);
    setTimeout(() => {
        findWinner(user, comp);
        compChoice.classList.remove('shake');
    }, 1000);

    starter.style.display = "none";
}

const playAgain = () => {
    userChoice.innerHTML = "";
    compChoice.innerHTML = "";
    result.innerHTML = "...";
    winner = "";
    starter.style.display = "block";
    resultDiv.style.display = "none";
}

