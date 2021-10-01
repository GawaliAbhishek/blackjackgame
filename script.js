// geting All elements from html
let messageEl=document.getElementById("message-el");
let cardEl=document.getElementById("cards-el");
let simEl=document.getElementById("sum-el");

//intiatlizing variables
let firstCard=0;
let secondCard=0;
let cards=[];
let message='Want to play round?';
let sum=0;
let isBlackjack=false;
let isAlive=true;
let isGamestarted=true;



function getRamdomcard(){
    let num = Math.floor(Math.random()*13)+1;
    if(num>10)
    return 10;
    else if(num===1)
    return 11;
    else
    return num;
}

// Starting the Game
function startGame(){
    if(isGamestarted){
    firstCard= getRamdomcard();
    secondCard= getRamdomcard();
    isGamestarted=true;
    cards.push(firstCard);
    cards.push(secondCard);

    sum=firstCard+secondCard;
    renderGame();
    isGamestarted=false;
 }
}


// Rendering Texts on Screen
function renderGame(){

    simEl.textContent="Sum: "+sum;
    cardEl.textContent= "Cards: "+cards;
   

    if(sum==21){
        message="Its a Blackjack "
        isBlackjack=true;
    }
    if(sum>21){
    message="You are out of Game!!"
    isAlive=false;
    }
    if(sum<21 && sum!=0)
    message="Do you want new card"
    


    messageEl.textContent=message
}



//Addting new Cards
function getNewcard(){
    if(isBlackjack===false && isAlive===true){
   
        let newCard = getRamdomcard();
        cards.push(newCard);
        sum+=newCard;
        renderGame();
    }
}



//  Restart the game
function restartGame(){
    firstCard=0;
 secondCard=0;
 cards=[];
 message='Want to play round?';
 sum=0;
 isBlackjack=false;
 isAlive=true;
 isGamestarted=true
    renderGame();
}