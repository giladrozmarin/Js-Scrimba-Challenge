//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
let pushed = false; //Has the stop button been pushed - false is default
let targetInt; //The target number to stop the wheel on
const spinningElem = document.getElementById('spinning'); //The spinning number
let timedOut;

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101);
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}



//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
  let i = 0;

  while (i <= 101) {

    if(i==101){

        pushed = true;

        timedOut = true;     

    }

    if(pushed == true){

       stop(i); //Trigger this function when the STOP button has been pushed

        break;

    }else{

        spinningElem.innerHTML = i;

        await sleep(75); //Paste this wherever you need to sleep the incrimentor 

    }

    i++;  

  } 
}

//EDIT THIS FUNCTION
function stop(i){
    //WRITE YOUR CODE HERE
    const result = document.getElementById('result'); //display your result message here
    
    const difference = Math.abs(targetInt - i + 1);
    
    let message, fontColor;
    
    message = (difference == 0) ? "You Win!" : timedOut ? "Oh no, game over! Are you there?" : "Oh no, you lose! Off by " + difference + "!";
    
    fontColor = (difference == 0) ? "blue" : "red";
    
    result.innerHTML = message;   
    
    result.style.color = fontColor;    

}


//main
setTargetInt();
spin();