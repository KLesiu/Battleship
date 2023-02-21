import {Ship} from "../ship/ship.js"
class Gameboard{
    constructor(){
        this.ships=[]
        this.hitsMissed=[]
        this.sunkedShips=0
    }
    addShip(coordinateX,coordinateY,lengthShip,position){
        const ship=new Ship(lengthShip,coordinateX,coordinateY,position)
        
        
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
                if(ship.length>1){
                    if(shipCoor[1].x===current[j].x &&shipCoor[1].y===current[j].y){
                        return 'This coordinates are use'
                    }
                }
                if(ship.length>2){
                    if(shipCoor[2].x===current[j].x &&shipCoor[2].y===current[j].y){
                        return 'This coordinates are use'
                    }
                }

            }
           }
           
        }
      


        this.ships.push(ship)
       
        return ship
    }
    receiveAttack(coordinateX,coordinateY){
        for(let i=0;i<this.ships.length;i++){
            
            if(this.ships[i].coordinateX===coordinateX&&this.ships[i].coordinateY===coordinateY){
                this.ships[i].hit()
                
                if(this.ships[i].isSunk()){
                    
                    this.sunkedShips++
                   return this.endGame()
                } 
                return this.ships[i]
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
const gameboard=new Gameboard
gameboard.addShip(1,1,3,'vertical')
console.log(gameboard.addShip(0,3,1,'horizontal'))


export {Gameboard}
