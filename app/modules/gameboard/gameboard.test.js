const Ship = require('../ship/ship')
const Gameboard=require('./gameboard')

it('Is addShip works?',()=>{
    const gameboard=new Gameboard
    expect(gameboard.addShip(1,2,2,'vertical')).toBe(new Ship(2,[],false,1,2,'vertical'))
})