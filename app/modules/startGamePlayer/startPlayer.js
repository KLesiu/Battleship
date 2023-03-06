import { Player } from "../player/player.js"
const player=new Player
const startGamePlayer=()=>{
    const buttonStart=document.querySelector(".submitMyName")
    const inputStart=document.querySelector(".preLoad div input")
    
    buttonStart.addEventListener("click",()=>{
        if(inputStart.value=="") alert("Type your name") 
        else{
            
            
            player.welcome()
            document.querySelector(".preLoad").classList.add("hidden")
            document.querySelector("main").classList.remove("hidden")
            generateGameBoard("player")
        }
        
    })
}
const generateGameBoard=(user)=>{
    let gameBoard;
        if(user==='player'){
            gameBoard=document.querySelector("#divHolder")
            

        }else if(user==='AI'){
            gameBoard=document.querySelector(`#div${user}Holder`)
        }
        
        let counter=0
        for(let i=0;i<100;i++){
            const div=document.createElement("div")
            if(user==='player') div.classList.add("gameBoardDiv")
            else if(user==='AI') div.classList.add("gameBoardDivAI")
            
            if(i<10){
                div.innerHTML=counter
                counter++
            }else if(i==10) div.innerHTML="1"
            else if(i==20) div.innerHTML="2"
            else if(i==30) div.innerHTML="3"
            else if(i==40) div.innerHTML="4"
            else if(i==50) div.innerHTML="5"
            else if(i==60) div.innerHTML="6"
            else if(i==70) div.innerHTML="7"
            else if(i==80) div.innerHTML="8"
            else if(i==90) div.innerHTML="9"
            gameBoard.appendChild(div)
        }
    

}
export {startGamePlayer,player,generateGameBoard}