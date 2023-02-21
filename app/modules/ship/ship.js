const Gameboard=require('../gameboard/gameboard')
class Ship{
    constructor(length,killed,coordinateX,coordinateY,position){
        this.length=length
        this.hits=[]
        this.killed=killed
        this.coordinateX=coordinateX
        this.coordinateY=coordinateY
        this.position=position
        }
    hit(){
        this.hits.push({
            coordinateX:this.coordinateX,
            coordinateY:this.coordinateY
        })
        return this.hits.length
    }
    isSunk(){
        if(this.length-this.hits.length===0){
            this.killed=true
            return true
        }
        else return false
    }
}



module.exports=Ship
