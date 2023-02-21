const Ship=require('../ship/ship.js')

class Gameboard{
    constructor(){
        this.ships=[]
        this.hitsMissed=[]
        this.sunkedShips=0
    }
    addShip(coordinateX,coordinateY,lengthShip,position){
        let ship=new Ship(lengthShip,0,false,coordinateX,coordinateY,position)
        this.ships.push(ship)
        return this.ships
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

module.exports=Gameboard
