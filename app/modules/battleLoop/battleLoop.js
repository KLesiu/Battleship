import { ai } from "../generateAI/generateAI.js";
import { player } from "../startGamePlayer/startPlayer.js";
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
                    console.log(ai.gameboard.hitsMissed)
                    aiGameBoardDivs[+number].style="background-color:green"
                    showMissedShoot('AI')
                   
                    aiShoot()
                }
                // Add short info to user after clicked on the same gameboard div
                else console.log("było")
               
            })
        }
          
            
        );
    
   const aiShoot=()=>{
    let arr=ai.shoot()
    let coordinatesX=arr[0]
    let coordinatesY=arr[1]
    let number=0
    if(coordinatesY==0) number=coordinatesX
    else number=(10*coordinatesY)+coordinatesX
    
    player.gameboard.receiveAttack(coordinatesX,coordinatesY)
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