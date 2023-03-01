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
                
                console.log(ai.gameboard.receiveAttack(+coordinatesX,+coordinatesY))
                
                aiShoot()
            })
        }
          
            
        );
    
   const aiShoot=()=>{
    console.log(ai.shoot())
    
   }
      
        
    
    
}
const playerAttack=(element)=>{
   

}
export {battleLoop}