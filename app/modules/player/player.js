import {Gameboard} from '../gameboard/gameboard.js'
class Player{
    constructor(){
        this.shoots=[]
        this.gameboard=new Gameboard
       
        
    }
    welcome(){
        const inputStart=document.querySelector(".preLoad div input")
        const yourName=document.querySelector("#yourName")
        yourName.innerHTML=inputStart.value
        return inputStart.value
    }
    addShips(coordinateX,coordinateY,lengthShip,position){
        this.gameboard.addShip(coordinateX,coordinateY,lengthShip,position)
        return this.gameboard
    }
    shoot(coordinateX,coordinateY){
        let attack={x:coordinateX,y:coordinateY}
        this.shoots.push(attack)
        return attack
    }

}

export {Player}