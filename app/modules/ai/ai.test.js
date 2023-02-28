
import { AI } from "./ai.js";

it('Does init() stop',()=>{
    const ai=new AI
    ai.init()
    expect(ai.gameboard.ships.length).toBe(9)
})