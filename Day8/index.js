/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

g
*/

document.addEventListener("DOMContentLoaded", function() {
    
    //get dice elemt
    let diceElement = document.getElementById("dice");
    //get counter elemt
    let diceCounter = document.getElementById("counter");
    //dot 
    let dotDiv = "<div class='container'> <div class='dot'></div> </div>";
    //Click event listner
    diceElement.addEventListener("click", e => {
        // get random 1-6
        let dots = Math.ceil(Math.random()*6);
        //get my spesfic #dice[dots-counter=dots]
        diceElement.setAttribute("dots-counter", dots);
        //initialize strHTML
        let strHTML = "";
        //print 
        for(let i = 0; i < dots; i++) {
            strHTML += dotDiv ;
        }

         diceElement.innerHTML = strHTML;
        diceCounter.textContent =  "Result:" + dots;
    });
});

// Write your code here 👇


/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
