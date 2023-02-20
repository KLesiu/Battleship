class Ship{
    constructor(length,hits,killed){
        this.length=length
        this.hits=hits
        this.killed=killed
        }
    hit(){
        this.hits++
        return this.hits
    }
    isSunk(){
        if(this.length-this.hits===0){
            return true
        }
        else return false
    }
}

const ship=new Ship(3,0,false)

module.exports=Ship
