import {Ship} from '../ship/ship.js'
import { Gameboard } from "./gameboard.js"

it('Is addShip works?',()=>{
    const gameboard=new Gameboard
    expect(gameboard.addShip(1,2,2,'vertical')).toStrictEqual(new Ship(2,1,2,'vertical'))
})

it('Missed attack',()=>{
    const gameboard= new Gameboard
    gameboard.addShip(1,2,2,'vertical')
    expect(gameboard.receiveAttack(4,3)).toStrictEqual({coordinateX:4,coordinateY:3})
})