class Ship{
    constructor(length,hits,killed,coordinateX,coordinateY){
        this.length=length
        this.hits=hits
        this.killed=killed
        this.coordinateX=coordinateX
        this.coordinateY=coordinateY
        this.position=position
        }
    hit(){
        this.hits++
        return this.hits
    }
    isSunk(){
        if(this.length-this.hits===0){
            this.killed=true
            return true
        }
        else return false
    }
}



module.exports=Ship
