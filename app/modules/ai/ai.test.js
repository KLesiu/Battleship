
import { AI } from "./ai.js";

it('Does init() stops',()=>{
    const ai=new AI
    ai.init()
    expect(ai.gameboard.ships.length).toBe(9)
})