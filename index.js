// const container = document.querySelector(".span")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const player = document.querySelector(".player")
const comp = document.querySelector(".comp")
const button = document.querySelector(".button")
const Round = document.querySelector(".round")
const reset = document.querySelector(".reset")

let round = 1;
const  firsplay = " "

let playercount = 0;
let computercount = 0;
function getcomputer() {
    choices = ['rock','paper','scissors']
    const random =  randomIndex=Math.floor(Math.random()*choices.length)
    const computerChoice = choices[randomIndex];
    console.log(computerChoice);
    return computerChoice;
}
function getresult(getuser) {
   const  computerchoice = getcomputer();
   if (getuser === computerchoice) {
    return "It's a tie!";
  } else if (
    (getuser === "rock" && computerchoice === "scissors") ||
    (getuser === "paper" && computerchoice === "rock") ||
    (getuser === "scissors" && computerchoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}     

  function gameover(playercount,computercount) {
    if (Round.textContent == 'Game Over') {
       if (playercount > computercount) {
      
        button.textContent = "player wins the game"
        
      } 
      else if(computercount > playercount){
      button.textContent = "computer wins the game"

      }
      else {
        button.textContent = "it's a tie"
        }
      
    }
   
    }

  

rock.addEventListener("click", () => { 
  if (round < 5) {
    round++;
Round.textContent = `Round ${round}`

  } else {
Round.textContent = `Game Over`
        

    
  }    

});
paper.addEventListener("click", () => {      
  if (round < 5) {

    round++;
Round.textContent = `Round ${round}`

  } else {
Round.textContent = `Game Over`

    
  }       

});
scissors.addEventListener("click", () => { 
  if (round < 5) {

    round++;
Round.textContent = `Round ${round}`
  } else {
Round.textContent = `Game Over`
  }    

  
});
rock.addEventListener("click",()=>{  
       const user =  "rock";
       const result = getresult(user)
       console.log(result);
       console.log(user);
      if (result == "Computer wins!") {
        computercount++;
        console.log(`computer:${computercount}`);
        comp.textContent = `computer:${computercount}`
      } else if (result == "You win!"){
        playercount++;
        console.log(`player: ${playercount}`);
        player.textContent = `Player:${playercount}`
      }
      
      gameover(playercount,computercount)
     
   })
   paper.addEventListener("click",()=>{
   
       const user =  "paper";
       const result = getresult(user)
       console.log(result);
       console.log(user);
       if (result == "Computer wins!") {
        computercount++;
        console.log(`computer:${computercount}`);
        comp.textContent = `computer:${computercount}`
      } else if (result == "You win!"){
        playercount++;
        console.log(`player: ${playercount}`);
        player.textContent = `Player:${playercount}`
      }
      gameover(playercount,computercount)

   })
   scissors.addEventListener("click",()=>{
  
       // const computer = getcomputer();
       const user =  "scissors";
       const result =  getresult(user)
       console.log(result);
       console.log(user);  
    if (result == "Computer wins!") {
      computercount++;
      console.log(`computer:${computercount}`);
      comp.textContent = `computer:${computercount}`
    } else if (result == "You win!"){
      playercount++;
      console.log(`player: ${playercount}`);
      player.textContent = `Player:${playercount}`
    }
    gameover(playercount,computercount)
    
    
        }
   )

   function resetGame() {
    const  firsplay = " "
    round = 1;
    playercount = 0;
    computercount = 0;
    Round.textContent = `Round ${round}`;
    player.textContent = `Player: ${playercount}`;
    comp.textContent =`Computer:${computercount}`;
    button.textContent = firsplay;
  }
reset.addEventListener("click",()=>{
  resetGame()
});