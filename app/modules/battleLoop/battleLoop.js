import { ai } from "../generateAI/generateAI.js";
import { player } from "../startGamePlayer/startPlayer.js";
import { coordinatesArray } from '../coordinates/coordinates.js'
import { arrayCheck } from '../coordinates/coordinates.js'
import { endGame } from "../endGame/endGame.js";
const battleLoop=()=>{
    const aiGameBoardDivs=document.querySelectorAll(".gameBoardDivAI")
    const playerGameBoardDivs=document.querySelectorAll(".gameBoardDiv")
    const aiGameBoardDivsArray=Array.from(aiGameBoardDivs)
    let holderNumbers=[]
    
        aiGameBoardDivsArray.forEach(element => {
            element.addEventListener("click",()=>{
                
                let number=aiGameBoardDivsArray.indexOf(element).toString()
                if(holderNumbers.indexOf(+number)===-1){
                    let coordinatesX;
                    let coordinatesY;
                    if(number>10){
                        number.split(' ')
                        coordinatesX=number[1]
                        coordinatesY=number[0]
                    }else if(number==10){
                        coordinatesX=0
                        coordinatesY=1
                    }
                    else{
                        coordinatesX=number
                        coordinatesY=0
                    }
                    holderNumbers.push(+number)
                   ai.gameboard.receiveAttack(+coordinatesX,+coordinatesY)
                    
                    
                    aiGameBoardDivs[+number].style="background-color:green"
                    showMissedShoot('AI')
                    
                    const playerScore=document.querySelector('.playerScore')
                    playerScore.innerHTML=ai.gameboard.sunkedShips
                    if(ai.gameboard.sunkedShips===9){
                        endGame(player.welcome(),ai.gameboard.sunkedShips,player.gameboard.sunkedShips)
                        return
                    }
                    aiShoot()
                }
                // Add short info to user after clicked on the same gameboard div
                else console.log("było")
               
            })
        }
          
            
        );
    
   const aiShoot=()=>{
    let numberA=+Math.floor(Math.random()*100)
        let cordX=coordinatesArray[numberA].x
        let cordY=coordinatesArray[numberA].y
        
       
       
            if(arrayCheck.length>0){
                while(arrayCheck.includes(+numberA)){
                    numberA=Math.floor(Math.random()*100)
                    cordX=coordinatesArray[numberA].x
                    cordY=coordinatesArray[numberA].y
                    console.log('powtórka')
                }
            }
            arrayCheck.push(numberA)
      
            
            let number=0
            if(cordY==0) number=cordX
            else number=(10*cordY)+cordX
            
            player.gameboard.receiveAttack(cordX,cordY)
            const aiScore=document.querySelector('.aiScore')
            aiScore.innerHTML=player.gameboard.sunkedShips
           if(player.gameboard.sunkedShips===9){
            // FIX HIDDEN CLASS BUG
            endGame('AI',ai.gameboard.sunkedShips,player.gameboard.sunkedShips)
            return
           }
            playerGameBoardDivs[number].style="background-color:red"
            showMissedShoot('player')
        } 
        
       
        
    
   
    
   
   const showMissedShoot=(user)=>{
    if(user==='AI'){
        let array=ai.gameboard.hitsMissed
        for(let i=0;i<array.length;i++){
            aiGameBoardDivs[array[i]].innerHTML='x'
            aiGameBoardDivs[array[i]].style="background-color:blue"
        }
    }
    else if(user==='player'){
        let array=player.gameboard.hitsMissed
        for(let i=0;i<array.length;i++){
            playerGameBoardDivs[array[i]].innerHTML="x"
            playerGameBoardDivs[array[i]].style="background-color:blue"
        }
    }
   }
      
        
    
    
}

export {battleLoop}
