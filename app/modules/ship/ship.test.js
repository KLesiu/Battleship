import {Ship} from '../ship/ship.js'
it('Do the hits increase?',()=>{
    const ship=new Ship(3,0,1,3,'horitzontal')
    ship.hit()
    expect(ship.hit()).toBe(2)
})
it('Is ship sunk?',()=>{
    const ship=new Ship(2,1,3,'horizontal')
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
})