


function getcomputer() {
    choices = ['rock','paper','scissors']
    var randomIndex=Math.floor(Math.random()*choices.length)
  
    return choices[randomIndex];

    
    
}

function getuser() {
    var user = prompt('rock, paper, or scissors?');
  
    if (user == "rock") {
        console.log('rock');
        } else if (user == "paper") {
            console.log('paper');
            } else if (user == "scissors") {
                console.log('scissors');

        
    }
    return user.toLowerCase();
    
}


function getresult(user) {
     computer = getcomputer();
     console.log(computer);
    if (computer == 'rock' && user == 'paper') {
        console.log('computer wins');
    }
    else if (computer == 'rock' && user == 'rock') {
        console.log('tie');
        }
else if (computer == 'rock' && user == 'scissors') {
    console.log('computer wins');
    }
    else if (computer == 'paper' && user == 'rock') {
        console.log('you win');
        }
        else if (computer == 'paper' && user == 'paper') {
            console.log('tie');
            }
            else if (computer == 'paper' && user == 'scissors') {
                console.log('you win');
                }
                else if (computer == 'scissors' && user == 'rock') {
                    console.log('you win');
                    }
                    else if (computer == 'scissors' && user == 'paper') {
                        console.log('commputer wins');
                        }
                        else if (computer == 'scissors' && user == 'scissors') {
                            console.log('tie');
                            }
                            else {
                                console.log('error');
                                }
                                
                                
                                }
       


function playround(computer) {
        computer = getcomputer();
    for (let i = 1; i <= 5; i++) {
        console.log('Round ' + i);

     
       let result = getresult(getuser(),computer);

        
    }

    
}
playround()









