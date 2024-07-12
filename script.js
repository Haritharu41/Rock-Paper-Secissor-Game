let userScore=0;
let comScore=0;


let choices= document.querySelectorAll(".choice")
const msg= document.querySelector("#msg")
let userScorePara=document.querySelector("#user-score")
let comScorePara=document.querySelector("#com-score")

const genComChoice= ()=>{
    const options=["Paper","Rock","Secissor"];
    const ranIdx=Math.floor(Math.random()*3)
    return options[ranIdx]

}

let drawGame=()=>{
console.log("Game draw !");
msg.innerText="Game was draw. Play again."
msg.style.backgroundColor="black";

};

let showWinner=(userWin, userChoice, comChoice)=>{
if(userWin){

userScore++;
userScorePara.innerText=userScore;
    msg.innerText=`You Win ! 👏👏Your ${userChoice} beats to ${comChoice}`
    msg.style.backgroundColor="green";

    
}else{
comScore++;
comScorePara.innerText=comScore;
    console.log("Computer is Winner")
    msg.innerText=`You loose ! 😭${comChoice} beats your ${userChoice}`;

    msg.style.backgroundColor="red";

}

}


const playGame=(userChoice)=>{
    console.log("User-Choice", userChoice)
    const comChoice= genComChoice();
    console.log("Comp-Choice", comChoice)



    if(userChoice===comChoice){
        drawGame();
        

    }else{
        let userWin = true;
        if(userChoice==="Rock"){
         
                 userWin= comChoice==="Paper" ? false : true;
        }
        else if(userChoice==="Paper"){
            userWin= comChoice==="Secissor" ? false : true;
            
        }
        else {
            userWin=comChoice==="Rock" ? false : true;

    }
    showWinner(userWin, userChoice, comChoice ) ;
   
}};





choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    })
});