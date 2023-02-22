import {Gameboard} from '../gameboard/gameboard.js'
class Player{
    constructor(name){
        this.shoots=[]
        this.gameboard=new Gameboard
        this.name=name
        this.score=this.gameboard.sunkedShips
    }
    welcome(){
        //TODO:
        //Type name
        //Show name above the gameboard
        //Show score next to name
    }
    addShips(coordinateX,coordinateY,lengthShip,position){
        this.gameboard.addShip(coordinateX,coordinateY,lengthShip,position)
    }
    shoot(coordinateX,coordinateY){
        let attack={x:coordinateX,y:coordinateY}
        this.shoots.push(attack)
        return attack
    }

}

export {Player}