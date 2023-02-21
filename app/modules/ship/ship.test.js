const Ship=require('./ship')
it('Do the arrows increase?',()=>{
    const ship=new Ship(3,0,false)
    expect(ship.hit()).toBe(1)
})
it('Is ship sunk?',()=>{
    const ship=new Ship(2,0,false)
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
})