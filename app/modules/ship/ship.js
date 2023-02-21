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



export {Ship}