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
        for(let i=this.counter;this.gameboard.ships.length<10;i++){
            if(this.gameboard.ships.length==9)return this.gameboard
            
            let cordX=Math.floor(Math.random()*9)
            let cordY=Math.floor(Math.random()*9)
            let position=Math.floor(Math.random()*3)
          
            if(position<2) position='horizontal'
            else if(position>=2) position='vertical'
           
            
            if(this.gameboard.ships.length<2){
               if(cordX<8&&position==='horizontal') this.createLongShip(cordX,cordY,position)
               else if(cordY<8&&position==='vertical') this.createLongShip(cordX,cordY,position)
               else continue  
            } 
            
            
            else if(this.gameboard.ships.length>=2&&this.gameboard.ships.length<5){
                if(cordX<9&&position==='horizontal') this.createMediumShip(cordX,cordY,position)
                else if(cordY<9&&position==='vertical') this.createMediumShip(cordX,cordY,position)
                else continue
            } 
            
            else this.createSmallShip(cordX,cordY,position)
           this.counter++
        }
       
        
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
   
    
}

export {AI}
