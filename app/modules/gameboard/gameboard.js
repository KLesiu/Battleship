import {Ship} from "../ship/ship.js"
import { player } from "../startGamePlayer/startPlayer.js"
let stop=false
class Gameboard{
    constructor(){
        this.ships=[]
        this.hitsMissed=[]
        this.sunkedShips=0
    }
    addShip(coordinateX,coordinateY,lengthShip,position){
        const ship=new Ship(lengthShip,coordinateX,coordinateY,position)
        coordinateX=+coordinateX
        coordinateY=+coordinateY
        
        if(ship.length===1){
            ship.coordinates.push({x:coordinateX, y:coordinateY})
        }else if(ship.length===2&&ship.position==='vertical'){
ship.coordinates.push({x:coordinateX,y:coordinateY},{x:coordinateX,y:coordinateY+1})
        }else if(ship.length===2&&ship.position==='horizontal'){
            ship.coordinates.push({x:coordinateX,y:coordinateY},{x:coordinateX+1,y:coordinateY})
        }else if(ship.length===3&&ship.position==='vertical'){
            ship.coordinates.push({x:coordinateX,y:coordinateY},{x:coordinateX,y:coordinateY+1},{x:coordinateX,y:coordinateY+2})
        }else if(ship.length===3&&ship.position==='horizontal'){
            ship.coordinates.push({x:coordinateX,y:coordinateY},{x:coordinateX+1,y:coordinateY},{x:coordinateX+2,y:coordinateY})  
        }
        if(this.ships.length>0){
           for(let i=0;i<this.ships.length;i++){
            let current=this.ships[i].coordinates
            let shipCoor=ship.coordinates
            for (let j=0;j<current.length;j++){
                if(shipCoor[0].x===current[j].x &&shipCoor[0].y===current[j].y){
                    return 'This coordinates are use'
                }
                if(shipCoor[0].x===current[j].x+1 &&shipCoor[0].y===current[j].y+1){
                    return 'This coordinates are use'
                }
                if(shipCoor[0].x===current[j].x-1 &&shipCoor[0].y===current[j].y-1){
                    return 'This coordinates are use'
                }
                if(ship.length>1){
                    if(shipCoor[1].x===current[j].x &&shipCoor[1].y===current[j].y){
                        return 'This coordinates are use'
                    }
                    if(shipCoor[1].x===current[j].x+1 &&shipCoor[1].y===current[j].y+1){
                        return 'This coordinates are use'
                    }
                    if(shipCoor[1].x===current[j].x-1 &&shipCoor[1].y===current[j].y-1){
                        return 'This coordinates are use'
                    }

                }
                if(ship.length>2){
                    if(shipCoor[2].x===current[j].x &&shipCoor[2].y===current[j].y){
                        return 'This coordinates are use'
                    }
                    if(shipCoor[2].x===current[j].x+1 &&shipCoor[2].y===current[j].y+1){
                        return 'This coordinates are use'
                    }
                    if(shipCoor[2].x===current[j].x-1 &&shipCoor[2].y===current[j].y-1){
                        return 'This coordinates are use'
                    }
                }

            }
           }
           
        }
      


        this.ships.push(ship)
        if(stop===true) return 
        const divs=document.getElementsByClassName("gameBoardDiv")
        
            let positionMid;
            if(coordinateY===0) positionMid=coordinateX
            else {
                positionMid=10*coordinateY+coordinateX
            }
            divs[positionMid].style="background-color:green;"
            if(position==="horizontal"){
             if(ship.length===2)  divs[positionMid+1].style="background-color:green;"
               else if(ship.length===3){
                divs[positionMid+1].style="background-color:green;"
                divs[positionMid+2].style="background-color:green;"
               } 
            }else if(position==="vertical"){
                if(ship.length===2) divs[positionMid+10].style="background-color:green;"
                else if(ship.length===3){
                    divs[positionMid+10].style="background-color:green;"
                    divs[positionMid+20].style="background-color:green;"
                } 
            }
            if(player.gameboard.ships.length===9) stop=true
            
       
        return ship
    }
    receiveAttack(coordinateX,coordinateY){
        for(let i=0;i<this.ships.length;i++){
            let current=this.ships[i].coordinates
            for(let j=0;j<current.length;j++){
                if(current[j].x===coordinateX&&current[j].y===coordinateY){
                    this.ships[i].hit()
                    if(this.ships[i].isSunk()){
                    
                                this.sunkedShips++
                               return this.endGame()
                            } 
                            return this.ships[i].hits
                }
            }
          
                
                
            
        }
        let missedAttack={
            coordinateX:coordinateX,
            coordinateY:coordinateY
        }
        this.hitsMissed.push(missedAttack)
        return missedAttack
    }
    endGame(){
        if(this.sunkedShips===this.ships.length) return true
        return false

    }

    
}


export {Gameboard}
