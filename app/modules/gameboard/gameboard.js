const Ship=require('../ship/ship.js')

class Gameboard{
    constructor(){
        this.ships=[]
        this.hitsMissed=[]
        this.sunkedShips=0
    }
    addShip(coordinateX,coordinateY,lengthShip,position){
        const ship=new Ship(lengthShip,false,coordinateX,coordinateY,position)
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
const gameboard=new Gameboard
gameboard.addShip(2,1,2,'vertical')
gameboard.receiveAttack(2,1)
gameboard.receiveAttack(2,1)
console.log(gameboard)

module.exports=Gameboard
