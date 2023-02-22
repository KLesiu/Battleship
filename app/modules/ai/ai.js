import {Gameboard} from '../gameboard/gameboard.js'
class AI{
    constructor(){
        this.name='AI'
        this.gameboard=new Gameboard
        this.shoots=[]
        this.score=this.gameboard.sunkedShips
        this.counter=0
        
    }
    init(){
        if(this.gameboard.ships.length===9)return this.gameboard
        let cordX=Math.floor(Math.random()*9)
        let cordY=Math.floor(Math.random()*9)
        let position=Math.floor(Math.random()*3)
        let lengthShip=Math.floor(Math.random()*2+1)
        if(position<2) position='horizontal'
        else if(position>=2) position='vertical'
        if(this.counter<2)this.createLongShip(cordX,cordY,position)
        else if(this.counter>=2&&this.counter<5) this.createMediumShip(cordX,cordY,position)
        else  this.createSmallShip(cordX,cordY,position)
       this.counter++
        this.init()
    }
    createLongShip(cordX,cordY,position){
        this.gameboard.addShip(cordX,cordY,3,position)
    }
    createMediumShip(cordX,cordY,position){
        this.gameboard.addShip(cordX,cordY,2,position)
    }
    createSmallShip(cordX,cordY,position){
        this.gameboard.addShip(cordX,cordY,1,position)
    }
    shoot(){
    let cordX=Math.floor(Math.random()*9)
    let cordY=Math.floor(Math.random()*9)
    this.shoots.push({x:cordX,y:cordY})
    return {x:cordX,y:cordY}

    }
    
}
export {AI}