class Ship{
    constructor(length,coordinateX,coordinateY,position){
        this.length=length
        this.hits=[]
        this.killed=false
        this.coordinateX=coordinateX
        this.coordinateY=coordinateY
        this.position=position
        this.coordinates=[]
        }
    hit(coordX,coordY){
        this.hits.push({
            coordinateX:coordX,
            coordinateY:coordY
        })
        return this.hits.length
    }
    isSunk(){
        if(this.length-this.hits.length==0){
            this.killed=true
            return true
        }
        else return false
    }
}



export {Ship}