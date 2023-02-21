import {Ship} from '../ship/ship.js'
import { Gameboard } from "./gameboard.js"

it('Is addShip works?',()=>{
    const gameboard=new Gameboard
    const test=function(){
        const ship=new Ship(2,1,2,'vertical')
        ship.coordinates=[{x:1,y:2},{x:1,y:3}]
        return ship
    }
    expect(gameboard.addShip(1,2,2,'vertical')).toStrictEqual(test())
})

it('Missed attack',()=>{
    const gameboard= new Gameboard
    gameboard.addShip(1,2,2,'vertical')
    expect(gameboard.receiveAttack(4,3)).toStrictEqual({coordinateX:4,coordinateY:3})
})
it('Hit the ship',()=>{
    const gameboard=new Gameboard
    gameboard.addShip(3,4,3,'horizontal')
    const test=function(){
        const ship=new Ship(3,3,4,'horizontal')
        ship.coordinates=[{x:3,y:4},{x:4,y:4},{x:5,y:4}]
        ship.hits=[{coordinateX:3,coordinateY:4}]
        return ship.hits
    }
    expect(gameboard.receiveAttack(3,4)).toStrictEqual(test())
})
it('Second hit the ship',()=>{
    const gameboard=new Gameboard
    gameboard.addShip(3,4,3,'horizontal')
    gameboard.receiveAttack(3,4)
const test=function(){
        const ship=new Ship(3,3,4,'horizontal')
        ship.coordinates=[{x:3,y:4},{x:4,y:4},{x:5,y:4}]
       ship.hit(3,4)
        ship.hit(4,4)
        return ship.hits
    }
    expect(gameboard.receiveAttack(4,4)).toStrictEqual(test())
})
it('Finish the ship',()=>{
    const gameboard=new Gameboard
    gameboard.addShip(3,4,3,'horizontal')
    gameboard.receiveAttack(3,4)
    gameboard.receiveAttack(4,4)
   expect(gameboard.receiveAttack(5,4)).toStrictEqual(true)
})
it('Dont finish the Game',()=>{
    const gameboard=new Gameboard
    gameboard.addShip(0,0,1,'horizontal')
    gameboard.addShip(2,2,2,'vertical')
    gameboard.receiveAttack(0,0)
    gameboard.receiveAttack(2,2)
    expect(gameboard.endGame()).toBe(false)
})
it('Counter sankedShips',()=>{
    const gameboard=new Gameboard
    gameboard.addShip(0,0,1,'horizontal')
    gameboard.addShip(2,2,2,'vertical')
    gameboard.receiveAttack(0,0)
    gameboard.receiveAttack(2,2)
    expect(gameboard.sunkedShips).toBe(1)
})
it('Cant place new ship in the place reserved for other ship',()=>{
    const gameboard=new Gameboard
    gameboard.addShip(2,3,3,'horizontal')
    expect(gameboard.addShip(3,2,2,'vertical')).toBe('This coordinates are use')
})