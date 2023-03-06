import { AI } from "../ai/ai.js"
const ai=new AI
const generateAI=()=>{
    const button=document.querySelector("#placeShip")
    button.setAttribute("disabled",true)
    setTimeout(()=>{
        
        ai.init()
    },200)
    
}

export {generateAI,ai}