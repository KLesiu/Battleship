import { player } from "../startGamePlayer/startPlayer.js"
import { generateGameBoard } from "../startGamePlayer/startPlayer.js"
import { generateAI } from "../generateAI/generateAI.js"
import { battleLoop } from "../battleLoop/battleLoop.js"


let stop=false
const placeShip=()=>{
    
    if(stop===true) return
    
    const coordinateX=document.querySelector("#coordinateX").value
    const coordinateY=document.querySelector("#coordinateY").value
    const position=document.querySelector("#position").value
    const shipWidth=document.querySelector(".shipWidth")
    
    let leng=3
    if(player.gameboard.ships.length>=2) leng=2
    if(player.gameboard.ships.length>=5) leng=1
   
    if((coordinateX==8||coordinateX==9)&&position==="horizontal"&&leng==3) return
    if(coordinateX==9&&position==="horizontal"&&leng==2) return
    if((coordinateY==8||coordinateY==9)&&position==="vertical"&&leng==3) return
    if(coordinateY==9&&position==="vertical"&&leng==2) return




    if(coordinateX===""||coordinateY===""
    ||position===""){
        return
    }
    else if(coordinateX>=0&&coordinateX<10&&coordinateY>=0&&coordinateY<10){
        if(position==="vertical"||position==="horizontal"){
            
           player.gameboard.addShip(coordinateX,coordinateY,leng,position)
           if(player.gameboard.ships.length>=2) shipWidth.innerHTML="medium ship"
           if(player.gameboard.ships.length>=5)shipWidth.innerHTML="small ship"
           
        }
        else return
    }
    if(player.gameboard.ships.length===9){
        generateGameBoard("AI")
        generateAI()
        const playerGameboard=document.querySelector('#gameBoardPlayer')
        playerGameboard.style="opacity:0.7"
        const playerInfoDiv=document.querySelector('.div-input')
        playerInfoDiv.innerHTML=`<h2>${player.welcome()} GameBoard</h2>`
        playerInfoDiv.style="font-size:20px"
        window.scrollTo(0,1500)
        battleLoop()
        stop=true
    } 
    
}
export {placeShip}
