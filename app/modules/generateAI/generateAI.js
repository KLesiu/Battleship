import { AI } from "../ai/ai.js"
const generateAI=()=>{
    setTimeout(()=>{
        const ai=new AI
        ai.init()
        console.log(ai)
    },200)


}

export {generateAI}