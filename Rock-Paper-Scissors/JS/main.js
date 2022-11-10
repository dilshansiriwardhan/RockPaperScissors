let prevHuman;
let prevComputer;

function man(input){

    if(prevHuman){
        prevHuman.style.background = "#6D9886";
        
    }

    prevHuman = document.getElementById(input);

    document.getElementById(input).style.background = "black";
    
    if(Game(input) == "man"){
        let presentMarks = document.getElementById("humanMarks").innerText;
        document.getElementById("humanMarks").innerText = parseInt(presentMarks) + 1;
    }else if(Game(input) == "computer"){
        let presentMarks = document.getElementById("computerMarks").innerText;
        document.getElementById("computerMarks").innerText = parseInt(presentMarks) + 1;
    }else{
        let presentMarks = document.getElementById("humanMarks").innerText;
        document.getElementById("humanMarks").innerText = parseInt(presentMarks) + 1;

        presentMarks = document.getElementById("computerMarks").innerText;
        document.getElementById("computerMarks").innerText = parseInt(presentMarks) + 1;
    }
}

function Game(man){

    let rulz = ["rock","paper","scissors"]
    let random = Math.floor(Math.random() * rulz.length);

    
    let computer = rulz[random];

    if(prevComputer){
        prevComputer.style.background = "#6D9886";
    }
    prevComputer = document.getElementsByClassName(computer)[0];
    document.getElementsByClassName(computer)[0].style.background = "black";


    if(man == computer){
        return "draw";
    }

    if(( man == "rock" ) && ( computer == "scissors" )) return "man";

    if(( man == "scissor" ) && ( computer == "Paper" )) return "man";

    if(( man == "paper" ) && ( computer == "rock" )) return "man";

    return "computer";
}