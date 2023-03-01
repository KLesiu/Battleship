import { ai } from "../generateAI/generateAI.js";
import { player } from "../startGamePlayer/startPlayer.js";
const battleLoop=()=>{
    const aiGameBoardDivs=document.querySelectorAll(".gameBoardDivAI")
    const playerGameBoardDivs=document.querySelectorAll(".gameBoardDiv")
    const aiGameBoardDivsArray=Array.from(aiGameBoardDivs)
    
        aiGameBoardDivsArray.forEach(element => {
            element.addEventListener("click",()=>{
                let number=aiGameBoardDivsArray.indexOf(element).toString()
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
               ai.gameboard.receiveAttack(+coordinatesX,+coordinatesY)
                console.log(ai.gameboard.hitsMissed)
                aiGameBoardDivs[+number].style="background-color:green"
                showMissedShoot('AI')
               
                aiShoot()
            })
        }
          
            
        );
    
   const aiShoot=()=>{
    // console.log(ai.shoot())
    
   }
   const showMissedShoot=(player)=>{
    if(player==='AI'){
        let array=ai.gameboard.hitsMissed
        for(let i=0;i<array.length;i++){
            aiGameBoardDivs[array[i]].innerHTML='x'
            aiGameBoardDivs[array[i]].style="background-color:blue"
        }
    }
   }
      
        
    
    
}

export {battleLoop}