import { Player } from "../player/player.js";

it("Can player attack?",()=>{
    const player=new Player
    expect(player.shoot(2,1)).toStrictEqual({x:2,y:1})
})
it('Does attack pushes to shoots array',()=>{
    const player=new Player
    player.shoot(3,5)
    expect(player.shoots).toStrictEqual([{x:3,y:5}])
})