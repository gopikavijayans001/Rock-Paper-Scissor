let userScore=0;
let ComputerScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice=()=>{
//here  we need  the computer to generate the choice for rock paper and scissors
let options=["rock","paper","scissors"]
//Math.random();//math is a class in the javaScript and random is a method which create a number randomly from 0-9
const indexId= Math.floor(Math.random () * 3);
//we provide * 3 because i want to generate values from 0-2 beacuse the index of array is 0 1 2
return options[indexId];

}

const drawGame=()=>{
    console.log(" game is draw")
    msg.innerText="Game was draw"
    msg.style.backgroundColor="#081b31"
}



const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin===true){
        userScore++;
              userScorePara.innerText=userScore;
        msg.innerText=`You win... your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        ComputerScore++;
              compScorePara.innerText=ComputerScore;
        msg.innerText=`You lose... your ${compChoice}beats ${userChoice}`;
     msg.style.backgroundColor="red"
    }
}





const playGame=(userChoice) =>
{
  
    //generate the computer choice
 const compChoice=   genCompChoice();
console.log("computerChoice ="+compChoice);
if(userChoice===compChoice){
    drawGame();
}
else{
let userWin = true;
if(userChoice==="rock"){
 userWin= compChoice == "paper" ? false : true
 
}
else if(userChoice==="paper"){
    userWin= compChoice == "scissors" ? false : true
}
else{

    userWin =  compChoice=="paper" ? true : false

}
showWinner(userWin,userChoice,compChoice);

}}







choices.forEach((choice) => {
  
    choice.addEventListener("click",()=>{
     let userChoice=   choice.getAttribute("id")
        console.log( userChoice+"  button is clicked")
        playGame(userChoice);
    })
})

