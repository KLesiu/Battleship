import { player } from "../startGamePlayer/startPlayer.js"
// FIX BUGS
const placeShip=()=>{
    const coordinateX=document.querySelector("#coordinateX").value
    const coordinateY=document.querySelector("#coordinateY").value
    const position=document.querySelector("#position").value
    if(coordinateX===""||coordinateY===""
    ||position==="")console.log("type correct properties")
    else if(coordinateX>=0&&coordinateX<10&&coordinateY>=0&&coordinateY<10){
        if(position==="vertical"||position==="horizontal"){
            const divs=document.getElementsByClassName("gameBoardDiv")
            let position;
            if(coordinateY===0) position=coordinateX
            else {
                position=10*coordinateY+coordinateX
            }
            if(player.addShips(coordinateX,coordinateY,3,position)===player.gameboard){
                console.log("git")
                console.log(player.gameboard)
                
            }else{
                console.log("zle")
            }
        }
        else{
            console.log("error")
        }
    }
    
}
export {placeShip}
